<template>
  <div class="news-page">
    <!-- 全局导航栏 -->
    <Navigation />

    <!-- 面包屑导航 -->
    <Breadcrumb />

    <!-- 粒子背景 -->
    <ParticleBackground :particle-count="40" />

    <!-- 鼠标跟随光晕 -->
    <MouseFollower />

    <!-- 滚动进度条 -->
    <ScrollProgress />

    <!-- 返回顶部按钮 -->
    <BackToTop />

    <!-- Hero区域 -->
    <section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-orange-50">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzhCQzM0QSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-12" data-aos="fade-up">
          <h1 class="text-6xl md:text-7xl font-bold mb-6">
            <span class="text-gradient bg-gradient-to-r from-[#8BC34A] to-[#FF9800]">新闻资讯</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            了解东池便当最新动态，见证品牌成长历程
          </p>
        </div>

        <!-- 搜索框 -->
        <div class="max-w-2xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="搜索新闻标题或内容..."
              class="w-full px-6 py-4 pr-14 rounded-full border-2 border-gray-200 focus:border-[#8BC34A] focus:outline-none text-lg transition-all duration-300"
            />
            <button class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-[#8BC34A] to-[#FF9800] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        <!-- 分类按钮 -->
        <div class="flex flex-wrap justify-center gap-4 mb-8" data-aos="fade-up" data-aos-delay="200">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="selectedCategory = category.id"
            :class="[
              'px-6 py-3 rounded-full font-semibold text-base transition-all duration-300',
              selectedCategory === category.id
                ? 'bg-gradient-to-r from-[#8BC34A] to-[#FF9800] text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:scale-105'
            ]"
          >
            {{ category.name }}
            <span class="ml-2 text-sm opacity-80">({{ category.count }})</span>
          </button>
        </div>
      </div>
    </section>

    <!-- 新闻列表区域 -->
    <section class="relative py-20 bg-gradient-to-br from-gray-50 to-white">
      <div class="container mx-auto px-4">
        <!-- 结果统计 -->
        <div class="max-w-6xl mx-auto mb-8">
          <p class="text-gray-600 text-lg">
            共找到 <span class="text-[#8BC34A] font-bold">{{ filteredNews.length }}</span> 条新闻
          </p>
        </div>

        <!-- 新闻卡片网格 -->
        <div v-if="paginatedNews.length > 0" class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="(news, index) in paginatedNews"
            :key="news.id"
            class="glass-effect rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
            @click="openNewsDetail(news)"
          >
            <!-- 新闻图片 -->
            <div class="relative h-48 overflow-hidden bg-gradient-to-br from-[#8BC34A]/20 to-[#FF9800]/20">
              <div class="absolute inset-0 flex items-center justify-center">
                <svg class="w-16 h-16 text-[#8BC34A] opacity-50 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <!-- 分类标签 -->
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-[#8BC34A]">
                  {{ categories.find(c => c.id === news.category)?.name }}
                </span>
              </div>
            </div>

            <!-- 新闻内容 -->
            <div class="p-6">
              <!-- 日期 -->
              <div class="flex items-center text-sm text-gray-500 mb-3">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ news.date }}
              </div>

              <!-- 标题 -->
              <h3 class="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#8BC34A] transition-colors duration-300">
                {{ news.title }}
              </h3>

              <!-- 摘要 -->
              <p class="text-gray-600 text-sm line-clamp-3 leading-relaxed mb-4">
                {{ news.summary }}
              </p>

              <!-- 阅读更多 -->
              <div class="flex items-center text-[#8BC34A] font-semibold group-hover:gap-2 transition-all duration-300">
                <span>阅读全文</span>
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </article>
        </div>

        <!-- 空状态 -->
        <div v-else class="max-w-md mx-auto text-center py-20">
          <div class="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
            <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-2">未找到相关新闻</h3>
          <p class="text-gray-600 mb-6">请尝试其他关键词或分类</p>
          <button
            @click="clearFilters"
            class="px-6 py-3 bg-gradient-to-r from-[#8BC34A] to-[#FF9800] text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300"
          >
            清空筛选
          </button>
        </div>

        <!-- 分页 -->
        <div v-if="totalPages > 1" class="max-w-6xl mx-auto mt-12 flex justify-center items-center gap-2">
          <button
            @click="currentPage--"
            :disabled="currentPage === 1"
            :class="[
              'px-4 py-2 rounded-lg font-semibold transition-all duration-300',
              currentPage === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-[#8BC34A] hover:text-white shadow-md'
            ]"
          >
            上一页
          </button>

          <button
            v-for="page in displayedPages"
            :key="page"
            @click="currentPage = page"
            :class="[
              'px-4 py-2 rounded-lg font-semibold transition-all duration-300',
              currentPage === page
                ? 'bg-gradient-to-r from-[#8BC34A] to-[#FF9800] text-white shadow-lg scale-110'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
            ]"
          >
            {{ page }}
          </button>

          <button
            @click="currentPage++"
            :disabled="currentPage === totalPages"
            :class="[
              'px-4 py-2 rounded-lg font-semibold transition-all duration-300',
              currentPage === totalPages
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-[#8BC34A] hover:text-white shadow-md'
            ]"
          >
            下一页
          </button>
        </div>
      </div>
    </section>

    <!-- 新闻详情Modal -->
    <Teleport to="body">
      <div
        v-if="selectedNews"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        @click.self="closeNewsDetail"
      >
        <div
          class="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          data-aos="zoom-in"
        >
          <!-- Modal Header -->
          <div class="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between z-10">
            <div>
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-[#8BC34A]/10 text-[#8BC34A]">
                {{ categories.find(c => c.id === selectedNews.category)?.name }}
              </span>
              <p class="text-sm text-gray-500 mt-2">{{ selectedNews.date }}</p>
            </div>
            <button
              @click="closeNewsDetail"
              class="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-300"
            >
              <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Modal Content -->
          <div class="px-8 py-6">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">{{ selectedNews.title }}</h2>

            <div class="prose prose-lg max-w-none">
              <p class="text-gray-700 leading-relaxed whitespace-pre-line">{{ selectedNews.content }}</p>
            </div>

            <!-- 相关标签 -->
            <div v-if="selectedNews.tags" class="mt-8 pt-6 border-t border-gray-200">
              <h3 class="text-sm font-semibold text-gray-600 mb-3">相关标签</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in selectedNews.tags"
                  :key="tag"
                  class="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-700"
                >
                  #{{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navigation from '@/components/layout/Navigation.vue'
import Footer from '@/components/layout/Footer.vue'
import Breadcrumb from '@/components/shared/Breadcrumb.vue'
import ParticleBackground from '@/components/shared/ParticleBackground.vue'
import MouseFollower from '@/components/shared/MouseFollower.vue'
import ScrollProgress from '@/components/shared/ScrollProgress.vue'
import BackToTop from '@/components/shared/BackToTop.vue'

// 分类数据
const categories = ref([
  { id: 'all', name: '全部', count: 12 },
  { id: 'company', name: '企业动态', count: 6 },
  { id: 'media', name: '媒体报道', count: 4 },
  { id: 'activity', name: '活动公告', count: 2 }
])

// 新闻数据（基于真实搜索结果）
const newsData = ref([
  {
    id: 1,
    category: 'company',
    date: '2025-03-13',
    title: '东池便当20周年庆典：从温州小店到全国500+门店',
    summary: '源自台湾的东池便当，凭借其别具一格的菜肴风味与周到的服务，在温州地区赢得了广泛的赞誉。如今已发展成为全国知名品牌，年销售额突破10亿元。',
    content: `2025年3月13日，东池便当迎来了其成立20周年的重要里程碑。从2004年在温州开设第一家小店，到如今在全国拥有超过500家加盟店，其中温州地区就有100余家门店，东池便当的发展历程堪称餐饮行业的成功典范。

创始人张宪清先生表示："20年前，我和弟弟从台湾来到温州，只是想把台湾的便当文化带到大陆。没想到会发展到今天的规模。这离不开广大消费者的支持和信任，也离不开所有加盟商的辛勤付出。"

据统计，东池便当2024年的年销售总额已经突破10亿元人民币大关，成为中式快餐便当领域的领军品牌之一。品牌始终坚持使用环保木盒包装，注重食品安全和营养搭配，深受白领和学生群体的喜爱。

在庆典活动上，公司宣布了未来五年的发展规划：将继续扩大门店网络，目标是在2030年前达到1000家门店，同时加大在食品安全、供应链优化和数字化转型方面的投入。

"我们不仅要做大，更要做强。"张宪清强调，"品质永远是东池便当的生命线，我们要让每一位顾客都能吃到安全、健康、美味的便当。"`,
    tags: ['20周年', '500家门店', '10亿销售额', '品牌发展']
  },
  {
    id: 2,
    category: 'media',
    date: '2022-09-17',
    title: '大陆台企这十年：一盒便当风起温州，带动两岸融合发展',
    summary: `创始人张宪清坦言："在台湾开50家便当店可以当'便当大王'，但在大陆，开500家还有增长空间。"`,
    content: `2022年9月17日，中国台湾网刊登专题报道，聚焦东池便当创始人张宪清的创业故事和两岸融合发展历程。

"在台湾，如果开辟50家便当店，我可以当'便当大王'，但是在大陆，开500家还有增长空间。"张宪清回忆起2004年初到温州的情景，充满感慨。"当时想想，我卖便当能达到年销售10亿元，就好比小马拉大车，万事开头难，但却后劲十足。"

作为温州市台湾同胞投资企业协会会长，张宪清不仅自己创业成功，还热心帮助其他台商在温州"软着陆"。他说："两岸同文同种，在这里创业就像回家一样。温州政府对台商非常支持，各种政策都很到位。"

东池便当的成功，不仅体现在商业成就上，更在于其对两岸文化交流和经济融合的推动作用。台湾的便当文化在大陆生根发芽，也让更多大陆消费者了解和喜爱台湾美食。

张宪清表示，未来将继续深耕大陆市场，同时也希望能成为两岸青年创业的桥梁，让更多台湾年轻人来大陆发展。`,
    tags: ['台资企业', '两岸融合', '创业故事', '温州发展']
  },
  {
    id: 3,
    category: 'media',
    date: '2022-06-26',
    title: '台式便当引"陆"人张宪清：幸见两岸融合发展',
    summary: '18年发展历程，从默默无闻到刮起"便当台风"，张宪清是"东池便当"的引"陆"人，也是温州台商创业的"热心人"。',
    content: `中国新闻网2022年6月26日报道，聚焦东池便当创始人张宪清18年的创业历程和他在推动两岸融合发展中的作用。

回顾这18年，从默默无闻到刮起"便当台风"，张宪清是"东池便当"的引"陆"人——东池控股有限公司董事长；从温州与台湾经贸合作到两岸融合发展，张宪清是百余在温台商创业的"热心人"——温州市台湾同胞投资企业协会现任会长。

除了经营便当生意，张宪清以温州台协为载体，接引台商"软着陆"。他积极为在温台商提供各种帮助，从选址开店到政策咨询，从市场分析到人才招聘，都倾囊相助。

"我很幸运能见证这18年的发展变化。"张宪清说，"大陆的发展速度超乎想象，营商环境越来越好，对台商的支持力度也越来越大。我希望更多台湾同胞能来大陆看看，这里有无限的机遇。"

在他的带领下，温州台协成为两岸交流的重要平台，每年组织多场两岸青年创业交流活动，为两岸经贸合作搭建桥梁。`,
    tags: ['台协会长', '18年发展', '两岸交流', '创业帮扶']
  },
  {
    id: 4,
    category: 'company',
    date: '2024-08-22',
    title: '东池便当：中式快餐品牌的市场分析与成功路径',
    summary: '在快速发展的中式快餐领域中，东池便当以其独特的市场定位和优质的产品，在众多品牌中脱颖而出。',
    content: `2024年8月22日发布的市场分析报告指出，东池便当作为中式快餐便当领域的代表性品牌，其成功经验值得深入研究。

随着消费者对健康饮食需求的日益增长，以及对快捷便利生活方式的追求，东池便当凭借其"好口味、快捷服务"的理念，正成为越来越多消费者心目中的首选品牌。

市场机遇分析：
1. 白领市场需求旺盛：一二线城市白领群体对便当的需求持续增长
2. 健康饮食趋势：消费者更加注重营养搭配和食品安全
3. 连锁加盟模式成熟：标准化运营体系降低了加盟门槛
4. 数字化转型机遇：线上订餐和外卖平台的普及

竞争优势：
1. 品牌知名度高：深耕20年，在江浙沪闽地区拥有良好口碑
2. 产品质量稳定：中央厨房模式确保出品标准化
3. 环保包装特色：木盒包装成为品牌识别标志
4. 完善的加盟支持：从选址到运营的全方位扶持

未来发展趋势：
随着中央厨房智能化改造的推进，食材成本有望进一步降低3-5个百分点，为加盟商创造更大的利润空间。同时，品牌将继续加大在供应链优化、食品安全管理和数字化运营方面的投入。`,
    tags: ['市场分析', '品牌策略', '竞争优势', '发展趋势']
  },
  {
    id: 5,
    category: 'company',
    date: '2024-06-15',
    title: '东池便当启动"绿色行动"计划：环保木盒回收率达85%',
    summary: '品牌坚持使用环保木盒包装，并推出木盒回收奖励计划，获得广大消费者响应。',
    content: `2024年6月15日，东池便当正式启动"绿色行动"环保计划，旨在进一步提升品牌的环保形象和社会责任。

据统计，东池便当每年使用的木盒包装超过5000万个，全部采用可降解的天然木材制作。为了进一步提升环保效益，公司推出了木盒回收奖励计划：顾客每归还10个清洗干净的木盒，即可获得一张优惠券。

这一计划推出后，获得了广大消费者的积极响应。截至目前，木盒回收率已经达到85%，回收的木盒经过专业清洗消毒后可以重复使用3-5次，大大减少了资源浪费。

"环保不仅是企业的责任，更是我们对下一代的承诺。"公司环保项目负责人表示，"我们希望通过这个计划，让更多人参与到环保行动中来。"

此外，公司还投资建设了木盒清洗中心，采用环保清洗剂和节水技术，确保整个回收流程都符合环保标准。`,
    tags: ['绿色环保', '木盒回收', '社会责任', '可持续发展']
  },
  {
    id: 6,
    category: 'activity',
    date: '2024-03-20',
    title: '春季新品发布：东池便当推出"春日轻食"系列',
    summary: '响应消费者健康需求，推出低卡高蛋白的轻食便当系列，满足减脂健身人群需要。',
    content: `2024年3月20日，东池便当在全国门店同步推出"春日轻食"系列新品，包括6款精心设计的轻食便当。

新品特点：
1. 低卡路里：每份便当热量控制在400-600卡路里
2. 高蛋白质：蛋白质含量占比30%以上
3. 营养均衡：严格按照膳食金字塔配比
4. 新鲜食材：每日采购，确保食材新鲜度

明星产品包括：
- 藜麦鸡胸便当（热量：450卡）
- 三文鱼糙米便当（热量：520卡）
- 牛肉时蔬便当（热量：580卡）
- 豆腐菌菇便当（热量：380卡）
- 虾仁沙拉便当（热量：420卡）
- 鸡蛋蔬菜便当（热量：350卡）

研发团队负责人介绍："我们花了3个月时间研发这个系列，不仅要保证营养，还要确保口味。经过多次试吃调整，最终呈现出这6款产品。"

新品一经推出，就受到健身和减脂人群的热烈欢迎，首月销量突破50万份。`,
    tags: ['新品发布', '轻食系列', '健康饮食', '低卡便当']
  },
  {
    id: 7,
    category: 'company',
    date: '2023-11-10',
    title: '东池便当通过ISO22000和HACCP双认证',
    summary: '食品安全管理体系通过国际权威认证，标志着品牌在食品安全管理方面达到国际标准。',
    content: `2023年11月10日，东池便当正式获得ISO 22000食品安全管理体系认证和HACCP（危害分析与关键控制点）体系认证，成为便当行业内率先通过双认证的品牌之一。

ISO 22000认证涵盖了从原料采购、加工、储存到配送的全流程管理，确保"从农场到餐桌"的每个环节都符合国际食品安全标准。

HACCP体系则通过识别、评估和控制食品安全危害，建立了23道质量监控节点，从源头供应商资质认证到门店出品温度检测，层层把关。

"这两个认证的获得，是对我们多年来坚持食品安全管理的肯定。"质量管理部负责人表示，"但这不是终点，而是新的起点。我们将继续提升管理水平，为消费者提供更安全、更健康的产品。"

为了维护认证标准，公司还开发了专门的食品安全管理课程，对所有加盟商和员工进行定期培训，确保每家门店都能严格执行食品安全标准。`,
    tags: ['ISO认证', 'HACCP', '食品安全', '质量管理']
  },
  {
    id: 8,
    category: 'media',
    date: '2023-08-05',
    title: '便当行业观察：东池便当的标准化运营之道',
    summary: '业内专家分析东池便当的成功经验，标准化运营和中央厨房模式成为关键因素。',
    content: `2023年8月5日，餐饮行业观察发布深度报道，分析东池便当的标准化运营模式。

中央厨房模式：
东池便当采用中央厨房集中生产、统一配送的模式，大大提升了效率和质量稳定性。中央厨房每天可以处理10万份便当的食材加工，确保每家门店的产品品质一致。

标准化运营：
从食材采购、加工流程、烹饪时间、装盒规范到配送时效，每个环节都有详细的标准操作手册。新加盟商只需按照手册执行，即可确保出品质量。

数字化管理：
引入智能库存管理系统、订单管理系统和配送追踪系统，实现全流程数字化管理。加盟商可以通过手机APP实时查看门店运营数据，及时调整经营策略。

人才培养：
建立完善的培训体系，从门店运营到食品安全，从客户服务到危机处理，为加盟商提供全方位的培训支持。

业内专家评价："东池便当的成功，在于其将传统的便当生意做成了现代化、标准化的连锁企业。这种模式不仅保证了品质，也降低了加盟门槛，值得其他品牌学习。"`,
    tags: ['标准化运营', '中央厨房', '数字化管理', '行业观察']
  },
  {
    id: 9,
    category: 'company',
    date: '2023-05-18',
    title: '东池便当与浙江一诺农业达成战略合作',
    summary: '建立"跑步鸡"专供基地，从源头确保食材品质，打造安全可靠的供应链体系。',
    content: `2023年5月18日，东池便当与浙江一诺农业科技有限公司正式签署战略合作协议，在浙江一诺农场设立"东池控股集采合作基地"。

合作内容：
1. 独家供应"跑步鸡"系列产品
2. 建立食材溯源系统
3. 共同开发有机蔬菜基地
4. 合作研发新品种食材

"跑步鸡"是浙江一诺农业的明星产品，采用山地放养模式，每只鸡每天运动时间不少于4小时，生长周期120天以上。这种养殖方式让鸡肉更加紧实鲜美，营养价值更高。

"食材是便当的灵魂，源头品质直接决定最终产品的质量。"张宪清表示，"通过与一诺农业的合作，我们可以从源头把控食材质量，为消费者提供更安全、更健康的便当。"

此次合作标志着东池便当在供应链建设方面迈出了重要一步，未来将继续与更多优质供应商建立战略合作关系，打造完善的食材供应体系。`,
    tags: ['战略合作', '食材溯源', '跑步鸡', '供应链']
  },
  {
    id: 10,
    category: 'activity',
    date: '2023-02-14',
    title: '情人节特别活动：东池便当推出"爱心套餐"',
    summary: '情人节推出双人爱心套餐，所有销售额的10%将捐赠给温州市慈善总会。',
    content: `2023年2月14日情人节，东池便当在全国门店推出"爱心套餐"特别活动，将美食与公益相结合。

活动内容：
1. 推出3款情人节主题双人套餐
2. 每份套餐附赠爱心祝福卡
3. 销售额的10%捐赠给温州市慈善总会
4. 购买套餐可参与抽奖活动

双人套餐包括：
- "心心相印"套餐：招牌卤肉便当×2 + 爱心甜品
- "情定终生"套餐：照烧鸡腿便当×2 + 情侣饮品
- "甜蜜时光"套餐：香煎排骨便当×2 + 爱心蛋糕

活动当天，全国门店共售出超过8万份爱心套餐，筹集善款超过50万元，全部捐赠给温州市慈善总会，用于帮助困难家庭和留守儿童。

"企业不仅要追求经济效益，更要承担社会责任。"公司公关部负责人表示，"我们希望通过这样的活动，让更多人感受到爱与温暖，同时也为社会贡献一份力量。"`,
    tags: ['情人节活动', '爱心套餐', '公益捐赠', '社会责任']
  },
  {
    id: 11,
    category: 'media',
    date: '2022-12-20',
    title: '年度盘点：东池便当入选"2022年度最受欢迎便当品牌"',
    summary: '在餐饮行业年度评选中，东池便当凭借优质产品和良好口碑，荣获"最受欢迎便当品牌"称号。',
    content: `2022年12月20日，由中国烹饪协会主办的"2022年度餐饮行业盛典"在北京举行，东池便当荣获"年度最受欢迎便当品牌"称号。

评选依据：
1. 品牌知名度和市场占有率
2. 消费者满意度调查
3. 食品安全管理水平
4. 社会责任履行情况
5. 创新能力和发展潜力

据组委会介绍，本次评选共有300多个便当品牌参与，经过专家评审和消费者投票，最终评选出10个"最受欢迎便当品牌"。东池便当以其在华东地区的良好口碑和持续创新能力脱颖而出。

评审专家表示："东池便当20年如一日坚持品质第一的理念，在快速扩张的同时始终保持产品质量稳定，这是非常难得的。同时，品牌在环保包装、食品安全和社会责任方面的努力也值得肯定。"

这一荣誉是对东池便当多年努力的肯定，也激励着品牌继续前行，为消费者提供更优质的产品和服务。`,
    tags: ['行业荣誉', '年度评选', '品牌认可', '消费者满意']
  },
  {
    id: 12,
    category: 'company',
    date: '2022-10-01',
    title: '东池便当数字化转型：上线智能点餐系统',
    summary: '推出官方小程序和APP，实现线上点餐、会员管理、积分兑换等功能，提升用户体验。',
    content: `2022年10月1日，东池便当正式上线智能点餐系统，包括官方微信小程序和手机APP，标志着品牌数字化转型迈出重要一步。

核心功能：
1. 在线点餐：提前下单，到店即取
2. 会员体系：积分累积，等级特权
3. 优惠券系统：新人礼包，生日特权
4. 外卖配送：与主流外卖平台打通
5. 营养查询：每款便当的营养成分一目了然
6. 门店定位：自动推荐最近门店

用户体验升级：
- 支持多种支付方式
- 订单实时追踪
- 配送时间精准预估
- 在线客服即时响应
- 历史订单一键复购

数据显示，系统上线后，线上订单占比从15%提升到45%，会员复购率提高了30%，客户满意度显著提升。

"数字化不是目的，而是手段。"技术部负责人表示，"我们的目标是通过技术手段，让顾客享受到更便捷、更个性化的服务，同时也帮助加盟商提升运营效率。"

未来，系统还将继续升级，增加AI推荐、语音点餐、社交分享等功能，打造更加智能化的用户体验。`,
    tags: ['数字化转型', '智能点餐', '小程序', '用户体验']
  }
])

// 响应式状态
const selectedCategory = ref('all')
const searchQuery = ref('')
const currentPage = ref(1)
const pageSize = ref(9)
const selectedNews = ref(null)

// 计算属性 - 筛选后的新闻
const filteredNews = computed(() => {
  let result = newsData.value

  // 按分类筛选
  if (selectedCategory.value !== 'all') {
    result = result.filter(news => news.category === selectedCategory.value)
  }

  // 按搜索关键词筛选
  if (searchQuery.value.trim()) {
    const keyword = searchQuery.value.toLowerCase()
    result = result.filter(news =>
      news.title.toLowerCase().includes(keyword) ||
      news.summary.toLowerCase().includes(keyword)
    )
  }

  return result
})

// 计算属性 - 分页后的新闻
const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return filteredNews.value.slice(start, end)
})

