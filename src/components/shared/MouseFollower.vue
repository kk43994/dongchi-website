<template>
  <!-- 放大透镜鼠标效果 - 毛玻璃 + 外发光 -->
  <div class="mouse-effects">
    <!-- 主透镜 - 毛玻璃放大镜 -->
    <div
      ref="magnifier"
      class="magnifier"
    >
      <!-- 透镜边框 -->
      <div class="magnifier-ring"></div>
    </div>

    <!-- 中心点 -->
    <div
      ref="cursorDot"
      class="cursor-dot"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const magnifier = ref(null)
const cursorDot = ref(null)

let mouseX = 0
let mouseY = 0

onMounted(() => {
  // 鼠标移动事件
  const handleMouseMove = (e) => {
    mouseX = e.clientX
    mouseY = e.clientY

    // 小圆点：延迟跟随，产生拖尾感
    gsap.to(magnifier.value, {
      x: mouseX - 10,  // 圆点半径20px，减去10居中
      y: mouseY - 10,
      duration: 0.2,
      ease: 'power2.out'
    })

    // 中心点：快速跟随
    gsap.to(cursorDot.value, {
      x: mouseX - 3,  // 点半径6px，减去3居中
      y: mouseY - 3,
      duration: 0.05,
      ease: 'power1.out'
    })
  }

  // 悬停在链接/按钮上时放大透镜
  const handleMouseEnter = () => {
    gsap.to(magnifier.value, {
      scale: 1.3,
      duration: 0.4,
      ease: 'back.out(1.5)'
    })

    gsap.to(cursorDot.value, {
      scale: 0,
      duration: 0.3
    })
  }

  const handleMouseLeave = () => {
    gsap.to(magnifier.value, {
      scale: 1,
      duration: 0.4,
      ease: 'power2.out'
    })

    gsap.to(cursorDot.value, {
      scale: 1,
      duration: 0.3
    })
  }

  // 添加事件监听
  document.addEventListener('mousemove', handleMouseMove)

  // 为所有可点击元素添加悬停效果
  const clickableElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select')
  clickableElements.forEach(el => {
    el.addEventListener('mouseenter', handleMouseEnter)
    el.addEventListener('mouseleave', handleMouseLeave)
  })

  // 清理函数
  onUnmounted(() => {
    document.removeEventListener('mousemove', handleMouseMove)
    clickableElements.forEach(el => {
      el.removeEventListener('mouseenter', handleMouseEnter)
      el.removeEventListener('mouseleave', handleMouseLeave)
    })
  })
})
</script>

<style scoped>
/* 隐藏原生鼠标 */
:global(body), :global(body *) {
  cursor: none !important;
}

/* 主光标 - 小圆点毛玻璃 + 强发光描边 */
.magnifier {
  position: fixed;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  left: 0;
  top: 0;
  will-change: transform;

  /* 增强的毛玻璃效果 */
  backdrop-filter: blur(8px) saturate(180%) brightness(130%);
  -webkit-backdrop-filter: blur(8px) saturate(180%) brightness(130%);

  /* 更明显的渐变背景 */
  background: radial-gradient(circle,
    rgba(139, 195, 74, 0.5) 0%,
    rgba(255, 152, 0, 0.4) 100%
  );

  /* 强发光描边（绿橙双色边框） */
  border: 2px solid transparent;
  background-clip: padding-box;

  /* 明显的外发光效果（橙绿配色） + 强描边发光 */
  box-shadow:
    /* 描边发光层1：绿色内描边 */
    inset 0 0 8px rgba(139, 195, 74, 1),
    inset 0 0 16px rgba(139, 195, 74, 0.8),
    /* 描边发光层2：橙色外描边 */
    0 0 4px rgba(255, 152, 0, 1),
    0 0 8px rgba(255, 152, 0, 0.9),
    /* 外发光层1：强烈绿色发光 */
    0 0 20px rgba(139, 195, 74, 0.8),
    /* 外发光层2：强烈橙色发光 */
    0 0 35px rgba(255, 152, 0, 0.7),
    /* 外发光层3：大范围绿色发光 */
    0 0 50px rgba(139, 195, 74, 0.5),
    /* 外发光层4：超大范围橙色发光 */
    0 0 70px rgba(255, 152, 0, 0.4);

  /* 微妙的脉冲动画 */
  animation: magnifier-pulse 2s ease-in-out infinite;
}

/* 移除边框元素（不再需要） */
.magnifier-ring {
  display: none;
}

/* 中心点 - 快速跟随指示器 */
.cursor-dot {
  position: fixed;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 10000;
  left: 0;
  top: 0;
  will-change: transform;

  /* 渐变背景 */
  background: radial-gradient(circle,
    #8BC34A 0%,
    #FF9800 100%
  );

  /* 强烈发光 */
  box-shadow:
    0 0 8px rgba(139, 195, 74, 1),
    0 0 16px rgba(255, 152, 0, 0.8),
    0 0 24px rgba(139, 195, 74, 0.6);

  /* 脉冲动画 */
  animation: dot-pulse 1.5s ease-in-out infinite;
}

/* 圆点脉冲发光动画（包含描边） */
@keyframes magnifier-pulse {
  0%, 100% {
    box-shadow:
      /* 描边发光 */
      inset 0 0 8px rgba(139, 195, 74, 1),
      inset 0 0 16px rgba(139, 195, 74, 0.8),
      0 0 4px rgba(255, 152, 0, 1),
      0 0 8px rgba(255, 152, 0, 0.9),
      /* 外发光 */
      0 0 20px rgba(139, 195, 74, 0.8),
      0 0 35px rgba(255, 152, 0, 0.7),
      0 0 50px rgba(139, 195, 74, 0.5),
      0 0 70px rgba(255, 152, 0, 0.4);
  }
  50% {
    box-shadow:
      /* 描边发光增强 */
      inset 0 0 12px rgba(139, 195, 74, 1),
      inset 0 0 20px rgba(139, 195, 74, 1),
      0 0 6px rgba(255, 152, 0, 1),
      0 0 12px rgba(255, 152, 0, 1),
      /* 外发光增强 */
      0 0 25px rgba(139, 195, 74, 1),
      0 0 45px rgba(255, 152, 0, 0.9),
      0 0 65px rgba(139, 195, 74, 0.7),
      0 0 90px rgba(255, 152, 0, 0.6);
  }
}

/* 边框旋转动画 */
@keyframes ring-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 中心点脉冲动画 */
@keyframes dot-pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.8;
  }
}

/* 响应式：移动端恢复原生鼠标 */
@media (max-width: 768px) {
  :global(body), :global(body *) {
    cursor: auto !important;
  }

  .magnifier,
  .cursor-dot {
    display: none;
  }
}

/* 性能优化 */
.magnifier,
.magnifier-ring,
.cursor-dot {
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}
</style>
