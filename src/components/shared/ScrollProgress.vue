<template>
  <!-- 页面滚动进度条 -->
  <div class="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200/30 backdrop-blur-sm">
    <div
      class="h-full bg-gradient-to-r from-green-500 via-orange-500 to-yellow-500 transition-all duration-300 shadow-lg shadow-orange-500/50"
      :style="{ width: scrollProgress + '%' }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollProgress = ref(0)

const updateProgress = () => {
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight
  const scrollTop = window.scrollY || window.pageYOffset
  const maxScroll = documentHeight - windowHeight
  scrollProgress.value = (scrollTop / maxScroll) * 100
}

onMounted(() => {
  window.addEventListener('scroll', updateProgress)
  updateProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
})
</script>
