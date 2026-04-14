<template>
  <div id="app">
    <router-view />
    <!-- 全局返回主页按钮 -->
    <HomeButton />
  </div>
</template>

<script setup>
import HomeButton from './components/shared/HomeButton.vue'
</script>

<style>
/* 全局样式已在 style.css 中定义 */
</style>
