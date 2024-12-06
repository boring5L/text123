import Vue from 'vue';
import Router from 'vue-router';
import SenderComponent from '../components/SenderComponent.vue';
import ReceiverComponent from '../components/ReceiverComponent.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'sender',
    component: SenderComponent
  },
  {
    path: '/receiver',
    name: 'receiver',
    component: ReceiverComponent
  }
];

const router = new Router({
  mode: 'history',
  routes
});

export default router;
