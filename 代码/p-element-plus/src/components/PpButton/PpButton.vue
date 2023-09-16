<template>
    <!-- vue语法动态绑定class -->
    <button 
      class="pp-button" 
      :class="{
      //  变化属性名,使用中括号+模板字符串解决
        [`pp-button--${type}`]: type,
        [`pp-button--${size}`]: size,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
      }"
      :disabled="disabled"
      >     
     <!-- 使用span包括slot -->
     <span>
        <slot />
      </span>

    </button>
</template> 

<script setup lang="ts">
// 导入类型要在前面多加一个type
import type { ButtonProps } from './types'  // 导包省略后缀名ts
// defineProps+泛型,规定父组件传入的值名称和类型
defineProps<ButtonProps>()  // 引入后,即可在模板或vue实例中使用泛型中定义的属性名和类型
 
</script>

<style>
</style>