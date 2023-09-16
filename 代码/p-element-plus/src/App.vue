<script setup lang="ts">
import PpButton from './components/PpButton/PpButton.vue';

</script>

<template>
  <main>
    <a href="#">这是一个a标签</a>
    <!-- 使用属性时,会弹出可输入的选项-->
    <!-- plain不写等号=xxx时,表示传入了true -->
    <!-- <PpButton type="primary" plain disabled>Test Button</PpButton> -->
    <PpButton plain>palin Button</PpButton>
    <PpButton round>Test Button</PpButton>
    <PpButton circle>vk</PpButton>
    <PpButton type="success">Test Button</PpButton>
    <PpButton type="danger">Test Button</PpButton>
    <PpButton type="primary">Test Button</PpButton>
    <PpButton type="warning">Test Button</PpButton>
    <PpButton type="info">Test Button</PpButton>   
    
    <PpButton plain type="success">Test Button</PpButton>
    <PpButton plain type="danger">Test Button</PpButton>
    <PpButton plain type="primary">Test Button</PpButton>
    <PpButton plain type="warning">Test Button</PpButton>
    <PpButton plain type="info">Test Button</PpButton>
    <PpButton size="large">Test Button</PpButton>
  </main> 

</template>

<style scoped>
</style>
