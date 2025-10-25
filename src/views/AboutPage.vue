<template>
  <div class="about-page">
    <!-- 全局导航栏 -->
    <Navigation />

    <!-- 面包屑导航 -->
    <Breadcrumb />

    <!-- 炫技特效组件 -->
    <ParticleBackground :particle-count="50" />
    <MouseFollower />
    <ScrollProgress />
    <BackToTop />

    <!-- Hero Section - 品牌愿景 -->
    <section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-orange-50">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 opacity-30">
        <div class="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div class="absolute top-40 right-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div class="absolute bottom-20 left-1/2 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div class="container relative z-10 mx-auto px-6 py-20">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- 左侧：创始人照片占位符 -->
          <div class="flex justify-center" data-aos="fade-right">
            <div class="relative group">
              <!-- 照片背景光晕 -->
              <div class="absolute inset-0 bg-gradient-to-br from-green-400 to-orange-400 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

              <!-- 创始人照片容器 -->
              <div class="relative bg-white p-3 rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                <div class="relative w-80 h-96 rounded-2xl overflow-hidden">
                  <img
                    src="@/assets/images/founder.png"
                    alt="张宪清 - 东池便当创始人"
                    class="w-full h-full object-cover"
                  />
                </div>

                <!-- 名片信息 -->
                <div class="mt-4 text-center p-4 bg-gradient-to-r from-green-50 to-orange-50 rounded-xl">
                  <h3 class="text-2xl font-bold text-gray-800 mb-1">张宪清</h3>
                  <p class="text-green-600 font-medium">东池便当创始人 & CEO</p>
                  <p class="text-sm text-gray-600 mt-2">"让每一份便当都充满温度"</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧：品牌愿景文字 -->
          <div class="space-y-6" data-aos="fade-left">
            <div class="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              品牌故事
            </div>

            <h1 class="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              从台湾到温州<br>
              <span class="text-gradient">美味传承之旅</span>
            </h1>

            <p class="text-xl text-gray-600 leading-relaxed">
              2004年，怀揣着对台湾传统便当文化的热爱，创始人张宪清先生将正宗的台湾便当带到了温州。
              从一家小店到如今遍布全国的连锁品牌，东池便当始终坚持"新鲜、健康、美味"的理念。
            </p>

            <div class="grid grid-cols-3 gap-6 pt-8">
              <div class="text-center" data-aos="fade-up" data-aos-delay="100">
                <div class="text-4xl font-bold text-green-600 mb-2">{{ years }}+</div>
                <div class="text-gray-600">年品牌历程</div>
              </div>
              <div class="text-center" data-aos="fade-up" data-aos-delay="200">
                <div class="text-4xl font-bold text-orange-600 mb-2">{{ stores }}+</div>
                <div class="text-gray-600">家连锁门店</div>
              </div>
              <div class="text-center" data-aos="fade-up" data-aos-delay="300">
                <div class="text-4xl font-bold text-yellow-600 mb-2">{{ customers }}万+</div>
                <div class="text-gray-600">服务顾客</div>
              </div>
            </div>

            <div class="flex gap-4 pt-4">
              <router-link to="/franchise" class="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                加盟合作
              </router-link>
              <router-link to="/contact" class="px-8 py-4 border-2 border-green-500 text-green-600 rounded-xl font-medium hover:bg-green-50 transition-all duration-300">
                联系我们
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- 滚动提示 -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>

    <!-- 创业历程时间轴 - 炫技重点 -->
    <section ref="timelineSection" class="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 opacity-40">
        <div class="absolute top-1/4 left-0 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"></div>
      </div>

      <div class="container relative z-10 mx-auto px-6">
        <div class="text-center mb-20">
          <div class="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4" data-aos="fade-up">
            发展历程
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-aos="fade-up" data-aos-delay="100">品牌成长之路</h2>
          <p class="text-xl text-gray-600" data-aos="fade-up" data-aos-delay="200">从一家小店到连锁品牌的蜕变</p>
        </div>

        <!-- 垂直时间轴 -->
        <div class="max-w-5xl mx-auto relative">
          <!-- 中央竖线 -->
          <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 via-orange-400 to-yellow-400 hidden md:block"></div>

          <!-- 时间轴节点 -->
          <div class="space-y-24">
            <!-- 2004 - 品牌创立 -->
            <div class="timeline-item relative" data-aos="fade-up">
              <div class="flex flex-col md:flex-row items-center gap-8">
                <!-- 左侧内容 -->
                <div class="flex-1 md:text-right">
                  <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div class="text-5xl font-bold text-green-600 mb-4">2004</div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-3">品牌创立</h3>
                    <p class="text-gray-600 leading-relaxed">
                      首家门店在温州市区开业，引入台湾正宗便当制作工艺。
                      坚持每日新鲜食材配送，手工烹制每一份便当。
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2 md:justify-end">
                      <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">台湾工艺</span>
                      <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">手工烹制</span>
                    </div>
                  </div>
                </div>

                <!-- 中央节点 -->
                <div class="relative flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg z-10">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                </div>

                <!-- 右侧占位 -->
                <div class="flex-1 hidden md:block"></div>
              </div>
            </div>

            <!-- 2008 - 品质升级 -->
            <div class="timeline-item relative" data-aos="fade-up" data-aos-delay="100">
              <div class="flex flex-col md:flex-row items-center gap-8">
                <!-- 左侧占位 -->
                <div class="flex-1 hidden md:block"></div>

                <!-- 中央节点 -->
                <div class="relative flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg z-10">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                </div>

                <!-- 右侧内容 -->
                <div class="flex-1">
                  <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div class="text-5xl font-bold text-orange-600 mb-4">2008</div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-3">品质升级</h3>
                    <p class="text-gray-600 leading-relaxed">
                      建立中央厨房，引入ISO22000食品安全管理体系。
                      与台湾知名食材供应商建立长期合作关系。
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                      <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">ISO认证</span>
                      <span class="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">中央厨房</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 2012 - 快速扩张 -->
            <div class="timeline-item relative" data-aos="fade-up" data-aos-delay="200">
              <div class="flex flex-col md:flex-row items-center gap-8">
                <!-- 左侧内容 -->
                <div class="flex-1 md:text-right">
                  <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div class="text-5xl font-bold text-yellow-600 mb-4">2012</div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-3">快速扩张</h3>
                    <p class="text-gray-600 leading-relaxed">
                      门店数量突破100家，覆盖浙江、江苏、上海等华东地区。
                      推出"东池外卖"服务，开启线上线下融合模式。
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2 md:justify-end">
                      <span class="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">100+门店</span>
                      <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">线上线下</span>
                    </div>
                  </div>
                </div>

                <!-- 中央节点 -->
                <div class="relative flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg z-10">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>

                <!-- 右侧占位 -->
                <div class="flex-1 hidden md:block"></div>
              </div>
            </div>

            <!-- 2018 - 品牌升级 -->
            <div class="timeline-item relative" data-aos="fade-up" data-aos-delay="300">
              <div class="flex flex-col md:flex-row items-center gap-8">
                <!-- 左侧占位 -->
                <div class="flex-1 hidden md:block"></div>

                <!-- 中央节点 -->
                <div class="relative flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg z-10">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>

                <!-- 右侧内容 -->
                <div class="flex-1">
                  <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div class="text-5xl font-bold text-gradient mb-4">2018</div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-3">品牌升级</h3>
                    <p class="text-gray-600 leading-relaxed">
                      启动"健康中国"战略，推出低脂、低糖、高蛋白系列产品。
                      获得"中国餐饮百强企业"称号。
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                      <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">健康战略</span>
                      <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">百强企业</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 2022 - 数字化转型 -->
            <div class="timeline-item relative" data-aos="fade-up" data-aos-delay="400">
              <div class="flex flex-col md:flex-row items-center gap-8">
                <!-- 左侧内容 -->
                <div class="flex-1 md:text-right">
                  <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div class="text-5xl font-bold text-blue-600 mb-4">2022</div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-3">数字化转型</h3>
                    <p class="text-gray-600 leading-relaxed">
                      上线智能点餐系统，引入AI食材配送优化。
                      推出"东池会员"APP，打造私域流量池。
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2 md:justify-end">
                      <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">AI技术</span>
                      <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">私域运营</span>
                    </div>
                  </div>
                </div>

                <!-- 中央节点 -->
                <div class="relative flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg z-10">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>

                <!-- 右侧占位 -->
                <div class="flex-1 hidden md:block"></div>
              </div>
            </div>

            <!-- 2025 - 全国布局 -->
            <div class="timeline-item relative" data-aos="fade-up" data-aos-delay="500">
              <div class="flex flex-col md:flex-row items-center gap-8">
                <!-- 左侧占位 -->
                <div class="flex-1 hidden md:block"></div>

                <!-- 中央节点 -->
                <div class="relative flex-shrink-0 w-20 h-20 bg-gradient-to-br from-green-400 via-orange-400 to-yellow-400 rounded-full flex items-center justify-center shadow-2xl z-10 animate-pulse">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                </div>

                <!-- 右侧内容 -->
                <div class="flex-1">
                  <div class="bg-gradient-to-br from-green-50 via-orange-50 to-yellow-50 p-8 rounded-2xl shadow-2xl border-2 border-green-400/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                    <div class="text-5xl font-bold text-gradient mb-4">2025</div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-3">全国布局 · 持续创新</h3>
                    <p class="text-gray-600 leading-relaxed mb-4">
                      门店突破500家，覆盖全国100+城市。
                      服务超过1000万顾客，日销售额突破50000份。
                      持续创新，致力于成为中国便当行业领导品牌。
                    </p>
                    <div class="grid grid-cols-3 gap-4 mt-6">
                      <div class="text-center">
                        <div class="text-3xl font-bold text-green-600">500+</div>
                        <div class="text-sm text-gray-600">门店数量</div>
                      </div>
                      <div class="text-center">
                        <div class="text-3xl font-bold text-orange-600">100+</div>
                        <div class="text-sm text-gray-600">覆盖城市</div>
                      </div>
                      <div class="text-center">
                        <div class="text-3xl font-bold text-yellow-600">1000万+</div>
                        <div class="text-sm text-gray-600">服务顾客</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 企业文化价值观 -->
    <section class="relative py-20 bg-gradient-to-b from-white to-green-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4" data-aos="fade-up">
            企业文化
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-aos="fade-up" data-aos-delay="100">核心价值观</h2>
          <p class="text-xl text-gray-600" data-aos="fade-up" data-aos-delay="200">我们坚守的信念与追求</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- 价值观1 -->
          <div class="group relative" data-aos="fade-up" data-aos-delay="100">
            <div class="relative h-full p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl border-2 border-green-100 hover:border-green-400 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2">
              <div class="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-500">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">用心服务</h3>
              <p class="text-gray-600 leading-relaxed">以顾客为中心，用心烹制每一份便当，让美味传递温暖与关怀。</p>
            </div>
          </div>

          <!-- 价值观2 -->
          <div class="group relative" data-aos="fade-up" data-aos-delay="200">
            <div class="relative h-full p-8 bg-gradient-to-br from-orange-50 to-white rounded-2xl border-2 border-orange-100 hover:border-orange-400 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2">
              <div class="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-500">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">品质第一</h3>
              <p class="text-gray-600 leading-relaxed">严选食材，精湛工艺，坚守品质标准，为顾客提供安全健康的美食。</p>
            </div>
          </div>

          <!-- 价值观3 -->
          <div class="group relative" data-aos="fade-up" data-aos-delay="300">
            <div class="relative h-full p-8 bg-gradient-to-br from-yellow-50 to-white rounded-2xl border-2 border-yellow-100 hover:border-yellow-400 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2">
              <div class="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-500">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">持续创新</h3>
              <p class="text-gray-600 leading-relaxed">不断研发新品，拥抱新技术，引领行业发展，创造更大价值。</p>
            </div>
          </div>

          <!-- 价值观4 -->
          <div class="group relative" data-aos="fade-up" data-aos-delay="400">
            <div class="relative h-full p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-blue-100 hover:border-blue-400 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-500">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">共同成长</h3>
              <p class="text-gray-600 leading-relaxed">与员工、加盟商、供应商携手并进，实现互利共赢，共创美好未来。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 品牌视频展示 -->
    <section class="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div class="container relative z-10 mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4" data-aos="fade-up">
            品牌视频
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up" data-aos-delay="100">见证东池的故事</h2>
          <p class="text-xl text-gray-300" data-aos="fade-up" data-aos-delay="200">从食材到便当，从坚守到传承</p>
        </div>

        <div class="max-w-5xl mx-auto">
          <!-- 视频播放器 -->
          <div class="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group" data-aos="zoom-in">
            <!-- HTML5视频播放器 -->
            <video
              ref="brandVideo"
              class="w-full h-full object-cover"
              controls
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2322c55e;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%23f97316;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23eab308;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1920' height='1080' fill='url(%23grad)'/%3E%3Ctext x='960' y='500' font-family='Arial' font-size='72' fill='white' text-anchor='middle' font-weight='bold'%3E东池便当%3C/text%3E%3Ctext x='960' y='600' font-family='Arial' font-size='36' fill='white' text-anchor='middle' opacity='0.9'%3E品牌宣传视频%3C/text%3E%3C/svg%3E"
              preload="metadata"
            >
              <source src="/videos/brand-story.mp4" type="video/mp4">
              您的浏览器不支持视频播放，请升级浏览器。
            </video>

            <!-- 自定义播放按钮覆盖层（视频暂停时显示） -->
            <div
              v-if="!isVideoPlaying"
              class="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer transition-opacity duration-300 hover:bg-black/40"
              @click="playVideo"
            >
              <div class="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300">
                <svg class="w-12 h-12 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- 视频描述 -->
          <div class="mt-12 grid md:grid-cols-3 gap-8">
            <div class="text-center" data-aos="fade-up" data-aos-delay="100">
              <div class="w-12 h-12 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h4 class="text-lg font-bold mb-2">21年坚守</h4>
              <p class="text-gray-300 text-sm">从2004到2025，初心不改</p>
            </div>

            <div class="text-center" data-aos="fade-up" data-aos-delay="200">
              <div class="w-12 h-12 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                </svg>
              </div>
              <h4 class="text-lg font-bold mb-2">台湾工艺</h4>
              <p class="text-gray-300 text-sm">传承正宗台湾便当文化</p>
            </div>

            <div class="text-center" data-aos="fade-up" data-aos-delay="300">
              <div class="w-12 h-12 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h4 class="text-lg font-bold mb-2">用心烹制</h4>
              <p class="text-gray-300 text-sm">每一份都充满温度</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 荣誉墙 -->
    <section class="relative py-20 bg-gradient-to-br from-orange-50 to-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium mb-4" data-aos="fade-up">
            荣誉墙
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-aos="fade-up" data-aos-delay="100">荣耀时刻</h2>
          <p class="text-xl text-gray-600" data-aos="fade-up" data-aos-delay="200">见证品牌成长的每一步</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 荣誉1 -->
          <div class="group" data-aos="flip-left" data-aos-delay="100">
            <div class="relative h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div class="absolute top-4 right-4">
                <div class="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                  </svg>
                </div>
              </div>

              <div class="pt-8">
                <div class="text-sm text-gray-500 mb-2">2018年</div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">中国餐饮百强企业</h3>
                <p class="text-gray-600 leading-relaxed">由中国烹饪协会授予，表彰在餐饮行业的卓越贡献与影响力。</p>
              </div>

              <!-- 证书图标占位 -->
              <div class="mt-6 h-40 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center">
                <svg class="w-16 h-16 text-yellow-600/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- 荣誉2 -->
          <div class="group" data-aos="flip-left" data-aos-delay="200">
            <div class="relative h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div class="absolute top-4 right-4">
                <div class="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                  </svg>
                </div>
              </div>

              <div class="pt-8">
                <div class="text-sm text-gray-500 mb-2">2020年</div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">ISO22000食品安全认证</h3>
                <p class="text-gray-600 leading-relaxed">通过国际食品安全管理体系认证，保障食品安全与质量。</p>
              </div>

              <div class="mt-6 h-40 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
                <svg class="w-16 h-16 text-green-600/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- 荣誉3 -->
          <div class="group" data-aos="flip-left" data-aos-delay="300">
            <div class="relative h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div class="absolute top-4 right-4">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                  </svg>
                </div>
              </div>

              <div class="pt-8">
                <div class="text-sm text-gray-500 mb-2">2021年</div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">中国连锁经营优秀品牌</h3>
                <p class="text-gray-600 leading-relaxed">由中国连锁经营协会颁发，认可在连锁运营方面的卓越表现。</p>
              </div>

              <div class="mt-6 h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                <svg class="w-16 h-16 text-blue-600/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- 荣誉4 -->
          <div class="group" data-aos="flip-left" data-aos-delay="400">
            <div class="relative h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div class="absolute top-4 right-4">
                <div class="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-600 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                  </svg>
                </div>
              </div>

              <div class="pt-8">
                <div class="text-sm text-gray-500 mb-2">2023年</div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">浙江省著名商标</h3>
                <p class="text-gray-600 leading-relaxed">获得浙江省工商行政管理局认定的著名商标称号。</p>
              </div>

              <div class="mt-6 h-40 bg-gradient-to-br from-red-100 to-pink-100 rounded-xl flex items-center justify-center">
                <svg class="w-16 h-16 text-red-600/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- 荣誉5 -->
          <div class="group" data-aos="flip-left" data-aos-delay="500">
            <div class="relative h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div class="absolute top-4 right-4">
                <div class="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                  </svg>
                </div>
              </div>

              <div class="pt-8">
                <div class="text-sm text-gray-500 mb-2">2024年</div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">年度最受消费者喜爱品牌</h3>
                <p class="text-gray-600 leading-relaxed">由权威媒体评选，体现消费者对品牌的高度认可与信赖。</p>
              </div>

              <div class="mt-6 h-40 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center">
                <svg class="w-16 h-16 text-orange-600/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- 荣誉6 -->
          <div class="group" data-aos="flip-left" data-aos-delay="600">
            <div class="relative h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div class="absolute top-4 right-4">
                <div class="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                  </svg>
                </div>
              </div>

              <div class="pt-8">
                <div class="text-sm text-gray-500 mb-2">2025年</div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">绿色餐饮企业</h3>
                <p class="text-gray-600 leading-relaxed">因积极践行环保理念，使用可降解包材获得绿色餐饮认证。</p>
              </div>

              <div class="mt-6 h-40 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center">
                <svg class="w-16 h-16 text-indigo-600/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA区域 -->
    <section class="relative py-20 bg-gradient-to-r from-green-600 via-orange-500 to-yellow-500 text-white overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div class="container relative z-10 mx-auto px-6 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6" data-aos="zoom-in">加入东池大家庭</h2>
        <p class="text-xl mb-10 max-w-2xl mx-auto" data-aos="zoom-in" data-aos-delay="100">
          与我们一起传承台湾便当文化，共创美好未来
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center" data-aos="zoom-in" data-aos-delay="200">
          <router-link to="/franchise" class="px-10 py-5 bg-white text-green-600 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
            了解加盟
          </router-link>
          <router-link to="/contact" class="px-10 py-5 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
            联系我们
          </router-link>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navigation from '@/components/layout/Navigation.vue'
