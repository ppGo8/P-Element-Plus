<template>
  <div
    class="pp-collapse-item"
    :class="{
      'is-disabled': disabled
    }"
  >
    <div class="pp-collapse-item__header" :id="`item-header-${name}`" @click="handleClick">
      <!-- 具名插槽，且指定默认值；如果用户没有使用插槽则传递复杂结构，则显示简单结构{{name}} -->
      <slot name="title">{{title}}</slot>
    </div>
    <Transition name="slide" v-on="transitionEvents">
      <div class="pp-collapse-wrapper" v-show="isActive">
        <div class="pp-collapse-item__content" :id="`item-content-${name}`" >
        <!-- 匿名插槽，最常用的部分，因此为匿名不设置默认值 -->
        <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { inject , computed } from 'vue';
import type { CollapseItemProps } from './types'
import { collapseContextKey  } from './types'

// defineProps是一个函数;返回值就是接受父组件传过来的属性
const props = defineProps<CollapseItemProps>()

// 注入接受数据
const collapseContext = inject(collapseContextKey)
// 判断item是否需要显示
// incluedes用来判断一个数组中是否包含某个值;有则返回True
// activeNames：要显示的item的name;props.name：子组件自己代表的那个name，每个子组件下面会有一个自己的name,在不同的区域里
const isActive = computed(()=> collapseContext?.activeNames.value.includes(props.name) )
const handleClick = () => {
  // 如果是禁用状态 那么直接不激活返回
  if (props.disabled) return 
  // 使用父组件提供的方法修改数据,而不是子组件自己控制
  collapseContext?.handleItemClick(props.name)
}

// 创建事件对象
// Record类型,声明一个key和value应该遵循什么类型的对象
// 第一个参数为key的类型,第二个参数为value的类型
const transitionEvents: Record<string, (el: HTMLElement) => void> ={
  // 开始之前
  beforeEnter (el) {
    el.style.height = '0px'
    // 嵌套在父盒子后,里面的内容会直接出来而父盒子慢慢滑动
    // 解决办法:overflow
    el.style.overflow = 'hidden'
  },
  // 刚开始
  enter (el) {
    // 拿到里面内容的实际高度并赋值给css的属性,让css知道高度是多少
    el.style.height = `${el.scrollHeight}px` // 注意拼接px
  },
  // 进入结束后
  // 删除该css属性,因为该属性没用了,删除后变回默认值：由元素内容及文本撑开盒子
  afterEnter (el) {
    el.style.height = '' // css属性写成''就代表删除了该属性 没有值当然就不显示啦
    el.style.overflow = ''
  },
  beforeLeave(el) { 
    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },
  leave(el) {
    el.style.height = '0px'
  },
  afterLeave(el) {
    el.style.height = ''
    el.style.overflow = ''
  }
}

</script>
<style>
  .pp-collapse-item__header {
    font-size: 30px;
  }
</style>
