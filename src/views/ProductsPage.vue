<template>
  <div class="products-page">
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
    <!-- Hero Section -->
    <section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-20 left-20 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <!-- 内容 -->
      <div class="relative z-10 container mx-auto px-6 text-center text-white py-20">
        <div data-aos="fade-up">
          <h1 class="text-6xl md:text-7xl font-bold mb-6 leading-tight mt-8">
            东池美食<br>
            <span class="text-white/90">为您精选</span>
          </h1>

          <p class="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
            100+ 款精选便当 · 现点现做 · 营养均衡
          </p>

          <!-- 快速统计 -->
          <div class="grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
            <div class="text-center" data-aos="fade-up" data-aos-delay="100">
              <div class="text-5xl font-bold mb-2">100+</div>
              <div class="text-white/80">产品种类</div>
            </div>
            <div class="text-center" data-aos="fade-up" data-aos-delay="200">
              <div class="text-5xl font-bold mb-2">98%</div>
              <div class="text-white/80">好评率</div>
            </div>
            <div class="text-center" data-aos="fade-up" data-aos-delay="300">
              <div class="text-5xl font-bold mb-2">50000+</div>
              <div class="text-white/80">日销量</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 向下滚动提示 -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>

    <!-- 搜索与筛选栏 -->
    <section class="sticky top-0 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div class="container mx-auto px-6 py-6">
        <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
          <!-- 搜索框 -->
          <div class="w-full md:w-96">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="搜索产品..."
                class="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
              >
              <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>

          <!-- 分类筛选 -->
          <div class="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
            <button
              v-for="category in categories"
              :key="category.id"
              @click="activeCategory = category.id"
              :class="[
                'px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all duration-300 flex items-center gap-2',
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              <span>{{ category.icon }}</span>
              <span>{{ category.name }}</span>
              <span class="text-xs opacity-75">({{ category.count }})</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 热销榜单 -->
    <section class="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12" data-aos="fade-up">
          <div class="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
            🔥 人气爆款
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            热销榜TOP10
          </h2>
          <p class="text-lg text-gray-600">
            这些便当最受顾客喜爱，销量遥遥领先
          </p>
        </div>

        <!-- 热销榜单轮播 -->
        <div class="max-w-7xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <swiper
            :modules="swiperModules"
            :slides-per-view="1"
            :space-between="20"
            :loop="true"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :pagination="{ clickable: true }"
            :navigation="true"
            :breakpoints="{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 }
            }"
            class="hot-products-swiper pb-16"
          >
            <swiper-slide v-for="(product, index) in hotProducts" :key="product.id">
              <div @click="openProductModal(product)" class="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden cursor-pointer">
                <!-- 排名徽章 -->
                <div class="absolute top-4 left-4 z-20 w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {{ index + 1 }}
                </div>

                <!-- 产品图片 -->
                <div class="relative h-56 overflow-hidden">
                  <img
                    :src="product.image"
                    :alt="product.name"
                    class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    @error="handleImageError"
                  >
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  <!-- 热销标签 -->
                  <div class="absolute bottom-4 left-4 right-4 z-10">
                    <div class="flex items-center gap-2 text-white">
                      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <span class="text-sm font-medium">{{ product.rating }}</span>
                      <span class="text-xs opacity-75">({{ product.reviews }}条评价)</span>
                    </div>
                  </div>
                </div>

                <!-- 产品信息 -->
                <div class="p-6">
                  <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                    {{ product.name }}
                  </h3>
                  <p class="text-gray-600 text-sm mb-4 line-clamp-2">
                    {{ product.description }}
                  </p>

                  <!-- 价格 -->
                  <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div class="flex items-baseline gap-2">
                      <span class="text-2xl font-bold text-orange-600">¥{{ product.price }}</span>
                      <span v-if="product.originalPrice" class="text-sm text-gray-400 line-through">¥{{ product.originalPrice }}</span>
                    </div>
                    <div class="text-sm text-gray-500">
                      已售 {{ product.sales }}
                    </div>
                  </div>
                </div>

                <!-- 快速购买按钮 -->
                <div class="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button class="w-full py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold hover:from-orange-600 hover:to-yellow-600 transition-colors">
                    立即购买
                  </button>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>

    <!-- 全部产品 -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <!-- 产品数量提示 -->
        <div class="mb-8 flex items-center justify-between">
          <div class="text-gray-600">
            共找到 <span class="text-orange-600 font-bold text-xl">{{ filteredProducts.length }}</span> 款产品
          </div>

          <!-- 排序选项 -->
          <select
            v-model="sortBy"
            class="px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
          >
            <option value="default">默认排序</option>
            <option value="price-asc">价格从低到高</option>
            <option value="price-desc">价格从高到低</option>
            <option value="sales">销量优先</option>
            <option value="rating">评分优先</option>
          </select>
        </div>

        <!-- 产品网格 -->
        <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div
            v-for="product in paginatedProducts"
            :key="product.id"
            @click="openProductModal(product)"
            class="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden cursor-pointer border border-gray-100"
            data-aos="fade-up"
          >
            <!-- 标签 -->
            <div class="absolute top-4 right-4 z-20 flex flex-col gap-2">
              <span v-if="product.isNew" class="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full shadow-lg">
                新品
              </span>
              <span v-if="product.isHot" class="px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
                热卖
              </span>
              <span v-if="product.discount" class="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg">
                {{ product.discount }}折
              </span>
            </div>

            <!-- 产品图片 -->
            <div class="relative h-52 overflow-hidden">
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                @error="handleImageError"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <!-- 产品信息 -->
            <div class="p-5">
              <div class="flex items-start justify-between mb-2">
                <h3 class="text-lg font-bold text-gray-900 group-hover:text-orange-500 transition-colors flex-1 pr-2">
                  {{ product.name }}
                </h3>
                <div class="flex items-center gap-1 flex-shrink-0">
                  <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span class="text-sm font-medium text-gray-700">{{ product.rating }}</span>
                </div>
              </div>

              <p class="text-gray-600 text-sm mb-3 line-clamp-2">
                {{ product.description }}
              </p>

              <!-- 标签 -->
              <div class="flex flex-wrap gap-1 mb-4">
                <span v-for="tag in product.tags.slice(0, 2)" :key="tag" class="px-2 py-1 bg-orange-50 text-orange-600 text-xs rounded-full">
                  {{ tag }}
                </span>
              </div>

              <!-- 价格与按钮 -->
              <div class="flex items-center justify-between pt-3 border-t border-gray-100">
                <div class="flex flex-col">
                  <div class="flex items-baseline gap-2">
                    <span class="text-2xl font-bold text-orange-600">¥{{ product.price }}</span>
                    <span v-if="product.originalPrice" class="text-sm text-gray-400 line-through">¥{{ product.originalPrice }}</span>
                  </div>
                  <span class="text-xs text-gray-500 mt-1">已售 {{ product.sales }}</span>
                </div>
                <button
                  @click.stop="addToCart(product)"
                  class="p-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 空状态 -->
        <div v-else class="text-center py-20">
          <div class="text-gray-400 mb-4">
            <svg class="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-700 mb-2">未找到相关产品</h3>
          <p class="text-gray-500 mb-6">试试其他关键词或筛选条件</p>
          <button
            @click="clearFilters"
            class="px-8 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors"
          >
            清空筛选
          </button>
        </div>

        <!-- 分页 -->
        <div v-if="totalPages > 1" class="mt-12 flex justify-center">
          <div class="flex items-center gap-2">
            <button
              @click="currentPage = Math.max(1, currentPage - 1)"
              :disabled="currentPage === 1"
              class="px-4 py-2 border-2 border-gray-200 rounded-lg hover:border-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              上一页
            </button>

            <button
              v-for="page in visiblePages"
              :key="page"
              @click="currentPage = page"
              :class="[
                'px-4 py-2 rounded-lg font-medium transition-all duration-300',
                currentPage === page
                  ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg'
                  : 'border-2 border-gray-200 text-gray-700 hover:border-orange-500'
              ]"
            >
              {{ page }}
            </button>

            <button
              @click="currentPage = Math.min(totalPages, currentPage + 1)"
              :disabled="currentPage === totalPages"
              class="px-4 py-2 border-2 border-gray-200 rounded-lg hover:border-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              下一页
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品详情Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="selectedProduct"
          @click="closeProductModal"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <div
            @click.stop
            class="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform"
          >
            <!-- 关闭按钮 -->
            <button
              @click="closeProductModal"
              class="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <div class="grid md:grid-cols-2 gap-8 p-8">
              <!-- 左侧：图片 -->
              <div class="space-y-4">
                <div class="relative rounded-2xl overflow-hidden aspect-square">
                  <img
                    :src="selectedProduct.image"
                    :alt="selectedProduct.name"
                    class="w-full h-full object-cover"
                    @error="handleImageError"
                  >

                  <!-- 标签 -->
                  <div class="absolute top-4 right-4 flex flex-col gap-2">
                    <span v-if="selectedProduct.isNew" class="px-3 py-1 bg-green-500 text-white text-sm font-bold rounded-full">新品</span>
                    <span v-if="selectedProduct.isHot" class="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full">热卖</span>
                  </div>
                </div>

                <!-- 营养信息 -->
                <div class="grid grid-cols-4 gap-4 p-4 bg-gray-50 rounded-xl">
                  <div class="text-center">
                    <div class="text-2xl font-bold text-orange-600">{{ selectedProduct.nutrition?.calories || 520 }}</div>
                    <div class="text-xs text-gray-600 mt-1">千卡</div>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl font-bold text-orange-600">{{ selectedProduct.nutrition?.protein || 28 }}g</div>
                    <div class="text-xs text-gray-600 mt-1">蛋白质</div>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl font-bold text-orange-600">{{ selectedProduct.nutrition?.carbs || 65 }}g</div>
                    <div class="text-xs text-gray-600 mt-1">碳水</div>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl font-bold text-orange-600">{{ selectedProduct.nutrition?.fat || 18 }}g</div>
                    <div class="text-xs text-gray-600 mt-1">脂肪</div>
                  </div>
                </div>
              </div>

              <!-- 右侧：详情 -->
              <div class="space-y-6">
                <div>
                  <h2 class="text-3xl font-bold text-gray-900 mb-3">{{ selectedProduct.name }}</h2>

                  <!-- 评分 -->
                  <div class="flex items-center gap-4 mb-4">
                    <div class="flex items-center gap-1">
                      <svg v-for="star in 5" :key="star" :class="['w-5 h-5', star <= selectedProduct.rating ? 'text-yellow-400' : 'text-gray-300']" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <span class="ml-2 font-medium">{{ selectedProduct.rating }}</span>
                    </div>
                    <span class="text-gray-500">{{ selectedProduct.reviews }} 条评价</span>
                    <span class="text-gray-500">已售 {{ selectedProduct.sales }}</span>
                  </div>

                  <!-- 价格 -->
                  <div class="flex items-baseline gap-3 mb-6">
                    <span class="text-4xl font-bold text-orange-600">¥{{ selectedProduct.price }}</span>
                    <span v-if="selectedProduct.originalPrice" class="text-xl text-gray-400 line-through">¥{{ selectedProduct.originalPrice }}</span>
                    <span v-if="selectedProduct.discount" class="px-3 py-1 bg-red-100 text-red-600 text-sm font-bold rounded-full">
                      {{ selectedProduct.discount }}折优惠
                    </span>
                  </div>
                </div>

                <!-- 描述 -->
                <div>
                  <h3 class="text-lg font-bold text-gray-900 mb-3">产品描述</h3>
                  <p class="text-gray-600 leading-relaxed">{{ selectedProduct.description }}</p>
                </div>

                <!-- 标签 -->
                <div>
                  <h3 class="text-lg font-bold text-gray-900 mb-3">特色亮点</h3>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tag in selectedProduct.tags" :key="tag" class="px-4 py-2 bg-orange-50 text-orange-600 rounded-full font-medium">
                      {{ tag }}
                    </span>
                  </div>
                </div>

                <!-- 配料 -->
                <div>
                  <h3 class="text-lg font-bold text-gray-900 mb-3">主要配料</h3>
                  <p class="text-gray-600">{{ selectedProduct.ingredients || '米饭、时蔬、优质肉类、秘制酱汁' }}</p>
                </div>

                <!-- 操作按钮 -->
                <div class="flex gap-4 pt-6">
                  <button
                    @click="addToCart(selectedProduct)"
                    class="flex-1 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl text-lg font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    加入购物车
                  </button>
                  <button class="px-6 py-4 border-2 border-orange-500 text-orange-500 rounded-xl font-bold hover:bg-orange-50 transition-colors">
                    收藏
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- 购物车提示Toast -->
    <Teleport to="body">
      <Transition name="toast">
        <div v-if="showCartToast" class="fixed bottom-8 right-8 z-50 bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span class="font-medium">已添加到购物车！</span>
        </div>
      </Transition>
    </Teleport>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation as SwiperNavigation } from 'swiper/modules'
