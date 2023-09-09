<script setup lang="ts">
import PpButton from './components/PpButton/PpButton.vue';

</script>

<template>
  <main>
    <!-- 使用属性时,会弹出可输入的选项-->
    <!-- plain不写等号=xxx时,表示传入了true -->
    <PpButton type="primary" plain disabled>Test Button</PpButton>
  </main> 
</template>

<style scoped>
</style>
./components/PpButton/PpButton.vue