<template>
  <!-- 返回主页浮动按钮 -->
  <transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <router-link
      v-if="showButton"
      to="/"
      class="fixed right-6 bottom-32 z-40 group"
      title="返回主页"
    >
      <div class="relative">
        <!-- 外圈发光效果 -->
        <div class="absolute inset-0 bg-gradient-to-br from-[#8BC34A] to-[#FF9800] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>

        <!-- 主按钮 -->
        <div class="relative w-14 h-14 bg-gradient-to-br from-[#8BC34A] to-[#FF9800] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
          <!-- 房子图标 -->
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
          </svg>
        </div>

        <!-- 文字提示（悬停时显示） -->
        <div class="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300 pointer-events-none">
          <div class="bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
            返回主页
            <!-- 小箭头 -->
            <div class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
              <div class="w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-900"></div>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showButton = ref(false)

// 监听滚动，滚动超过200px时显示按钮
const handleScroll = () => {
  showButton.value = window.scrollY > 200
}

onMounted(() => {
  // 如果不在首页，则添加滚动监听
  if (route.path !== '/') {
    window.addEventListener('scroll', handleScroll)
    handleScroll() // 初始检查
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* 移动端适配 */
@media (max-width: 768px) {
  .fixed {
    right: 1rem;
    bottom: 8rem;
  }
}
</style>