import AOS from 'aos'
import Navigation from '@/components/layout/Navigation.vue'
import Footer from '@/components/layout/Footer.vue'
import Breadcrumb from '@/components/shared/Breadcrumb.vue'
import ScrollProgress from '@/components/shared/ScrollProgress.vue'
import BackToTop from '@/components/shared/BackToTop.vue'
import MouseFollower from '@/components/shared/MouseFollower.vue'
import ParticleBackground from '@/components/shared/ParticleBackground.vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'aos/dist/aos.css'

const swiperModules = [Autoplay, Pagination, SwiperNavigation]

// 分类
const categories = ref([
  { id: 'all', name: '全部', icon: '🍱', count: 42 },
  { id: 'meat', name: '肉类便当', icon: '🥩', count: 15 },
  { id: 'chicken', name: '鸡肉系列', icon: '🍗', count: 8 },
  { id: 'fish', name: '鱼肉系列', icon: '🐟', count: 6 },
  { id: 'veg', name: '素食便当', icon: '🥗', count: 7 },
  { id: 'combo', name: '组合套餐', icon: '🍛', count: 6 }
])

const activeCategory = ref('all')
const searchQuery = ref('')
const sortBy = ref('default')
const currentPage = ref(1)
const itemsPerPage = 12
const selectedProduct = ref(null)
const showCartToast = ref(false)

