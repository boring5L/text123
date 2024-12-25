<template>
    <!-- <div v-for="item in item" :key="item.id" @click="goToDetail(item.id)" class="item">
    {{ item.name }}
    </div> -->
    <button @click="CS">n hao </button>
    <div>
      <h1>Items List</h1>
      <input v-model="newItem" placeholder="Add a new item" />
      <button @click="addNewItem">Add Item</button>
      <ul>
        <li v-for="(item,index) in item" :key="index">
        {{ item }} <button @click="removeItem( index )">Remove</button>
        </li>
      </ul>
    </div>
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