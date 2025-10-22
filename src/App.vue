<template>
  <div id="app">
    <router-view />
    <!-- 全局鼠标跟随特效 -->
    <MouseFollower />
  </div>
</template>

<script setup>
import MouseFollower from './components/shared/MouseFollower.vue'
</script>

<style>
/* 全局样式已在 style.css 中定义 */
</style>
