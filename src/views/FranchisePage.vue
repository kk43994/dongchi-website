<template>
  <div class="franchise-page">
    <!-- 全局导航栏 -->
    <Navigation />

    <!-- 面包屑导航 -->
    <Breadcrumb />

    <!-- 粒子背景 -->
    <ParticleBackground :particle-count="60" />
    <!-- 鼠标跟随光晕 -->
    <MouseFollower />
    <!-- 滚动进度条 -->
    <ScrollProgress />
    <!-- 返回顶部按钮 -->
    <BackToTop />
    <!-- Hero Section -->
    <section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-green-700 to-orange-600">
      <!-- 背景图片 -->
      <div class="absolute inset-0 opacity-30">
        <div class="w-full h-full bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1920&q=80')"></div>
      </div>

      <!-- 动态光效 -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div class="absolute top-0 right-1/4 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div class="absolute bottom-0 left-1/2 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <!-- 内容 -->
      <div class="relative z-10 container mx-auto px-6 text-center text-white">
        <div data-aos="fade-up">
          <h1 class="text-6xl md:text-8xl font-bold mb-8 leading-tight mt-8">
            加盟东池便当<br>
            <span class="text-gradient-gold">开启财富之门</span>
          </h1>

          <p class="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white/90 leading-relaxed">
            20年品牌沉淀 · 600+成功案例 · 全程扶持 · 快速回本
          </p>

          <!-- 核心数据 -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            <div class="text-center" data-aos="fade-up" data-aos-delay="100">
              <div class="text-5xl font-bold mb-2">{{ stats.investment }}万</div>
              <div class="text-white/80">起步投资</div>
            </div>
            <div class="text-center" data-aos="fade-up" data-aos-delay="200">
              <div class="text-5xl font-bold mb-2">{{ stats.payback }}月</div>
              <div class="text-white/80">平均回本</div>
            </div>
            <div class="text-center" data-aos="fade-up" data-aos-delay="300">
              <div class="text-5xl font-bold mb-2">{{ stats.profit }}%</div>
              <div class="text-white/80">年利润率</div>
            </div>
            <div class="text-center" data-aos="fade-up" data-aos-delay="400">
              <div class="text-5xl font-bold mb-2">{{ stats.support }}天</div>
              <div class="text-white/80">开业扶持</div>
            </div>
          </div>

          <!-- CTA按钮 -->
          <div class="flex flex-col md:flex-row gap-6 justify-center items-center" data-aos="fade-up" data-aos-delay="500">
            <a href="#application-form" class="group relative px-12 py-5 bg-white text-green-700 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
              <span class="relative z-10 flex items-center gap-3">
                立即申请加盟
                <svg class="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
            </a>
            <a href="#roi-calculator" class="px-12 py-5 bg-transparent border-2 border-white text-white rounded-full text-xl font-bold hover:bg-white hover:text-green-700 transition-all duration-300">
              计算投资回报
            </a>
          </div>
        </div>
      </div>

      <!-- 向下滚动提示 -->
      <div class="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="flex flex-col items-center text-white/80">
          <span class="text-sm mb-2">了解更多</span>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>

    <!-- 加盟优势 -->
    <section id="advantages" class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="container mx-auto px-6">
        <!-- 标题 -->
        <div class="text-center mb-20" data-aos="fade-up">
          <div class="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            为什么选择东池
          </div>
          <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            六大核心优势
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            成熟的商业模式 · 全方位的扶持体系 · 持续的盈利保障
          </p>
        </div>

        <!-- 优势卡片 -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div
            v-for="(advantage, index) in advantages"
            :key="index"
            class="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 overflow-hidden"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 100"
          >
            <!-- 背景渐变 -->
            <div class="absolute inset-0 bg-gradient-to-br from-green-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <!-- 图标 -->
            <div class="relative z-10 mb-6">
              <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <span class="text-4xl">{{ advantage.icon }}</span>
              </div>
            </div>

            <!-- 内容 -->
            <div class="relative z-10">
              <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                {{ advantage.title }}
              </h3>
              <p class="text-gray-600 leading-relaxed mb-6">
                {{ advantage.description }}
              </p>

              <!-- 亮点列表 -->
              <ul class="space-y-2">
                <li v-for="(point, idx) in advantage.points" :key="idx" class="flex items-start gap-2 text-sm text-gray-600">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </div>

            <!-- 装饰元素 -->
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/10 to-orange-400/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 投资回报计算器 -->
    <section id="roi-calculator" class="py-20 bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white relative overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div class="container relative z-10 mx-auto px-6">
        <!-- 标题 -->
        <div class="text-center mb-16" data-aos="fade-up">
          <div class="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4 border border-white/20">
            💰 智能测算工具
          </div>
          <h2 class="text-5xl md:text-6xl font-bold mb-6">
            投资回报计算器
          </h2>
          <p class="text-xl text-white/80 max-w-2xl mx-auto">
            根据您的投资预算，实时计算预期收益与回本周期
          </p>
        </div>

        <div class="max-w-5xl mx-auto">
          <div class="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl" data-aos="fade-up" data-aos-delay="200">
            <!-- 计算器表单 -->
            <div class="grid md:grid-cols-2 gap-12">
              <!-- 左侧：输入参数 -->
              <div class="space-y-8">
                <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span class="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-sm">1</span>
                  输入投资参数
                </h3>

                <!-- 城市类型 -->
                <div>
                  <label class="block text-sm font-medium mb-3 text-white/90">城市类型</label>
                  <div class="grid grid-cols-3 gap-3">
                    <button
                      v-for="city in cityTypes"
                      :key="city.value"
                      @click="calculator.cityType = city.value"
                      :class="[
                        'px-4 py-3 rounded-xl font-medium transition-all duration-300',
                        calculator.cityType === city.value
                          ? 'bg-green-500 text-white shadow-lg scale-105'
                          : 'bg-white/10 text-white/70 hover:bg-white/20'
                      ]"
                    >
                      {{ city.label }}
                    </button>
                  </div>
                </div>

                <!-- 门店面积 -->
                <div>
                  <label class="block text-sm font-medium mb-3 text-white/90">
                    门店面积: <span class="text-green-400 text-lg font-bold">{{ calculator.area }}㎡</span>
                  </label>
                  <input
                    v-model.number="calculator.area"
                    type="range"
                    min="30"
                    max="150"
                    step="10"
                    class="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                  >
                  <div class="flex justify-between text-xs text-white/60 mt-2">
                    <span>30㎡</span>
                    <span>150㎡</span>
                  </div>
                </div>

                <!-- 预计日销售额 -->
                <div>
                  <label class="block text-sm font-medium mb-3 text-white/90">
                    预计日单量: <span class="text-green-400 text-lg font-bold">{{ calculator.dailyOrders }}单</span>
                  </label>
                  <input
                    v-model.number="calculator.dailyOrders"
                    type="range"
                    min="50"
                    max="500"
                    step="10"
                    class="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                  >
                  <div class="flex justify-between text-xs text-white/60 mt-2">
                    <span>50单</span>
                    <span>500单</span>
                  </div>
                </div>

                <!-- 客单价 -->
                <div>
                  <label class="block text-sm font-medium mb-3 text-white/90">
                    平均客单价: <span class="text-green-400 text-lg font-bold">¥{{ calculator.avgPrice }}</span>
                  </label>
                  <input
                    v-model.number="calculator.avgPrice"
                    type="range"
                    min="20"
                    max="50"
                    step="2"
                    class="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                  >
                  <div class="flex justify-between text-xs text-white/60 mt-2">
                    <span>¥20</span>
                    <span>¥50</span>
                  </div>
                </div>
              </div>

              <!-- 右侧：计算结果 -->
              <div class="bg-gradient-to-br from-green-500/20 to-orange-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span class="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-sm">2</span>
                  投资回报分析
                </h3>

                <div class="space-y-6">
                  <!-- 总投资 -->
                  <div class="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <div class="text-sm text-white/70 mb-2">总投资金额</div>
                    <div class="text-4xl font-bold text-gradient-gold">
                      ¥{{ calculatedResults.totalInvestment.toLocaleString() }}
                    </div>
                    <div class="text-xs text-white/60 mt-2">
                      含加盟费、装修费、设备费、首批物料等
                    </div>
                  </div>

                  <!-- 月营业额 -->
                  <div class="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <div class="text-sm text-white/70 mb-2">预计月营业额</div>
                    <div class="text-3xl font-bold text-green-400">
                      ¥{{ calculatedResults.monthlyRevenue.toLocaleString() }}
                    </div>
                  </div>

                  <!-- 月净利润 -->
                  <div class="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <div class="text-sm text-white/70 mb-2">预计月净利润</div>
                    <div class="text-3xl font-bold text-orange-400">
                      ¥{{ calculatedResults.monthlyProfit.toLocaleString() }}
                    </div>
                    <div class="text-xs text-white/60 mt-2">
                      利润率约 {{ calculatedResults.profitRate }}%
                    </div>
                  </div>

                  <!-- 回本周期 -->
                  <div class="bg-gradient-to-r from-green-600 to-orange-600 rounded-xl p-6 shadow-lg">
                    <div class="text-sm text-white/90 mb-2">预计回本周期</div>
                    <div class="text-5xl font-bold">
                      {{ calculatedResults.paybackMonths }} <span class="text-2xl">月</span>
                    </div>
                  </div>

                  <!-- 年收益 -->
                  <div class="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <div class="text-sm text-white/70 mb-2">首年预计收益</div>
                    <div class="text-3xl font-bold text-yellow-400">
                      ¥{{ calculatedResults.yearlyProfit.toLocaleString() }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 免责声明 -->
            <div class="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <p class="text-xs text-white/60 text-center leading-relaxed">
                * 以上数据仅供参考，实际收益受地理位置、经营管理、市场环境等多种因素影响。
                具体投资金额和回报周期请咨询招商经理获取详细方案。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 加盟流程 -->
    <section id="process" class="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div class="container mx-auto px-6">
        <!-- 标题 -->
        <div class="text-center mb-20" data-aos="fade-up">
          <div class="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
            简单六步
          </div>
          <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            加盟流程
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            从咨询到开业，全程专业指导，让您轻松启航
          </p>
        </div>

        <!-- 流程步骤 -->
        <div class="max-w-6xl mx-auto">
          <div class="relative">
            <!-- 连接线 -->
            <div class="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-green-200 via-orange-200 to-green-200" data-aos="slide-right" data-aos-duration="1500"></div>

            <!-- 步骤卡片 -->
            <div class="grid md:grid-cols-3 gap-8">
              <div
                v-for="(step, index) in steps"
                :key="index"
                class="relative group"
                :data-aos="'fade-up'"
                :data-aos-delay="index * 100"
              >
                <!-- 步骤编号 -->
                <div class="relative z-10 w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-orange-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  {{ index + 1 }}
                </div>

                <!-- 卡片内容 -->
                <div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {{ step.title }}
                  </h3>
                  <p class="text-gray-600 text-center leading-relaxed mb-4">
                    {{ step.description }}
                  </p>
                  <div class="text-sm text-gray-500 text-center">
                    ⏱️ {{ step.duration }}
                  </div>
                </div>

                <!-- 箭头（移动端不显示） -->
                <div v-if="index < steps.length - 1" class="hidden md:block absolute top-24 -right-4 z-20">
                  <svg class="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 成功案例 -->
    <section id="cases" class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-6">
        <!-- 标题 -->
        <div class="text-center mb-20" data-aos="fade-up">
          <div class="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            真实案例
          </div>
          <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            加盟商成功故事
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            他们的成功，就是您未来的缩影
          </p>
        </div>

        <!-- 案例轮播 -->
        <div class="max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <swiper
            :modules="swiperModules"
            :slides-per-view="1"
            :space-between="30"
            :loop="true"
            :autoplay="{ delay: 5000 }"
            :pagination="{ clickable: true }"
            :breakpoints="{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }"
            class="success-cases-swiper pb-16"
          >
            <swiper-slide v-for="(caseItem, index) in successCases" :key="index">
              <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group">
                <!-- 照片 -->
                <div class="relative h-64 overflow-hidden bg-gradient-to-br from-green-100 to-orange-100">
                  <img
                    :src="caseItem.image"
                    :alt="caseItem.name"
                    class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    @error="handleImageError"
                  >
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  <!-- 城市标签 -->
                  <div class="absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800">
                    📍 {{ caseItem.city }}
                  </div>
                </div>

                <!-- 内容 -->
                <div class="p-6">
                  <h3 class="text-xl font-bold text-gray-900 mb-2">{{ caseItem.name }}</h3>
                  <div class="text-sm text-gray-500 mb-4">{{ caseItem.storeType }} · 加盟 {{ caseItem.years }} 年</div>

                  <p class="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    "{{ caseItem.testimonial }}"
                  </p>

                  <!-- 数据 -->
                  <div class="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div class="text-center">
                      <div class="text-2xl font-bold text-green-600">{{ caseItem.payback }}月</div>
                      <div class="text-xs text-gray-500">回本周期</div>
                    </div>
                    <div class="text-center">
                      <div class="text-2xl font-bold text-orange-600">{{ caseItem.profit }}万</div>
                      <div class="text-xs text-gray-500">年净利润</div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>

    <!-- 在线申请表单 -->
    <section id="application-form" class="py-20 bg-gradient-to-br from-green-50 via-white to-orange-50 relative overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 opacity-30">
        <div class="absolute top-20 right-20 w-72 h-72 bg-green-300 rounded-full filter blur-3xl"></div>
        <div class="absolute bottom-20 left-20 w-72 h-72 bg-orange-300 rounded-full filter blur-3xl"></div>
      </div>

      <div class="container relative z-10 mx-auto px-6">
        <!-- 标题 -->
        <div class="text-center mb-16" data-aos="fade-up">
          <div class="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            立即行动
          </div>
          <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            在线申请加盟
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            填写申请表单，我们的招商经理将在24小时内与您联系
          </p>
        </div>

        <!-- 表单 -->
        <div class="max-w-3xl mx-auto">
          <form @submit.prevent="handleSubmit" class="bg-white rounded-3xl shadow-2xl p-8 md:p-12" data-aos="fade-up" data-aos-delay="200">
            <div class="grid md:grid-cols-2 gap-6">
              <!-- 姓名 -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  您的姓名 <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="请输入真实姓名"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                  :class="{ 'border-red-500': formErrors.name }"
                >
                <p v-if="formErrors.name" class="text-red-500 text-xs mt-1">{{ formErrors.name }}</p>
              </div>

              <!-- 手机号 -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  手机号码 <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="form.phone"
                  type="tel"
                  required
                  placeholder="请输入手机号"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                  :class="{ 'border-red-500': formErrors.phone }"
                >
                <p v-if="formErrors.phone" class="text-red-500 text-xs mt-1">{{ formErrors.phone }}</p>
              </div>

              <!-- 微信号 -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  微信号
                </label>
                <input
                  v-model="form.wechat"
                  type="text"
                  placeholder="方便后续沟通"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                >
              </div>

              <!-- 所在城市 -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  意向城市 <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="form.city"
                  type="text"
                  required
                  placeholder="如：温州市"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                  :class="{ 'border-red-500': formErrors.city }"
                >
                <p v-if="formErrors.city" class="text-red-500 text-xs mt-1">{{ formErrors.city }}</p>
              </div>

              <!-- 投资预算 -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  投资预算 <span class="text-red-500">*</span>
                </label>
                <select
                  v-model="form.budget"
                  required
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors appearance-none bg-white"
                  :class="{ 'border-red-500': formErrors.budget }"
                >
                  <option value="">请选择投资预算</option>
                  <option value="20-30">20-30万</option>
                  <option value="30-50">30-50万</option>
                  <option value="50-80">50-80万</option>
                  <option value="80+">80万以上</option>
                </select>
                <p v-if="formErrors.budget" class="text-red-500 text-xs mt-1">{{ formErrors.budget }}</p>
              </div>

              <!-- 创业经验 -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  创业经验
                </label>
                <select
                  v-model="form.experience"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors appearance-none bg-white"
                >
                  <option value="">请选择</option>
                  <option value="无">无创业经验</option>
                  <option value="餐饮">有餐饮行业经验</option>
                  <option value="其他">其他行业创业经验</option>
                </select>
              </div>
            </div>

            <!-- 留言 -->
            <div class="mt-6">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                留言备注
              </label>
              <textarea
                v-model="form.message"
                rows="4"
                placeholder="您还想了解什么？请告诉我们..."
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <!-- 协议 -->
            <div class="mt-6 flex items-start gap-3">
              <input
                v-model="form.agreed"
                type="checkbox"
                id="agreement"
                class="mt-1 w-4 h-4 text-green-600 rounded focus:ring-green-500"
              >
              <label for="agreement" class="text-sm text-gray-600">
                我已阅读并同意 <a href="#" class="text-green-600 hover:underline">《加盟协议》</a> 和 <a href="#" class="text-green-600 hover:underline">《隐私政策》</a>
              </label>
            </div>

            <!-- 提交按钮 -->
            <div class="mt-8">
              <button
                type="submit"
                :disabled="isSubmitting || !form.agreed"
                class="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl text-lg font-bold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
              >
                <span v-if="!isSubmitting">提交申请</span>
                <span v-else class="flex items-center gap-2">
                  <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  提交中...
                </span>
              </button>
            </div>

            <!-- 提交成功提示 -->
            <div v-if="submitSuccess" class="mt-6 p-4 bg-green-50 border-2 border-green-500 rounded-xl flex items-start gap-3">
              <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <div>
                <h4 class="font-bold text-green-800 mb-1">提交成功！</h4>
                <p class="text-sm text-green-700">我们的招商经理将在24小时内与您联系，请保持手机畅通。</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- FAQ常见问题 -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="container mx-auto px-6">
        <!-- 标题 -->
        <div class="text-center mb-20" data-aos="fade-up">
          <div class="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
            常见问题
          </div>
          <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            您可能想问
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            解答您的疑虑，让加盟更放心
          </p>
        </div>

        <!-- FAQ手风琴 -->
        <div class="max-w-4xl mx-auto space-y-4" data-aos="fade-up" data-aos-delay="200">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-green-300 transition-colors"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
              <span class="text-lg font-bold text-gray-900 pr-4">{{ faq.question }}</span>
              <svg
                class="w-6 h-6 text-green-600 flex-shrink-0 transform transition-transform duration-300"
                :class="{ 'rotate-180': faq.isOpen }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div
              v-show="faq.isOpen"
              class="px-8 pb-6 text-gray-600 leading-relaxed"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 底部CTA -->
    <section class="py-24 bg-gradient-to-r from-green-600 to-orange-600 text-white relative overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl"></div>
      </div>

      <div class="container relative z-10 mx-auto px-6 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
          还在犹豫什么？
        </h2>
        <p class="text-xl mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          成功从来不会等待观望者，只会属于行动者！
        </p>
        <div class="flex flex-col md:flex-row gap-6 justify-center" data-aos="fade-up" data-aos-delay="200">
          <a href="#application-form" class="px-12 py-5 bg-white text-green-700 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
            立即申请加盟
          </a>
          <a href="tel:400-888-8888" class="px-12 py-5 bg-transparent border-2 border-white text-white rounded-full text-xl font-bold hover:bg-white hover:text-green-700 transition-all duration-300">
            📞 400-888-8888
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
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
import 'aos/dist/aos.css'

const swiperModules = [Autoplay, Pagination]

// Hero数据
const stats = ref({
  investment: 15,
  payback: 8,
  profit: 40,
  support: 90
})

// 加盟优势
const advantages = ref([
  {
    icon: '🏆',
    title: '知名品牌背书',
    description: '20年品牌沉淀，600+门店验证，消费者信赖的连锁品牌',
    points: [
      '央视合作品牌',
      '行业标杆企业',
      '多项荣誉认证'
    ]
  },
  {
    icon: '💰',
    title: '低投入高回报',
    description: '15万起步，8个月快速回本，年利润率高达40%',
    points: [
      '投资灵活可控',
      '多种店型选择',
      '回本周期短'
    ]
  },
  {
    icon: '📦',
    title: '全供应链支持',
    description: '中央厨房统一配送，食材品质可控，成本优势明显',
    points: [
      '标准化生产',
      '冷链配送',
      '食材可溯源'
    ]
  },
  {
    icon: '🎓',
    title: '系统培训体系',
    description: '从选址到运营全流程培训，零经验也能轻松上手',
    points: [
      '总部实战培训',
      '驻店指导',
      '线上学习平台'
    ]
  },
  {
    icon: '📱',
    title: '智能管理系统',
    description: '自主研发SaaS系统，订单、库存、财务一键掌控',
    points: [
      '移动端管理',
      '数据实时同步',
      '智能分析报表'
    ]
  },
  {
    icon: '🚀',
    title: '持续营销赋能',
    description: '总部提供品牌推广、活动策划、会员运营等全方位支持',
    points: [
      '月度营销方案',
      '节日活动支持',
      '私域流量运营'
    ]
  }
])

// 投资回报计算器
const calculator = ref({
  cityType: 'tier2', // tier1/tier2/tier3
  area: 60,
  dailyOrders: 200,
  avgPrice: 30
})

const cityTypes = ref([
  { label: '一线', value: 'tier1' },
  { label: '二线', value: 'tier2' },
  { label: '三线', value: 'tier3' }
])

// 计算结果
const calculatedResults = computed(() => {
  const cityMultiplier = {
    tier1: 1.3,
    tier2: 1.0,
    tier3: 0.8
  }

  const baseInvestment = {
    tier1: 350000,
    tier2: 250000,
    tier3: 180000
  }

  const rentPerSqm = {
    tier1: 200,
    tier2: 120,
    tier3: 80
  }

  const multiplier = cityMultiplier[calculator.value.cityType]
  const totalInvestment = baseInvestment[calculator.value.cityType] +
    (calculator.value.area * rentPerSqm[calculator.value.cityType] * 3) // 三个月押金

  const monthlyRevenue = calculator.value.dailyOrders * calculator.value.avgPrice * 30
  const monthlyCost = (calculator.value.area * rentPerSqm[calculator.value.cityType]) + // 房租
    (monthlyRevenue * 0.35) + // 食材成本35%
    (monthlyRevenue * 0.08) + // 人工8%
    (monthlyRevenue * 0.12)   // 其他成本12%

  const monthlyProfit = monthlyRevenue - monthlyCost
  const profitRate = Math.round((monthlyProfit / monthlyRevenue) * 100)
  const paybackMonths = Math.ceil(totalInvestment / monthlyProfit)
  const yearlyProfit = monthlyProfit * 12

  return {
    totalInvestment: Math.round(totalInvestment),
    monthlyRevenue: Math.round(monthlyRevenue),
    monthlyProfit: Math.round(monthlyProfit),
    profitRate,
    paybackMonths,
    yearlyProfit: Math.round(yearlyProfit)
  }
})

// 加盟流程
const steps = ref([
  {
    title: '咨询了解',
    description: '电话/在线咨询，了解品牌和加盟政策',
    duration: '1-2天'
  },
  {
    title: '实地考察',
    description: '到总部或示范店参观，深入了解运营模式',
    duration: '1天'
  },
  {
    title: '签订合同',
    description: '审核通过后签订加盟协议，缴纳费用',
    duration: '1天'
  },
  {
    title: '选址装修',
    description: '总部协助选址评估，提供装修设计方案',
    duration: '30-45天'
  },
  {
    title: '培训筹备',
    description: '参加系统培训，设备安装，物料准备',
    duration: '15-20天'
  },
  {
    title: '开业运营',
    description: '盛大开业，总部驻店指导，持续运营支持',
    duration: '持续'
  }
])

// 成功案例
const successCases = ref([
  {
    name: '张先生',
    city: '杭州市',
    storeType: '社区店',
    years: 2,
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80',
    testimonial: '从白领到老板，东池给了我创业的信心。开业第6个月就回本了，现在月入5万+，比上班强太多！',
    payback: 6,
    profit: 60
  },
  {
    name: '李女士',
    city: '温州市',
    storeType: '商圈店',
    years: 3,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    testimonial: '总部的支持非常到位，从选址到运营都有专人指导。我是零餐饮经验，现在已经开了第二家店！',
    payback: 7,
    profit: 80
  },
  {
    name: '王先生',
    city: '宁波市',
    storeType: '写字楼店',
    years: 1,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80',
    testimonial: '智能化管理系统太方便了，我一个人就能轻松管理。投入25万，预计10个月回本，很满意！',
    payback: 10,
    profit: 35
  }
])

// 表单数据
const form = ref({
  name: '',
  phone: '',
  wechat: '',
  city: '',
  budget: '',
  experience: '',
  message: '',
  agreed: false
})

const formErrors = ref({})
const isSubmitting = ref(false)
const submitSuccess = ref(false)

// 表单验证
const validateForm = () => {
  formErrors.value = {}

  if (!form.value.name || form.value.name.length < 2) {
    formErrors.value.name = '请输入真实姓名（至少2个字）'
  }

  const phoneRegex = /^1[3-9]\d{9}$/
  if (!phoneRegex.test(form.value.phone)) {
    formErrors.value.phone = '请输入正确的手机号码'
  }

  if (!form.value.city) {
    formErrors.value.city = '请输入意向城市'
  }

  if (!form.value.budget) {
    formErrors.value.budget = '请选择投资预算'
  }

  return Object.keys(formErrors.value).length === 0
}

// 表单提交
const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true

  // 模拟提交
  setTimeout(() => {
    isSubmitting.value = false
    submitSuccess.value = true

    // 重置表单
    form.value = {
      name: '',
      phone: '',
      wechat: '',
      city: '',
      budget: '',
      experience: '',
      message: '',
      agreed: false
    }

    // 3秒后隐藏成功提示
    setTimeout(() => {
      submitSuccess.value = false
    }, 5000)
  }, 2000)
}

