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

      <!-- 3D Swiper轮播 -->
      <div class="max-w-7xl mx-auto" data-aos="fade-up" data-aos-delay="200">
        <swiper
          :modules="modules"
          :effect="'coverflow'"
          :grabCursor="true"
          :centeredSlides="true"
          :slidesPerView="'auto'"
          :coverflowEffect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :loop="true"
          :pagination="{
            clickable: true,
            dynamicBullets: true,
          }"
          :navigation="true"
          class="products-swiper"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="(product, index) in products" :key="index">
            <div
              class="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 group"
              @mouseenter="handleMouseEnter(index)"
              @mouseleave="handleMouseLeave(index)"
            >
              <!-- 产品图片 -->
              <div class="relative h-96 overflow-hidden">
                <!-- 渐变遮罩 -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 group-hover:from-black/40 transition-all duration-500"></div>

                <!-- 图片 -->
                <div
                  class="w-full h-full bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                  :style="{ backgroundImage: `url(${product.image})` }"
                ></div>

                <!-- 热销标签 -->
                <div
                  v-if="product.isHot"
                  class="absolute top-6 right-6 z-20 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse"
                >
                  🔥 热销
                </div>

                <!-- 新品标签 -->
                <div
                  v-if="product.isNew"
                  class="absolute top-6 left-6 z-20 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg"
                >
                  ✨ 新品
                </div>
              </div>

              <!-- 产品信息 -->
              <div class="p-8">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-3xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                    {{ product.name }}
                  </h3>
                  <div class="flex items-center gap-1">
                    <svg
                      v-for="star in 5"
                      :key="star"
                      class="w-5 h-5"
                      :class="star <= product.rating ? 'text-yellow-400' : 'text-gray-300'"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                </div>

                <p class="text-gray-600 text-lg leading-relaxed mb-6">
                  {{ product.description }}
                </p>

                <!-- 特点标签 -->
                <div class="flex flex-wrap gap-2 mb-6">
                  <span
                    v-for="tag in product.tags"
                    :key="tag"
                    class="px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-medium border border-orange-200 hover:bg-orange-100 transition-colors duration-300"
                  >
                    {{ tag }}
                  </span>
                </div>

                <!-- 价格和按钮 -->
                <div class="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div class="flex items-baseline gap-2">
                    <span class="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                      ¥{{ product.price }}
                    </span>
                    <span class="text-lg text-gray-400 line-through" v-if="product.originalPrice">
                      ¥{{ product.originalPrice }}
                    </span>
                  </div>
                  <button class="group/btn relative px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                    <span class="relative z-10">立即购买</span>
                    <div class="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>

              <!-- 悬浮发光效果 -->
              <div class="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style="box-shadow: 0 0 60px rgba(249, 115, 22, 0.4);"></div>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <!-- 查看更多按钮 -->
      <div class="text-center mt-16" data-aos="fade-up" data-aos-delay="400">
        <button class="group relative px-12 py-5 bg-white text-orange-600 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-orange-500 overflow-hidden">
          <span class="relative z-10 flex items-center gap-3">
            查看全部产品
            <svg class="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </span>
          <div class="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </button>
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
import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules'

// Swiper样式
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const modules = [EffectCoverflow, Autoplay, Pagination, Navigation]

