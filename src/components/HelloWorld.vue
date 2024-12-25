<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();

function goToText1 ()  {
  router.push('/text1'); // 使用 router 而不是 this.$router
};
function goToHellowWorld ()  {
  router.push('/'); // 使用 router 而不是 this.$router
};

function goToUC ()  {
  router.push('/uc'); // 使用 router 而不是 this.$router
};
function goToUDtly ()  {
  router.push('/routercs'); // 使用 router 而不是 this.$router
};

import { ref, onMounted } from "vue";
import qs from "qs"
defineProps({
  msg: String,
});
let qsstring = "https://gd.189.cn/plus/h5/2022/cyb/index.html#/fifteen?i=1&cmpid=qyxs-qywx-dg-tg-hd-3GBllqy&phone=Wdh3xnqDCFSlsMgTUDto1A%3D%3D&miaoyiOpenid=oM2JhwaqKiEP-KtmKTAIEpI6U6sI";
const { origin,pathname } = location;

function urlqsstring(qsstring) {
  const params = {};
  let [a, b] = qsstring ? qsstring.split("?") : [];
  if (b) {
    const parmas = qs.parse(b);
    Object.keys(parmas).forEach((key) => {
      let [aVal = ""] = parmas[key]?.split("#") || [];
      params[key] = aVal; // 存储参数
    });
  }
  
  return params; // 返回 params
}
    // 定义一个响应式变量来存储URL参数
    const urlParams = ref({});
    const urlQuery  = ref("");
    let urlAll = ref("");
    // 在组件挂载时调用函数
    onMounted(() => {
      const queryString = qsstring; // 获取当前URL的查询字符串
      urlParams.value = urlqsstring(queryString); // 更新urlParams
      urlQuery.value = qs.stringify(urlParams.value);
      urlAll.value = `${origin}?${urlQuery.value}`;
      
    });

  

 
const i = ref(5);

function countshu(num) {
  i.value = i.value + num;
  return i;
}

const count = ref(0);
</script>

<template>
    <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div class="text1button">
    <h1>欢迎来到我的页面</h1>goToHellowWorld
    <button @click="goToText1">跳转到 /text1</button>
    <button @click="goToHellowWorld">跳转到 /</button>
    <button @click="goToUC">跳转到 / UC</button>
    <button @click="goToUDtly ">跳转到 / 动态路由</button>
  </div>
  <div class="rad-a">
    <div class="rad-b">{{ i }}</div>
    <div class="rad-c">
    </div>
    <div class="rad-d">
      <button style="" @click="countshu(i)"></button>
    </div>
  </div>

  <div class="rad-e">
    <div class="rad-f">
      <div class="rad-f1">
        <div class="rad-f2"></div>
      </div>
      <div class="rad-f1">
        <div class="rad-f2"></div>
      </div>
      <div class="rad-f1">
        <div class="rad-f2"></div>
      </div>
    </div>
    <div class="rad-g">
      <div class="rad-g1">
        <div class="rad-g2"></div>
      </div>
      <div class="rad-g1"><div class="rad-g2"></div></div>
    </div>
    <div class="rad-h" >
    </div>
    <div class="rad-h1"></div>
  </div>
  <div class="rad-i">
      <div class="rad-i1"></div>
      <div class="rad-i2">
        <div class="rad-i3"></div>
        <div class="rad-i4"></div>
      </div>
    </div>
  <h1>{{ msg }}</h1>
  <h1>{{ msg }}</h1>
  <h1>{{ msg }}</h1>
  <h1>{{ msg }}</h1>
  <div class="card">
    <button type="button" @click="count++">{{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code>
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>

  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.text1button{
  position: absolute;
  left: 0;
  top: 0;
}
.read-the-docs {
  color: #888;
}

.rad-a {
  bottom:0;
  right: 0;
  justify-content: center;
  display: flex;
  background-color: aqua;
  width: 250px;
  height: 250px;
  align-items: flex-end;
  justify-content: space-between;
  position: absolute;
  /* z-index: -1; */
  .rad-b {
    display: flex;
    /* margin-left: 60px; */
    background-color: red;
    width: 50px;
    height: 50px;
  }
  .rad-c {
    position: absolute;
    /* display: flex; */
    background-color: blue;
    width: 80%;
    height: 170px;
    margin: 25px 25px;
  }
  .rad-d {
    background-color: blueviolet;
    /* position: absolute; */
    display: flex;
    width: 50px;
    height: 50px;
  }
}
.rad-e {
  width: 200px;
  height: 200px;
  position: fixed; /* 使用fixed定位 */
  display: flex;
  left: 0; /* 距离左边0 */
  bottom: 0; /* 距离底部0 */
  background-color: #4caf50; /* 绿色背景 */
  color: white; /* 白色字体 */
  /* padding: 10px;  */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* 阴影效果 */
  .rad-f {
    display: flex;
    width: 50%;
    height: 200px;
    background-color: bisque;
    flex-direction: column;
    justify-content: space-between;
    .rad-f1 {
      height: 50px;
      background-color: blue;
      /* margin: 0 0 10px 0; */
    }
    .rad-f2 {
      height: 50px;
      width: 50px;
      background-color: blueviolet;
    }
  }
  .rad-g {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    height: 200px;
    background-color: aquamarine;
    .rad-g1 {
      display: flex;
      height: 50px;
      margin: 25px 0 25px 0;
      justify-content: flex-end;
      background-color: azure;
      .rad-g2{
      height: 50px;
      width: 50px;
      background-color: bisque;
      }
    }

  }
  .rad-h{
      top: 180px;
      position: absolute;
      width: 30px;
      height: 60px;
      background-color: brown;
  }
  .rad-h1{
      right: 0;
      top: 50px;
      position: absolute;
      width: 30px;
      height: 60px;
      background-color: brown;
  }
}
.rad-i{
    position: fixed;
    top: 0;
    right: 0;
    width: 200px;
    height: 200px;
    background-color: #888;
    .rad-i1{
      width: 100%;
      height: 50px;
      background-color: aqua;
    }
    .rad-i2{
      width: 100%;
      height: 50px;
      display: flex;
      .rad-i3{
      width: 50%;
      height: 100%;
      background-color: red;
    }
      .rad-i4{
      width: 50%;
      height: 100%;
      background-color: aliceblue;
    }
    }

    .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
  }
</style>
