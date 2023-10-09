<template>
  <div
    class="pp-collapse"
  >    
  <!-- 因为这里只写了slot,所以父组件Ppcollapse中没办法使用props给PpCollapseItem传值 -->
    <slot /> 
  </div>
</template>
<script setup lang="ts">
import { ref, provide, watch } from 'vue'
import type { NameType, CpllapseProps , CollapseEmits } from './types';
import { collapseContextKey } from './types';

// 创建属性和事件
const props = defineProps<CpllapseProps>()
const emits = defineEmits<CollapseEmits>()

// ref创建响应式数组;<>里面的内容规定类型,()代表初始值
// activeNames数组中存储打开状态区域的name
const activeNames = ref<NameType[]>(props.modelValue);
// 细节:实时更新activeNames的值 而不是只在第一次更新
watch(()=> props.modelValue, () => {
  activeNames.value = props.modelValue
})

// 手风琴效果提示
// 注意细节:用户初始传入的激活数组长度应该小于等于1,否则有问题
if (props.accordion && activeNames.value.length > 1) {
  console.warn('手风琴应该只有一个激活项 active item!')
}

// 点击对应head
const handleItemClick = (item : NameType) => {
  // 手风琴效果判断
  if (props.accordion) {
    // 巧妙之处：在数组符号[]之中使用三元变道时
    // 如果点击的item和激活数组中内容相同,那么取空;否则让数组的元素变成这个元素
    activeNames.value = [ activeNames.value[0] === item ? '' : item ] 
  } else {
    const index = activeNames.value.indexOf(item)
    if (index > -1) {
      // 存在,删除对应的name
      activeNames.value.splice(index, 1)
    } else {
      // 不存在,插入对应的naem
      activeNames.value.push(item)
    } 
  }
  emits('update:modelValue',activeNames.value)
  emits('change',activeNames.value)
};

// 父组件提供内容给子组件
provide(collapseContextKey,{
  activeNames,
  handleItemClick,
})

</script>

