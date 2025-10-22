<template>
  <section class="relative w-full h-screen overflow-hidden">
    <!-- Canvas粒子爆炸效果 - GPU加速优化 -->
    <canvas ref="particleCanvas" class="absolute inset-0 z-0" style="will-change: contents;"></canvas>

    <!-- 视频背景 - 优化：添加preload和poster -->
    <div class="absolute inset-0">
      <video
        autoplay
        loop
        muted
        playsinline
        preload="auto"
        class="w-full h-full object-cover"
        style="will-change: transform;"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <!-- 视频遮罩层 -->
      <div class="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/50"></div>
    </div>

    <!-- 光晕装饰 -->
    <div class="absolute top-20 left-20 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>

    <!-- 内容区 -->
    <div class="relative z-10 h-full flex flex-col items-center justify-center text-white px-6">
      <div class="text-center space-y-8">
        <!-- 品牌名称 -->
        <div ref="logoRef" class="opacity-0">
          <h1 class="text-7xl md:text-8xl font-bold mb-4 tracking-wider">
            东池便当
          </h1>
          <div class="h-1 w-32 bg-white mx-auto mb-6"></div>
        </div>

        <!-- 标语 - 打字机效果 -->
        <div ref="sloganRef" class="opacity-0">
          <p class="text-2xl md:text-4xl font-light tracking-widest">
            {{ displayedSlogan }}
            <span class="animate-pulse">|</span>
          </p>
        </div>

        <!-- 副标题 -->
        <div ref="subtitleRef" class="opacity-0">
          <p class="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            台湾风味 · 温州情怀<br>
            2004年创立 · 600+门店 · 100+城市
          </p>
        </div>

        <!-- CTA按钮 -->
        <div ref="ctaRef" class="opacity-0 flex gap-6 justify-center mt-12">
          <button class="bg-white text-[#8BC34A] px-12 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            探索美食
          </button>
          <button class="bg-transparent border-2 border-white text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#8BC34A] transition-all duration-300">
            加盟合作
          </button>
        </div>
      </div>

      <!-- 向下滚动提示 -->
      <div class="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
        <div class="flex flex-col items-center">
          <span class="text-sm mb-2 text-white/80">向下滚动</span>
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>

    <!-- 波浪底部 -->
    <div class="absolute bottom-0 left-0 w-full">
      <svg class="w-full h-24 fill-white" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const logoRef = ref(null)
const sloganRef = ref(null)
const subtitleRef = ref(null)
const ctaRef = ref(null)
const particleCanvas = ref(null)

const slogan = '良心良食 健康东池'
const displayedSlogan = ref('')

let particles = []
let animationId = null

// 粒子类
class Particle {
  constructor(x, y, canvas) {
    this.x = x
    this.y = y
    this.size = Math.random() * 4 + 2
    this.speedX = (Math.random() - 0.5) * 8
    this.speedY = (Math.random() - 0.5) * 8
    this.gravity = 0.05
    this.friction = 0.98
    this.opacity = 1
    this.color = Math.random() > 0.5 ? '#8BC34A' : '#FF9800'
    this.canvas = canvas
  }

  update() {
    this.speedY += this.gravity
    this.speedX *= this.friction
    this.speedY *= this.friction
    this.x += this.speedX
    this.y += this.speedY
    this.opacity -= 0.01
  }

  draw(ctx) {
    ctx.save()
    ctx.globalAlpha = this.opacity
    ctx.fillStyle = this.color
    ctx.shadowBlur = 15
    ctx.shadowColor = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }

  isDead() {
    return this.opacity <= 0
  }
}

// 创建爆炸效果 - 优化：减少粒子数量提升性能
const createExplosion = (x, y, canvas) => {
  const particleCount = 50  // 从100降低到50，视觉效果几乎无差异
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle(x, y, canvas))
  }
}

// 动画循环 - 优化：只在有粒子时渲染
const animate = (ctx, canvas) => {
  // 如果没有粒子，暂停渲染节省CPU
  if (particles.length === 0) {
    animationId = null
    return
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  particles = particles.filter(particle => {
    particle.update()
    particle.draw(ctx)
    return !particle.isDead()
  })

  animationId = requestAnimationFrame(() => animate(ctx, canvas))
}

// 初始化Canvas粒子系统
const initParticles = () => {
  const canvas = particleCanvas.value
  if (!canvas) return

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  const ctx = canvas.getContext('2d')

  // 页面加载时创建中心爆炸
  setTimeout(() => {
    createExplosion(canvas.width / 2, canvas.height / 2, canvas)
    if (!animationId) {
      animate(ctx, canvas)
    }
  }, 500)

  // 每5秒创建随机位置的爆炸 - 优化：降低频率减少CPU负担
  setInterval(() => {
    const x = Math.random() * canvas.width
    const y = Math.random() * canvas.height
    createExplosion(x, y, canvas)
    // 如果动画已停止，重新启动
    if (!animationId) {
      animate(ctx, canvas)
    }
  }, 5000)  // 从3秒改为5秒

  // 窗口大小改变时重新设置canvas
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  })
}

const typeWriter = () => {
  let i = 0
  displayedSlogan.value = ''
  const timer = setInterval(() => {
    if (i < slogan.length) {
      displayedSlogan.value += slogan.charAt(i)
      i++
    } else {
      clearInterval(timer)
    }
  }, 200)

  return () => clearInterval(timer)
}

onMounted(() => {
  // 初始化粒子系统
  initParticles()

  // GSAP时间线动画 - 更震撼的效果
  const tl = gsap.timeline()

  // Logo从远处飞入+旋转+缩放
  tl.fromTo(logoRef.value,
    {
      opacity: 0,
      scale: 0.3,
      rotationY: 180,
      z: -1000
    },
    {
      opacity: 1,
      scale: 1,
      rotationY: 0,
      z: 0,
      duration: 2,
      ease: 'expo.out'
    }
  )

  // 标语淡入+打字机效果
  tl.to(sloganRef.value, {
    opacity: 1,
    duration: 0.5,
    onComplete: typeWriter
  }, '-=1')

  // 副标题从下方弹入
  tl.fromTo(subtitleRef.value,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'back.out(2)'
    }, '-=0.5')

  // CTA按钮依次弹入
  tl.fromTo(ctaRef.value,
    { opacity: 0, y: 50, scale: 0.8 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: 'elastic.out(1, 0.5)'
    }, '-=0.5')
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
})
</script>

<style scoped>
[ref] {
  transform: translateY(30px);
}
</style>
