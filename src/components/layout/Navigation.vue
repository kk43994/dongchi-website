<template>
  <nav
    :class="['fixed top-0 left-0 w-full z-50 transition-all duration-500', scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent']"
  >
    <div class="container mx-auto px-6">
      <div class="flex items-center justify-between h-24">
        <!-- Logo区域 - 便当盒造型设计 -->
        <router-link to="/" class="flex items-center gap-3 group relative">
          <!-- 便当盒装饰背景 -->
          <div class="absolute -inset-2 bg-gradient-to-br from-[#8BC34A]/20 to-[#FF9800]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>

          <div class="relative">
            <!-- 东池便当真实Logo - 简洁版 -->
            <img
              src="../../assets/images/dongchi-logo-transparent.png"
              alt="东池便当Logo"
              class="h-16 w-auto object-contain transform group-hover:scale-110 transition-all duration-300 relative z-10"
            />
          </div>

          <div class="flex flex-col relative z-10">
            <h1 :class="['text-2xl font-bold transition-colors duration-300', scrolled ? 'text-[#8BC34A]' : 'text-white']" style="font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;">
              东池便当
            </h1>
            <span :class="['text-xs font-medium transition-colors duration-300', scrolled ? 'text-[#FF9800]' : 'text-white/90']">
              台湾风味 · 温州情怀
            </span>
          </div>
        </router-link>

        <!-- 桌面端导航菜单 - 带简单下拉 -->
        <div class="hidden lg:flex items-center gap-4">
          <div
            v-for="item in navItems"
            :key="item.name"
            class="relative"
            @mouseenter="item.hasDropdown && showDropdown(item.name)"
            @mouseleave="hideDropdown"
          >
            <router-link
              :to="item.path"
              :class="[
                'relative text-sm font-semibold transition-all duration-300 whitespace-nowrap flex items-center gap-1',
                scrolled ? 'text-gray-700 hover:text-[#8BC34A]' : 'text-white hover:text-[#FF9800]'
              ]"
              active-class="nav-active"
            >
              {{ item.name }}

              <!-- 下拉箭头图标 -->
              <svg
                v-if="item.hasDropdown"
                :class="[
                  'w-4 h-4 transition-transform duration-300',
                  activeDropdown === item.name && 'rotate-180'
                ]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>

              <!-- 底部装饰线 -->
              <span
                :class="[
                  'absolute -bottom-2 left-0 w-0 h-0.5 rounded-full transition-all duration-300',
                  scrolled ? 'bg-gradient-to-r from-[#8BC34A] to-[#FF9800]' : 'bg-[#FF9800]'
                ]"
                style="width: 0;"
              ></span>
            </router-link>

            <!-- 极简透明下拉菜单 -->
            <transition
              enter-active-class="transition-all duration-200 ease-out"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div
                v-if="item.hasDropdown && activeDropdown === item.name"
                class="absolute left-0 top-full mt-2 min-w-[160px] py-2"
              >
                <router-link
                  v-for="(link, index) in item.dropdown"
                  :key="index"
                  :to="link.path"
                  :class="[
                    'relative block px-3 py-2 text-sm font-semibold transition-all duration-300',
                    scrolled ? 'text-gray-700 hover:text-[#8BC34A]' : 'text-white hover:text-[#FF9800]'
                  ]"
                >
                  {{ link.name }}

                  <!-- 底部下划线动画 -->
                  <span
                    :class="[
                      'absolute bottom-1 left-2 w-0 h-0.5 rounded-full transition-all duration-300 hover:w-[calc(100%-1rem)]',
                      scrolled ? 'bg-gradient-to-r from-[#8BC34A] to-[#FF9800]' : 'bg-[#FF9800]'
                    ]"
                  ></span>
                </router-link>
              </div>
            </transition>
          </div>
        </div>

        <!-- 右侧联系按钮 -->
        <div class="hidden lg:flex items-center gap-3">
          <!-- 加盟热线 -->
          <a
            href="tel:400-888-8888"
            :class="[
              'flex items-center gap-1.5 px-4 py-2.5 rounded-full transition-all duration-300 border-2 text-sm',
              scrolled
                ? 'border-[#8BC34A] text-[#8BC34A] hover:bg-[#8BC34A] hover:text-white'
                : 'border-white/80 text-white hover:bg-white hover:text-[#8BC34A]'
            ]"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <span class="font-bold">400-8888</span>
          </a>

          <!-- 加盟咨询按钮 - 东池品牌橙绿渐变 -->
          <router-link
            to="/franchise"
            class="px-5 py-2.5 bg-gradient-to-r from-[#8BC34A] to-[#FF9800] text-white rounded-full font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-1.5 text-sm"
          >
            <span>加盟咨询</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </router-link>
        </div>

        <!-- 移动端便当盒菜单按钮 -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          :class="['lg:hidden p-2 rounded-xl transition-all duration-300 relative group', scrolled ? 'text-[#8BC34A] hover:bg-[#8BC34A]/10' : 'text-white hover:bg-white/10']"
          aria-label="菜单"
        >
          <!-- 便当盒图标（未打开状态） -->
          <svg v-if="!mobileMenuOpen" class="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <!-- 便当盒盖子 -->
            <rect x="4" y="5" width="16" height="4" rx="1" stroke-width="2" :class="scrolled ? 'stroke-[#8BC34A]' : 'stroke-white'"/>
            <!-- 便当盒主体 -->
            <rect x="4" y="9" width="16" height="10" rx="1" stroke-width="2" :class="scrolled ? 'stroke-[#FF9800]' : 'stroke-white'"/>
            <!-- 便当格子分隔线 -->
            <line x1="12" y1="9" x2="12" y2="19" stroke-width="2" :class="scrolled ? 'stroke-[#8BC34A]' : 'stroke-white'" opacity="0.5"/>
            <line x1="4" y1="14" x2="20" y2="14" stroke-width="2" :class="scrolled ? 'stroke-[#8BC34A]' : 'stroke-white'" opacity="0.5"/>
          </svg>

          <!-- 关闭图标（打开状态） - 带便当色彩 -->
          <svg v-else class="w-8 h-8 transition-transform duration-300 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" stroke-width="2" :class="scrolled ? 'stroke-[#8BC34A]' : 'stroke-white'" opacity="0.2"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" :class="scrolled ? 'stroke-[#FF9800]' : 'stroke-white'"></path>
          </svg>

          <!-- 悬停时的便当盒"蒸气"效果 -->
          <div class="absolute -top-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div :class="['w-1 h-1 rounded-full animate-ping', scrolled ? 'bg-[#8BC34A]' : 'bg-white']"></div>
          </div>
        </button>
      </div>
    </div>

    <!-- 移动端菜单面板 -->
    <transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0 -translate-y-4 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 -translate-y-4 scale-95"
    >
      <div
        v-if="mobileMenuOpen"
        class="lg:hidden bg-white border-t-4 border-gradient shadow-2xl"
        style="border-image: linear-gradient(to right, #8BC34A, #FF9800) 1;"
      >
        <div class="container mx-auto px-6 py-6 space-y-2">
          <!-- 移动端导航链接 -->
          <router-link
            v-for="item in navItems"
            :key="item.name"
            :to="item.path"
            class="block py-4 px-5 rounded-xl text-gray-700 font-semibold text-base hover:bg-gradient-to-r hover:from-[#8BC34A]/10 hover:to-[#FF9800]/10 hover:text-[#8BC34A] transition-all duration-300"
            @click="mobileMenuOpen = false"
          >
            {{ item.name }}
          </router-link>

          <!-- 移动端按钮区域 -->
          <div class="pt-4 border-t-2 border-dashed border-[#FF9800]/30 space-y-3">
            <!-- 移动端加盟热线 -->
            <a
              href="tel:400-888-8888"
              class="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl border-2 border-[#8BC34A] text-[#8BC34A] font-semibold hover:bg-[#8BC34A] hover:text-white transition-all duration-300"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span>400-888-8888</span>
            </a>

            <!-- 移动端加盟咨询 -->
            <router-link
              to="/franchise"
              class="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#8BC34A] to-[#FF9800] text-white font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              @click="mobileMenuOpen = false"
            >
              <span>加盟咨询</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const activeDropdown = ref(null)

