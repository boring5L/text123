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
    <p v-html="asd"></p>
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
    <cswjj></cswjj>
    <HelloWorld></HelloWorld>
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
  // can:'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/礼盒.587cb8f9.png',
  // can: 'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/确认登录.9643a41d.png',
  // can:'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/slogan.0483ac59.png',
  // can:'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/kf-code.aa463a4d.png',
  // can:'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/笑脸.b90e154d.png',
  // can:'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/com-header-box.f248947d.png',
  // can:'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/每日任务.b610f91d.png',
  // can:'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/tcList-开心收下.bfd17d79.png',
  // can:'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/哭脸.4ead4167.png',
  // can:'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/微信支付、支付宝支付.7a4305b8.png',
  // can:'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/NotShowNum1-bg.526dbb69.png',
  // can:'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/兑换列表-bg.4b35ed09.png',
  // can:'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/Rwxy-bg.9ec912ec.png',
  // can:'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/zhifu-预存话费.0a216ead.png',
  // can: 'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/Qrdh-翼起兑好礼.a54b32d4.png',
  // can:'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/rules-bg.15055ab9.png',
  // can:'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/恭喜抽中.d0a4bd64.png',
  // can:'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/nav-bg.ec9cfc58.png',
  // can:'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/成功添加企微-OK-btn.5ccac577.png',
  // can:'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/NotShowNum-bg.3d54dbec.png',
  // can:'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/CardBoxsCm-bg-box.11632539.png',
  // can:'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/Cz-预存话费.8d6b32f2.png',
  // can:'https://pc1.h5taotao.com/xj_nzhd/xj_nzhd/img/CardBoxsLl-激活流量包.cd2fb0d9.png',
const qer = ref("护宝泡药")
const asd = `<span style="color: red;">${qer.value}</span>`;
const router = useRouter();
let  processedData = [];
const count = ref(0);
// function rty(){
//   let res = [];
//   res = shuju;
//   if(res.length){
//     let hasText = "img";
//     res = res.map((m)=>{
//       let $text = m;
//       if(m.indexOf(hasText)>=0){
//         const [f,s] = $text.split(hasText);
//         $text = `${f}<b style = "color:red">${s}</b>`;
        
//       }
//    return {
//     text:m,
//     $text,
//    }
//     })
//     processedData = res;
//    console.log(processedData)
//   }
// }
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
