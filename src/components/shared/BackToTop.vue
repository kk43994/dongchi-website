<template>
  <!-- 返回顶部按钮 -->
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    leave-active-class="transition-all duration-200 ease-in"
    enter-from-class="translate-y-20 opacity-0"
    leave-to-class="translate-y-20 opacity-0"
  >
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-40 w-14 h-14 bg-gradient-to-br from-green-500 to-orange-500 text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="返回顶部"
    >
      <svg
        class="w-6 h-6 transform group-hover:-translate-y-1 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>

      <!-- 环形进度条 -->
      <svg class="absolute inset-0 w-full h-full -rotate-90">
        <circle
          cx="28"
          cy="28"
          r="26"
          stroke="white"
          stroke-width="2"
          fill="none"
          opacity="0.2"
        />
        <circle
          cx="28"
          cy="28"
          r="26"
          stroke="white"
          stroke-width="2"
          fill="none"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="dashOffset"
          class="transition-all duration-300"
        />
      </svg>
    </button>
  </Transition>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const scrollProgress = ref(0)

const circumference = 2 * Math.PI * 26 // 2πr
const dashOffset = computed(() => {
  return circumference * (1 - scrollProgress.value / 100)
})

const updateVisibility = () => {
  isVisible.value = window.scrollY > 300

  // 更新滚动进度
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight
  const scrollTop = window.scrollY
  const maxScroll = documentHeight - windowHeight
  scrollProgress.value = (scrollTop / maxScroll) * 100
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', updateVisibility)
  updateVisibility()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateVisibility)
})
</script>
