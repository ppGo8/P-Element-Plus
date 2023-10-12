import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'   // 引入library对象
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'   // 引入图标：单个
import { fas } from '@fortawesome/free-solid-svg-icons'   // 引入图标：fas图标组,表示所有图标
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' // 引入fontawesome支持的vue3组件
import App from './App.vue'


// 按需引入：将指定图标添加到library对象中;
// library.add(faUserSecret)
// 全局引入：一次性引入所有图标
library.add(fas)

// 引入自己定义的样式
import './styles/index.css'

createApp(App)
.mount('#app')


// 在createApp上调用.component方法可以注册全局组件;
// 可以在各个组件中使用全局注册组件,而无需一个一个引入
// .component('font-awesome-icon', FontAwesomeIcon) 
// 写在.mount前面