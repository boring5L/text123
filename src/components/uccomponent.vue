<template>
  <button   @click="goToHellowWorld" >跳转到 /</button>
    <div>
      <!-- <h1>Receiver Component</h1>
      <p>Name: </p>
      <p>Age: </p>
      <p>Country: </p> -->
    </div>
  </template>
  
  <script setup>
import { useRouter } from 'vue-router'
const router = useRouter();
    function goToHellowWorld() {
  router.push("/");
}

  </script>
  
  <style scoped>

  </style>