<script setup lang="ts">
import PpButton from './components/PpButton/PpButton.vue';

</script>

<template>
  <main>
    <a href="#">这是一个a标签</a>
    <!-- 使用属性时,会弹出可输入的选项-->
    <!-- plain不写等号=xxx时,表示传入了true -->
    <PpButton type="primary" plain disabled>Test Button</PpButton>
  </main> 
  <h1>h1</h1>
  <h2>h2</h2>
  <h3>h3</h3>
  <hr>
</template>

<style scoped>
</style>
