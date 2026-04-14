<template>
  <!-- 智能自适应面包屑导航 - 固定在左下角 -->
  <nav
    class="fixed bottom-8 left-8 z-50 transition-all duration-500 hover:scale-105"
    :class="{ 'translate-x-0 opacity-100': isVisible, '-translate-x-8 opacity-0': !isVisible }"
  >
    <ol class="flex items-center gap-2 text-sm">
      <!-- 首页链接 - 玻璃态效果（智能配色） -->
      <li class="breadcrumb-item" style="animation-delay: 0.1s;">
        <router-link
          to="/"
          :class="[
            'group flex items-center gap-2 px-4 py-2.5 rounded-full backdrop-blur-xl border transition-all duration-300 shadow-lg hover:shadow-2xl',
            isDarkMode
              ? 'bg-white/10 border-white/20 hover:bg-white/20 hover:border-[#8BC34A]/40'
              : 'bg-gray-900/70 border-gray-700/30 hover:bg-gray-900/80 hover:border-[#8BC34A]/50'
          ]"
        >
          <svg
            :class="[
              'w-4 h-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300',
              isDarkMode ? 'text-white/80 group-hover:text-[#8BC34A]' : 'text-white/90 group-hover:text-[#8BC34A]'
            ]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
          </svg>
          <span
            :class="[
              'font-medium',
              isDarkMode ? 'text-white/90 group-hover:text-white' : 'text-white group-hover:text-white'
            ]"
          >首页</span>
        </router-link>
      </li>

      <!-- 分隔符 - 箭头（智能配色） -->
      <li class="breadcrumb-item" style="animation-delay: 0.2s;">
        <svg
          :class="[
            'w-3 h-3 animate-pulse',
            isDarkMode ? 'text-white/50' : 'text-white/70'
          ]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
        </svg>
      </li>

      <!-- 当前页面 - 高亮玻璃态（智能配色） -->
      <li class="breadcrumb-item" style="animation-delay: 0.3s;">
        <div class="flex items-center gap-2 px-5 py-2.5 rounded-full backdrop-blur-xl border shadow-xl bg-gradient-to-r from-[#8BC34A]/90 to-[#FF9800]/90 border-white/30">
          <span class="w-2 h-2 rounded-full bg-white animate-pulse shadow-glow"></span>
          <span class="text-white font-bold">{{ pageName }}</span>

          <!-- 提示文字 - 桌面端显示 -->
          <span class="hidden xl:inline-block text-white/90 text-xs ml-1">/ {{ getPageDescription }}</span>
        </div>
      </li>
    </ol>

    <!-- 背景模式指示器 - 开发时可见 -->
    <!-- <div class="absolute -top-6 left-0 text-xs px-2 py-1 rounded bg-black/50 text-white">
      {{ isDarkMode ? '深色模式' : '浅色模式' }}
    </div> -->

    <!-- 悬停提示 - 仅在桌面端显示完整描述 -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-2"
    >
      <div
        v-if="showTooltip && getPageDescription"
        class="absolute -top-14 left-0 px-4 py-2 rounded-xl bg-gray-900/90 backdrop-blur-xl border border-white/10 shadow-2xl hidden md:block"
      >
        <p class="text-white/90 text-xs whitespace-nowrap">{{ getPageDescription }}</p>
        <div class="absolute -bottom-1 left-6 w-2 h-2 bg-gray-900/90 transform rotate-45 border-r border-b border-white/10"></div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isVisible = ref(false)
const showTooltip = ref(false)
const isDarkMode = ref(false)

const pageNameMap = {
  '/about': '品牌故事',
  '/products': '产品中心',
  '/quality': '品质保障',
  '/franchise': '加盟合作',
  '/stores': '门店查询',
  '/news': '新闻资讯',
  '/contact': '联系我们'
}

const pageDescriptionMap = {
  '/about': '了解东池便当的发展历程',
  '/products': '探索美味便当系列',
  '/quality': '三级品控体系保障',
  '/franchise': '开启创业新征程',
  '/stores': '找到离您最近的门店',
  '/news': '最新资讯与活动',
  '/contact': '我们期待与您联系'
}

// 定义每个页面Hero区域的颜色模式（深色Hero使用isDarkMode=true）
const pageColorModeMap = {
  '/': true,           // 首页 - 深色渐变
  '/about': false,     // 品牌故事 - 浅色背景 ⚠️ 修正
  '/products': true,   // 产品中心 - 橙色深色
  '/quality': false,   // 品质保障 - 浅色背景 ⚠️
  '/franchise': true,  // 加盟合作 - 深色渐变
  '/stores': false,    // 门店查询 - 地图/浅色
  '/news': false,      // 新闻资讯 - 浅色
  '/contact': false    // 联系我们 - 浅色
}

const pageName = computed(() => {
  return pageNameMap[route.path] || '页面'
})

const getPageDescription = computed(() => {
  return pageDescriptionMap[route.path] || ''
})

// 检测背景颜色模式
const detectBackgroundMode = () => {
  // 根据当前路由设置颜色模式
  isDarkMode.value = pageColorModeMap[route.path] ?? false
}

onMounted(() => {
  // 延迟显示动画
  setTimeout(() => {
    isVisible.value = true
  }, 100)

  // 检测背景模式
  detectBackgroundMode()

  // 3秒后显示提示，5秒后自动隐藏
  setTimeout(() => {
    showTooltip.value = true
    setTimeout(() => {
      showTooltip.value = false
    }, 3000)
  }, 2000)
})

// 监听路由变化，更新颜色模式
import { watch } from 'vue'
watch(() => route.path, () => {
  detectBackgroundMode()
})
</script>

<style scoped>
/* 面包屑项滑入动画 */
.breadcrumb-item {
  animation: breadcrumbSlideIn 0.6s ease-out forwards;
  opacity: 0;
  transform: translateX(-20px);
}

@keyframes breadcrumbSlideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 光晕效果 */
.shadow-glow {
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
}

/* 响应式优化 */
@media (max-width: 768px) {
  nav {
    bottom: 1rem !important;
    left: 1rem !important;
  }

  .breadcrumb-item {
    font-size: 0.8rem;
  }
}

/* 移动端简化样式 */
@media (max-width: 640px) {
  ol {
    gap: 0.25rem !important;
  }

  li > a,
  li > div {
    padding: 0.5rem 0.75rem !important;
  }
}
</style>
