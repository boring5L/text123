<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});
const i = ref(5);
function countshu(num) {
  i.value = i.value + num;
  return i;
}

const count = ref(0);
</script>

<template>
  <div class="rad-a">
    <div class="rad-b">{{ i }}</div>
    <div class="rad-c">
      <button style="width: auto; height: auto" @click="countshu(1)"></button>
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
      <div class="rad-g1"></div>
       <div class="rad-g2"></div>
      <div class="rad-g1"></div>
       <div class="rad-g2"></div>
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
.read-the-docs {
  color: #888;
}

.rad-a {
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
  width: 300px;
  height: 300px;
  position: fixed; /* 使用fixed定位 */
  display: flex;
  left: 0; /* 距离左边0 */
  bottom: 0; /* 距离底部0 */
  background-color: #4caf50; /* 绿色背景 */
  color: white; /* 白色字体 */
  /* padding: 10px;  */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* 阴影效果 */
  .rad-f{
      display: flex;
      width: 150px;
      height: 200px;
      background-color: bisque;
      flex-direction: column;
      justify-content: space-between;
      .rad-f1{
        height: 50px;
        background-color: blue;
        /* margin: 0 0 10px 0; */
      }
  }
  .rad-g{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 150px;
    height: 200px;
    background-color: aquamarine;
    .rad-g1{
    height: 50px;
    margin: 25px 0 25px 0;
    background-color: azure;     
    }
  }
}
</style>
