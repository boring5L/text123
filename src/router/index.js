
import { createRouter, createWebHistory } from 'vue-router'
import SenderComponent from '../components/SenderComponent.vue';
import ReceiverComponent from '../components/ReceiverComponent.vue';
import Text1 from '../components/Text1.vue';
import HelloWorld from '../components/HelloWorld.vue';


const routes = [
  {
    path:'/',
    name:'首页',
    component: HelloWorld,
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
  }
];

const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 History 模式
  routes,
});

export default router;
