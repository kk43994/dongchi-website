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
          <div class="flex gap-3 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
            <button
              v-for="category in categories"
              :key="category.id"
              @click="setActiveCategory(category.id)"
              :class="[
                'group relative px-5 py-3.5 rounded-2xl font-semibold whitespace-nowrap transition-all duration-500 flex items-center gap-3 border-2 transform hover:scale-105 hover:-translate-y-0.5',
                activeCategory === category.id
                  ? 'bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-500 text-white border-orange-400 shadow-xl shadow-orange-500/30 scale-105'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-orange-300 hover:shadow-lg hover:bg-orange-50/50'
              ]"
            >
              <!-- 图标容器 -->
              <div :class="[
                'relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110',
                activeCategory === category.id
                  ? 'bg-white/20 backdrop-blur-sm'
                  : 'bg-gradient-to-br from-orange-100 to-yellow-100'
              ]">
                <!-- 全部分类图标 - 便当盒 -->
                <svg v-if="category.id === 'all'" :class="[
                  'w-6 h-6 transition-colors duration-300',
                  activeCategory === category.id ? 'text-white' : 'text-orange-600'
                ]" fill="currentColor" viewBox="0 0 64 64">
                  <path d="M54 14h-4V8c0-2.2-1.8-4-4-4H18c-2.2 0-4 1.8-4 4v6h-4c-2.2 0-4 1.8-4 4v38c0 2.2 1.8 4 4 4h44c2.2 0 4-1.8 4-4V18c0-2.2-1.8-4-4-4zM18 8h28v6H18V8zm36 48H10V18h4v4h36v-4h4v38z"/>
                  <rect x="20" y="28" width="10" height="8" rx="2"/>
                  <rect x="34" y="28" width="10" height="8" rx="2"/>
                  <rect x="20" y="40" width="10" height="8" rx="2"/>
                  <rect x="34" y="40" width="10" height="8" rx="2"/>
                </svg>

                <!-- 猪、牛肉类图标 - 肉块 -->
                <svg v-else-if="category.id === 'meat'" :class="[
                  'w-6 h-6 transition-colors duration-300',
                  activeCategory === category.id ? 'text-white' : 'text-orange-600'
                ]" fill="currentColor" viewBox="0 0 64 64">
                  <path d="M48 12c-3.3 0-6 2.7-6 6 0 1.1.3 2.1.8 3-1.2-.5-2.5-.8-3.8-.8-5.5 0-10 4.5-10 10 0 .8.1 1.6.3 2.3-1.4-.8-3-1.3-4.8-1.3-5.2 0-9.5 4.3-9.5 9.5s4.3 9.5 9.5 9.5c3.8 0 7.1-2.2 8.6-5.4 1.3 2.3 3.7 3.9 6.5 3.9 3.3 0 6.1-2.1 7.1-5.1 1.5 1.3 3.5 2.1 5.6 2.1 4.4 0 8-3.6 8-8 0-2.6-1.2-4.9-3.1-6.4.7-1.2 1.1-2.5 1.1-3.9 0-4.4-3.6-8-8-8-1.5 0-2.9.4-4.1 1.1.1-.7.2-1.4.2-2.1 0-3.3-2.7-6-6-6zm0 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-9 8c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6zm-14.5 11c3 0 5.5 2.5 5.5 5.5s-2.5 5.5-5.5 5.5-5.5-2.5-5.5-5.5 2.5-5.5 5.5-5.5zm23 0c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z"/>
                </svg>

                <!-- 鸡肉类图标 - 鸡腿 -->
                <svg v-else-if="category.id === 'chicken'" :class="[
                  'w-6 h-6 transition-colors duration-300',
                  activeCategory === category.id ? 'text-white' : 'text-orange-600'
                ]" fill="currentColor" viewBox="0 0 64 64">
                  <path d="M42 8c-3.9 0-7.3 2.3-8.9 5.6C31.5 11.5 28.8 10 25.7 10c-5.4 0-9.7 4.3-9.7 9.7 0 1.3.3 2.5.7 3.6-2.7 1.3-4.7 4-4.7 7.2 0 4.4 3.6 8 8 8 1.8 0 3.5-.6 4.9-1.6.8 5.5 5.5 9.7 11.1 9.7 3.8 0 7.2-1.9 9.2-4.8 1.4.8 3 1.3 4.8 1.3 5.2 0 9.5-4.3 9.5-9.5 0-3.9-2.4-7.3-5.8-8.7.3-1 .5-2.1.5-3.2C54.2 14.8 48.9 8 42 8zm0 4c4.6 0 8.2 4.3 8.2 9.7 0 1.5-.3 2.9-.9 4.2l-.8 1.7 1.6.9c2.5 1.4 4.1 4 4.1 6.9 0 3-2.5 5.5-5.5 5.5-1.4 0-2.7-.5-3.7-1.4l-1.6-1.4-1.1 1.8c-1.5 2.5-4.2 4.1-7.2 4.1-4.5 0-8.2-3.5-8.5-7.9l-.1-2-1.9.8c-1 .4-2 .6-3.1.6-2.2 0-4-1.8-4-4 0-1.7 1.1-3.2 2.7-3.8l2.1-.8-.9-2c-.5-1.2-.8-2.4-.8-3.7 0-3.2 2.6-5.7 5.7-5.7 2.2 0 4.2 1.3 5.2 3.3l1 2.2 1.5-1.9C34.8 14.5 38.2 12 42 12z"/>
                  <ellipse cx="28" cy="25" rx="2.5" ry="3"/>
                  <ellipse cx="38" cy="28" rx="2" ry="2.5"/>
                </svg>

                <!-- 海鲜类图标 - 鱼 -->
                <svg v-else-if="category.id === 'fish'" :class="[
                  'w-6 h-6 transition-colors duration-300',
                  activeCategory === category.id ? 'text-white' : 'text-orange-600'
                ]" fill="currentColor" viewBox="0 0 64 64">
                  <path d="M52 28c-2.8-3.7-7.5-6.5-13-7.5 1.5-2.8 2.5-6.2 2.5-10 0-1.1-.9-2-2-2s-2 .9-2 2c0 3.5-.9 6.5-2.2 8.8-2.6-.4-5.4-.6-8.3-.6s-5.7.2-8.3.6C17.4 17 16.5 14 16.5 10.5c0-1.1-.9-2-2-2s-2 .9-2 2c0 3.8 1 7.2 2.5 10-5.5 1-10.2 3.8-13 7.5-1.2 1.6-.6 3.8 1.2 4.7 1.8.9 4 .3 5.2-1.3 1.5-2 4-3.5 6.9-4.3-.3 1.8-.5 3.7-.5 5.7 0 11 7.2 20 16 20s16-9 16-20c0-2-.2-3.9-.5-5.7 2.9.8 5.4 2.3 6.9 4.3 1.2 1.6 3.4 2.2 5.2 1.3 1.8-.9 2.4-3.1 1.2-4.7zM27 48c-6.6 0-12-7.2-12-16s5.4-16 12-16 12 7.2 12 16-5.4 16-12 16z"/>
                  <circle cx="33" cy="26" r="2.5"/>
                  <path d="M20 30c.6.6 1.5 1 2.5 1s1.9-.4 2.5-1M30 38c.6.6 1.5 1 2.5 1s1.9-.4 2.5-1" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>
                </svg>

                <!-- 活跃状态光晕 -->
                <div v-if="activeCategory === category.id" class="absolute inset-0 rounded-xl bg-white/20 animate-pulse"></div>
              </div>

              <!-- 分类名称 -->
              <div class="flex flex-col items-start">
                <span class="text-sm leading-tight">{{ category.name }}</span>
                <span :class="[
                  'text-xs transition-colors duration-300 mt-0.5',
                  activeCategory === category.id ? 'text-white/80' : 'text-gray-500'
                ]">{{ category.count }} 款</span>
              </div>

              <!-- 激活指示器 -->
              <div v-if="activeCategory === category.id" class="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow-lg animate-ping"></div>
              <div v-if="activeCategory === category.id" class="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow-lg"></div>
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
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
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
const route = useRoute()
const router = useRouter()

