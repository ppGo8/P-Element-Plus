/**
 * @desc:一些辅助的ts类型
 */

import type { PropType } from 'vue'

// 字符串字面量
// 特点:这几种类型都是从下面的字符串类型中取其中一个
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type ButtonSize = 'large' | 'small'


// Button组件支持的类名 和 对应类型
export interface ButtonProps {
    type?: ButtonType;
    size?: ButtonSize;
    plain?: boolean;
    round?: boolean;
    circle?: boolean;
    disabled?: boolean;
    // 还有其他属性待添加
}

export interface ButtonInstance {
    ref: HTMLButtonElement
}
export const buttonProps = {
type: {
    type: String as PropType<ButtonType>
},
size: {
    type: String as PropType<ButtonSize>,
},
plain: {
    type: Boolean
},
round: {
    type: Boolean
},
circle: {
    type: Boolean
},
disabled: {
    type: Boolean
},
}