// FAQ
const faqs = ref([
  {
    question: '加盟东池便当需要多少钱？',
    answer: '根据城市级别和店铺类型不同，总投资在15-50万元之间。一线城市约30-50万，二线城市约20-35万，三线城市约15-25万。包含加盟费、装修费、设备费、首批物料等。',
    isOpen: false
  },
  {
    question: '没有餐饮经验可以加盟吗？',
    answer: '完全可以！我们有完善的培训体系，包括理论培训、实操培训、驻店指导等。总部会手把手教您从选址、装修到开业运营的全流程。很多成功的加盟商都是零餐饮经验。',
    isOpen: false
  },
  {
    question: '加盟后总部提供哪些支持？',
    answer: '我们提供全方位支持：1) 选址评估与装修设计；2) 设备采购与安装；3) 系统培训（产品制作、运营管理、营销推广）；4) 开业指导与驻店帮扶；5) 持续的营销支持和新品研发；6) 供应链配送与品质管控；7) 智能管理系统支持。',
    isOpen: false
  },
  {
    question: '多久可以回本？',
    answer: '根据我们600+加盟店的实际数据，平均回本周期在8-12个月。具体时间受位置、经营能力、当地市场等因素影响。一线城市优质地段最快6个月回本，三线城市约12-15个月。',
    isOpen: false
  },
  {
    question: '对店铺位置有什么要求？',
    answer: '优先选择：写字楼、商业街、社区、学校周边、商场等人流密集区域。面积要求30-150㎡，具体根据店型而定。我们会提供专业的选址评估，确保位置合理。',
    isOpen: false
  },
  {
    question: '加盟后是否有区域保护？',
    answer: '有！我们实行严格的区域保护政策。根据店型和商圈情况，保护范围在500米-2公里不等，确保您的市场不被稀释，保障合理利润空间。',
    isOpen: false
  }
])

const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}

// 图片加载错误处理
const handleImageError = (event) => {
  event.target.src = 'https://via.placeholder.com/600x400/8BC34A/ffffff?text=东池便当'
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
/* 文字渐变 */
.text-gradient-gold {
  background: linear-gradient(to right, #fbbf24, #f59e0b, #fbbf24);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 3s ease infinite;
  background-size: 200% auto;
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% center;
  }
  50% {
    background-position: 100% center;
  }
}

/* Blob动画 */
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Slider样式 */
.slider::-webkit-slider-thumb {
  appearance: none;
  width: 24px;
  height: 24px;
  background: linear-gradient(to right, #22c55e, #f97316);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.5);
  transition: all 0.3s;
}

.slider::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 6px 20px rgba(34, 197, 94, 0.7);
}

.slider::-moz-range-thumb {
  width: 24px;
  height: 24px;
  background: linear-gradient(to right, #22c55e, #f97316);
  border-radius: 50%;
  cursor: pointer;
  border: none;
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.5);
}

/* Swiper自定义样式 */
.success-cases-swiper :deep(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  background: #22c55e;
  opacity: 0.5;
}

.success-cases-swiper :deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  background: linear-gradient(to right, #22c55e, #f97316);
}

/* 文本截断 */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
