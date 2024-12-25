<template>
  <div class="counter">
    <h1>计数器</h1>
    <p>当前计数: {{ count }}</p>
    <button @click="increase">增加</button>
    <button @click="decrease">减少</button>
    <button @click="reset">重置</button>
    <button @click="goToText1">跳转到 /text1</button>
    <button @click="goToHellowWorld">跳转到 /</button>
    <router-link to="/text1/text11">去子组件</router-link>
    <div v-html="asd"></div>
    <!-- <ul>
      <li v-for="(item, index) in processedData" :key="index">
        <a :href="item.text" target="_blank">
          <img :src="item.text" alt="" width="100" />
        </a>
        <div v-html="item.$text"></div>
      </li>
    </ul> -->
    <!-- <ul>
      <li v-for="(item,index) in processedData" :key="index">
      <a :href="item.text" target="_blank"></a>
      <div v-html="item.$text"></div>
    </li>
    </ul> -->
    <router-view></router-view>
    <!-- <cswjj></cswjj>
    <HelloWorld></HelloWorld> -->
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref ,onMounted} from 'vue';
const shuju = [
  'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/返回活动首页.4109c3a2.png',
  'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/bil.becce758.png',
  'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/CardBoxsLl-确认办理.606e92c3.png',
  'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/QrdhOk-已领取.f6f92a39.png',
  'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/zhifu-已知晓.b35052e9.png',
  'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/logo.cfc6aeb0.png',
  'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/js/165.03ec61e8.js.map',
  'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/Qrdh-确认兑换.41f59f9e.png',
   'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/QrdhOk-翼起兑好礼.d954c8f9.png',
]
  // can:'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/js/165.03ec61e8.js',
  // can:'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/css/app.d6f77acb.css',
  // can:'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/footer-广告.8e3df8ad.png',
  // can:'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/kf.1bce2656.png',
  // can:'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/NotShowNum-btn.5e438105.png',
  // can:'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/loginBtn.0efe8395.png',
  // can:'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/CardBoxsLl-OK.06939e1d.png',

const qer = ref("护宝泡药")
const asd = `<span style="color: red;">${qer.value}</span>`;
const router = useRouter();
let  processedData = [];
const count = ref(0);
function rty(){
  let res = [];
  res = shuju;
  if(res.length){
    let hasText = "img";
    res = res.map((m)=>{
      let $text = m;
      if(m.indexOf(hasText)>=0){
        const [f,s] = $text.split(hasText);
        $text = `${f}<b style = "color:red">${s}</b>`;
        
      }
   return {
    text:m,
    $text,
   }
    })
    processedData = res;
   console.log(processedData)
  }
}
function qdy(){
  let res;
  res = shuju;
  if(res.length){
    let hasText = "img";
   res= res.map((m)=>{
      let $text = map;
      if(m.indexOf(hasText)>=0){
        const[f,s] = $text.split(hasText)
        $text = `${f}<b style = "color:red">${s}</b>`
      }
      return{
        text:m,
        $text,
      }
    })
  }
}




onMounted(()=>{
    rty()
})




function increase() {
  count.value++;
}
function decrease() {
    count.value--;
}
function reset() {
    count.value = 0;
}
function goToText1() {
  router.push("/text1");
}
function goToHellowWorld() {
  router.push("/");
}
</script>

<style scoped>
.counter {
  text-align: center;
  margin: 20px;
  font-family: Arial, sans-serif;
}

button {
  margin: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #f0f0f0;
}
</style>
