<template>
  <section class="relative w-full h-screen overflow-hidden">
    <!-- 视频背景 -->
    <div class="absolute inset-0">
      <video
        autoplay
        loop
        muted
        playsinline
        class="w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <!-- 视频遮罩层 -->
      <div class="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/50"></div>
    </div>

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
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const logoRef = ref(null)
const sloganRef = ref(null)
const subtitleRef = ref(null)
const ctaRef = ref(null)

const slogan = '良心良食 健康东池'
const displayedSlogan = ref('')

const typeWriter = () => {
  let i = 0
  displayedSlogan.value = '' // 清空初始值
  const timer = setInterval(() => {
    if (i < slogan.length) {
      displayedSlogan.value += slogan.charAt(i)
      i++
    } else {
      clearInterval(timer)
    }
  }, 200) // 稍微放慢速度,更有打字感

  return () => clearInterval(timer) // 返回清理函数
}

onMounted(() => {
  const tl = gsap.timeline()

  tl.to(logoRef.value, {
    opacity: 1,
    scale: 1,
    duration: 1.5,
    ease: 'power3.out'
  })

  tl.to(sloganRef.value, {
    opacity: 1,
    duration: 0.5,
    onComplete: typeWriter
  }, '-=0.5')

  tl.to(subtitleRef.value, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out'
  }, '-=0.5')

  tl.to(ctaRef.value, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'back.out(1.7)'
  }, '-=0.5')
})
</script>

<style scoped>
[ref] {
  transform: translateY(30px);
}
</style>
