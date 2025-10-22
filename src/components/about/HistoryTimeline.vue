<template>
  <section class="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-0 left-0 w-full h-full" style="background-image: radial-gradient(circle at 2px 2px, #22c55e 1px, transparent 0); background-size: 40px 40px;"></div>
    </div>

    <div class="container relative mx-auto px-6">
      <!-- 标题 -->
      <div class="text-center mb-16" data-aos="fade-up">
        <div class="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
          发展历程
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          东池便当<span class="text-gradient">成长之路</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          从一家小店到连锁品牌，我们用心做好每一份便当
        </p>
      </div>

      <!-- 时间轴 -->
      <div class="relative max-w-6xl mx-auto">
        <!-- 中央时间线 -->
        <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 via-orange-400 to-yellow-400 rounded-full"></div>

        <!-- 时间节点 -->
        <div class="space-y-12">
          <div
            v-for="(item, index) in timeline"
            :key="index"
            class="relative"
            :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
            :data-aos-delay="index * 100"
          >
            <div class="md:grid md:grid-cols-2 md:gap-12 items-center">
              <!-- 左侧内容（偶数索引） -->
              <div :class="index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'">
                <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <!-- 年份标签 -->
                  <div class="inline-block px-4 py-2 bg-gradient-to-r from-green-500 to-orange-500 text-white rounded-full text-sm font-bold mb-4">
                    {{ item.year }}
                  </div>

                  <!-- 标题 -->
                  <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ item.title }}</h3>

                  <!-- 描述 -->
                  <p class="text-gray-600 leading-relaxed mb-4">{{ item.description }}</p>

                  <!-- 关键数据（如果有） -->
                  <div v-if="item.stats" class="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div v-for="(stat, i) in item.stats" :key="i" class="text-center">
                      <div class="text-2xl font-bold text-green-600">{{ stat.value }}</div>
                      <div class="text-sm text-gray-500">{{ stat.label }}</div>
                    </div>
                  </div>

                  <!-- 图标 -->
                  <div class="mt-4 inline-flex items-center gap-2 text-green-600">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span class="text-sm font-medium">里程碑达成</span>
                  </div>
                </div>
              </div>

              <!-- 中央圆点（桌面端） -->
              <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-0">
                <div class="relative">
                  <!-- 外圈光环 -->
                  <div class="absolute inset-0 bg-gradient-to-br from-green-400 to-orange-400 rounded-full animate-ping opacity-75 w-16 h-16 -m-3"></div>
                  <!-- 主圆点 -->
                  <div class="relative bg-white rounded-full p-2 shadow-lg w-10 h-10 flex items-center justify-center">
                    <div class="w-6 h-6 bg-gradient-to-br from-green-500 to-orange-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              <!-- 移动端时间线装饰 -->
              <div class="md:hidden absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-orange-400"></div>
              <div class="md:hidden absolute left-0 top-6 w-4 h-4 bg-green-500 rounded-full transform -translate-x-1.5"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部提示 -->
      <div class="text-center mt-16" data-aos="fade-up">
        <div class="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-50 to-orange-50 rounded-full">
          <svg class="w-6 h-6 text-green-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          <span class="text-gray-700 font-medium">未完待续，更多精彩敬请期待</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// 时间轴数据
const timeline = ref([
  {
    year: '2015',
    title: '品牌创立',
    description: '怀揣着对台湾传统便当文化的热爱，东池便当在温州成立。第一家门店开业，主打正宗台式卤肉饭和各类台湾风味便当。',
    stats: [
      { value: '1家', label: '门店' },
      { value: '5人', label: '团队' }
    ]
  },
  {
    year: '2016',
    title: '品质升级',
    description: '引入台湾先进的便当制作工艺和食材供应链管理系统，建立严格的食品安全标准。获得首个ISO 22000食品安全管理体系认证。',
    stats: [
      { value: '3家', label: '门店' },
      { value: 'ISO 22000', label: '认证' }
    ]
  },
  {
    year: '2017',
    title: '区域拓展',
    description: '在温州市场站稳脚跟后，开始向浙江省内其他城市扩张。建立中央厨房，实现标准化生产和配送。',
    stats: [
      { value: '10家', label: '门店' },
      { value: '50人', label: '团队' }
    ]
  },
  {
    year: '2018',
    title: '品牌升级',
    description: '完成品牌视觉识别系统（VIS）升级，推出新一代门店形象。开发会员系统和线上订餐平台，提升用户体验。',
    stats: [
      { value: '25家', label: '门店' },
      { value: '10万+', label: '会员' }
    ]
  },
  {
    year: '2019',
    title: '跨区域发展',
    description: '进入上海、杭州等长三角重点城市，开启跨区域连锁经营模式。推出健康轻食系列产品线。',
    stats: [
      { value: '50家', label: '门店' },
      { value: '5城', label: '覆盖' }
    ]
  },
  {
    year: '2020',
    title: '数字化转型',
    description: '全面推进数字化转型，上线智能点餐系统、无接触配送服务。在疫情期间为社区提供安全、健康的便当服务。',
    stats: [
      { value: '80家', label: '门店' },
      { value: '50万+', label: '会员' }
    ]
  },
  {
    year: '2021',
    title: '供应链整合',
    description: '建立自有农产品基地，实现从田间到餐桌的全链条品控。推出"东池优选"食材品牌。',
    stats: [
      { value: '150家', label: '门店' },
      { value: '3个', label: '种植基地' }
    ]
  },
  {
    year: '2022',
    title: '品牌荣誉',
    description: '荣获"中国餐饮百强企业"、"浙江省著名商标"等荣誉。推出加盟合作计划，开启品牌快速扩张新篇章。',
    stats: [
      { value: '300家', label: '门店' },
      { value: '10省', label: '覆盖' }
    ]
  },
  {
    year: '2023',
    title: '创新突破',
    description: '推出AI智能推荐系统，根据用户偏好定制个性化菜单。开设智慧门店，引入机器人配餐等黑科技。',
    stats: [
      { value: '500+', label: '门店' },
      { value: '100万+', label: '日均订单' }
    ]
  },
  {
    year: '2024',
    title: '持续进化',
    description: '进军海外市场，在日本、新加坡等地开设门店。推出环保可降解包装，践行企业社会责任。',
    stats: [
      { value: '800+', label: '门店' },
      { value: '3国', label: '国际化' }
    ]
  }
])
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(to right, #22c55e, #f97316);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 移动端时间线样式优化 */
@media (max-width: 768px) {
  .md\:grid-cols-2 > div:first-child {
    padding-left: 2rem;
  }
}
</style>
