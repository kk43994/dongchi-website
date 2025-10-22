<template>
  <div class="about-page">
    <!-- Hero Section - 创始人与品牌愿景 -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-orange-50">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 opacity-30">
        <div class="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div class="absolute top-40 right-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div class="absolute bottom-20 left-1/2 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div class="container relative z-10 mx-auto px-6 py-20">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- 左侧：创始人照片 -->
          <div class="flex justify-center" data-aos="fade-right">
            <div class="relative group">
              <!-- 照片背景光晕 -->
              <div class="absolute inset-0 bg-gradient-to-br from-green-400 to-orange-400 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

              <!-- 创始人照片容器 -->
              <div class="relative bg-white p-3 rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                <div class="relative w-80 h-96 rounded-2xl overflow-hidden">
                  <img
                    src="/src/assets/images/founder.jpg"
                    alt="东池便当创始人"
                    class="w-full h-full object-cover"
                    @error="handleImageError"
                  >
                  <!-- 图片加载失败时显示占位符 -->
                  <div v-if="imageError" class="absolute inset-0 bg-gradient-to-br from-green-100 to-orange-100 flex items-center justify-center">
                    <div class="text-center">
                      <div class="w-24 h-24 mx-auto mb-4 rounded-full bg-white/50 flex items-center justify-center">
                        <svg class="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                      </div>
                      <p class="text-gray-600 font-medium">创始人照片</p>
                    </div>
                  </div>
                </div>

                <!-- 名片信息 -->
                <div class="mt-4 text-center p-4 bg-gradient-to-r from-green-50 to-orange-50 rounded-xl">
                  <h3 class="text-2xl font-bold text-gray-800 mb-1">林先生</h3>
                  <p class="text-green-600 font-medium">东池便当创始人 & CEO</p>
                  <p class="text-sm text-gray-600 mt-2">"让每一份便当都充满温度"</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧：品牌愿景文字 -->
          <div class="space-y-6" data-aos="fade-left">
            <div class="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              品牌故事
            </div>

            <h1 class="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              从台湾到温州<br>
              <span class="text-gradient">美味传承之旅</span>
            </h1>

            <p class="text-xl text-gray-600 leading-relaxed">
              2015年，怀揣着对台湾传统便当文化的热爱，我们的创始人将正宗的台湾便当带到了温州。
              从一家小店到如今遍布全国的连锁品牌，东池便当始终坚持"新鲜、健康、美味"的理念。
            </p>

            <div class="grid grid-cols-3 gap-6 pt-8">
              <div class="text-center" data-aos="fade-up" data-aos-delay="100">
                <div class="text-4xl font-bold text-green-600 mb-2">{{ years }}+</div>
                <div class="text-gray-600">年品牌历程</div>
              </div>
              <div class="text-center" data-aos="fade-up" data-aos-delay="200">
                <div class="text-4xl font-bold text-orange-600 mb-2">{{ stores }}+</div>
                <div class="text-gray-600">家连锁门店</div>
              </div>
              <div class="text-center" data-aos="fade-up" data-aos-delay="300">
                <div class="text-4xl font-bold text-yellow-600 mb-2">{{ customers }}万+</div>
                <div class="text-gray-600">服务顾客</div>
              </div>
            </div>

            <div class="flex gap-4 pt-4">
              <button class="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                了解更多
              </button>
              <button class="px-8 py-4 border-2 border-green-500 text-green-600 rounded-xl font-medium hover:bg-green-50 transition-all duration-300">
                加入我们
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 滚动提示 -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>

    <!-- 创业历程时间轴 -->
    <HistoryTimeline />

    <!-- 企业文化 -->
    <CultureSection />

    <!-- 品牌荣誉墙 -->
    <HonorsWall />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HistoryTimeline from '../components/about/HistoryTimeline.vue'
import CultureSection from '../components/about/CultureSection.vue'
import HonorsWall from '../components/about/HonorsWall.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// 数据
const years = ref(0)
const stores = ref(0)
const customers = ref(0)
const imageError = ref(false)

// 图片加载错误处理
const handleImageError = () => {
  imageError.value = true
}

// 数字动画
const animateValue = (ref, start, end, duration) => {
  let startTimestamp = null
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    ref.value = Math.floor(progress * (end - start) + start)
    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }
  window.requestAnimationFrame(step)
}

onMounted(() => {
  // 初始化AOS动画
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  })

  // 启动数字滚动动画
  setTimeout(() => {
    animateValue(years, 0, 9, 2000)
    animateValue(stores, 0, 500, 2000)
    animateValue(customers, 0, 1000, 2000)
  }, 500)
})
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(to right, #22c55e, #f97316);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