// 产品数据
const products = ref([
  {
    name: '经典卤肉便当',
    description: '台湾秘制卤肉，配以精选时蔬，米饭粒粒分明，浓香四溢',
    price: 28,
    originalPrice: 35,
    rating: 5,
    image: 'https://placehold.co/800x600/f97316/ffffff?text=卤肉便当',
    tags: ['招牌推荐', '台湾风味', '营养均衡'],
    isHot: true,
    isNew: false
  },
  {
    name: '黑椒牛柳便当',
    description: '精选澳洲牛柳，搭配黑椒酱汁，肉质鲜嫩多汁',
    price: 35,
    originalPrice: 42,
    rating: 5,
    image: 'https://placehold.co/800x600/ea580c/ffffff?text=牛柳便当',
    tags: ['人气爆款', '高蛋白', '商务优选'],
    isHot: true,
    isNew: false
  },
  {
    name: '照烧鸡腿便当',
    description: '日式照烧工艺，鸡腿肉嫩滑入味，酱汁香甜可口',
    price: 32,
    rating: 5,
    image: 'https://placehold.co/800x600/eab308/ffffff?text=照烧鸡腿',
    tags: ['日式风味', '低脂健康', '办公族最爱'],
    isHot: false,
    isNew: true
  },
  {
    name: '酸菜鱼片便当',
    description: '川味酸菜配鲜嫩鱼片，酸辣开胃，回味无穷',
    price: 30,
    rating: 4,
    image: 'https://placehold.co/800x600/fb923c/ffffff?text=酸菜鱼片',
    tags: ['川味特色', '酸辣鲜香', '季节限定'],
    isHot: false,
    isNew: true
  },
  {
    name: '宫保鸡丁便当',
    description: '经典川菜风味，鸡丁酥脆花生香，配菜丰富营养',
    price: 26,
    rating: 5,
    image: 'https://placehold.co/800x600/fdba74/ffffff?text=宫保鸡丁',
    tags: ['经典川菜', '香辣可口', '超值实惠'],
    isHot: false,
    isNew: false
  }
])

// 统计数据
const stats = ref({
  dailySales: '50000',
  products: '100',
  satisfaction: '98',
  repeatRate: '85'
})

// Swiper事件
const onSwiper = (swiper) => {
  // Swiper 初始化完成
}

const onSlideChange = () => {
  // 幻灯片切换
}

// 鼠标悬停事件
const handleMouseEnter = (index) => {
  // 鼠标进入
}

const handleMouseLeave = (index) => {
  // 鼠标离开
}
</script>

<style scoped>
/* CSS粒子动画背景 */
.particle-bg {
  width: 100%;
  height: 100%;
  background-image:
    radial-gradient(circle at 20% 30%, rgba(249, 115, 22, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(234, 179, 8, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(251, 146, 60, 0.1) 0%, transparent 50%);
  animation: particle-float 20s ease-in-out infinite;
}

@keyframes particle-float {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  33% {
    transform: translateY(-30px) scale(1.05);
  }
  66% {
    transform: translateY(20px) scale(0.95);
  }
}

/* Swiper自定义样式 */
.products-swiper {
  width: 100%;
  padding: 60px 0;
}

.products-swiper :deep(.swiper-slide) {
  background-position: center;
  background-size: cover;
  width: 600px;
  height: 700px;
}

.products-swiper :deep(.swiper-slide-active) {
  transform: scale(1.05);
  z-index: 10;
}

/* 分页器样式 */
.products-swiper :deep(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  background: #f97316;
  opacity: 0.5;
  transition: all 0.3s;
}

.products-swiper :deep(.swiper-pagination-bullet-active) {
  width: 32px;
  border-radius: 6px;
  opacity: 1;
  background: linear-gradient(to right, #f97316, #eab308);
}

/* 导航按钮样式 */
.products-swiper :deep(.swiper-button-next),
.products-swiper :deep(.swiper-button-prev) {
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
}

.products-swiper :deep(.swiper-button-next):hover,
.products-swiper :deep(.swiper-button-prev):hover {
  background: linear-gradient(to right, #f97316, #eab308);
  transform: scale(1.1);
}

.products-swiper :deep(.swiper-button-next)::after,
.products-swiper :deep(.swiper-button-prev)::after {
  font-size: 24px;
  font-weight: bold;
  color: #f97316;
}

.products-swiper :deep(.swiper-button-next):hover::after,
.products-swiper :deep(.swiper-button-prev):hover::after {
  color: white;
}
</style>
