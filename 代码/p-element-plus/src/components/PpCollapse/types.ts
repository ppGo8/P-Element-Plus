import type { Ref, InjectionKey } from 'vue'

export type NameType = string | number

// 子组件props接口
export interface CollapseItemProps {
  name: NameType;
  title?: string;
  disabled?: boolean;
}

// 父组件props接口
export interface CpllapseProps {
  modelValue: NameType[]; // nameType数组
  accordion?: boolean; // 手风琴效果
}

// 对应事件接口: 事件名 + 事件传递值 + 返回值
// 事件名称都是固定的
export interface CollapseEmits {
  (e: 'update:modelValue', values: NameType[]) : void;
  (e: 'change', values: NameType[]) : void;
}


// 创建传递给后代组件的接口
export interface CpllapseContext {
  activeNames: Ref<NameType[]>;
  handleItemClick: (name: NameType) => void;
}
// 创建injectionKey
export const collapseContextKey: InjectionKey<CpllapseContext> = Symbol('CpllapseContext')
