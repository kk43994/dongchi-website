<template>
  <!-- 增强版鼠标跟随光晕效果 -->
  <div
    ref="follower"
    class="mouse-follower pointer-events-none fixed z-50"
    :style="{
      left: smoothPosition.x + 'px',
      top: smoothPosition.y + 'px',
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 0.3s ease-out'
    }"
  >
    <!-- 最外圈大光晕 - 增强版 -->
    <div class="absolute -translate-x-1/2 -translate-y-1/2">
      <div class="w-32 h-32 rounded-full bg-gradient-to-r from-green-400/40 to-orange-400/40 blur-3xl animate-glow-pulse"></div>
    </div>

    <!-- 中圈光晕 - 新增 -->
    <div class="absolute -translate-x-1/2 -translate-y-1/2">
      <div class="w-20 h-20 rounded-full bg-gradient-to-r from-green-500/50 to-orange-500/50 blur-2xl animate-glow-pulse-fast"></div>
    </div>

    <!-- 内圈光晕 -->
    <div class="absolute -translate-x-1/2 -translate-y-1/2">
      <div class="w-12 h-12 rounded-full bg-gradient-to-r from-green-500/60 to-orange-500/60 blur-xl animate-pulse"></div>
    </div>

    <!-- 中心跟随点 - 增大 -->
    <div class="absolute -translate-x-1/2 -translate-y-1/2">
      <div class="w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-orange-400 shadow-xl animate-center-pulse"></div>
    </div>

    <!-- 中心白点 - 新增 -->
    <div class="absolute -translate-x-1/2 -translate-y-1/2">
      <div class="w-2 h-2 rounded-full bg-white shadow-lg"></div>
    </div>

    <!-- 拖尾粒子效果 - 增强版 -->
    <div
      v-for="(trail, index) in trails"
      :key="index"
      class="absolute rounded-full"
      :style="{
        left: trail.x - smoothPosition.x + 'px',
        top: trail.y - smoothPosition.y + 'px',
        width: trail.size + 'px',
        height: trail.size + 'px',
        opacity: trail.opacity,
        transform: 'translate(-50%, -50%)',
        background: `radial-gradient(circle, ${trail.color1}, ${trail.color2})`,
        filter: 'blur(' + trail.blur + 'px)',
        boxShadow: `0 0 ${trail.size}px ${trail.color1}`
      }"
    ></div>

    <!-- 环形波纹 - 新增炫技效果 -->
    <div
      v-for="(ring, index) in rings"
      :key="'ring-' + index"
      class="absolute rounded-full border-2 -translate-x-1/2 -translate-y-1/2"
      :style="{
        width: ring.size + 'px',
        height: ring.size + 'px',
        opacity: ring.opacity,
        borderColor: ring.color,
        transform: 'translate(-50%, -50%) scale(' + ring.scale + ')'
      }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const follower = ref(null)
const position = ref({ x: -100, y: -100 })
const smoothPosition = ref({ x: -100, y: -100 })
const isVisible = ref(false)
const trails = ref([])
const rings = ref([])

let rafId = null
let lastTime = Date.now()
let lastRingTime = Date.now()

// 颜色数组 - 绿橙黄渐变
const colors = [
  { color1: 'rgba(139, 195, 74, 0.8)', color2: 'rgba(139, 195, 74, 0.2)' },
  { color1: 'rgba(255, 152, 0, 0.8)', color2: 'rgba(255, 152, 0, 0.2)' },
  { color1: 'rgba(255, 193, 7, 0.8)', color2: 'rgba(255, 193, 7, 0.2)' },
]

const updatePosition = (e) => {
  position.value = {
    x: e.clientX,
    y: e.clientY
  }
  isVisible.value = true

  // 添加增强版拖尾效果
  const now = Date.now()
  if (now - lastTime > 30) { // 从50ms改为30ms，更频繁
    const colorIndex = Math.floor(Math.random() * colors.length)
    trails.value.unshift({
      x: e.clientX,
      y: e.clientY,
      size: 16, // 从8增大到16
      opacity: 0.8, // 从0.6增大到0.8
      blur: 8,
      ...colors[colorIndex]
    })

    if (trails.value.length > 12) { // 从5增加到12个拖尾
      trails.value.pop()
    }
    lastTime = now
  }

  // 添加环形波纹效果（点击或快速移动时）
  if (now - lastRingTime > 200) {
    rings.value.push({
      size: 20,
      opacity: 1,
      scale: 1,
      color: Math.random() > 0.5 ? '#8BC34A' : '#FF9800'
    })
    lastRingTime = now
  }
}

const animateEffects = () => {
  // 平滑跟随（延迟跟随效果）
  smoothPosition.value.x += (position.value.x - smoothPosition.value.x) * 0.15
  smoothPosition.value.y += (position.value.y - smoothPosition.value.y) * 0.15

  // 拖尾粒子动画
  trails.value.forEach((trail, index) => {
    trail.size *= 0.96 // 缩小速度稍慢
    trail.opacity *= 0.94 // 淡出速度稍慢
    trail.blur *= 1.02 // 模糊度增加
  })
  trails.value = trails.value.filter(trail => trail.opacity > 0.05)

  // 环形波纹动画
  rings.value.forEach((ring, index) => {
    ring.size += 3 // 扩散速度
    ring.scale += 0.05
    ring.opacity *= 0.92 // 淡出
  })
  rings.value = rings.value.filter(ring => ring.opacity > 0.05)

  rafId = requestAnimationFrame(animateEffects)
}

const hideFollower = () => {
  isVisible.value = false
}

onMounted(() => {
  window.addEventListener('mousemove', updatePosition)
  window.addEventListener('mouseleave', hideFollower)
  animateEffects()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updatePosition)
  window.removeEventListener('mouseleave', hideFollower)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<style scoped>
.mouse-follower {
  will-change: left, top, transform;
}

/* 光晕脉冲动画 - 慢速 */
@keyframes glow-pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.4;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 0.6;
  }
}

.animate-glow-pulse {
  animation: glow-pulse 3s ease-in-out infinite;
}

/* 光晕脉冲动画 - 快速 */
@keyframes glow-pulse-fast {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.15);
    opacity: 0.7;
  }
}

.animate-glow-pulse-fast {
  animation: glow-pulse-fast 2s ease-in-out infinite;
}

/* 中心点脉冲 */
@keyframes center-pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
  }
}

.animate-center-pulse {
  animation: center-pulse 1.5s ease-in-out infinite;
}
</style>