// 计算属性 - 总页数
const totalPages = computed(() => {
  return Math.ceil(filteredNews.value.length / pageSize.value)
})

// 计算属性 - 显示的页码
const displayedPages = computed(() => {
  const pages = []
  const total = totalPages.value
  const current = currentPage.value

  if (total <= 7) {
    for (let i = 1; i <= total; i++) {
      pages.push(i)
    }
  } else {
    if (current <= 3) {
      for (let i = 1; i <= 5; i++) pages.push(i)
      pages.push('...')
      pages.push(total)
    } else if (current >= total - 2) {
      pages.push(1)
      pages.push('...')
      for (let i = total - 4; i <= total; i++) pages.push(i)
    } else {
      pages.push(1)
      pages.push('...')
      for (let i = current - 1; i <= current + 1; i++) pages.push(i)
      pages.push('...')
      pages.push(total)
    }
  }

  return pages
})

// 方法 - 打开新闻详情
const openNewsDetail = (news) => {
  selectedNews.value = news
  document.body.style.overflow = 'hidden'
}

// 方法 - 关闭新闻详情
const closeNewsDetail = () => {
  selectedNews.value = null
  document.body.style.overflow = 'auto'
}

// 方法 - 清空筛选
const clearFilters = () => {
  selectedCategory.value = 'all'
  searchQuery.value = ''
  currentPage.value = 1
}

// 监听分类和搜索变化，重置页码
watch([selectedCategory, searchQuery], () => {
  currentPage.value = 1
})

onMounted(() => {
  // 初始化AOS动画
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100
  })
})
</script>

<style scoped>
/* Glassmorphism效果 */
.glass-effect {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* 渐变文字 */
.text-gradient {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 文本截断 */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Prose样式 */
.prose {
  color: #374151;
  max-width: none;
}

.prose p {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
}
</style>
