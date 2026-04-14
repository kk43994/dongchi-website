<template>
  <!-- Canvas 粒子背景 - GPU加速优化 -->
  <canvas
    ref="canvas"
    class="particle-canvas fixed inset-0 pointer-events-none z-0 gpu-accelerated"
    :class="{ 'opacity-0': !isVisible }"
    style="mix-blend-mode: screen;"
  ></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  particleCount: {
    type: Number,
    default: 50
  },
  color: {
    type: String,
    default: '#8BC34A' // 东池绿
  }
})

const canvas = ref(null)
const isVisible = ref(false)
let ctx = null
let particles = []
let rafId = null
let lastTime = 0
const fps = 60
const fpsInterval = 1000 / fps

// 性能监控
let frameCount = 0
let lastFpsTime = performance.now()
let currentFPS = 60

// 自适应性能
const isMobile = /Android|webOS|iPhone|iPad/i.test(navigator.userAgent)
const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4

class Particle {
  constructor(canvasWidth, canvasHeight) {
    this.x = Math.random() * canvasWidth
    this.y = Math.random() * canvasHeight
    this.size = Math.random() * 3 + 1
    this.speedX = (Math.random() - 0.5) * 0.5
    this.speedY = (Math.random() - 0.5) * 0.5
    this.opacity = Math.random() * 0.5 + 0.2
  }

  update(canvasWidth, canvasHeight) {
    this.x += this.speedX
    this.y += this.speedY

    // 边界检测
    if (this.x > canvasWidth || this.x < 0) {
      this.speedX *= -1
    }
    if (this.y > canvasHeight || this.y < 0) {
      this.speedY *= -1
    }
  }

  draw(ctx) {
    ctx.fillStyle = `rgba(139, 195, 74, ${this.opacity})`
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
  }
}

const init = () => {
  if (!canvas.value) return

  const canvasEl = canvas.value
  canvasEl.width = window.innerWidth
  canvasEl.height = window.innerHeight

  // 使用willReadFrequently优化频繁读取
  ctx = canvasEl.getContext('2d', {
    alpha: true,
    desynchronized: true, // 降低延迟
    willReadFrequently: false // 我们主要是写入，不是读取
  })

  // 根据设备性能调整粒子数量
  let actualParticleCount = props.particleCount
  if (isMobile) {
    actualParticleCount = Math.floor(props.particleCount * 0.5) // 移动端减半
  }
  if (isLowEndDevice) {
    actualParticleCount = Math.floor(actualParticleCount * 0.6) // 低端设备再减少
  }

  // 创建粒子
  particles = []
  for (let i = 0; i < actualParticleCount; i++) {
    particles.push(new Particle(canvasEl.width, canvasEl.height))
  }

  isVisible.value = true
  lastTime = performance.now()
  animate(lastTime)
}

const animate = (currentTime) => {
  if (!ctx || !canvas.value) return

  // FPS控制 - 限制为60fps
  const elapsed = currentTime - lastTime

  if (elapsed > fpsInterval) {
    // 更新lastTime，考虑到fpsInterval的余数
    lastTime = currentTime - (elapsed % fpsInterval)

    // 性能监控
    frameCount++
    const fpsElapsed = currentTime - lastFpsTime
    if (fpsElapsed >= 1000) {
      currentFPS = Math.round((frameCount * 1000) / fpsElapsed)
      frameCount = 0
      lastFpsTime = currentTime

      // 如果FPS低于30，自动减少粒子数量
      if (currentFPS < 30 && particles.length > 10) {
        particles = particles.slice(0, Math.floor(particles.length * 0.8))
      }
    }

    // 清除画布 - 使用更高效的方法
    canvas.value.width = canvas.value.width

    // 更新和绘制粒子 - 优化循环
    const particleLen = particles.length
    const canvasWidth = canvas.value.width
    const canvasHeight = canvas.value.height

    for (let i = 0; i < particleLen; i++) {
      particles[i].update(canvasWidth, canvasHeight)
      particles[i].draw(ctx)
    }

    // 绘制连接线 - 优化算法，减少计算量
    const connectionDistance = isMobile ? 80 : 120 // 移动端减少连接距离
    const maxConnections = isMobile ? 2 : 3 // 限制每个粒子的最大连接数

    for (let i = 0; i < particleLen; i++) {
      let connections = 0
      const p1 = particles[i]

      for (let j = i + 1; j < particleLen && connections < maxConnections; j++) {
        const p2 = particles[j]
        const dx = p1.x - p2.x
        const dy = p1.y - p2.y

        // 使用平方距离比较，避免sqrt计算
        const distanceSquared = dx * dx + dy * dy
        const maxDistanceSquared = connectionDistance * connectionDistance

        if (distanceSquared < maxDistanceSquared) {
          const distance = Math.sqrt(distanceSquared)
          const opacity = 0.15 * (1 - distance / connectionDistance)

          ctx.strokeStyle = `rgba(139, 195, 74, ${opacity})`
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.stroke()
          connections++
        }
      }
    }
  }

  rafId = requestAnimationFrame(animate)
}

const handleResize = () => {
  if (!canvas.value) return
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight
}

onMounted(() => {
  init()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
  window.removeEventListener('resize', handleResize)
})
</script>
