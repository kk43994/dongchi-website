<template>
  <section class="relative py-20 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
    <div class="absolute inset-0 opacity-40">
      <div class="absolute top-20 left-10 h-72 w-72 rounded-full bg-gradient-to-br from-orange-400/20 to-yellow-400/20 blur-3xl"></div>
      <div class="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-400/20 blur-3xl"></div>
    </div>

    <div class="relative z-10 container mx-auto px-6">
      <div class="mb-20 text-center" data-aos="fade-up">
        <div class="mb-4 inline-block">
          <span class="text-sm font-bold uppercase tracking-widest text-orange-500">Our Honors</span>
        </div>
        <h2 class="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
          <span class="bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
            荣誉资质
          </span>
        </h2>
        <p class="mx-auto max-w-2xl text-xl leading-relaxed text-gray-600">
          20年匠心坚守，荣获国家级、省级、市级多项荣誉<br />
          每一份荣誉都是对东池品质的认可
        </p>
        <div class="mx-auto mt-6 h-1.5 w-32 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500"></div>
      </div>

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <article
          v-for="(honor, index) in honors"
          :key="honor.title"
          class="honor-card group overflow-hidden rounded-2xl bg-white shadow-xl"
          data-aos="fade-up"
          :data-aos-delay="(index % 4) * 80"
        >
          <div class="relative h-full p-8 text-center">
            <div class="absolute inset-0 bg-gradient-to-br from-orange-50 to-yellow-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

            <div class="relative z-10 mb-6 flex justify-center">
              <div class="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                <svg class="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>

            <div class="relative z-10">
              <h3 class="mb-4 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-orange-600">
                {{ honor.title }}
              </h3>
              <p class="mb-4 leading-relaxed text-gray-600">
                {{ honor.description }}
              </p>
              <div class="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
                {{ honor.year }}
              </div>
            </div>

            <div class="absolute bottom-0 left-0 right-0 h-2 origin-left scale-x-0 bg-gradient-to-r from-orange-500 to-yellow-500 transition-transform duration-500 group-hover:scale-x-100"></div>
          </div>
        </article>
      </div>

      <div class="mx-auto mt-24 grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4" data-aos="fade-up">
        <div class="rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div class="mb-3 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-5xl font-bold text-transparent">
            {{ honorStats.national }}
          </div>
          <div class="text-lg font-medium text-gray-600">国家级荣誉</div>
        </div>
        <div class="rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div class="mb-3 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-5xl font-bold text-transparent">
            {{ honorStats.provincial }}
          </div>
          <div class="text-lg font-medium text-gray-600">省级荣誉</div>
        </div>
        <div class="rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div class="mb-3 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-5xl font-bold text-transparent">
            {{ honorStats.municipal }}
          </div>
          <div class="text-lg font-medium text-gray-600">市级荣誉</div>
        </div>
        <div class="rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div class="mb-3 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-5xl font-bold text-transparent">
            {{ honorStats.total }}
          </div>
          <div class="text-lg font-medium text-gray-600">荣誉总数</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

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

const honorStats = ref({
  national: '10+',
  provincial: '15+',
  municipal: '20+',
  total: '50+'
})
</script>

<style scoped>
.honor-card {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.honor-card:hover {
  transform: translateY(-8px);
}
</style>
