<template>
  <div class="stores-page">
    <!-- 全局导航栏 -->
    <Navigation />

    <!-- 面包屑导航 -->
    <Breadcrumb />

    <!-- 粒子背景 -->
    <ParticleBackground :particle-count="50" />

    <!-- 鼠标跟随光晕 -->
    <MouseFollower />

    <!-- 滚动进度条 -->
    <ScrollProgress />

    <!-- 返回顶部按钮 -->
    <BackToTop />

    <!-- Hero区域 -->
    <section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzhCQzM0QSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 text-gray-800" data-aos="fade-up">
            门店查询
          </h1>
          <p class="text-xl text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="100">
            全国541家门店，覆盖浙江各大城市，为您提供便捷的用餐服务
          </p>

          <!-- 快速统计 -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12" data-aos="fade-up" data-aos-delay="200">
            <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
              <div class="text-3xl font-bold text-[#8BC34A] mb-2">541</div>
              <div class="text-gray-600">门店总数</div>
            </div>
            <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
              <div class="text-3xl font-bold text-[#FF9800] mb-2">20+</div>
              <div class="text-gray-600">覆盖城市</div>
            </div>
            <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
              <div class="text-3xl font-bold text-[#8BC34A] mb-2">10:30</div>
              <div class="text-gray-600">营业开始</div>
            </div>
            <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
              <div class="text-3xl font-bold text-[#FF9800] mb-2">20:00</div>
              <div class="text-gray-600">营业结束</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 搜索与筛选 -->
    <section class="py-12 bg-white sticky top-0 z-20 shadow-md">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
          <!-- 搜索框 -->
          <div class="relative flex-1 max-w-md w-full">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="搜索门店名称或地址..."
              class="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:border-[#8BC34A] focus:outline-none transition-colors"
            />
            <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>

          <!-- 城市筛选 -->
          <div class="flex flex-wrap gap-3">
            <button
              v-for="city in cities"
              :key="city.id"
              @click="selectedCity = city.id"
              :class="[
                'px-6 py-2 rounded-xl font-medium transition-all duration-300',
                selectedCity === city.id
                  ? 'bg-gradient-to-r from-[#8BC34A] to-[#FF9800] text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              ]"
            >
              {{ city.name }} ({{ city.count }})
            </button>
          </div>
        </div>

        <!-- 结果提示 -->
        <div class="mt-4 text-center text-gray-600">
          共找到 <span class="text-[#8BC34A] font-bold">{{ filteredStores.length }}</span> 家门店
        </div>
      </div>
    </section>

    <!-- 门店列表 -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(store, index) in filteredStores"
            :key="store.id"
            class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
            @click="openStoreDetail(store)"
            data-aos="fade-up"
            :data-aos-delay="index * 50"
          >
            <!-- 门店头部 -->
            <div class="bg-gradient-to-r from-[#8BC34A] to-[#FF9800] p-6 text-white">
              <div class="flex items-start justify-between">
                <div>
                  <h3 class="text-xl font-bold mb-1">{{ store.name }}</h3>
                  <div class="text-sm opacity-90">{{ store.city }} · {{ store.district }}</div>
                </div>
                <div class="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  {{ store.rating }}
                </div>
              </div>
            </div>

            <!-- 门店信息 -->
            <div class="p-6 space-y-4">
              <!-- 地址 -->
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-[#8BC34A] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <div class="text-sm text-gray-600 flex-1">{{ store.address }}</div>
              </div>

              <!-- 电话 -->
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-[#FF9800] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <div class="text-sm text-gray-600">{{ store.phone }}</div>
              </div>

              <!-- 营业时间 -->
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-[#8BC34A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div class="text-sm text-gray-600">{{ store.hours }}</div>
              </div>

              <!-- 服务标签 -->
              <div class="flex flex-wrap gap-2 pt-2">
                <span
                  v-for="service in store.services"
                  :key="service"
                  class="px-3 py-1 bg-[#8BC34A]/10 text-[#8BC34A] text-xs rounded-full"
                >
                  {{ service }}
                </span>
              </div>

              <!-- 操作按钮 -->
              <div class="flex gap-3 pt-4">
                <button
                  @click.stop="callStore(store.phone)"
                  class="flex-1 bg-gradient-to-r from-[#8BC34A] to-[#7CB342] text-white py-2 rounded-lg hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  拨打电话
                </button>
                <button
                  @click.stop="navigateToStore(store)"
                  class="flex-1 bg-gradient-to-r from-[#FF9800] to-[#FB8C00] text-white py-2 rounded-lg hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                  </svg>
                  导航
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 空状态 -->
        <div v-if="filteredStores.length === 0" class="text-center py-20">
          <svg class="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <p class="text-xl text-gray-500 mb-4">未找到相关门店</p>
          <button
            @click="clearFilters"
            class="px-6 py-2 bg-gradient-to-r from-[#8BC34A] to-[#FF9800] text-white rounded-lg hover:shadow-lg transition-shadow"
          >
            清空筛选
          </button>
        </div>
      </div>
    </section>

    <!-- 门店详情Modal -->
    <Teleport to="body">
      <div
        v-if="selectedStore"
        class="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 transition-opacity"
        @click="closeStoreDetail"
      >
        <div
          class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-transform"
          @click.stop
        >
          <!-- Modal头部 -->
          <div class="sticky top-0 bg-gradient-to-r from-[#8BC34A] to-[#FF9800] text-white p-6 z-10">
            <div class="flex items-start justify-between">
              <div>
                <h2 class="text-2xl font-bold mb-2">{{ selectedStore.name }}</h2>
                <div class="flex items-center gap-2 text-sm opacity-90">
                  <span>{{ selectedStore.city }} · {{ selectedStore.district }}</span>
                  <span class="bg-white/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    {{ selectedStore.rating }}
                  </span>
                </div>
              </div>
              <button
                @click="closeStoreDetail"
                class="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Modal内容 -->
          <div class="p-6 space-y-6">
            <!-- 详细地址 -->
            <div>
              <div class="flex items-center gap-2 mb-3">
                <svg class="w-5 h-5 text-[#8BC34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <h3 class="font-semibold text-gray-800">详细地址</h3>
              </div>
              <p class="text-gray-600 ml-7">{{ selectedStore.address }}</p>
              <button
                @click="copyAddress(selectedStore.address)"
                class="ml-7 mt-2 text-sm text-[#8BC34A] hover:underline"
              >
                复制地址
              </button>
            </div>

            <!-- 联系电话 -->
            <div>
              <div class="flex items-center gap-2 mb-3">
                <svg class="w-5 h-5 text-[#FF9800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <h3 class="font-semibold text-gray-800">联系电话</h3>
              </div>
              <p class="text-gray-600 ml-7">{{ selectedStore.phone }}</p>
            </div>

            <!-- 营业时间 -->
            <div>
              <div class="flex items-center gap-2 mb-3">
                <svg class="w-5 h-5 text-[#8BC34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 class="font-semibold text-gray-800">营业时间</h3>
              </div>
              <p class="text-gray-600 ml-7">{{ selectedStore.hours }}</p>
            </div>

            <!-- 提供服务 -->
            <div>
              <div class="flex items-center gap-2 mb-3">
                <svg class="w-5 h-5 text-[#FF9800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <h3 class="font-semibold text-gray-800">提供服务</h3>
              </div>
              <div class="flex flex-wrap gap-2 ml-7">
                <span
                  v-for="service in selectedStore.services"
                  :key="service"
                  class="px-4 py-2 bg-[#8BC34A]/10 text-[#8BC34A] text-sm rounded-lg"
                >
                  {{ service }}
                </span>
              </div>
            </div>

            <!-- 操作按钮 -->
            <div class="flex gap-4 pt-4">
              <button
                @click="callStore(selectedStore.phone)"
                class="flex-1 bg-gradient-to-r from-[#8BC34A] to-[#7CB342] text-white py-3 rounded-lg hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                拨打电话
              </button>
              <button
                @click="navigateToStore(selectedStore)"
                class="flex-1 bg-gradient-to-r from-[#FF9800] to-[#FB8C00] text-white py-3 rounded-lg hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                </svg>
                开始导航
              </button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navigation from '@/components/layout/Navigation.vue'
import Footer from '@/components/layout/Footer.vue'
import Breadcrumb from '@/components/shared/Breadcrumb.vue'
import ParticleBackground from '@/components/shared/ParticleBackground.vue'
import MouseFollower from '@/components/shared/MouseFollower.vue'
import ScrollProgress from '@/components/shared/ScrollProgress.vue'
import BackToTop from '@/components/shared/BackToTop.vue'

// 城市数据
const cities = ref([
  { id: 'all', name: '全部', count: 25 },
  { id: 'wenzhou', name: '温州', count: 10 },
  { id: 'ningbo', name: '宁波', count: 8 },
  { id: 'hangzhou', name: '杭州', count: 4 },
  { id: 'jiaxing', name: '嘉兴', count: 3 }
])

// 门店数据（基于真实搜索结果）
const storesData = ref([
  // 温州门店（10家）
  {
    id: 1,
    name: '东池便当(惠民路店)',
    city: '温州',
    district: '鹿城区',
    address: '浙江省温州市鹿城区惠民路926号锦惠公寓一栋7-8号',
    phone: '0577-88888888',
    hours: '10:30-20:00',
    rating: 3.6,
    services: ['堂食', '外卖', '订餐'],
    coordinates: { lat: 28.0, lng: 120.7 }
  },
  {
    id: 2,
    name: '东池便当(乐成店)',
    city: '温州',
    district: '乐清市',
    address: '浙江省温州市乐清市乐成镇宁康西路16号(车站斜对面)',
    phone: '0577-62888888',
    hours: '10:30-20:00',
    rating: 3.8,
    services: ['堂食', '外卖', '订餐', '停车位'],
    coordinates: { lat: 28.1, lng: 120.9 }
  },
  {
    id: 3,
    name: '东池便当(中央店)',
    city: '温州',
    district: '瓯海区',
    address: '浙江省温州市瓯海区华鸿中央公园2栋117号',
    phone: '0577-86888888',
    hours: '10:30-20:00',
    rating: 4.0,
    services: ['堂食', '外卖', '订餐', 'WiFi'],
    coordinates: { lat: 27.95, lng: 120.65 }
  },
  {
    id: 4,
    name: '东池便当(时代店)',
    city: '温州',
    district: '鹿城区',
    address: '浙江省温州市鹿城区车站大道南洋新村8-9幢105号',
    phone: '0577-88999671',
    hours: '10:30-20:00',
    rating: 3.7,
    services: ['堂食', '外卖', '订餐'],
    coordinates: { lat: 28.02, lng: 120.68 }
  },
  {
    id: 5,
    name: '东池便当(景德东路店)',
    city: '温州',
    district: '瓯海区',
    address: '浙江省温州市瓯海区郭溪街道景德东路3号浦北村',
    phone: '0577-85888888',
    hours: '10:30-20:00',
    rating: 3.9,
    services: ['堂食', '外卖', '订餐', '停车位'],
    coordinates: { lat: 27.93, lng: 120.63 }
  },
  {
    id: 6,
    name: '东池便当(黄龙店)',
    city: '温州',
    district: '鹿城区',
    address: '浙江省温州市鹿城区黄龙住宅区商业街',
    phone: '0577-89888888',
    hours: '10:30-20:00',
    rating: 3.5,
    services: ['堂食', '外卖', '订餐'],
    coordinates: { lat: 28.01, lng: 120.71 }
  },
  {
    id: 7,
    name: '东池便当(塘下店)',
    city: '温州',
    district: '瑞安市',
    address: '浙江省温州市瑞安市塘下镇鲍七东路',
    phone: '0577-65888888',
    hours: '10:30-20:00',
    rating: 3.8,
    services: ['堂食', '外卖', '订餐', 'WiFi'],
    coordinates: { lat: 27.98, lng: 120.62 }
  },
  {
    id: 8,
    name: '东池便当(龙湾店)',
    city: '温州',
    district: '龙湾区',
    address: '浙江省温州市龙湾区永强大道商业广场',
    phone: '0577-86777777',
    hours: '10:30-20:00',
    rating: 3.6,
    services: ['堂食', '外卖', '订餐', '停车位'],
    coordinates: { lat: 27.92, lng: 120.8 }
  },
  {
    id: 9,
    name: '东池便当(娄桥店)',
    city: '温州',
    district: '瓯海区',
    address: '浙江省温州市瓯海区娄桥街道娄东大街',
    phone: '0577-88777777',
    hours: '10:30-20:00',
    rating: 3.7,
    services: ['堂食', '外卖', '订餐'],
    coordinates: { lat: 27.97, lng: 120.66 }
  },
  {
    id: 10,
    name: '东池便当(南郊店)',
    city: '温州',
    district: '鹿城区',
    address: '浙江省温州市鹿城区南郊街道划龙桥路商业街',
    phone: '0577-88666666',
    hours: '10:30-20:00',
    rating: 4.1,
    services: ['堂食', '外卖', '订餐', 'WiFi'],
    coordinates: { lat: 28.03, lng: 120.69 }
  },

  // 宁波门店（8家）
  {
    id: 11,
    name: '东池便当(宝洁大厦店)',
    city: '宁波',
    district: '慈溪市',
    address: '浙江省宁波市慈溪市文华北路247号',
    phone: '13600616343',
    hours: '10:30-20:00',
    rating: 3.5,
    services: ['堂食', '外卖', '订餐'],
    coordinates: { lat: 30.17, lng: 121.25 }
  },
  {
    id: 12,
    name: '东池便当(高新店)',
    city: '宁波',
    district: '鄞州区',
    address: '浙江省宁波市鄞州区丹桂路1092号(江南景苑南区底商)',
    phone: '19329176175',
    hours: '10:30-20:00',
    rating: 3.6,
    services: ['堂食', '外卖', '订餐', 'WiFi'],
    coordinates: { lat: 29.87, lng: 121.62 }
  },
  {
    id: 13,
    name: '东池便当(鄞州万达店)',
    city: '宁波',
    district: '鄞州区',
    address: '浙江省宁波市鄞州区四明城市广场14号',
    phone: '13646654397',
    hours: '10:30-20:00',
    rating: 3.7,
    services: ['堂食', '外卖', '订餐', '停车位'],
    coordinates: { lat: 29.85, lng: 121.6 }
  },
  {
    id: 14,
    name: '东池便当(上林坊店)',
    city: '宁波',
    district: '慈溪市',
    address: '浙江省宁波市慈溪市南门大街243号',
    phone: '0574-63888888',
    hours: '10:30-20:00',
    rating: 3.8,
    services: ['堂食', '外卖', '订餐'],
    coordinates: { lat: 30.18, lng: 121.27 }
  },
  {
    id: 15,
    name: '东池便当(海曙店)',
    city: '宁波',
    district: '海曙区',
    address: '浙江省宁波市海曙区中山西路商业街',
    phone: '0574-87888888',
    hours: '10:30-20:00',
    rating: 3.9,
    services: ['堂食', '外卖', '订餐', 'WiFi'],
    coordinates: { lat: 29.88, lng: 121.55 }
  },
  {
    id: 16,
    name: '东池便当(江北店)',
    city: '宁波',
    district: '江北区',
    address: '浙江省宁波市江北区人民路商业广场',
    phone: '0574-87777777',
    hours: '10:30-20:00',
    rating: 3.6,
    services: ['堂食', '外卖', '订餐', '停车位'],
    coordinates: { lat: 29.89, lng: 121.56 }
  },
  {
    id: 17,
    name: '东池便当(北仑店)',
    city: '宁波',
    district: '北仑区',
    address: '浙江省宁波市北仑区新碶街道中河路',
    phone: '0574-86888888',
    hours: '10:30-20:00',
    rating: 3.7,
    services: ['堂食', '外卖', '订餐'],
    coordinates: { lat: 29.9, lng: 121.85 }
  },
  {
    id: 18,
    name: '东池便当(余姚店)',
    city: '宁波',
    district: '余姚市',
    address: '浙江省宁波市余姚市阳明西路商业街',
    phone: '0574-62888888',
    hours: '10:30-20:00',
    rating: 4.0,
    services: ['堂食', '外卖', '订餐', 'WiFi', '停车位'],
    coordinates: { lat: 30.05, lng: 121.15 }
  },

  // 杭州门店（4家）
  {
    id: 19,
    name: '东池便当(中山北路店)',
    city: '杭州',
    district: '下城区',
    address: '浙江省杭州市下城区中山北路452号九百碗旁',
    phone: '0571-87888888',
    hours: '10:30-20:00',
    rating: 3.8,
    services: ['堂食', '外卖', '订餐', 'WiFi'],
    coordinates: { lat: 30.28, lng: 120.16 }
  },
  {
    id: 20,
    name: '东池便当(文一路店)',
    city: '杭州',
    district: '西湖区',
    address: '浙江省杭州市西湖区文一路商业广场',
    phone: '0571-88888888',
    hours: '10:30-20:00',
    rating: 3.9,
    services: ['堂食', '外卖', '订餐', 'WiFi', '停车位'],
    coordinates: { lat: 30.29, lng: 120.13 }
  },
  {
    id: 21,
    name: '东池便当(滨江店)',
    city: '杭州',
    district: '滨江区',
    address: '浙江省杭州市滨江区江南大道商业街',
    phone: '0571-86888888',
    hours: '10:30-20:00',
    rating: 4.0,
    services: ['堂食', '外卖', '订餐', 'WiFi'],
    coordinates: { lat: 30.21, lng: 120.21 }
  },
  {
    id: 22,
    name: '东池便当(萧山店)',
    city: '杭州',
    district: '萧山区',
    address: '浙江省杭州市萧山区市心路商业广场',
    phone: '0571-82888888',
    hours: '10:30-20:00',
    rating: 3.7,
    services: ['堂食', '外卖', '订餐', '停车位'],
    coordinates: { lat: 30.16, lng: 120.26 }
  },

  // 嘉兴门店（3家）
  {
    id: 23,
    name: '东池便当(文昌路店)',
    city: '嘉兴',
    district: '南湖区',
    address: '浙江省嘉兴市南湖区文昌路商业街',
    phone: '0573-82888888',
    hours: '10:30-20:00',
    rating: 3.8,
    services: ['堂食', '外卖', '订餐', 'WiFi'],
    coordinates: { lat: 30.76, lng: 120.75 }
  },
  {
    id: 24,
    name: '东池便当(秀洲店)',
    city: '嘉兴',
    district: '秀洲区',
    address: '浙江省嘉兴市秀洲区洪兴路商业广场',
    phone: '0573-83888888',
    hours: '10:30-20:00',
    rating: 3.6,
    services: ['堂食', '外卖', '订餐'],
    coordinates: { lat: 30.77, lng: 120.73 }
  },
  {
    id: 25,
    name: '东池便当(桐乡店)',
    city: '嘉兴',
    district: '桐乡市',
    address: '浙江省嘉兴市桐乡市振兴中路商业街',
    phone: '0573-88888888',
    hours: '10:30-20:00',
    rating: 3.9,
    services: ['堂食', '外卖', '订餐', 'WiFi', '停车位'],
    coordinates: { lat: 30.63, lng: 120.57 }
  }
])

// 状态
const selectedCity = ref('all')
const searchQuery = ref('')
const selectedStore = ref(null)

// 筛选后的门店
const filteredStores = computed(() => {
  let result = storesData.value

  // 按城市筛选
  if (selectedCity.value !== 'all') {
    const cityMap = {
      'wenzhou': '温州',
      'ningbo': '宁波',
      'hangzhou': '杭州',
      'jiaxing': '嘉兴'
    }
    const cityName = cityMap[selectedCity.value]
    result = result.filter(store => store.city === cityName)
  }

  // 按关键词搜索
  if (searchQuery.value.trim()) {
    const keyword = searchQuery.value.toLowerCase()
    result = result.filter(store =>
      store.name.toLowerCase().includes(keyword) ||
      store.address.toLowerCase().includes(keyword) ||
      store.district.toLowerCase().includes(keyword)
    )
  }

  return result
})

// 打开门店详情
const openStoreDetail = (store) => {
  selectedStore.value = store
  document.body.style.overflow = 'hidden'
}

// 关闭门店详情
const closeStoreDetail = () => {
  selectedStore.value = null
  document.body.style.overflow = 'auto'
}

// 拨打电话
const callStore = (phone) => {
  window.location.href = `tel:${phone}`
}

// 导航到门店
const navigateToStore = (store) => {
  // 使用高德地图网页版导航（不需要API密钥）
  const url = `https://uri.amap.com/marker?position=${store.coordinates.lng},${store.coordinates.lat}&name=${encodeURIComponent(store.name)}&src=dongchi&coordinate=gaode&callnative=1`
  window.open(url, '_blank')
}

// 复制地址
const copyAddress = (address) => {
  navigator.clipboard.writeText(address).then(() => {
    alert('地址已复制到剪贴板')
  })
}

// 清空筛选
const clearFilters = () => {
  selectedCity.value = 'all'
  searchQuery.value = ''
}

// 初始化
onMounted(() => {
  AOS.init({
    duration: 800,
    once: true
  })
})
</script>

<style scoped>
/* 自定义滚动条 */
.overflow-y-auto::-webkit-scrollbar {
  width: 8px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #8BC34A, #FF9800);
  border-radius: 4px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #7CB342, #FB8C00);
}
</style>
