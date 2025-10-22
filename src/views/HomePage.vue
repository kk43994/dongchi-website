<template>
  <div class="home-page">
    <!-- 全局导航栏 -->
    <Navigation />

    <!-- 第一屏：开场全屏Hero -->
    <HeroSection />

    <!-- 第二屏：数据展示 -->
    <StatsSection />

    <!-- 第三屏：产品轮播 -->
    <ProductsSection />

    <!-- 第四屏：品牌理念 -->
    <BrandSection />

    <!-- 第五屏：荣誉墙 -->
    <HonorsSection />

    <!-- 第六屏：加盟CTA -->
    <FranchiseSection />

    <!-- Footer底部 -->
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navigation from '../components/layout/Navigation.vue'
import Footer from '../components/layout/Footer.vue'
import HeroSection from '../components/home/HeroSection.vue'
import StatsSection from '../components/home/StatsSection.vue'
import ProductsSection from '../components/home/ProductsSection.vue'
import BrandSection from '../components/home/BrandSection.vue'
import HonorsSection from '../components/home/HonorsSection.vue'
import FranchiseSection from '../components/home/FranchiseSection.vue'

onMounted(() => {
  // 初始化AOS动画库
  AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100
  })
})
</script>

<style scoped>
.home-page {
  width: 100%;
  overflow-x: hidden;
}
</style>
