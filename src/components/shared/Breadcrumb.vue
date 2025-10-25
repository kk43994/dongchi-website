<template>
  <nav class="bg-gray-50 py-4 border-b border-gray-200">
    <div class="container mx-auto px-4">
      <ol class="flex items-center space-x-2 text-sm">
        <li>
          <router-link to="/" class="text-gray-600 hover:text-[#8BC34A] transition-colors flex items-center">
            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            首页
          </router-link>
        </li>
        <li class="text-gray-400">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
          </svg>
        </li>
        <li>
          <span class="text-gray-900 font-medium">{{ pageName }}</span>
        </li>
      </ol>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const pageNameMap = {
  '/about': '品牌故事',
  '/products': '产品中心',
  '/quality': '品质保障',
  '/franchise': '加盟合作',
  '/stores': '门店查询',
  '/news': '新闻资讯',
  '/contact': '联系我们'
}

const pageName = computed(() => {
  return pageNameMap[route.path] || '页面'
})
</script>

<style scoped>
/* 面包屑样式 */
</style>
