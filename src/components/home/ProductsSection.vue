<template>
  <section class="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
    <!-- 动态背景装饰 -->
    <div class="absolute inset-0 z-0 opacity-50">
      <div class="particle-bg"></div>
    </div>

    <!-- 内容区 -->
    <div class="relative z-10 container mx-auto px-6">
      <!-- 标题区 -->
      <div class="text-center mb-20" data-aos="fade-up">
        <div class="inline-block mb-4">
          <span class="text-orange-500 text-sm font-bold tracking-widest uppercase">Our Products</span>
        </div>
        <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          <span class="bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
            匠心产品
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          精选台湾风味，现点现做，每一份便当都是用心之作
        </p>
        <div class="w-32 h-1.5 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <!-- 产品轮播 -->
      <div class="products-carousel-shell mx-auto max-w-6xl" data-aos="fade-up" data-aos-delay="200">
        <div class="carousel-edge carousel-edge-left hidden lg:block"></div>
        <div class="carousel-edge carousel-edge-right hidden lg:block"></div>
        <swiper
          :modules="modules"
          :centeredSlides="true"
          :grabCursor="true"
          :slidesPerView="'auto'"
          :spaceBetween="18"
          :speed="550"
          :autoplay="{
            delay: 3800,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }"
          :loop="true"
          :pagination="{
            clickable: true,
          }"
          :navigation="true"
          :breakpoints="{
            768: {
              spaceBetween: 24,
            },
            1024: {
              spaceBetween: 28,
            },
          }"
          class="products-swiper"
        >
          <swiper-slide v-for="(product, index) in products" :key="product.name">
            <article class="product-card group">
              <div class="product-card-layout">
                <div class="product-media">
                  <div class="product-badge-wrap">
                    <span
                      v-if="product.isNew"
                      class="product-badge product-badge-new"
                    >
                      新品推荐
                    </span>
                    <span
                      v-if="product.isHot"
                      class="product-badge product-badge-hot"
                    >
                      热门单品
                    </span>
                  </div>
                  <img
                    class="product-image h-full w-full"
                    :src="product.image"
                    :alt="product.name"
                    :loading="index === 0 ? 'eager' : 'lazy'"
                    decoding="async"
                  />
                  <div class="product-media-glow"></div>
                </div>

                <div class="product-body">
                  <div class="product-body-top">
                    <div class="product-kicker-wrap">
                      <span class="product-kicker">Dongchi Selection</span>
                      <span class="product-index">TOP {{ String(index + 1).padStart(2, '0') }}</span>
                    </div>

                    <div class="product-title-row">
                      <h3 class="product-title">
                        {{ product.name }}
                      </h3>
                      <div class="product-stars" :aria-label="`${product.rating} 星好评`">
                        <svg
                          v-for="star in 5"
                          :key="star"
                          class="h-4 w-4"
                          :class="star <= product.rating ? 'text-yellow-400' : 'text-orange-100'"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <p class="product-description">
                    {{ product.description }}
                  </p>

                  <div class="product-tags">
                    <span
                      v-for="tag in product.tags.slice(0, 2)"
                      :key="tag"
                      class="product-tag"
                    >
                      {{ tag }}
                    </span>
                  </div>

                  <div class="product-divider"></div>

                  <div class="product-footer">
                    <div class="product-price-wrap">
                      <span class="product-price">¥{{ product.price }}</span>
                      <span class="product-original-price" v-if="product.originalPrice">
                        ¥{{ product.originalPrice }}
                      </span>
                    </div>

                    <RouterLink
                      to="/products"
                      class="product-action"
                    >
                      进入产品中心
                    </RouterLink>
                  </div>
                </div>
              </div>
            </article>
          </swiper-slide>
        </swiper>
      </div>

      <!-- 查看更多按钮 -->
      <div class="text-center mt-16" data-aos="fade-up" data-aos-delay="400">
        <RouterLink to="/products" class="group relative inline-flex overflow-hidden rounded-full border-2 border-orange-500 bg-white px-12 py-5 text-xl font-bold text-orange-600 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <span class="relative z-10 flex items-center gap-3">
            查看全部产品
            <svg class="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </span>
          <div class="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </RouterLink>
      </div>

      <!-- 销售数据统计 -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mt-24" data-aos="fade-up" data-aos-delay="600">
        <div class="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
            {{ stats.dailySales }}+
          </div>
          <div class="text-gray-600 font-medium">日销售量</div>
        </div>
        <div class="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
            {{ stats.products }}+
          </div>
          <div class="text-gray-600 font-medium">产品种类</div>
        </div>
        <div class="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
            {{ stats.satisfaction }}%
          </div>
          <div class="text-gray-600 font-medium">客户满意度</div>
        </div>
        <div class="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
            {{ stats.repeatRate }}%
          </div>
          <div class="text-gray-600 font-medium">复购率</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// Swiper样式
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const modules = [Autoplay, Pagination, Navigation]

