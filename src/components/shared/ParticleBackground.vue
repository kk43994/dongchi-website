<template>
  <!-- Canvas 粒子背景 -->
  <canvas
    ref="canvas"
    class="fixed inset-0 pointer-events-none z-0"
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
  ctx = canvasEl.getContext('2d')

  // 创建粒子
  particles = []
  for (let i = 0; i < props.particleCount; i++) {
    particles.push(new Particle(canvasEl.width, canvasEl.height))
  }

  isVisible.value = true
  animate()
}

const animate = () => {
  if (!ctx || !canvas.value) return

  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

  // 更新和绘制粒子
  particles.forEach(particle => {
    particle.update(canvas.value.width, canvas.value.height)
    particle.draw(ctx)
  })

  // 绘制连接线
  particles.forEach((p1, index) => {
    particles.slice(index + 1).forEach(p2 => {
      const dx = p1.x - p2.x
      const dy = p1.y - p2.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < 120) {
        ctx.strokeStyle = `rgba(139, 195, 74, ${0.15 * (1 - distance / 120)})`
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.moveTo(p1.x, p1.y)
        ctx.lineTo(p2.x, p2.y)
        ctx.stroke()
      }
    })
  })

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
