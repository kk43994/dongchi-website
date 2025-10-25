<template>
  <div class="quality-page">
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
    <section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-orange-50 to-yellow-50">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzhCQzM0QSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16" data-aos="fade-up">
          <h1 class="text-6xl md:text-7xl font-bold mb-6">
            <span class="text-gradient bg-gradient-to-r from-[#8BC34A] to-[#FF9800]">品质保障</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            从田间到舌尖，每一道工序都精益求精<br />
            三级品控体系 · 23道质量监控节点 · 国际认证标准
          </p>
        </div>

        <!-- 品质数据展示 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="glass-effect rounded-3xl p-8 text-center group hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay="100">
            <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#8BC34A] to-[#689F38] flex items-center justify-center shadow-glow">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="text-5xl font-bold text-[#8BC34A] mb-2">600+</div>
            <div class="text-gray-600 text-lg">全国门店</div>
            <div class="text-sm text-gray-500 mt-2">覆盖江浙沪闽</div>
          </div>

          <div class="glass-effect rounded-3xl p-8 text-center group hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay="200">
            <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#FF9800] to-[#F57C00] flex items-center justify-center shadow-glow">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <div class="text-5xl font-bold text-[#FF9800] mb-2">23道</div>
            <div class="text-gray-600 text-lg">质量监控节点</div>
            <div class="text-sm text-gray-500 mt-2">全流程把控</div>
          </div>

          <div class="glass-effect rounded-3xl p-8 text-center group hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay="300">
            <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#4CAF50] to-[#388E3C] flex items-center justify-center shadow-glow">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <div class="text-5xl font-bold text-[#4CAF50] mb-2">2000+</div>
            <div class="text-gray-600 text-lg">员工团队</div>
            <div class="text-sm text-gray-500 mt-2">专业服务保障</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 食材溯源 -->
    <section class="relative py-20 bg-gradient-to-b from-white to-green-50 overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            <span class="text-gradient bg-gradient-to-r from-[#8BC34A] to-[#FF9800]">食材溯源</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            精选优质供应商，建立战略合作基地，每一份食材都有迹可循
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <!-- 左侧：供应链图示 -->
          <div class="relative" data-aos="fade-right">
            <div class="aspect-square rounded-3xl bg-gradient-to-br from-[#8BC34A]/20 to-[#FF9800]/20 p-8 flex items-center justify-center">
              <div class="text-center space-y-8">
                <!-- 农场基地 -->
                <div class="inline-block">
                  <div class="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#8BC34A] to-[#689F38] flex items-center justify-center shadow-xl mb-4">
                    <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div class="font-bold text-lg text-[#8BC34A]">战略合作农场</div>
                  <div class="text-sm text-gray-600 mt-1">浙江一诺农业基地</div>
                </div>

                <!-- 箭头 -->
                <div class="flex justify-center">
                  <svg class="w-8 h-8 text-[#8BC34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                <!-- 中央厨房 -->
                <div class="inline-block">
                  <div class="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#FF9800] to-[#F57C00] flex items-center justify-center shadow-xl mb-4">
                    <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div class="font-bold text-lg text-[#FF9800]">中央厨房</div>
                  <div class="text-sm text-gray-600 mt-1">标准化生产加工</div>
                </div>

                <!-- 箭头 -->
                <div class="flex justify-center">
                  <svg class="w-8 h-8 text-[#8BC34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                <!-- 门店配送 -->
                <div class="inline-block">
                  <div class="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#4CAF50] to-[#388E3C] flex items-center justify-center shadow-xl mb-4">
                    <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div class="font-bold text-lg text-[#4CAF50]">600+门店</div>
                  <div class="text-sm text-gray-600 mt-1">新鲜送达消费者</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧：溯源特点 -->
          <div class="space-y-6" data-aos="fade-left">
            <div class="flex items-start gap-4 group">
              <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#8BC34A] to-[#689F38] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span class="text-white font-bold text-xl">1</span>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">源头把控</h3>
                <p class="text-gray-600 leading-relaxed">
                  与浙江一诺农业科技有限公司建立战略合作，提供"跑步鸡"系列优质食材，建立东池控股集采合作基地，确保食材新鲜健康。
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4 group">
              <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF9800] to-[#F57C00] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span class="text-white font-bold text-xl">2</span>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">三级品控</h3>
                <p class="text-gray-600 leading-relaxed">
                  建立三级品控体系，从源头供应商资质认证，到中央厨房加工检测，再到门店出品温度监控，层层把关食品安全。
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4 group">
              <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#4CAF50] to-[#388E3C] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span class="text-white font-bold text-xl">3</span>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">全程追溯</h3>
                <p class="text-gray-600 leading-relaxed">
                  每批次食材均可追溯来源，记录采购时间、检验报告、运输条件等关键信息，确保食品安全责任可查可追。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 制作流程可视化 -->
    <section class="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            <span class="text-gradient bg-gradient-to-r from-[#8BC34A] to-[#FF9800]">制作流程</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            中央厨房标准化作业，23道质量监控节点，确保每一份便当品质如一
          </p>
        </div>

        <!-- 8步制作流程 -->
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Step 1 -->
            <div class="relative group" data-aos="fade-up" data-aos-delay="100">
              <div class="glass-effect rounded-2xl p-6 h-full hover:shadow-2xl transition-all duration-300">
                <div class="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#8BC34A] to-[#689F38] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span class="text-white font-bold text-xl">1</span>
                </div>
                <div class="mt-4 mb-4">
                  <div class="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#8BC34A]/20 to-[#689F38]/20 flex items-center justify-center">
                    <svg class="w-8 h-8 text-[#8BC34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                </div>
                <h3 class="text-lg font-bold text-gray-800 mb-2 text-center">原料验收</h3>
                <p class="text-sm text-gray-600 text-center leading-relaxed">
                  检查供应商资质、产品合格证、温度记录等
                </p>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="relative group" data-aos="fade-up" data-aos-delay="200">
              <div class="glass-effect rounded-2xl p-6 h-full hover:shadow-2xl transition-all duration-300">
                <div class="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#8BC34A] to-[#689F38] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span class="text-white font-bold text-xl">2</span>
                </div>
                <div class="mt-4 mb-4">
                  <div class="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#8BC34A]/20 to-[#689F38]/20 flex items-center justify-center">
                    <svg class="w-8 h-8 text-[#8BC34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>
                <h3 class="text-lg font-bold text-gray-800 mb-2 text-center">分类储存</h3>
                <p class="text-sm text-gray-600 text-center leading-relaxed">
                  肉类、蔬菜、调料分区存放，温湿度实时监控
                </p>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="relative group" data-aos="fade-up" data-aos-delay="300">
              <div class="glass-effect rounded-2xl p-6 h-full hover:shadow-2xl transition-all duration-300">
                <div class="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#FF9800] to-[#F57C00] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span class="text-white font-bold text-xl">3</span>
                </div>
                <div class="mt-4 mb-4">
                  <div class="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#FF9800]/20 to-[#F57C00]/20 flex items-center justify-center">
                    <svg class="w-8 h-8 text-[#FF9800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                </div>
                <h3 class="text-lg font-bold text-gray-800 mb-2 text-center">食材清洗</h3>
                <p class="text-sm text-gray-600 text-center leading-relaxed">
                  三道清洗工序，去除农残，保持食材新鲜
                </p>
              </div>
            </div>

            <!-- Step 4 -->
            <div class="relative group" data-aos="fade-up" data-aos-delay="400">
              <div class="glass-effect rounded-2xl p-6 h-full hover:shadow-2xl transition-all duration-300">
                <div class="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#FF9800] to-[#F57C00] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span class="text-white font-bold text-xl">4</span>
                </div>
                <div class="mt-4 mb-4">
                  <div class="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#FF9800]/20 to-[#F57C00]/20 flex items-center justify-center">
                    <svg class="w-8 h-8 text-[#FF9800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                    </svg>
                  </div>
                </div>
                <h3 class="text-lg font-bold text-gray-800 mb-2 text-center">标准切配</h3>
                <p class="text-sm text-gray-600 text-center leading-relaxed">
                  统一规格切配，确保烹饪效果一致
                </p>
              </div>
            </div>

            <!-- Step 5 -->
            <div class="relative group" data-aos="fade-up" data-aos-delay="100">
              <div class="glass-effect rounded-2xl p-6 h-full hover:shadow-2xl transition-all duration-300">
                <div class="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#FF9800] to-[#F57C00] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span class="text-white font-bold text-xl">5</span>
                </div>
                <div class="mt-4 mb-4">
                  <div class="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#FF9800]/20 to-[#F57C00]/20 flex items-center justify-center">
                    <svg class="w-8 h-8 text-[#FF9800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    </svg>
                  </div>
                </div>
                <h3 class="text-lg font-bold text-gray-800 mb-2 text-center">精准烹饪</h3>
                <p class="text-sm text-gray-600 text-center leading-relaxed">
                  标准化配方，精确温度时间控制
                </p>
              </div>
            </div>

            <!-- Step 6 -->
            <div class="relative group" data-aos="fade-up" data-aos-delay="200">
              <div class="glass-effect rounded-2xl p-6 h-full hover:shadow-2xl transition-all duration-300">
                <div class="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#4CAF50] to-[#388E3C] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span class="text-white font-bold text-xl">6</span>
                </div>
                <div class="mt-4 mb-4">
                  <div class="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#4CAF50]/20 to-[#388E3C]/20 flex items-center justify-center">
                    <svg class="w-8 h-8 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                </div>
                <h3 class="text-lg font-bold text-gray-800 mb-2 text-center">品质检测</h3>
                <p class="text-sm text-gray-600 text-center leading-relaxed">
                  出品前温度、色泽、口感三重检测
                </p>
              </div>
            </div>

            <!-- Step 7 -->
            <div class="relative group" data-aos="fade-up" data-aos-delay="300">
              <div class="glass-effect rounded-2xl p-6 h-full hover:shadow-2xl transition-all duration-300">
                <div class="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#4CAF50] to-[#388E3C] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span class="text-white font-bold text-xl">7</span>
                </div>
                <div class="mt-4 mb-4">
                  <div class="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#4CAF50]/20 to-[#388E3C]/20 flex items-center justify-center">
                    <svg class="w-8 h-8 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                </div>
                <h3 class="text-lg font-bold text-gray-800 mb-2 text-center">环保包装</h3>
                <p class="text-sm text-gray-600 text-center leading-relaxed">
                  环保木盒包装，保温保鲜又环保
                </p>
              </div>
            </div>

            <!-- Step 8 -->
            <div class="relative group" data-aos="fade-up" data-aos-delay="400">
              <div class="glass-effect rounded-2xl p-6 h-full hover:shadow-2xl transition-all duration-300">
                <div class="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#4CAF50] to-[#388E3C] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span class="text-white font-bold text-xl">8</span>
                </div>
                <div class="mt-4 mb-4">
                  <div class="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#4CAF50]/20 to-[#388E3C]/20 flex items-center justify-center">
                    <svg class="w-8 h-8 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h3 class="text-lg font-bold text-gray-800 mb-2 text-center">快速配送</h3>
                <p class="text-sm text-gray-600 text-center leading-relaxed">
                  专业配送团队，30分钟新鲜送达
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 环保包材 -->
    <section class="relative py-20 bg-gradient-to-b from-white to-orange-50 overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- 左侧：环保理念 -->
            <div data-aos="fade-right">
              <h2 class="text-4xl md:text-5xl font-bold mb-6">
                <span class="text-gradient bg-gradient-to-r from-[#8BC34A] to-[#4CAF50]">环保包材</span>
              </h2>
              <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                采用环保木盒包装，减少塑料使用，为地球环保贡献力量
              </p>

              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#8BC34A] to-[#689F38] flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-gray-800 mb-2">天然木材</h3>
                    <p class="text-gray-600 leading-relaxed">
                      使用可降解天然木材制作餐盒，100%可回收利用，减少白色污染
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#8BC34A] to-[#689F38] flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-gray-800 mb-2">保温保鲜</h3>
                    <p class="text-gray-600 leading-relaxed">
                      木盒天然保温性能优异，确保便当送达时温度适宜，口感最佳
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#8BC34A] to-[#689F38] flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-gray-800 mb-2">安全健康</h3>
                    <p class="text-gray-600 leading-relaxed">
                      无化学涂层，无异味，食品直接接触更安全，守护每一位顾客的健康
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 右侧：可视化数据 -->
            <div class="relative" data-aos="fade-left">
              <div class="glass-effect rounded-3xl p-8">
                <div class="text-center mb-8">
                  <div class="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#8BC34A] to-[#4CAF50] text-white font-semibold mb-4">
                    环保成果
                  </div>
                </div>

                <div class="space-y-8">
                  <!-- 环保数据1 -->
                  <div>
                    <div class="flex justify-between items-center mb-2">
                      <span class="text-gray-700 font-semibold">塑料减排量</span>
                      <span class="text-2xl font-bold text-[#8BC34A]">100%</span>
                    </div>
                    <div class="h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div class="h-full bg-gradient-to-r from-[#8BC34A] to-[#4CAF50] rounded-full" style="width: 100%"></div>
                    </div>
                    <p class="text-sm text-gray-500 mt-1">全部使用木质餐盒</p>
                  </div>

                  <!-- 环保数据2 -->
                  <div>
                    <div class="flex justify-between items-center mb-2">
                      <span class="text-gray-700 font-semibold">可降解率</span>
                      <span class="text-2xl font-bold text-[#8BC34A]">100%</span>
                    </div>
                    <div class="h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div class="h-full bg-gradient-to-r from-[#8BC34A] to-[#4CAF50] rounded-full" style="width: 100%"></div>
                    </div>
                    <p class="text-sm text-gray-500 mt-1">天然材料自然降解</p>
                  </div>

                  <!-- 环保数据3 -->
                  <div>
                    <div class="flex justify-between items-center mb-2">
                      <span class="text-gray-700 font-semibold">包装回收率</span>
                      <span class="text-2xl font-bold text-[#8BC34A]">85%</span>
                    </div>
                    <div class="h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div class="h-full bg-gradient-to-r from-[#8BC34A] to-[#4CAF50] rounded-full" style="width: 85%"></div>
                    </div>
                    <p class="text-sm text-gray-500 mt-1">顾客主动参与回收</p>
                  </div>

                  <!-- 环保承诺 -->
                  <div class="mt-8 p-6 rounded-2xl bg-gradient-to-br from-[#8BC34A]/10 to-[#4CAF50]/10">
                    <div class="flex items-center gap-3 mb-3">
                      <svg class="w-6 h-6 text-[#8BC34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h4 class="font-bold text-gray-800">环保承诺</h4>
                    </div>
                    <p class="text-gray-600 text-sm leading-relaxed">
                      我们承诺持续优化包装材料，探索更多环保方案，为子孙后代留下一个更美好的地球。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 食安认证体系 -->
    <section class="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            <span class="text-gradient bg-gradient-to-r from-[#8BC34A] to-[#FF9800]">食品安全认证</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            通过国际权威认证，建立完善的食品安全管理体系
          </p>
        </div>

        <div class="max-w-6xl mx-auto">
          <!-- 认证证书展示 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <!-- ISO 22000 -->
            <div class="glass-effect rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 group" data-aos="fade-right">
              <div class="flex items-start gap-6">
                <div class="flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#8BC34A] to-[#689F38] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold text-gray-800 mb-2">ISO 22000</h3>
                  <p class="text-[#8BC34A] font-semibold mb-3">食品安全管理体系认证</p>
                  <p class="text-gray-600 text-sm leading-relaxed mb-4">
                    ISO 22000是国际标准化组织发布的食品安全管理体系标准，涵盖食品链全过程的各类组织，确保从"农场到餐桌"的食品安全。
                  </p>
                  <div class="flex items-center gap-2">
                    <span class="px-3 py-1 rounded-full bg-[#8BC34A]/10 text-[#8BC34A] text-xs font-semibold">国际认可</span>
                    <span class="px-3 py-1 rounded-full bg-[#8BC34A]/10 text-[#8BC34A] text-xs font-semibold">全流程管控</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- HACCP -->
            <div class="glass-effect rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 group" data-aos="fade-left">
              <div class="flex items-start gap-6">
                <div class="flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#FF9800] to-[#F57C00] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold text-gray-800 mb-2">HACCP</h3>
                  <p class="text-[#FF9800] font-semibold mb-3">危害分析与关键控制点体系</p>
                  <p class="text-gray-600 text-sm leading-relaxed mb-4">
                    HACCP是国际食品法典委员会、美国FDA、欧盟等权威机构推荐的食品安全标准，通过识别、评估和控制食品安全危害。
                  </p>
                  <div class="flex items-center gap-2">
                    <span class="px-3 py-1 rounded-full bg-[#FF9800]/10 text-[#FF9800] text-xs font-semibold">预防为主</span>
                    <span class="px-3 py-1 rounded-full bg-[#FF9800]/10 text-[#FF9800] text-xs font-semibold">科学管理</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 认证体系说明 -->
          <div class="glass-effect rounded-3xl p-8" data-aos="fade-up">
            <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">完善的食品安全管理体系</h3>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="text-center">
                <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#8BC34A]/20 to-[#689F38]/20 flex items-center justify-center">
                  <span class="text-3xl font-bold text-[#8BC34A]">1</span>
                </div>
                <h4 class="font-bold text-gray-800 mb-2">原料采购控制</h4>
                <p class="text-sm text-gray-600 leading-relaxed">
                  严格筛选供应商，建立供应商资质档案，确保源头食材安全可靠
                </p>
              </div>

              <div class="text-center">
                <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#FF9800]/20 to-[#F57C00]/20 flex items-center justify-center">
                  <span class="text-3xl font-bold text-[#FF9800]">2</span>
                </div>
                <h4 class="font-bold text-gray-800 mb-2">生产过程管控</h4>
                <p class="text-sm text-gray-600 leading-relaxed">
                  23道质量监控节点，关键控制点实时记录，确保加工过程规范
                </p>
              </div>

              <div class="text-center">
                <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#4CAF50]/20 to-[#388E3C]/20 flex items-center justify-center">
                  <span class="text-3xl font-bold text-[#4CAF50]">3</span>
                </div>
                <h4 class="font-bold text-gray-800 mb-2">出品质量检测</h4>
                <p class="text-sm text-gray-600 leading-relaxed">
                  门店出品温度检测，定期食品安全培训，保障终端产品品质
                </p>
              </div>
            </div>

            <!-- 培训课程说明 -->
            <div class="mt-8 p-6 rounded-2xl bg-gradient-to-br from-[#8BC34A]/10 to-[#FF9800]/10">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <svg class="w-8 h-8 text-[#8BC34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-gray-800 mb-2">食品安全管理课程</h4>
                  <p class="text-gray-600 text-sm leading-relaxed">
                    针对加盟商和员工，我们特别开发了食品安全管理课程，涵盖《食品安全法》、操作规范、应急处理等内容，确保每家门店符合国家食品安全标准，共同维护品牌市场信誉。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA区域 -->
    <section class="relative py-20 bg-gradient-to-br from-[#8BC34A] to-[#FF9800] overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center text-white">
          <h2 class="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
            品质保障，值得信赖
          </h2>
          <p class="text-xl mb-12 opacity-90" data-aos="fade-up" data-aos-delay="100">
            ISO 22000 + HACCP 双认证体系，600+门店共同见证
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
            <router-link
              to="/products"
              class="px-8 py-4 bg-white text-[#8BC34A] rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              查看产品
            </router-link>
            <router-link
              to="/franchise"
              class="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-[#8BC34A] transition-all duration-300 hover:scale-105"
            >
              加盟合作
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import AOS from 'aos'
import Navigation from '@/components/layout/Navigation.vue'
import Footer from '@/components/layout/Footer.vue'
import Breadcrumb from '@/components/shared/Breadcrumb.vue'
import ParticleBackground from '@/components/shared/ParticleBackground.vue'
import MouseFollower from '@/components/shared/MouseFollower.vue'
import ScrollProgress from '@/components/shared/ScrollProgress.vue'
import BackToTop from '@/components/shared/BackToTop.vue'

onMounted(() => {
  // 初始化AOS动画
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100
  })
})

onUnmounted(() => {
  AOS.refresh()
})
</script>

<style scoped>
/* Glassmorphism效果 */
.glass-effect {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* 渐变文字 */
.text-gradient {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 光晕效果 */
.shadow-glow {
  box-shadow: 0 0 20px rgba(139, 195, 74, 0.3);
}
</style>
