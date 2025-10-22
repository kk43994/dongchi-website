<template>
  <section class="relative py-20 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 opacity-40">
      <div class="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 container mx-auto px-6">
      <!-- 标题区 -->
      <div class="text-center mb-20" data-aos="fade-up">
        <div class="inline-block mb-4">
          <span class="text-orange-500 text-sm font-bold tracking-widest uppercase">Our Honors</span>
        </div>
        <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          <span class="bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
            荣誉资质
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          20年匠心坚守，荣获国家级、省级、市级多项荣誉<br />
          每一份荣誉都是对东池品质的认可
        </p>
        <div class="w-32 h-1.5 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <!-- 无限滚动荣誉墙 -->
      <div class="relative">
        <!-- 左侧渐变遮罩 -->
        <div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none"></div>
        <!-- 右侧渐变遮罩 -->
        <div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none"></div>

        <!-- 第一行 - 从左到右 -->
        <div class="overflow-hidden mb-8" @mouseenter="pauseAnimation" @mouseleave="resumeAnimation">
          <div class="honors-track flex gap-6" ref="track1">
            <div
              v-for="(honor, index) in [...honors.slice(0, 6), ...honors.slice(0, 6)]"
              :key="`honor-1-${index}`"
              class="honor-card flex-shrink-0 w-80 h-96 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-2 group cursor-pointer overflow-hidden"
            >
              <div class="relative h-full p-8 flex flex-col items-center justify-center text-center">
                <!-- 装饰背景 -->
                <div class="absolute inset-0 bg-gradient-to-br from-orange-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <!-- 荣誉图标 -->
                <div class="relative z-10 mb-6">
                  <div class="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                </div>

                <!-- 荣誉标题 -->
                <div class="relative z-10">
                  <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    {{ honor.title }}
                  </h3>
                  <p class="text-gray-600 leading-relaxed mb-4">
                    {{ honor.description }}
                  </p>
                  <div class="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
                    {{ honor.year }}
                  </div>
                </div>

                <!-- 装饰线条 -->
                <div class="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 第二行 - 从右到左 -->
        <div class="overflow-hidden mb-8" @mouseenter="pauseAnimation" @mouseleave="resumeAnimation">
          <div class="honors-track-reverse flex gap-6" ref="track2">
            <div
              v-for="(honor, index) in [...honors.slice(6, 12), ...honors.slice(6, 12)]"
              :key="`honor-2-${index}`"
              class="honor-card flex-shrink-0 w-80 h-96 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-2 group cursor-pointer overflow-hidden"
            >
              <div class="relative h-full p-8 flex flex-col items-center justify-center text-center">
                <!-- 装饰背景 -->
                <div class="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <!-- 荣誉图标 -->
                <div class="relative z-10 mb-6">
                  <div class="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                </div>

                <!-- 荣誉标题 -->
                <div class="relative z-10">
                  <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    {{ honor.title }}
                  </h3>
                  <p class="text-gray-600 leading-relaxed mb-4">
                    {{ honor.description }}
                  </p>
                  <div class="inline-block px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full text-sm font-semibold">
                    {{ honor.year }}
                  </div>
                </div>

                <!-- 装饰线条 -->
                <div class="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 第三行 - 从左到右 -->
        <div class="overflow-hidden" @mouseenter="pauseAnimation" @mouseleave="resumeAnimation">
          <div class="honors-track flex gap-6" ref="track3">
            <div
              v-for="(honor, index) in [...honors.slice(12), ...honors.slice(12)]"
              :key="`honor-3-${index}`"
              class="honor-card flex-shrink-0 w-80 h-96 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-2 group cursor-pointer overflow-hidden"
            >
              <div class="relative h-full p-8 flex flex-col items-center justify-center text-center">
                <!-- 装饰背景 -->
                <div class="absolute inset-0 bg-gradient-to-br from-orange-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <!-- 荣誉图标 -->
                <div class="relative z-10 mb-6">
                  <div class="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                </div>

                <!-- 荣誉标题 -->
                <div class="relative z-10">
                  <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    {{ honor.title }}
                  </h3>
                  <p class="text-gray-600 leading-relaxed mb-4">
                    {{ honor.description }}
                  </p>
                  <div class="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
                    {{ honor.year }}
                  </div>
                </div>

                <!-- 装饰线条 -->
                <div class="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 统计数据 -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mt-24" data-aos="fade-up">
        <div class="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="text-5xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-3">
            {{ honorStats.national }}
          </div>
          <div class="text-gray-600 font-medium text-lg">国家级荣誉</div>
        </div>
        <div class="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="text-5xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-3">
            {{ honorStats.provincial }}
          </div>
          <div class="text-gray-600 font-medium text-lg">省级荣誉</div>
        </div>
        <div class="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="text-5xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-3">
            {{ honorStats.municipal }}
          </div>
          <div class="text-gray-600 font-medium text-lg">市级荣誉</div>
        </div>
        <div class="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="text-5xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-3">
            {{ honorStats.total }}
          </div>
          <div class="text-gray-600 font-medium text-lg">荣誉总数</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// 荣誉数据