// 全部产品数据（模拟）
const allProducts = ref([
  // 热销产品
  { id: 1, name: '经典卤肉便当', category: 'meat', description: '台湾秘制卤肉，配以精选时蔬，米饭粒粒分明，浓香四溢', price: 28, originalPrice: 35, rating: 5, reviews: 2834, sales: 50000, image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80', tags: ['招牌推荐', '台湾风味', '营养均衡'], isHot: true, isNew: false, discount: null, ingredients: '卤肉、米饭、青菜、卤蛋、笋干' },
  { id: 2, name: '黑椒牛柳便当', category: 'meat', description: '精选澳洲牛柳，搭配黑椒酱汁，肉质鲜嫩多汁', price: 35, originalPrice: 42, rating: 5, reviews: 1923, sales: 38000, image: 'https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=600&q=80', tags: ['人气爆款', '高蛋白', '商务优选'], isHot: true, isNew: false, discount: null, ingredients: '澳洲牛柳、黑椒汁、西兰花、胡萝卜、米饭' },
  { id: 3, name: '照烧鸡腿便当', category: 'chicken', description: '日式照烧工艺，鸡腿肉嫩滑入味，酱汁香甜可口', price: 32, originalPrice: null, rating: 5, reviews: 1567, sales: 32000, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&q=80', tags: ['日式风味', '低脂健康', '办公族最爱'], isHot: true, isNew: false, discount: null, ingredients: '鸡腿、照烧汁、时蔬、米饭' },
  { id: 4, name: '酸菜鱼片便当', category: 'fish', description: '川味酸菜配鲜嫩鱼片，酸辣开胃，回味无穷', price: 30, originalPrice: null, rating: 4, reviews: 1234, sales: 28000, image: 'https://images.unsplash.com/photo-1603073891934-64ead27c9d86?w=600&q=80', tags: ['川味特色', '酸辣鲜香', '季节限定'], isHot: true, isNew: true, discount: null, ingredients: '巴沙鱼、酸菜、米饭、豆芽' },
  { id: 5, name: '宫保鸡丁便当', category: 'chicken', description: '经典川菜风味，鸡丁酥脆花生香，配菜丰富营养', price: 26, originalPrice: null, rating: 5, reviews: 987, sales: 25000, image: 'https://images.unsplash.com/photo-1588191317928-e5ed69eaf3ec?w=600&q=80', tags: ['经典川菜', '香辣可口', '超值实惠'], isHot: true, isNew: false, discount: null, ingredients: '鸡肉、花生、干辣椒、葱姜蒜、米饭' },
  { id: 6, name: '红烧排骨便当', category: 'meat', description: '排骨软烂入味，红烧汁浓郁，下饭必备', price: 38, originalPrice: 45, rating: 5, reviews: 856, sales: 22000, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80', tags: ['家常美味', '肉质软烂', '营养丰富'], isHot: true, isNew: false, discount: 8.5, ingredients: '排骨、红烧汁、土豆、胡萝卜、米饭' },
  { id: 7, name: '梅菜扣肉便当', category: 'meat', description: '传统客家风味，五花肉肥而不腻，梅菜香浓', price: 34, originalPrice: null, rating: 5, reviews: 734, sales: 20000, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&q=80', tags: ['客家特色', '经典名菜', '回味无穷'], isHot: true, isNew: false, discount: null, ingredients: '五花肉、梅干菜、米饭' },
  { id: 8, name: '糖醋里脊便当', category: 'meat', description: '酸甜可口，外酥里嫩，老少皆宜的经典口味', price: 29, originalPrice: null, rating: 5, reviews: 623, sales: 18000, image: 'https://images.unsplash.com/photo-1603073891934-64ead27c9d86?w=600&q=80', tags: ['酸甜口味', '外酥里嫩', '儿童喜爱'], isHot: true, isNew: false, discount: null, ingredients: '里脊肉、糖醋汁、青红椒、米饭' },
  { id: 9, name: '椒盐鸡翅便当', category: 'chicken', description: '鸡翅炸至金黄，椒盐香味浓郁，外脆内嫩', price: 31, originalPrice: null, rating: 5, reviews: 589, sales: 17000, image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&q=80', tags: ['香酥可口', '高蛋白', '美味下饭'], isHot: true, isNew: false, discount: null, ingredients: '鸡翅、椒盐、时蔬、米饭' },
  { id: 10, name: '香煎鱼排便当', category: 'fish', description: '深海鱼排，香煎至金黄，搭配柠檬汁，清新不腻', price: 36, originalPrice: null, rating: 4, reviews: 478, sales: 15000, image: 'https://images.unsplash.com/photo-1563245372-70a1883c9e45?w=600&q=80', tags: ['深海鱼', '低脂健康', '清淡养生'], isHot: true, isNew: true, discount: null, ingredients: '深海鱼排、柠檬汁、时蔬、米饭' },

  // 其他产品
  { id: 11, name: '台式三杯鸡便当', category: 'chicken', description: '台湾经典名菜，九层塔香味浓郁', price: 33, originalPrice: null, rating: 5, reviews: 423, sales: 12000, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80', tags: ['台湾特色', '香气扑鼻'], isHot: false, isNew: false, discount: null },
  { id: 12, name: '麻辣香锅便当', category: 'combo', description: '多种食材混搭，麻辣鲜香，层次丰富', price: 37, originalPrice: 42, rating: 5, reviews: 398, sales: 11000, image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80', tags: ['麻辣口味', '食材丰富'], isHot: false, isNew: true, discount: 8.8 },
  { id: 13, name: '红烧牛腩便当', category: 'meat', description: '牛腩软烂入味，汤汁浓郁，营养滋补', price: 40, originalPrice: null, rating: 5, reviews: 367, sales: 10000, image: 'https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=600&q=80', tags: ['滋补养生', '营养丰富'], isHot: false, isNew: false, discount: null },
  { id: 14, name: '咖喱鸡肉便当', category: 'chicken', description: '印度风味咖喱，鸡肉嫩滑，香料丰富', price: 30, originalPrice: null, rating: 4, reviews: 334, sales: 9500, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&q=80', tags: ['异域风情', '香料浓郁'], isHot: false, isNew: false, discount: null },
  { id: 15, name: '蒜香排骨便当', category: 'meat', description: '蒜香四溢，排骨酥软，蒜蓉控最爱', price: 36, originalPrice: null, rating: 5, reviews: 298, sales: 8800, image: 'https://images.unsplash.com/photo-1588191317928-e5ed69eaf3ec?w=600&q=80', tags: ['蒜香浓郁', '肉质软烂'], isHot: false, isNew: false, discount: null },
  { id: 16, name: '素食什锦便当', category: 'veg', description: '多种时令蔬菜，搭配豆制品，清淡健康', price: 24, originalPrice: null, rating: 4, reviews: 276, sales: 7600, image: 'https://images.unsplash.com/photo-1603073891934-64ead27c9d86?w=600&q=80', tags: ['素食健康', '低卡低脂'], isHot: false, isNew: true, discount: null },
  { id: 17, name: '红烧茄子便当', category: 'veg', description: '茄子软糯入味，下饭神器，素食首选', price: 22, originalPrice: null, rating: 4, reviews: 254, sales: 7200, image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80', tags: ['素食美味', '家常口味'], isHot: false, isNew: false, discount: null },
  { id: 18, name: '香菇滑鸡便当', category: 'chicken', description: '鸡肉嫩滑，香菇鲜香，广式风味', price: 31, originalPrice: null, rating: 5, reviews: 232, sales: 6800, image: 'https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=600&q=80', tags: ['广式风味', '香菇鲜香'], isHot: false, isNew: false, discount: null },
  { id: 19, name: '剁椒鱼头便当', category: 'fish', description: '湘菜经典，鱼肉鲜嫩，剁椒酸辣', price: 42, originalPrice: 50, rating: 5, reviews: 198, sales: 6200, image: 'https://images.unsplash.com/photo-1563245372-70a1883c9e45?w=600&q=80', tags: ['湘菜特色', '酸辣开胃'], isHot: false, isNew: false, discount: 8.4 },
  { id: 20, name: '铁板牛肉便当', category: 'meat', description: '铁板烹饪，牛肉嫩滑，铁板香味', price: 39, originalPrice: null, rating: 5, reviews: 189, sales: 5900, image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80', tags: ['铁板风味', '肉质鲜嫩'], isHot: false, isNew: true, discount: null },

  // 更多产品...
  { id: 21, name: '干锅花菜便当', category: 'veg', description: '干锅风味，花菜脆嫩，香辣下饭', price: 25, originalPrice: null, rating: 4, reviews: 167, sales: 5500, image: 'https://images.unsplash.com/photo-1588191317928-e5ed69eaf3ec?w=600&q=80', tags: ['干锅风味', '香辣可口'], isHot: false, isNew: false, discount: null },
  { id: 22, name: '番茄牛腩便当', category: 'meat', description: '番茄酸甜，牛腩软烂，营养美味', price: 38, originalPrice: null, rating: 5, reviews: 156, sales: 5200, image: 'https://images.unsplash.com/photo-1603073891934-64ead27c9d86?w=600&q=80', tags: ['酸甜口味', '营养丰富'], isHot: false, isNew: false, discount: null },
  { id: 23, name: '孜然羊肉便当', category: 'meat', description: '新疆风味，羊肉鲜嫩，孜然香浓', price: 42, originalPrice: 48, rating: 5, reviews: 145, sales: 4900, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&q=80', tags: ['新疆风味', '孜然香浓'], isHot: false, isNew: false, discount: 8.8 },
  { id: 24, name: '鱼香肉丝便当', category: 'meat', description: '川菜经典，鱼香味浓，下饭必备', price: 28, originalPrice: null, rating: 4, reviews: 134, sales: 4600, image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80', tags: ['川菜经典', '鱼香味浓'], isHot: false, isNew: false, discount: null },
  { id: 25, name: '香辣虾仁便当', category: 'fish', description: '虾仁Q弹，香辣过瘾，海鲜风味', price: 45, originalPrice: null, rating: 5, reviews: 123, sales: 4300, image: 'https://images.unsplash.com/photo-1563245372-70a1883c9e45?w=600&q=80', tags: ['海鲜美味', '香辣过瘾'], isHot: false, isNew: true, discount: null },
  { id: 26, name: '麻婆豆腐便当', category: 'veg', description: '川菜经典，麻辣鲜香，豆腐嫩滑', price: 23, originalPrice: null, rating: 4, reviews: 112, sales: 4000, image: 'https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=600&q=80', tags: ['川菜经典', '麻辣鲜香'], isHot: false, isNew: false, discount: null },
  { id: 27, name: '京酱肉丝便当', category: 'meat', description: '北京风味，甜面酱香浓，肉丝嫩滑', price: 30, originalPrice: null, rating: 5, reviews: 98, sales: 3700, image: 'https://images.unsplash.com/photo-1588191317928-e5ed69eaf3ec?w=600&q=80', tags: ['京味特色', '酱香浓郁'], isHot: false, isNew: false, discount: null },
  { id: 28, name: '回锅肉便当', category: 'meat', description: '川菜名菜，五花肉香脆，蒜苗清香', price: 32, originalPrice: null, rating: 5, reviews: 87, sales: 3400, image: 'https://images.unsplash.com/photo-1603073891934-64ead27c9d86?w=600&q=80', tags: ['川菜名菜', '香脆可口'], isHot: false, isNew: false, discount: null },
  { id: 29, name: '清蒸鲈鱼便当', category: 'fish', description: '鲈鱼鲜嫩，清蒸保留原味，健康养生', price: 48, originalPrice: null, rating: 5, reviews: 76, sales: 3100, image: 'https://images.unsplash.com/photo-1563245372-70a1883c9e45?w=600&q=80', tags: ['清淡养生', '原汁原味'], isHot: false, isNew: false, discount: null },
  { id: 30, name: '辣子鸡丁便当', category: 'chicken', description: '重庆风味，鸡肉香脆，辣椒过瘾', price: 33, originalPrice: null, rating: 5, reviews: 65, sales: 2800, image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80', tags: ['重庆风味', '香脆辣爽'], isHot: false, isNew: true, discount: null },

  // 组合套餐
  { id: 31, name: '双拼便当（牛肉+鸡肉）', category: 'combo', description: '一次享受两种美味，营养搭配更均衡', price: 42, originalPrice: 50, rating: 5, reviews: 543, sales: 9800, image: 'https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=600&q=80', tags: ['双拼组合', '营养均衡'], isHot: false, isNew: false, discount: 8.4 },
  { id: 32, name: '海陆双拼便当', category: 'combo', description: '海鲜+肉类，双重享受，满足味蕾', price: 46, originalPrice: null, rating: 5, reviews: 421, sales: 8600, image: 'https://images.unsplash.com/photo-1563245372-70a1883c9e45?w=600&q=80', tags: ['海陆组合', '丰盛美味'], isHot: false, isNew: true, discount: null },
  { id: 33, name: '荤素搭配便当', category: 'combo', description: '肉类+蔬菜，营养全面，健康首选', price: 35, originalPrice: null, rating: 4, reviews: 356, sales: 7200, image: 'https://images.unsplash.com/photo-1603073891934-64ead27c9d86?w=600&q=80', tags: ['荤素搭配', '营养全面'], isHot: false, isNew: false, discount: null },
  { id: 34, name: '三宝便当', category: 'combo', description: '三种主菜，一次满足，物超所值', price: 39, originalPrice: 45, rating: 5, reviews: 289, sales: 6500, image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80', tags: ['三宝组合', '超值划算'], isHot: false, isNew: false, discount: 8.7 },
  { id: 35, name: '家庭套餐便当', category: 'combo', description: '2-3人份，菜品丰富，家庭聚餐首选', price: 88, originalPrice: 108, rating: 5, reviews: 234, sales: 5400, image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&q=80', tags: ['家庭套餐', '菜品丰富'], isHot: false, isNew: true, discount: 8.2 },
  { id: 36, name: '儿童营养便当', category: 'combo', description: '专为儿童设计，营养均衡，口味温和', price: 28, originalPrice: null, rating: 5, reviews: 198, sales: 4800, image: 'https://images.unsplash.com/photo-1588191317928-e5ed69eaf3ec?w=600&q=80', tags: ['儿童专属', '营养均衡'], isHot: false, isNew: false, discount: null },

  // 更多蔬菜类
  { id: 37, name: '时蔬豆腐便当', category: 'veg', description: '新鲜时蔬配嫩豆腐，清淡健康', price: 22, originalPrice: null, rating: 4, reviews: 176, sales: 4200, image: 'https://images.unsplash.com/photo-1603073891934-64ead27c9d86?w=600&q=80', tags: ['清淡健康', '素食营养'], isHot: false, isNew: false, discount: null },
  { id: 38, name: '地三鲜便当', category: 'veg', description: '东北经典，茄子土豆青椒，下饭美味', price: 24, originalPrice: null, rating: 5, reviews: 154, sales: 3900, image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80', tags: ['东北经典', '美味下饭'], isHot: false, isNew: false, discount: null },
  { id: 39, name: '家常豆腐便当', category: 'veg', description: '豆腐嫩滑，酱汁浓郁，家常美味', price: 23, originalPrice: null, rating: 4, reviews: 132, sales: 3600, image: 'https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=600&q=80', tags: ['家常美味', '豆腐嫩滑'], isHot: false, isNew: false, discount: null },
  { id: 40, name: '蒜蓉西兰花便当', category: 'veg', description: '西兰花脆嫩，蒜蓉香浓，健康低卡', price: 21, originalPrice: null, rating: 4, reviews: 98, sales: 3000, image: 'https://images.unsplash.com/photo-1588191317928-e5ed69eaf3ec?w=600&q=80', tags: ['健康低卡', '清淡养生'], isHot: false, isNew: false, discount: null },
  { id: 41, name: '炒双菇便当', category: 'veg', description: '香菇草菇双拼，菌类鲜香，营养丰富', price: 25, originalPrice: null, rating: 4, reviews: 87, sales: 2700, image: 'https://images.unsplash.com/photo-1603073891934-64ead27c9d86?w=600&q=80', tags: ['菌类美味', '营养丰富'], isHot: false, isNew: true, discount: null },
  { id: 42, name: '素什锦炒饭', category: 'veg', description: '多种蔬菜炒饭，营养全面，清香可口', price: 20, originalPrice: null, rating: 4, reviews: 76, sales: 2400, image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80', tags: ['炒饭美味', '素食健康'], isHot: false, isNew: false, discount: null }
])

// 热销产品（前10）
const hotProducts = computed(() => {
  return [...allProducts.value]
    .sort((a, b) => b.sales - a.sales)
    .slice(0, 10)
})

// 筛选后的产品
const filteredProducts = computed(() => {
  let result = allProducts.value

  // 按分类筛选
  if (activeCategory.value !== 'all') {
    result = result.filter(p => p.category === activeCategory.value)
  }

  // 按搜索词筛选
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }

  // 排序
  switch (sortBy.value) {
    case 'price-asc':
      result = [...result].sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      result = [...result].sort((a, b) => b.price - a.price)
      break
    case 'sales':
      result = [...result].sort((a, b) => b.sales - a.sales)
      break
    case 'rating':
      result = [...result].sort((a, b) => b.rating - a.rating)
      break
  }

  return result
})

// 分页后的产品
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredProducts.value.slice(start, end)
})

// 总页数
const totalPages = computed(() => {
  return Math.ceil(filteredProducts.value.length / itemsPerPage)
})

// 可见页码
const visiblePages = computed(() => {
  const pages = []
  const total = totalPages.value
  const current = currentPage.value

  if (total <= 7) {
    for (let i = 1; i <= total; i++) {
      pages.push(i)
    }
  } else {
    if (current <= 4) {
      for (let i = 1; i <= 5; i++) pages.push(i)
      pages.push('...')
      pages.push(total)
    } else if (current >= total - 3) {
      pages.push(1)
      pages.push('...')
      for (let i = total - 4; i <= total; i++) pages.push(i)
    } else {
      pages.push(1)
      pages.push('...')
      for (let i = current - 1; i <= current + 1; i++) pages.push(i)
      pages.push('...')
      pages.push(total)
    }
  }

  return pages.filter(p => p !== '...')
})

// 打开产品详情
const openProductModal = (product) => {
  selectedProduct.value = product
  document.body.style.overflow = 'hidden'
}

// 关闭产品详情
const closeProductModal = () => {
  selectedProduct.value = null
  document.body.style.overflow = 'auto'
}

// 添加到购物车
const addToCart = (product) => {
  showCartToast.value = true
  setTimeout(() => {
    showCartToast.value = false
  }, 2000)
}

// 清空筛选
const clearFilters = () => {
  activeCategory.value = 'all'
  searchQuery.value = ''
  sortBy.value = 'default'
}

// 图片加载错误处理
const handleImageError = (event) => {
  event.target.src = 'https://via.placeholder.com/600x400/f97316/ffffff?text=东池便当'
}

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  })
})
</script>

<style scoped>
.animation-delay-2000 {
  animation-delay: 2s;
}

/* 隐藏滚动条但保留滚动功能 */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* 文本截断 */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Swiper自定义样式 */
.hot-products-swiper :deep(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  background: #f97316;
  opacity: 0.5;
}

.hot-products-swiper :deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  background: linear-gradient(to right, #f97316, #eab308);
}

.hot-products-swiper :deep(.swiper-button-next),
.hot-products-swiper :deep(.swiper-button-prev) {
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.hot-products-swiper :deep(.swiper-button-next):after,
.hot-products-swiper :deep(.swiper-button-prev):after {
  font-size: 20px;
  color: #f97316;
  font-weight: bold;
}

/* Modal动画 */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .bg-white,
.modal-leave-active .bg-white {
  transition: transform 0.3s ease;
}

.modal-enter-from .bg-white,
.modal-leave-to .bg-white {
  transform: scale(0.9);
}

/* Toast动画 */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
