<template>
  <section class="relative py-20 overflow-hidden bg-gradient-to-b from-white via-green-50 to-white">
    <!-- 视差背景装饰元素 -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <!-- 浮动圆形装饰 -->
      <div ref="circle1" class="absolute w-96 h-96 rounded-full bg-gradient-to-br from-[#8BC34A]/20 to-[#FF9800]/20 blur-3xl" style="top: 10%; left: -10%;"></div>
      <div ref="circle2" class="absolute w-96 h-96 rounded-full bg-gradient-to-br from-[#FF9800]/20 to-[#8BC34A]/20 blur-3xl" style="top: 60%; right: -10%;"></div>
      <div ref="circle3" class="absolute w-64 h-64 rounded-full bg-gradient-to-br from-[#8BC34A]/10 to-[#FF9800]/10 blur-2xl" style="top: 30%; right: 20%;"></div>
    </div>

    <div class="relative z-10 container mx-auto px-6">
      <!-- 标题区 -->
      <div class="text-center mb-24" data-aos="fade-up">
        <div class="inline-block mb-4">
          <span class="text-[#8BC34A] text-sm font-bold tracking-widest uppercase">Brand Philosophy</span>
        </div>
        <h2 class="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          <span class="bg-gradient-to-r from-[#8BC34A] via-[#689F38] to-[#FF9800] bg-clip-text text-transparent">
            良心良食
          </span>
          <br />
          <span class="text-gray-900">健康东池</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          20年匠心坚守，从台湾到温州，从一家小店到500+连锁门店<br />
          我们始终坚持用良心做良食，为每一位顾客提供健康美味的便当
        </p>
      </div>

      <!-- 核心理念卡片 - 视差滚动效果 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto mb-32">
        <!-- 左侧：新鲜食材 -->
        <div ref="card1" class="brand-card relative group">
          <div class="relative bg-white rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100">
            <!-- 图标 -->
            <div class="absolute -top-12 left-12">
              <div class="w-24 h-24 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>

            <div class="mt-16">
              <h3 class="text-3xl font-bold text-gray-900 mb-6 group-hover:text-[#8BC34A] transition-colors duration-300">
                新鲜食材 现点现做
              </h3>
              <p class="text-lg text-gray-600 leading-relaxed mb-6">
                每日凌晨采购新鲜食材，严格把控品质。坚持现点现做，确保每一份便当的口感与营养。从食材到餐桌，我们用心守护每一个环节。
              </p>
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gray-700">每日凌晨3点采购新鲜食材</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gray-700">所有菜品均为现点现做，零库存</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gray-700">严格执行食品安全标准</span>
                </li>
              </ul>
            </div>

            <!-- 悬浮光晕效果 -->
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </div>

        <!-- 右侧：营养均衡 -->
        <div ref="card2" class="brand-card relative group">
          <div class="relative bg-white rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100">
            <!-- 图标 -->
            <div class="absolute -top-12 left-12">
              <div class="w-24 h-24 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
            </div>

            <div class="mt-16">
              <h3 class="text-3xl font-bold text-gray-900 mb-6 group-hover:text-[#8BC34A] transition-colors duration-300">
                营养均衡 健康搭配
              </h3>
              <p class="text-lg text-gray-600 leading-relaxed mb-6">
                专业营养师精心搭配，主食、蛋白质、蔬菜科学配比。不仅美味，更注重营养健康，让每一份便当都成为您健康生活的好伙伴。
              </p>
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-[#8BC34A] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gray-700">专业营养师团队配餐</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-[#8BC34A] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gray-700">科学配比蛋白质、碳水、蔬菜</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-[#8BC34A] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gray-700">低油低盐，健康美味</span>
                </li>
              </ul>
            </div>

            <!-- 悬浮光晕效果 -->
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </div>

        <!-- 左侧：环保理念 -->
        <div ref="card3" class="brand-card relative group">
          <div class="relative bg-white rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100">
            <!-- 图标 -->
            <div class="absolute -top-12 left-12">
              <div class="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>

            <div class="mt-16">
              <h3 class="text-3xl font-bold text-gray-900 mb-6 group-hover:text-[#8BC34A] transition-colors duration-300">
                环保包材 绿色理念
              </h3>
              <p class="text-lg text-gray-600 leading-relaxed mb-6">
                采用环保可降解餐盒，减少塑料污染。我们相信，美味与环保可以兼得，为地球的可持续发展贡献一份力量。
              </p>
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gray-700">100%可降解环保餐盒</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gray-700">无塑料包装，保护环境</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gray-700">响应国家环保政策</span>
                </li>
              </ul>
            </div>

            <!-- 悬浮光晕效果 -->
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </div>

        <!-- 右侧：台湾风味 -->
        <div ref="card4" class="brand-card relative group">
          <div class="relative bg-white rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100">
            <!-- 图标 -->
            <div class="absolute -top-12 left-12">
              <div class="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
            </div>

            <div class="mt-16">
              <h3 class="text-3xl font-bold text-gray-900 mb-6 group-hover:text-[#8BC34A] transition-colors duration-300">
                台湾风味 匠心传承
              </h3>
              <p class="text-lg text-gray-600 leading-relaxed mb-6">
                2004年从台湾起航，将地道台湾便当文化带到温州。20年匠心传承，每一口都是家的味道，每一份都承载着台湾美食文化。
              </p>
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gray-700">地道台湾风味，秘制配方</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gray-700">20年匠心传承，品质如一</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gray-700">融合温州本地特色</span>
                </li>
              </ul>
            </div>

            <!-- 悬浮光晕效果 -->
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </div>
      </div>

      <!-- 品牌承诺 - 大号文字 -->
      <div class="text-center max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="200">
        <div class="relative p-16 bg-gradient-to-r from-[#8BC34A] via-[#689F38] to-[#FF9800] rounded-3xl shadow-2xl overflow-hidden">
          <!-- 背景装饰 -->
          <div class="absolute inset-0 opacity-10">
            <div class="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div class="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          </div>

          <div class="relative z-10">
            <h3 class="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              我们承诺
            </h3>
            <p class="text-2xl md:text-3xl text-white/95 leading-relaxed font-medium">
              "用良心做良食，让每一位顾客吃得安心、放心、开心"
            </p>
            <div class="mt-8 flex items-center justify-center gap-3 text-white/90">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span class="text-xl font-semibold">东池便当创始人 张宪清</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// 元素引用
const circle1 = ref(null)
const circle2 = ref(null)
const circle3 = ref(null)
const card1 = ref(null)
const card2 = ref(null)
const card3 = ref(null)
const card4 = ref(null)

onMounted(() => {
  // 视差背景动画
  gsap.to(circle1.value, {
    y: 200,
    rotation: 180,
    scrollTrigger: {
      trigger: circle1.value,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1
    }
  })

  gsap.to(circle2.value, {
    y: -200,
    rotation: -180,
    scrollTrigger: {
      trigger: circle2.value,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1
    }
  })

  gsap.to(circle3.value, {
    y: 150,
    x: -100,
    rotation: 90,
    scrollTrigger: {
      trigger: circle3.value,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1
    }
  })

  // 卡片视差动画 - 分层滚动效果
  const cards = [card1.value, card2.value, card3.value, card4.value]

  cards.forEach((card, index) => {
    // 错层滚动效果
    gsap.fromTo(
      card,
      {
        y: index % 2 === 0 ? 100 : -100,
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1
        }
      }
    )

    // 卡片内部元素视差
    gsap.to(card, {
      y: index % 2 === 0 ? -50 : 50,
      scrollTrigger: {
        trigger: card,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2
      }
    })
  })
})
</script>

<style scoped>
/* 卡片3D效果 */
.brand-card {
  perspective: 1000px;
}

.brand-card:hover > div {
  transform: translateY(-1rem) rotateX(2deg) rotateY(2deg);
}

/* 阴影增强 */
.shadow-3xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>
