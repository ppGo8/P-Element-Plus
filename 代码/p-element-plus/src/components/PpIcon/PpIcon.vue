<template>
  <!-- 在i标签中对fontawesome进行二次封装 -->
  <i class="pp-icon">
    <!-- 需要把父组件传递的属性 全部展开 写在这个组件中 -->
    <!-- 使用$props可以获得所有透传属性 -->
    <font-awesome-icon v-bind="$props"/>
  </i>
</template>
<script setup lang="ts">
// 如果ts文件引入.vue文件编译器提示错误,那么去根目录下的env.d.ts中进行配置
// import type { FontAwesomeIconProps } from '@fortawesome/vue-fontawesome' // vue3导入第三方插件类型会报错
import type { IconProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
defineOptions({
  name:'PpIcon',
  // 禁用透传属性继承，然后在其他元素上使用透传属性
  inheritAttrs: false,
})
defineProps<IconProps>()
</script>