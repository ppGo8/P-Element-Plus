<template>
  <!-- 1.button按钮 -->
  <main>
    <!-- 使用属性时,会弹出可输入的选项-->
    <!-- plain不写等号=xxx时,表示传入了true -->
    <!-- <PpButton type="primary" plain disabled>Test Button</PpButton> -->
    <PpButton plain>palin Button</PpButton>
    <PpButton round>round Button</PpButton>
    <PpButton circle>vk</PpButton>
    <br />
    <PpButton type="success">Test Button</PpButton>
    <PpButton type="danger">Test Button</PpButton>
    <PpButton type="primary">Test Button</PpButton>
    <PpButton type="warning">Test Button</PpButton>
    <PpButton type="info">Test Button</PpButton>   
    <br />
    <PpButton plain type="success">Test Button</PpButton>
    <PpButton plain type="danger">Test Button</PpButton>
    <PpButton plain type="primary">Test Button</PpButton>
    <PpButton plain type="warning">Test Button</PpButton>
    <PpButton plain type="info">Test Button</PpButton>
    <br />
    <PpButton size="large">Test Button</PpButton>
    <PpButton size="small">Test Button</PpButton>
  </main> 
  <br />

  <!-- 2.Collapse -->
  <main>
    <PpCollapse v-model="openedValue">
      <PpCollapseItem name="a">
        <template #title>
          <h1>a标题</h1>
        </template>

        <h1>h1 内容</h1>
        <div>这里是内容a</div>
      </PpCollapseItem>

      <PpCollapseItem name="b" title="b标题">
        <div>这里是内容b</div>
      </PpCollapseItem>

      <PpCollapseItem name="c" title="c标题" disabled>
        <div>这里是禁用内容C</div>
      </PpCollapseItem>
    </PpCollapse>
  </main>
  <!-- 这是已经打开的Item{{openedValue}} -->

  <!-- <main>
    <PpCollapse v-model="openedAccordValue" accordion>
      <PpCollapseItem name="a">
        <template #title>
          <h1>不简单的a标题</h1>
        </template>

        <h1>h1 内容</h1>
        <div>这里是内容a</div>
      </PpCollapseItem>

      <PpCollapseItem name="b" title="简单的b标题">
        <div>这里是内容b</div>
      </PpCollapseItem>

      <PpCollapseItem name="c" title="简单的C标题">
        <div>这里是禁用内容C</div>
      </PpCollapseItem>
    </PpCollapse>
  </main>
  这是已经手风琴模式打开的Item{{openedAccordValue}} -->
  <br />
  <!-- 3.Icon -->
  <main>
    <PpIcon icon="fa-solid fa-user-secret" />
    <PpIcon icon="arrow-up" size="2xl" spin />
  </main>
</template>
<script setup lang="ts">
import { ref } from 'vue'
//setup语法糖只需要导入组件,无需写注册代码,会在打包时自动注册 
import PpButton from './components/PpButton/PpButton.vue';
import PpCollapse from './components/PpCollapse/PpCollapse.vue';
import PpCollapseItem from './components/PpCollapse/PpCollapseItem.vue';
import PpIcon from './components/PpIcon/PpIcon.vue';
// collapse组件打开的Item
const openedValue = ref(['a']) 
// const openedAccordValue = ref(['a']) 
</script>
