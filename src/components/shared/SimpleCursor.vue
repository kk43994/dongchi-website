<template>
  <!-- 超轻量级鼠标跟随 - 性能优化版 -->
  <div
    ref="cursor"
    class="custom-cursor"
    :class="{ 'cursor-hidden': !isVisible }"
  ></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cursor = ref(null)
const isVisible = ref(false)

let mouseX = 0
let mouseY = 0
let currentX = 0
let currentY = 0
let rafId = null

// 平滑跟随动画（使用 RAF 节流）
const animate = () => {
  // 缓动效果：每帧移动剩余距离的 20%
  currentX += (mouseX - currentX) * 0.2
  currentY += (mouseY - currentY) * 0.2

  if (cursor.value) {
    // 使用 translate3d 触发 GPU 加速，避免重排重绘
    cursor.value.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
  }

  rafId = requestAnimationFrame(animate)
}

onMounted(() => {
  // 鼠标移动事件（不使用防抖，但RAF会自动节流到60fps）
  const handleMouseMove = (e) => {
    mouseX = e.clientX
    mouseY = e.clientY

    // 首次移动时显示光标
    if (!isVisible.value) {
      isVisible.value = true
      currentX = e.clientX
      currentY = e.clientY
    }
  }

  // 鼠标离开窗口时隐藏
  const handleMouseLeave = () => {
    isVisible.value = false
  }

  // 鼠标进入窗口时显示
  const handleMouseEnter = () => {
    isVisible.value = true
  }

  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseleave', handleMouseLeave)
  document.addEventListener('mouseenter', handleMouseEnter)

  // 启动动画循环
  rafId = requestAnimationFrame(animate)

  // 清理函数
  onUnmounted(() => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseleave', handleMouseLeave)
    document.removeEventListener('mouseenter', handleMouseEnter)
    if (rafId) {
      cancelAnimationFrame(rafId)
    }
  })
})
</script>

<style scoped>
/* 隐藏默认鼠标 */
:global(body), :global(body *) {
  cursor: none !important;
}

/* 自定义光标 - 超轻量级版本 */
.custom-cursor {
  position: fixed;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  top: -12px;  /* 居中偏移 */
  left: -12px; /* 居中偏移 */

  /* 性能优化关键点 */
  will-change: transform;  /* 提前告知浏览器将要变换 */
  transform: translate3d(0, 0, 0);  /* 触发GPU加速 */

  /* 简单的双色渐变 - 东池品牌色 */
  background: radial-gradient(circle,
    #8BC34A 0%,      /* 东池绿 */
    #FF9800 100%     /* 东池橙 */
  );

  /* 单层柔和阴影（可选，可删除以进一步提升性能） */
  box-shadow: 0 0 12px rgba(139, 195, 74, 0.4);

  /* 平滑过渡 */
  transition: opacity 0.3s ease;
  opacity: 0.7;
}

/* 悬停在链接/按钮上时放大 */
:global(a:hover ~ .custom-cursor),
:global(button:hover ~ .custom-cursor) {
  transform: scale(1.5);
  opacity: 0.9;
}

/* 隐藏状态 */
.cursor-hidden {
  opacity: 0;
}

/* 响应式：移动端恢复原生鼠标 */
@media (max-width: 768px) {
  :global(body), :global(body *) {
    cursor: auto !important;
  }

  .custom-cursor {
    display: none;
  }
}

/* 性能优化：使用硬件加速 */
.custom-cursor {
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>