const honors = ref([
  { title: '中国餐饮企业百强', description: '连续5年荣获中国餐饮业最具影响力品牌', year: '2020-2024' },
  { title: '中国快餐企业百强', description: '中式快餐行业领军品牌', year: '2021' },
  { title: '浙江省著名商标', description: '浙江省工商局授予', year: '2019' },
  { title: '温州市知名品牌', description: '温州市市场监督管理局认证', year: '2018' },
  { title: '食品安全示范单位', description: '国家食品药品监督管理局授予', year: '2022' },
  { title: 'ISO9001质量认证', description: '国际质量管理体系认证', year: '2017' },
  { title: '绿色餐饮企业', description: '中国烹饪协会授予', year: '2023' },
  { title: '诚信经营示范企业', description: '浙江省商务厅授予', year: '2020' },
  { title: '温州市就业先进单位', description: '解决就业5000+人', year: '2021' },
  { title: '纳税先进企业', description: '温州市税务局授予', year: '2022' },
  { title: '最佳雇主品牌', description: '员工满意度98%以上', year: '2023' },
  { title: '创新创业示范企业', description: '浙江省人力资源和社会保障厅授予', year: '2019' },
  { title: '连锁经营示范企业', description: '中国连锁经营协会授予', year: '2024' },
  { title: '温州市便当行业标杆', description: '温州市餐饮协会授予', year: '2018' },
  { title: '顾客满意品牌', description: '消费者满意度调查第一名', year: '2023' },
  { title: '社会责任优秀企业', description: '积极参与公益慈善事业', year: '2022' }
])

// 荣誉统计
const honorStats = ref({
  national: '10+',
  provincial: '15+',
  municipal: '20+',
  total: '50+'
})

// 动画暂停/恢复
const pauseAnimation = (e) => {
  const track = e.currentTarget.querySelector('.honors-track, .honors-track-reverse')
  if (track) {
    track.style.animationPlayState = 'paused'
  }
}

const resumeAnimation = (e) => {
  const track = e.currentTarget.querySelector('.honors-track, .honors-track-reverse')
  if (track) {
    track.style.animationPlayState = 'running'
  }
}
</script>

<style scoped>
/* 无限滚动动画 - 从左到右 */
.honors-track {
  animation: scroll-left 40s linear infinite;
  will-change: transform;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* 无限滚动动画 - 从右到左 */
.honors-track-reverse {
  animation: scroll-right 40s linear infinite;
  will-change: transform;
}

@keyframes scroll-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

/* 卡片3D效果 */
.honor-card {
  perspective: 1000px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.honor-card:hover {
  z-index: 10;
}

/* 防止动画卡顿 */
.honors-track,
.honors-track-reverse {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
</style>
