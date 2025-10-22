<template>
  <section class="relative py-20 overflow-hidden bg-gradient-to-br from-[#8BC34A] via-[#689F38] to-[#7CB342]">
    <!-- 动态背景装饰 -->
    <div class="absolute inset-0 opacity-35">
      <div class="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-2xl animate-pulse" style="animation-delay: 0.5s;"></div>
    </div>

    <div class="relative z-10 container mx-auto px-6">
      <!-- 标题区 -->
      <div class="text-center mb-20" data-aos="fade-up">
        <div class="inline-block mb-4">
          <span class="text-white/90 text-sm font-bold tracking-widest uppercase">Join Us</span>
        </div>
        <h2 class="text-5xl md:text-7xl font-bold text-white mb-6">
          参与东池，共创未来
        </h2>
        <p class="text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed">
          500+成功案例，成熟商业模式，全程扶持<br />
          加入东池便当，开启您的创业之路
        </p>
        <div class="w-32 h-1.5 bg-white/80 mx-auto mt-6 rounded-full"></div>
      </div>

      <!-- 加盟优势 - 4宫格 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24" data-aos="fade-up" data-aos-delay="200">
        <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
          <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white mb-3">低投资门槛</h3>
          <p class="text-white/80 text-lg">仅需15-30万启动资金</p>
        </div>

        <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
          <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white mb-3">快速回本</h3>
          <p class="text-white/80 text-lg">平均6-12个月回本</p>
        </div>

        <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
          <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white mb-3">全程扶持</h3>
          <p class="text-white/80 text-lg">选址、装修、培训一站式</p>
        </div>

        <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
          <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white mb-3">持续增长</h3>
          <p class="text-white/80 text-lg">年增长率超30%</p>
        </div>
      </div>

      <!-- 加盟流程 - 9步骤 -->
      <div class="mb-24" data-aos="fade-up" data-aos-delay="400">
        <h3 class="text-4xl font-bold text-white text-center mb-16">加盟流程</h3>

        <div class="relative max-w-6xl mx-auto">
          <!-- 波浪连接线 -->
          <svg class="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 hidden lg:block" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path d="M 0 50 Q 150 20, 300 50 T 600 50 T 900 50 T 1200 50" stroke="rgba(255,255,255,0.3)" stroke-width="3" fill="none" stroke-dasharray="10,5"/>
          </svg>

          <!-- 9个步骤 -->
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            <div v-for="(step, index) in franchiseSteps" :key="index" class="text-center">
              <div class="relative mx-auto mb-4">
                <div class="w-24 h-24 mx-auto rounded-full bg-white flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 hover:rotate-12">
                  <span class="text-4xl font-bold bg-gradient-to-br from-[#8BC34A] to-[#FF9800] bg-clip-text text-transparent">
                    {{ index + 1 }}
                  </span>
                </div>
              </div>
              <h4 class="text-lg font-bold text-white mb-2">{{ step.title }}</h4>
              <p class="text-white/80 text-sm">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA按钮 -->
      <div class="text-center" data-aos="fade-up" data-aos-delay="600">
        <button class="group relative px-16 py-6 bg-white text-[#8BC34A] rounded-full text-2xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
          <span class="relative z-10 flex items-center gap-4">
            立即咨询加盟
            <svg class="w-8 h-8 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </span>
          <div class="absolute inset-0 bg-gradient-to-r from-[#8BC34A] to-[#FF9800] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </button>

        <p class="mt-8 text-white/90 text-xl">
          加盟热线：<a href="tel:400-888-8888" class="font-bold hover:underline">400-888-8888</a>
        </p>

        <div class="flex items-center justify-center gap-8 mt-8 text-white/80">
          <div class="flex items-center gap-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>专业团队</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>全程扶持</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>成功保障</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// 加盟流程步骤
const franchiseSteps = ref([
  { title: '咨询了解', desc: '电话或线上咨询' },
  { title: '提交申请', desc: '填写加盟申请表' },
  { title: '资质审核', desc: '总部审核资质' },
  { title: '实地考察', desc: '参观总部及门店' },
  { title: '签订合同', desc: '签署加盟协议' },
  { title: '选址装修', desc: '协助选址与设计' },
  { title: '人员培训', desc: '系统培训课程' },
  { title: '开业筹备', desc: '开业活动策划' },
  { title: '正式营业', desc: '持续运营支持' }
])
</script>

<style scoped>
.shadow-3xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>
