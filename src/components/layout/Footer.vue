<template>
  <footer class="relative bg-gradient-to-br from-[#8BC34A] via-[#689F38] to-[#7CB342] text-white">
    <!-- 波浪顶部装饰 - 参考蜜雪冰城 -->
    <div class="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-full">
      <svg class="relative block w-full h-24" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path
          d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          class="fill-[#8BC34A]"
        ></path>
      </svg>
    </div>

    <div class="relative z-10 container mx-auto px-6 pt-20 pb-8">
      <!-- 主要内容区 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <!-- 品牌介绍 -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold">东池便当</h3>
          </div>
          <p class="text-white/90 text-sm leading-relaxed mb-4">
            台湾风味 · 温州情怀<br />
            良心良食 健康东池
          </p>
          <div class="flex flex-col gap-2 text-sm text-white/80">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
              </svg>
              <span>创立于2004年</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              <span>600+连锁门店</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
              </svg>
              <span>覆盖100+城市</span>
            </div>
          </div>
        </div>

        <!-- 快速链接 -->
        <div>
          <h3 class="text-lg font-bold mb-6 flex items-center gap-2">
            <div class="w-1 h-6 bg-[#FF9800] rounded-full"></div>
            快速链接
          </h3>
          <ul class="space-y-3 text-sm">
            <li><router-link to="/" class="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">首页</router-link></li>
            <li><router-link to="/about" class="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">关于我们</router-link></li>
            <li><router-link to="/products" class="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">产品中心</router-link></li>
            <li><router-link to="/quality" class="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">品质保障</router-link></li>
            <li><router-link to="/franchise" class="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">加盟合作</router-link></li>
            <li><router-link to="/stores" class="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">门店查询</router-link></li>
            <li><router-link to="/news" class="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">新闻资讯</router-link></li>
            <li><router-link to="/contact" class="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">联系我们</router-link></li>
          </ul>
        </div>

        <!-- 联系方式 -->
        <div>
          <h3 class="text-lg font-bold mb-6 flex items-center gap-2">
            <div class="w-1 h-6 bg-[#FF9800] rounded-full"></div>
            联系我们
          </h3>
          <ul class="space-y-4 text-sm">
            <li>
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-[#FF9800] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <div>
                  <div class="text-white/60 text-xs mb-1">客服热线</div>
                  <a href="tel:400-8598898" class="text-white font-bold hover:text-[#FF9800] transition-colors">400-8598898</a>
                </div>
              </div>
            </li>
            <li>
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-[#FF9800] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <div>
                  <div class="text-white/60 text-xs mb-1">企业邮箱</div>
                  <a href="mailto:service@dongchi.com" class="text-white hover:text-[#FF9800] transition-colors break-all">service@dongchi.com</a>
                </div>
              </div>
            </li>
            <li>
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-[#FF9800] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                </svg>
                <div>
                  <div class="text-white/60 text-xs mb-1">总部地址</div>
                  <p class="text-white text-sm leading-relaxed">浙江省温州市鹿城区<br>南郊街道划龙桥路655号</p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- 关注我们 -->
        <div>
          <h3 class="text-lg font-bold mb-6 flex items-center gap-2">
            <div class="w-1 h-6 bg-[#FF9800] rounded-full"></div>
            关注我们
          </h3>

          <!-- 二维码区域 -->
          <div class="bg-white/10 backdrop-blur-md rounded-2xl p-4 mb-4">
            <div class="w-32 h-32 bg-white rounded-xl flex items-center justify-center mx-auto mb-3">
              <div class="text-center">
                <svg class="w-20 h-20 text-[#8BC34A] mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h6v6H4V4zm0 10h6v6H4v-6zm10 0h6v6h-6v-6zm0-10h6v6h-6V4zm-8 2h2v2H6V6zm10 0h2v2h-2V6zM6 16h2v2H6v-2zm10 0h2v2h-2v-2z"></path>
                </svg>
                <p class="text-xs text-gray-600 mt-1">扫码关注</p>
              </div>
            </div>
            <p class="text-center text-xs text-white/80">微信公众号</p>
          </div>

          <!-- 社交媒体图标 -->
          <div class="flex gap-3">
            <a href="#" class="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-[#FF9800] transition-all duration-300 group">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
              </svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-[#FF9800] transition-all duration-300">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
              </svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-[#FF9800] transition-all duration-300">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- 分隔线 -->
      <div class="border-t border-white/20 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
          <!-- 版权信息 -->
          <div class="text-center md:text-left">
            <p>© 2004-2025 东池便当. 保留所有权利</p>
            <p class="text-xs mt-1">浙ICP备XXXXXXXX号-1 | 食品经营许可证：XXXXXXXX</p>
          </div>

          <!-- 快速链接 -->
          <div class="flex gap-6 text-xs">
            <a href="#" class="hover:text-white transition-colors">隐私政策</a>
            <a href="#" class="hover:text-white transition-colors">服务条款</a>
            <a href="#" class="hover:text-white transition-colors">网站地图</a>
            <a href="#" class="hover:text-white transition-colors">招聘信息</a>
          </div>
        </div>

        <!-- 品牌理念 -->
        <div class="mt-6 text-center">
          <p class="text-white/90 text-lg font-bold tracking-wider">良心良食 · 健康东池</p>
          <p class="text-white/60 text-xs mt-2">Conscience Food · Healthy Dongchi</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer组件 - 使用东池品牌绿色主色调
</script>

<style scoped>
/* Footer自定义样式 */
</style>
