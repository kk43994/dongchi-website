<template>
  <section class="py-24 bg-gradient-to-b from-white to-gray-50">
    <div class="container mx-auto px-6">
      <!-- 标题 -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          我们的成就
        </h2>
        <div class="w-24 h-1 bg-[#8BC34A] mx-auto"></div>
      </div>

      <!-- 数据卡片 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <!-- 门店数量 -->
        <div
          class="relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="0"
        >
          <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#8BC34A] to-[#689F38] flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
          </div>
          <div class="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-[#8BC34A] to-[#FF9800] bg-clip-text text-transparent" ref="storesRef">0</div>
          <div class="text-lg text-gray-600 font-medium">门店</div>
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8BC34A]/20 to-[#FF9800]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>

        <!-- 覆盖城市 -->
        <div
          class="relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#8BC34A] to-[#689F38] flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div class="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-[#8BC34A] to-[#FF9800] bg-clip-text text-transparent" ref="citiesRef">0</div>
          <div class="text-lg text-gray-600 font-medium">城市</div>
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8BC34A]/20 to-[#FF9800]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>

        <!-- 年销售额 -->
        <div
          class="relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#8BC34A] to-[#689F38] flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div class="flex items-baseline justify-center gap-1 text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-[#8BC34A] to-[#FF9800] bg-clip-text text-transparent">
            <span ref="salesRef">0</span>
            <span class="text-3xl">亿</span>
          </div>
          <div class="text-lg text-gray-600 font-medium">年销售额</div>
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8BC34A]/20 to-[#FF9800]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>

      </div>

      <!-- 底部说明 -->
      <div class="text-center mt-16" data-aos="fade-up" data-aos-delay="400">
        <p class="text-lg text-gray-600">
          20年匠心坚守，打造中式便当行业标杆
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { CountUp } from 'countup.js'
import { useIntersectionObserver } from '@vueuse/core'

const storesRef = ref(null)
const citiesRef = ref(null)
const salesRef = ref(null)

let hasAnimated = false

onMounted(() => {
  const { stop } = useIntersectionObserver(
    storesRef,
    ([{ isIntersecting }]) => {
      if (isIntersecting && !hasAnimated) {
        hasAnimated = true
        startCounters()
        stop()
      }
    },
    { threshold: 0.5 }
  )
})

const startCounters = () => {
  const storesCounter = new CountUp(storesRef.value, 600, {
    duration: 2.5,
    useEasing: true,
    useGrouping: true,
    separator: ',',
    suffix: '+'
  })
  storesCounter.start()

  const citiesCounter = new CountUp(citiesRef.value, 100, {
    duration: 2.5,
    useEasing: true,
    useGrouping: true,
    suffix: '+'
  })
  citiesCounter.start()

  const salesCounter = new CountUp(salesRef.value, 10, {
    duration: 2.5,
    useEasing: true,
    suffix: '+'
  })
  salesCounter.start()
}
</script>
