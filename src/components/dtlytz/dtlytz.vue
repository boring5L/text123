<template>
    <!-- <div v-for="item in item" :key="item.id" @click="goToDetail(item.id)" class="item">
    {{ item.name }}
    </div> -->
    <button @click="CS">n hao </button>
    <button style="position: absolute ;left:0 ; top: 0;" @click="goToHellowWorld">跳转到 /</button>
      <div>
          <h1>数据表格</h1>
          <div class="table">
            <div
             v-for ="( item , index ) in dataArray"
            :key="index"
            @click="navigateToDetail(item)"
            >
          {{ item }}
          </div>
          </div>
      </div>
    </template>
    
    <script >
    export { default } from "./dtlytz.js";

  
  
    </script>
    
    <style scoped>

    </style>