// 产品数据（基于真实东池便当热销TOP5）
const products = ref([
  {
    name: '招牌饭',
    description: '东池招牌必点，精选食材，配以秘制酱汁，米饭粒粒分明，营养均衡',
    price: 28,
    originalPrice: 35,
    rating: 5,
    image: '/images/products/signature-rice.png',
    tags: ['招牌推荐', '人气爆款', '营养均衡'],
    isHot: true,
    isNew: false
  },
  {
    name: '香肠饭',
    description: '香肠香味浓郁，搭配新鲜时蔬，配菜丰富营养，简单美味',
    price: 26,
    originalPrice: 32,
    rating: 5,
    image: '/images/products/sausage-rice.png',
    tags: ['经典美味', '香肠诱人', '营养搭配'],
    isHot: true,
    isNew: false
  },
  {
    name: '台湾肉燥饭',
    description: '正宗台湾风味，肉燥浓香四溢，米饭Q弹可口，经典台式美味',
    price: 28,
    rating: 5,
    image: '/images/products/taiwan-braised-pork-rice.png',
    tags: ['台湾风味', '经典美食', '浓香肉燥'],
    isHot: true,
    isNew: false
  },
  {
    name: '排骨饭',
    description: '排骨肉质鲜嫩，搭配秘制酱汁，香气扑鼻，营养丰富',
    price: 32,
    rating: 5,
    image: '/images/products/pork-chop-rice.png',
    tags: ['排骨鲜嫩', '酱汁浓郁', '营养美味'],
    isHot: false,
    isNew: false
  },
  {
    name: '梅干菜扣肉饭',
    description: '传统客家风味，五花肉肥而不腻，梅干菜香浓开胃，经典名菜',
    price: 34,
    rating: 5,
    image: '/images/products/preserved-vegetable-pork-rice.png',
    tags: ['客家特色', '经典名菜', '肥而不腻'],
    isHot: false,
    isNew: true
  }
])

// 统计数据
const stats = ref({
  dailySales: '50000',
  products: '100',
  satisfaction: '98',
  repeatRate: '85'
})
</script>

