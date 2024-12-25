
import { createRouter, createWebHistory } from 'vue-router'
import SenderComponent from '../components/SenderComponent.vue';
import ReceiverComponent from '../components/ReceiverComponent.vue';
import Text1 from '../components/Text1.vue';
import Text11 from '../components/Text11.vue';
import HelloWorld from '../components/HelloWorld.vue';
import uccomponent from '../components/uccomponent.vue';
import dtlytz from '../components/dtlytz/dtlytz.vue';
import DatailPage from '../components/dtlytz/DatailPage.vue'
const routes = [
  {
    path:'/',
    name:'首页',
    component: HelloWorld,
  },

  {
    path:'/uc',
    name:'uc浏览器',
    component:uccomponent,
  },
  {
    path:'/routercs',
    name:'动态路由跳转',
    component:dtlytz,
  },
  {
    path:'/detail/:data',
    name:'Detail',
    component:DatailPage,
    props:true//允许将路由参数作为props传递给组件
  },
  // {
  //   path: '/',
  //   name: 'sender',
  //   component: SenderComponent,
  // },
  // {
  //   path: '/receiver',
  //   name: 'receiver',
  //   component: ReceiverComponent,
  // },
  {
    path: '/text1',
    name: 'text1',
    component: Text1,
    children:[
      {
      path:'text11',
      component: Text11,
    }
  ]
  }
];

const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 History 模式
  routes,
});

export default router;