// 分类（基于真实东池便当产品）
const categories = ref([
  { id: 'all', name: '全部', icon: '🍱', count: 18 },
  { id: 'meat', name: '猪、牛肉类', icon: '🥩', count: 8 },
  { id: 'chicken', name: '鸡肉类', icon: '🍗', count: 5 },
  { id: 'fish', name: '海鲜类', icon: '🐟', count: 5 }
])

const activeCategory = ref('all')
const searchQuery = ref('')
const sortBy = ref('default')
const currentPage = ref(1)
const itemsPerPage = 12
const selectedProduct = ref(null)
const showCartToast = ref(false)
const validCategoryIds = new Set(['all', 'meat', 'chicken', 'fish'])

// 全部产品数据（真实东池便当产品）
const allProducts = ref([
  // 猪、牛肉类 (8个产品)
  { id: 1, name: '招牌饭', category: 'meat', description: '东池招牌必点，精选食材，配以秘制酱汁，米饭粒粒分明，营养均衡', price: 28, originalPrice: 35, rating: 5, reviews: 2834, sales: 50000, image: '/images/products/signature-rice.png', tags: ['招牌推荐', '人气爆款', '营养均衡'], isHot: true, isNew: false, discount: null, ingredients: '优质肉类、米饭、时蔬、卤蛋、秘制酱汁' },
  { id: 2, name: '香肠饭', category: 'meat', description: '香肠香味浓郁，搭配新鲜时蔬，配菜丰富营养，简单美味', price: 26, originalPrice: 32, rating: 5, reviews: 1923, sales: 38000, image: '/images/products/sausage-rice.png', tags: ['经典美味', '香肠诱人', '营养搭配'], isHot: true, isNew: false, discount: null, ingredients: '香肠、米饭、时蔬、卤蛋' },
  { id: 3, name: '台湾肉燥饭', category: 'meat', description: '正宗台湾风味，肉燥浓香四溢，米饭Q弹可口，经典台式美味', price: 28, originalPrice: null, rating: 5, reviews: 1567, sales: 32000, image: '/images/products/taiwan-braised-pork-rice.png', tags: ['台湾风味', '经典美食', '浓香肉燥'], isHot: true, isNew: false, discount: null, ingredients: '肉燥、米饭、时蔬、卤蛋' },
  { id: 4, name: '排骨饭', category: 'meat', description: '排骨肉质鲜嫩，搭配秘制酱汁，香气扑鼻，营养丰富', price: 32, originalPrice: null, rating: 5, reviews: 1234, sales: 28000, image: '/images/products/pork-chop-rice.png', tags: ['排骨鲜嫩', '酱汁浓郁', '营养美味'], isHot: true, isNew: false, discount: null, ingredients: '排骨、米饭、时蔬、秘制酱汁' },
  { id: 5, name: '梅干菜扣肉饭', category: 'meat', description: '传统客家风味，五花肉肥而不腻，梅干菜香浓开胃，经典名菜', price: 34, originalPrice: null, rating: 5, reviews: 987, sales: 25000, image: '/images/products/preserved-vegetable-pork-rice.png', tags: ['客家特色', '经典名菜', '肥而不腻'], isHot: true, isNew: false, discount: null, ingredients: '五花肉、梅干菜、米饭' },
  { id: 6, name: '卤肉饭', category: 'meat', description: '卤肉香浓入味，米饭粒粒分明，台湾经典美食，回味无穷', price: 28, originalPrice: 35, rating: 5, reviews: 856, sales: 22000, image: '/images/products/braised-pork-rice.png', tags: ['台湾经典', '卤肉香浓', '下饭神器'], isHot: true, isNew: false, discount: 8.5, ingredients: '卤肉、米饭、时蔬、卤蛋' },
  { id: 7, name: '红烧排骨饭', category: 'meat', description: '排骨软烂入味，红烧汁浓郁香甜，营养丰富，家常美味', price: 36, originalPrice: null, rating: 5, reviews: 734, sales: 20000, image: '/images/products/red-braised-pork-rib-rice.png', tags: ['红烧美味', '肉质软烂', '营养丰富'], isHot: true, isNew: false, discount: null, ingredients: '排骨、红烧汁、时蔬、米饭' },
  { id: 8, name: '红烧牛腩饭', category: 'meat', description: '牛腩软烂入味，汤汁浓郁醇香，营养滋补，经典家常菜', price: 38, originalPrice: null, rating: 5, reviews: 623, sales: 18000, image: '/images/products/red-braised-beef-brisket-rice.png', tags: ['牛腩软烂', '汤汁浓郁', '滋补养生'], isHot: true, isNew: false, discount: null, ingredients: '牛腩、红烧汁、土豆、胡萝卜、米饭' },

  // 鸡肉类 (5个产品)
  { id: 9, name: '香酥鸡翅饭', category: 'chicken', description: '鸡翅炸至金黄酥脆，外皮香脆内肉鲜嫩，美味可口', price: 30, originalPrice: null, rating: 5, reviews: 589, sales: 17000, image: '/images/products/crispy-chicken-wings-rice.png', tags: ['香酥可口', '外脆内嫩', '高蛋白'], isHot: true, isNew: false, discount: null, ingredients: '鸡翅、米饭、时蔬' },
  { id: 10, name: '酥脆鸡排饭', category: 'chicken', description: '大块鸡排炸至金黄，外酥里嫩，搭配秘制酱汁，美味升级', price: 32, originalPrice: null, rating: 5, reviews: 478, sales: 15000, image: '/images/products/crispy-chicken-cutlet-rice.png', tags: ['大块鸡排', '酥脆美味', '秘制酱汁'], isHot: true, isNew: false, discount: null, ingredients: '鸡排、米饭、时蔬、酱汁' },
  { id: 11, name: '麻椒鸡腿饭', category: 'chicken', description: '麻椒香味浓郁，鸡腿肉嫩多汁，麻辣鲜香，川味特色', price: 34, originalPrice: null, rating: 5, reviews: 423, sales: 12000, image: '/images/products/mala-chicken-leg-rice.png', tags: ['麻辣鲜香', '鸡腿嫩滑', '川味特色'], isHot: false, isNew: true, discount: null, ingredients: '鸡腿、麻椒、米饭、时蔬' },
  { id: 12, name: '麻椒鸡翅饭', category: 'chicken', description: '鸡翅配麻椒调味，香辣过瘾，外脆内嫩，风味独特', price: 31, originalPrice: null, rating: 5, reviews: 398, sales: 11000, image: '/images/products/mala-chicken-wings-rice.png', tags: ['麻辣风味', '香辣过瘾', '外脆内嫩'], isHot: false, isNew: false, discount: null, ingredients: '鸡翅、麻椒、米饭、时蔬' },
  { id: 13, name: '脆皮鸡腿饭', category: 'chicken', description: '鸡腿皮脆肉嫩，香气四溢，肉质鲜美，营养丰富', price: 33, originalPrice: null, rating: 5, reviews: 367, sales: 10000, image: '/images/products/crispy-chicken-leg-rice.png', tags: ['皮脆肉嫩', '香气四溢', '营养美味'], isHot: false, isNew: false, discount: null, ingredients: '鸡腿、米饭、时蔬' },

  // 海鲜类 (5个产品)
  { id: 14, name: '鳕鱼排饭', category: 'fish', description: '深海鳕鱼，鱼肉鲜嫩细腻，营养丰富，低脂健康', price: 36, originalPrice: null, rating: 5, reviews: 334, sales: 9500, image: '/images/products/cod-fillet-rice.png', tags: ['深海鱼', '鲜嫩细腻', '低脂健康'], isHot: false, isNew: true, discount: null, ingredients: '鳕鱼排、米饭、时蔬、柠檬汁' },
  { id: 15, name: '小黄鱼饭', category: 'fish', description: '小黄鱼酥炸至金黄，鱼肉鲜美，香酥可口，营养美味', price: 34, originalPrice: null, rating: 5, reviews: 298, sales: 8800, image: '/images/products/yellow-croaker-rice.png', tags: ['鱼肉鲜美', '香酥可口', '营养丰富'], isHot: false, isNew: false, discount: null, ingredients: '小黄鱼、米饭、时蔬' },
  { id: 16, name: '鲭鱼饭', category: 'fish', description: '鲭鱼肉质鲜嫩，富含Omega-3，健康养生，清淡美味', price: 32, originalPrice: null, rating: 4, reviews: 276, sales: 7600, image: '/images/products/mackerel-rice.png', tags: ['营养健康', 'Omega-3', '清淡美味'], isHot: false, isNew: false, discount: null, ingredients: '鲭鱼、米饭、时蔬' },
  { id: 17, name: '蒲烧鳗鱼饭', category: 'fish', description: '日式蒲烧工艺，鳗鱼香甜软糯，酱汁浓郁，日本风味', price: 42, originalPrice: 50, rating: 5, reviews: 254, sales: 7200, image: '/images/products/grilled-eel-rice.png', tags: ['日式风味', '香甜软糯', '酱汁浓郁'], isHot: false, isNew: true, discount: 8.4, ingredients: '鳗鱼、蒲烧汁、米饭、海苔' },
  { id: 18, name: '带鱼饭', category: 'fish', description: '带鱼香煎至金黄，鱼肉鲜嫩，香味浓郁，营养丰富', price: 30, originalPrice: null, rating: 4, reviews: 232, sales: 6800, image: '/images/products/beltfish-rice.png', tags: ['香煎美味', '鱼肉鲜嫩', '营养丰富'], isHot: false, isNew: false, discount: null, ingredients: '带鱼、米饭、时蔬' }
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

const normalizeCategory = (category) => {
  if (typeof category !== 'string') {
    return 'all'
  }

  return validCategoryIds.has(category) ? category : 'all'
}

const syncCategoryFromRoute = () => {
  const rawCategory = Array.isArray(route.query.category) ? route.query.category[0] : route.query.category
  const nextCategory = normalizeCategory(rawCategory)

  activeCategory.value = nextCategory

  if (rawCategory && nextCategory === 'all' && rawCategory !== 'all') {
    router.replace({
      path: route.path,
      query: {
        ...route.query,
        category: undefined
      },
      hash: route.hash
    })
  }
}

const setActiveCategory = (categoryId) => {
  const nextCategory = normalizeCategory(categoryId)
  currentPage.value = 1
  activeCategory.value = nextCategory

  router.push({
    path: route.path,
    query: {
      ...route.query,
      category: nextCategory === 'all' ? undefined : nextCategory
    },
    hash: route.hash
  })
}

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
  setActiveCategory('all')
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

watch(() => route.query.category, () => {
  syncCategoryFromRoute()
  currentPage.value = 1
}, { immediate: true })

watch([searchQuery, sortBy], () => {
  currentPage.value = 1
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
