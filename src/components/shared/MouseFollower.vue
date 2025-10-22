<template>
  <!-- 鼠标跟随光晕效果 -->
  <div
    ref="follower"
    class="mouse-follower pointer-events-none fixed z-50 transition-all duration-300 ease-out"
    :style="{
      left: position.x + 'px',
      top: position.y + 'px',
      opacity: isVisible ? 1 : 0
    }"
  >
    <!-- 外圈光晕 -->
    <div class="absolute -translate-x-1/2 -translate-y-1/2">
      <div class="w-12 h-12 rounded-full bg-gradient-to-r from-green-500/30 to-orange-500/30 blur-xl animate-pulse"></div>
    </div>

    <!-- 内圈跟随点 -->
    <div class="absolute -translate-x-1/2 -translate-y-1/2">
      <div class="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-orange-500 shadow-lg"></div>
    </div>

    <!-- 拖尾效果 -->
    <div
      v-for="(trail, index) in trails"
      :key="index"
      class="absolute rounded-full bg-gradient-to-r from-green-500/20 to-orange-500/20"
      :style="{
        left: trail.x - position.x + 'px',
        top: trail.y - position.y + 'px',
        width: trail.size + 'px',
        height: trail.size + 'px',
        opacity: trail.opacity,
        transform: 'translate(-50%, -50%)'
      }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const follower = ref(null)
const position = ref({ x: -100, y: -100 })
const isVisible = ref(false)
const trails = ref([])

let rafId = null
let lastTime = Date.now()

const updatePosition = (e) => {
  position.value = {
    x: e.clientX,
    y: e.clientY
  }
  isVisible.value = true

  // 添加拖尾效果
  const now = Date.now()
  if (now - lastTime > 50) {
    trails.value.unshift({
      x: e.clientX,
      y: e.clientY,
      size: 8,
      opacity: 0.6
    })

    if (trails.value.length > 5) {
      trails.value.pop()
    }
    lastTime = now
  }
}

const animateTrails = () => {
  trails.value.forEach((trail, index) => {
    trail.size *= 0.95
    trail.opacity *= 0.92
  })

  trails.value = trails.value.filter(trail => trail.opacity > 0.05)

  rafId = requestAnimationFrame(animateTrails)
}

const hideFollower = () => {
  isVisible.value = false
}

onMounted(() => {
  window.addEventListener('mousemove', updatePosition)
  window.addEventListener('mouseleave', hideFollower)
  animateTrails()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updatePosition)
  window.removeEventListener('mouseleave', hideFollower)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<style scoped>
.mouse-follower {
  will-change: left, top;
}
</style>
