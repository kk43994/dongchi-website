<template>
  <!-- 简化版鼠标跟随效果 - 轻量高性能 -->
  <div class="mouse-effects">
    <!-- 外圈 - 简单圆环 -->
    <div
      ref="cursorRing"
      class="cursor-ring mouse-follower gpu-accelerated"
      :style="ringStyle"
    ></div>

    <!-- 中心点 -->
    <div
      ref="cursorDot"
      class="cursor-dot mouse-follower gpu-accelerated"
      :style="dotStyle"
    ></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const cursorRing = ref(null)
const cursorDot = ref(null)

// 使用响应式状态控制位置
const ringX = ref(0)
const ringY = ref(0)
const dotX = ref(0)
const dotY = ref(0)
const isHovering = ref(false)

// 计算样式 - 使用 transform（高性能）
const ringStyle = computed(() => ({
  transform: `translate3d(${ringX.value}px, ${ringY.value}px, 0) scale(${isHovering.value ? 1.5 : 1})`,
  opacity: isHovering.value ? 0.6 : 1
}))

const dotStyle = computed(() => ({
  transform: `translate3d(${dotX.value}px, ${dotY.value}px, 0) scale(${isHovering.value ? 0.8 : 1})`,
  opacity: isHovering.value ? 0.8 : 1
}))

let mouseX = 0
let mouseY = 0
let rafId = null
const clickableSelector = 'a, button, [role="button"], input, textarea, select'

// 使用 RAF 节流的鼠标跟随
const updateCursorPosition = () => {
  // 外圈：平滑跟随（延迟效果）
  ringX.value += (mouseX - 20 - ringX.value) * 0.12
  ringY.value += (mouseY - 20 - ringY.value) * 0.12

  // 中心点：快速跟随
  dotX.value += (mouseX - 4 - dotX.value) * 0.5
  dotY.value += (mouseY - 4 - dotY.value) * 0.5

  rafId = requestAnimationFrame(updateCursorPosition)
}

const handleMouseMove = (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
}

const handleMouseOver = (e) => {
  isHovering.value = !!e.target.closest(clickableSelector)
}

const handleMouseOut = (e) => {
  const nextTarget = e.relatedTarget
  isHovering.value = !!nextTarget?.closest?.(clickableSelector)
}

onMounted(() => {
  // 添加事件监听 - 使用 passive 优化
  document.addEventListener('mousemove', handleMouseMove, { passive: true })
  document.addEventListener('mouseover', handleMouseOver, { passive: true })
  document.addEventListener('mouseout', handleMouseOut, { passive: true })

  // 启动 RAF 循环
  rafId = requestAnimationFrame(updateCursorPosition)
})

onUnmounted(() => {
  if (rafId) {
    cancelAnimationFrame(rafId)
  }

  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseover', handleMouseOver)
  document.removeEventListener('mouseout', handleMouseOut)
})
</script>

<style scoped>
/* 隐藏原生鼠标 */
:global(body), :global(body *) {
  cursor: none !important;
}

/* 外圈 - 简单圆环 - 轻量设计 */
.cursor-ring {
  position: fixed;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 10020;
  left: 0;
  top: 0;

  /* GPU加速优化 */
  will-change: transform, opacity;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;

  /* 简单边框 - 东池品牌色 */
  border: 2px solid rgba(139, 195, 74, 0.6);
  background: transparent;

  /* 平滑过渡 */
  transition: transform 0.2s ease-out, opacity 0.2s ease-out;
}

/* 中心点 - 快速跟随指示器 */
.cursor-dot {
  position: fixed;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 10021;
  left: 0;
  top: 0;

  /* GPU加速优化 */
  will-change: transform, opacity;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;

  /* 简单纯色 - 东池橙色 */
  background: #FF9800;

  /* 平滑过渡 */
  transition: transform 0.15s ease-out, opacity 0.15s ease-out;
}

/* 响应式：移动端恢复原生鼠标 */
@media (max-width: 768px) {
  :global(body), :global(body *) {
    cursor: auto !important;
  }

  .cursor-ring,
  .cursor-dot {
    display: none;
  }
}
</style>