<style scoped>
.particle-bg {
  width: 100%;
  height: 100%;
  background-image:
    radial-gradient(circle at 20% 30%, rgba(249, 115, 22, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(234, 179, 8, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(251, 146, 60, 0.1) 0%, transparent 50%);
}

.products-carousel-shell {
  position: relative;
  padding-inline: 1rem;
}

.carousel-edge {
  position: absolute;
  top: 1.5rem;
  bottom: 5.5rem;
  z-index: 4;
  width: 6rem;
  pointer-events: none;
}

.carousel-edge-left {
  left: 0;
  background: linear-gradient(to right, rgba(249, 250, 251, 0.92), rgba(249, 250, 251, 0));
}

.carousel-edge-right {
  right: 0;
  background: linear-gradient(to left, rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0));
}

.products-swiper {
  width: 100%;
  padding: 20px 0 88px;
  overflow: visible;
}

.products-swiper :deep(.swiper-wrapper) {
  align-items: stretch;
}

.products-swiper :deep(.swiper-slide) {
  width: min(84vw, 360px);
  height: auto;
  opacity: 0.28;
  transform: scale(0.88);
  filter: saturate(0.72);
  transition: transform 0.35s ease, opacity 0.35s ease, filter 0.35s ease;
}

@media (min-width: 768px) {
  .products-carousel-shell {
    padding-inline: 2.5rem;
  }

  .products-swiper :deep(.swiper-slide) {
    width: min(76vw, 720px);
  }
}

@media (min-width: 1024px) {
  .products-carousel-shell {
    padding-inline: 4.5rem;
  }

  .products-swiper :deep(.swiper-slide) {
    width: min(70vw, 820px);
  }
}

.products-swiper :deep(.swiper-slide-active) {
  z-index: 10;
  opacity: 1;
  transform: scale(1);
  filter: none;
}

.products-swiper :deep(.swiper-slide-prev),
.products-swiper :deep(.swiper-slide-next) {
  opacity: 0.72;
  transform: scale(0.93);
  filter: saturate(0.9);
}

.product-card {
  height: 100%;
  overflow: hidden;
  border: 1px solid rgba(251, 191, 36, 0.2);
  border-radius: 2rem;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(255, 247, 237, 0.94)),
    linear-gradient(180deg, rgba(249, 115, 22, 0.03), rgba(255, 255, 255, 0));
  box-shadow: 0 24px 48px rgba(15, 23, 42, 0.1);
  transform: translateZ(0);
  will-change: transform;
  backface-visibility: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.product-card:hover {
  transform: translateY(-6px);
  border-color: rgba(249, 115, 22, 0.32);
  box-shadow: 0 28px 60px rgba(249, 115, 22, 0.14);
}

.product-card-layout {
  display: grid;
  min-height: 100%;
}

.product-media {
  position: relative;
  min-height: 280px;
  overflow: hidden;
  background: linear-gradient(180deg, #fff7ed 0%, #fef3c7 100%);
}

.product-badge-wrap {
  position: absolute;
  top: 1rem;
  left: 1rem;
  right: 1rem;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.product-badge {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 0.55rem 0.95rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  backdrop-filter: blur(10px);
}

.product-badge-hot {
  margin-left: auto;
  background: rgba(249, 115, 22, 0.92);
  color: white;
}

.product-badge-new {
  background: rgba(15, 23, 42, 0.72);
  color: white;
}

.product-media-glow {
  position: absolute;
  inset: auto 0 0 0;
  height: 45%;
  background: linear-gradient(to top, rgba(255, 247, 237, 0.22), rgba(255, 247, 237, 0));
  pointer-events: none;
}

.product-image {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  transform: translateZ(0);
  will-change: transform;
  transition: transform 0.45s ease;
}

.group:hover .product-image {
  transform: scale(1.03);
}

.product-body {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  padding: 1.5rem;
}

.product-body-top {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.product-kicker-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.product-kicker {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #f97316;
}

.product-index {
  font-size: 0.82rem;
  font-weight: 700;
  color: #94a3b8;
}

.product-title-row {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.product-title {
  font-size: clamp(2rem, 2.4vw, 2.8rem);
  line-height: 1.05;
  font-weight: 800;
  color: #111827;
  letter-spacing: -0.03em;
}

.product-stars {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  width: fit-content;
  border-radius: 999px;
  background: rgba(255, 247, 237, 0.9);
  padding: 0.45rem 0.7rem;
}

.product-description {
  margin: 0;
  color: #6b7280;
  font-size: 1rem;
  line-height: 1.75;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.product-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.product-tag {
  border-radius: 999px;
  border: 1px solid rgba(249, 115, 22, 0.16);
  background: rgba(255, 247, 237, 0.9);
  padding: 0.58rem 0.9rem;
  font-size: 0.88rem;
  font-weight: 600;
  color: #ea580c;
}

.product-divider {
  height: 1px;
  background: linear-gradient(to right, rgba(251, 191, 36, 0.26), rgba(229, 231, 235, 0.9));
}

.product-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: auto;
}

.product-price-wrap {
  display: flex;
  align-items: baseline;
  gap: 0.65rem;
}

.product-price {
  font-size: clamp(2rem, 2.1vw, 2.6rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  background: linear-gradient(to right, #f97316, #f59e0b);
  background-clip: text;
  color: transparent;
}

.product-original-price {
  font-size: 1rem;
  color: #9ca3af;
  text-decoration: line-through;
}

.product-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: linear-gradient(135deg, #f97316, #f59e0b);
  padding: 0.95rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 700;
  color: white;
  box-shadow: 0 10px 24px rgba(249, 115, 22, 0.24);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.product-action:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(249, 115, 22, 0.28);
}

@media (hover: none) {
  .product-card:hover {
    transform: none;
    border-color: rgba(251, 191, 36, 0.2);
    box-shadow: 0 24px 48px rgba(15, 23, 42, 0.1);
  }

  .group:hover .product-image {
    transform: none;
  }

  .product-action:hover {
    transform: none;
    box-shadow: 0 10px 24px rgba(249, 115, 22, 0.24);
  }
}

.products-swiper :deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background: #f97316;
  opacity: 0.32;
  transition: all 0.3s ease;
}

.products-swiper :deep(.swiper-pagination-bullet-active) {
  width: 28px;
  border-radius: 999px;
  opacity: 1;
  background: linear-gradient(to right, #f97316, #eab308);
}

.products-swiper :deep(.swiper-button-next),
.products-swiper :deep(.swiper-button-prev) {
  width: 56px;
  height: 56px;
  top: 50%;
  margin-top: -28px;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(249, 115, 22, 0.14);
  border-radius: 50%;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.14);
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.products-swiper :deep(.swiper-button-prev) {
  left: 0;
}

.products-swiper :deep(.swiper-button-next) {
  right: 0;
}

.products-swiper :deep(.swiper-button-next):hover,
.products-swiper :deep(.swiper-button-prev):hover {
  background: linear-gradient(to right, #f97316, #eab308);
  transform: scale(1.05);
}

.products-swiper :deep(.swiper-button-next)::after,
.products-swiper :deep(.swiper-button-prev)::after {
  font-size: 20px;
  font-weight: 800;
  color: #f97316;
}

.products-swiper :deep(.swiper-button-next):hover::after,
.products-swiper :deep(.swiper-button-prev):hover::after {
  color: white;
}

@media (min-width: 1024px) {
  .product-card-layout {
    grid-template-columns: minmax(0, 50%) minmax(0, 50%);
    min-height: 430px;
  }

  .product-media {
    min-height: 430px;
  }

  .product-body {
    padding: 2rem 2rem 1.8rem;
  }
}

@media (max-width: 767px) {
  .products-carousel-shell {
    padding-inline: 0.25rem;
  }

  .product-body {
    gap: 0.9rem;
    padding: 1.25rem;
  }

  .product-title {
    font-size: 1.85rem;
  }

  .product-footer {
    flex-direction: column;
    align-items: stretch;
  }

  .product-action {
    width: 100%;
  }

  .products-swiper :deep(.swiper-button-next),
  .products-swiper :deep(.swiper-button-prev) {
    display: none;
  }
}
</style>
