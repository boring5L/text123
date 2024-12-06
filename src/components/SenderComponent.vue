<template>
    <div>
      <h1>Sender Component</h1>
      <button @click="sendData" class="">Send Data</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      sendData() {
        // 这里定义要传递的数据
        const data = {
          name: 'John Doe',
          age: 30,
          country: 'USA'
        };
  
        // 使用路由导航并传递数据作为查询参数
        this.$router.push({ name: 'receiver', query: data });
      }
    }
  };
  </script>
  
  <style scoped>
  /* 样式可以根据需要添加 */
  </style>