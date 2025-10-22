<template>
  <nav
    :class="['fixed top-0 left-0 w-full z-50 transition-all duration-500', scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent']"
  >
    <div class="container mx-auto px-6">
      <div class="flex items-center justify-between h-20">
        <!-- Logo区域 -->
        <div class="flex items-center gap-3">
          <div class="relative">
            <!-- 便当盒图标 - 融合东池绿色和橙色 -->
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-[#8BC34A] to-[#689F38] flex items-center justify-center shadow-lg transform hover:rotate-6 transition-all duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
            </div>
            <!-- 台湾特色装饰点 -->
            <div class="absolute -top-1 -right-1 w-4 h-4 bg-[#FF9800] rounded-full animate-pulse"></div>
          </div>

          <div class="flex flex-col">
            <h1 :class="['text-2xl font-bold tracking-wide', scrolled ? 'text-[#8BC34A]' : 'text-white']">
              东池便当
            </h1>
            <span :class="['text-xs tracking-widest', scrolled ? 'text-[#FF9800]' : 'text-white/90']">
              台湾风味 · 温州情怀
            </span>
          </div>
        </div>

        <!-- 桌面端导航菜单 -->
        <div class="hidden lg:flex items-center gap-8">
          <router-link
            v-for="item in navItems"
            :key="item.name"
            :to="item.path"
            :class="[
              'relative text-base font-medium transition-all duration-300 group cursor-pointer',
              scrolled ? 'text-gray-700 hover:text-[#8BC34A]' : 'text-white hover:text-[#FF9800]'
            ]"
          >
            {{ item.name }}
            <!-- 底部装饰线 - 台湾风格波浪 -->
            <span
              :class="[
                'absolute -bottom-2 left-0 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full',
                scrolled ? 'bg-gradient-to-r from-[#8BC34A] to-[#FF9800]' : 'bg-[#FF9800]'
              ]"
            ></span>
          </router-link>
        </div>

        <!-- 右侧联系按钮 -->
        <div class="hidden lg:flex items-center gap-4">
          <!-- 加盟热线 -->
          <a
            href="tel:400-888-8888"
            :class="[
              'flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 border-2',
              scrolled
                ? 'border-[#8BC34A] text-[#8BC34A] hover:bg-[#8BC34A] hover:text-white'
                : 'border-white/80 text-white hover:bg-white hover:text-[#8BC34A]'
            ]"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <span class="font-semibold">400-888-8888</span>
          </a>

          <!-- 加盟咨询按钮 - 东池品牌橙绿渐变 -->
          <router-link
            to="/franchise"
            class="px-8 py-3 bg-gradient-to-r from-[#8BC34A] to-[#FF9800] text-white rounded-full font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <span>加盟咨询</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </router-link>
        </div>

        <!-- 移动端汉堡菜单按钮 -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          :class="['lg:hidden p-2 rounded-lg transition-colors', scrolled ? 'text-[#8BC34A] hover:bg-[#8BC34A]/10' : 'text-white hover:bg-white/10']"
          aria-label="菜单"
        >
          <svg v-if="!mobileMenuOpen" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- 移动端菜单面板 -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="mobileMenuOpen"
        class="lg:hidden bg-white border-t border-gray-100 shadow-xl"
      >
        <div class="container mx-auto px-6 py-6 space-y-4">
          <!-- 移动端导航链接 -->
          <router-link
            v-for="item in navItems"
            :key="item.name"
            :to="item.path"
            class="block py-3 px-4 rounded-lg text-gray-700 font-medium hover:bg-gradient-to-r hover:from-[#8BC34A]/10 hover:to-[#FF9800]/10 hover:text-[#8BC34A] transition-all duration-200 border-l-4 border-transparent hover:border-[#8BC34A]"
            @click="mobileMenuOpen = false"
          >
            {{ item.name }}
          </router-link>

          <div class="pt-4 border-t border-gray-100 space-y-3">
            <!-- 移动端加盟热线 -->
            <a
              href="tel:400-888-8888"
              class="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg border-2 border-[#8BC34A] text-[#8BC34A] font-semibold hover:bg-[#8BC34A] hover:text-white transition-all duration-200"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              400-888-8888
            </a>

            <!-- 移动端加盟咨询 -->
            <router-link
              to="/franchise"
              class="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-gradient-to-r from-[#8BC34A] to-[#FF9800] text-white font-bold shadow-lg"
              @click="mobileMenuOpen = false"
            >
              加盟咨询
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </router-link>
          </div>

          <!-- 移动端品牌slogan -->
          <div class="text-center pt-4 border-t border-gray-100">
            <p class="text-sm text-[#8BC34A] font-bold">良心良食 健康东池</p>
            <p class="text-xs text-gray-500 mt-1">2004年创立 · 500+门店 · 100+城市</p>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

// 导航菜单项
const navItems = [
  { name: '首页', path: '/' },
  { name: '关于我们', path: '/about' },
  { name: '产品中心', path: '/products' },
  { name: '品质保障', path: '/quality' },
  { name: '加盟合作', path: '/franchise' },
  { name: '门店查询', path: '/stores' },
  { name: '新闻资讯', path: '/news' },
  { name: '联系我们', path: '/contact' }
]

// 滚动监听
const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* 自定义滚动条样式优化 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #8BC34A, #FF9800);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #689F38, #E65100);
}
</style>