// 导航菜单项 - 带简单下拉
const navItems = [
  {
    name: '首页',
    path: '/',
    hasDropdown: false
  },
  {
    name: '关于我们',
    path: '/about',
    hasDropdown: true,
    dropdown: [
      { name: '品牌故事', path: '/about' },
      { name: '企业文化', path: '/about#culture' },
      { name: '创始人寄语', path: '/about#founder' },
      { name: '荣誉资质', path: '/about#honors' }
    ]
  },
  {
    name: '产品中心',
    path: '/products',
    hasDropdown: true,
    dropdown: [
      { name: '肉类便当', path: '/products?category=meat' },
      { name: '鸡肉便当', path: '/products?category=chicken' },
      { name: '鱼肉便当', path: '/products?category=fish' },
      { name: '素食便当', path: '/products?category=vegetarian' },
      { name: '组合套餐', path: '/products?category=combo' }
    ]
  },
  {
    name: '品质保障',
    path: '/quality',
    hasDropdown: false
  },
  {
    name: '加盟合作',
    path: '/franchise',
    hasDropdown: true,
    dropdown: [
      { name: '加盟优势', path: '/franchise#advantages' },
      { name: '投资计算器', path: '/franchise#calculator' },
      { name: '加盟流程', path: '/franchise#process' },
      { name: '成功案例', path: '/franchise#cases' },
      { name: '在线申请', path: '/franchise#apply' }
    ]
  },
  {
    name: '门店查询',
    path: '/stores',
    hasDropdown: false
  },
  {
    name: '新闻资讯',
    path: '/news',
    hasDropdown: false
  },
  {
    name: '联系我们',
    path: '/contact',
    hasDropdown: false
  }
]

// 显示下拉菜单
const showDropdown = (itemName) => {
  activeDropdown.value = itemName
}

// 隐藏下拉菜单
const hideDropdown = () => {
  activeDropdown.value = null
}

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
/* 导航链接悬停效果 */
.hidden.lg\:flex a:hover span {
  width: 100% !important;
}

/* Active状态样式 */
:deep(.nav-active) {
  font-weight: 700;
}

:deep(.nav-active) span {
  width: 100% !important;
}
</style>
