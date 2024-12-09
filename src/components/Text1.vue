<template>
  <div class="counter">
    <h1>计数器</h1>
    <p>当前计数: {{ count }}</p>
    <button @click="increase">增加</button>
    <button @click="decrease">减少</button>
    <button @click="reset">重置</button>
    <button @click="goToText1">跳转到 /text1</button>
    <button @click="goToHellowWorld">跳转到 /</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();

const count = 0;

function increase() {
  this.count++;
}
function decrease() {
  this.count--;
}
function reset() {
  this.count = 0;
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