import Footer from '@/components/layout/Footer.vue'
import Breadcrumb from '@/components/shared/Breadcrumb.vue'
import ParticleBackground from '@/components/shared/ParticleBackground.vue'
import MouseFollower from '@/components/shared/MouseFollower.vue'
import ScrollProgress from '@/components/shared/ScrollProgress.vue'
import BackToTop from '@/components/shared/BackToTop.vue'

// 数据
const years = ref(0)
const stores = ref(0)
const customers = ref(0)

// 视频播放器
const brandVideo = ref(null)
const isVideoPlaying = ref(false)

// 数字动画
const animateValue = (ref, start, end, duration) => {
  let startTimestamp = null
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    ref.value = Math.floor(progress * (end - start) + start)
    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }
  window.requestAnimationFrame(step)
}

// 视频播放控制
const playVideo = () => {
  if (brandVideo.value) {
    brandVideo.value.play()
    isVideoPlaying.value = true
  }
}

// 监听视频播放状态
const setupVideoListeners = () => {
  if (brandVideo.value) {
    brandVideo.value.addEventListener('play', () => {
      isVideoPlaying.value = true
    })
    brandVideo.value.addEventListener('pause', () => {
      isVideoPlaying.value = false
    })
    brandVideo.value.addEventListener('ended', () => {
      isVideoPlaying.value = false
    })
  }
}

onMounted(() => {
  // 初始化AOS动画
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  })

  // 启动数字滚动动画
  setTimeout(() => {
    animateValue(years, 0, 21, 2000)
    animateValue(stores, 0, 500, 2000)
    animateValue(customers, 0, 1000, 2000)
  }, 500)

  // 设置视频监听器
  setTimeout(() => {
    setupVideoListeners()
  }, 1000)
})
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(to right, #22c55e, #f97316);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

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

/* 时间轴动画 */
.timeline-item {
  opacity: 0;
  animation: fadeInUp 0.8s forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
