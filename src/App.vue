<template>
  <div id="app">
    <router-view />
    <!-- 全局鼠标跟随特效 - 超轻量级性能优化版 -->
    <SimpleCursor />
    <!-- 全局返回主页按钮 -->
    <HomeButton />
  </div>
</template>

<script setup>
import SimpleCursor from './components/shared/SimpleCursor.vue'
import HomeButton from './components/shared/HomeButton.vue'
</script>

<style>
/* 全局样式已在 style.css 中定义 */
</style>
