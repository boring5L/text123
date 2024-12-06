<template>
    <div>
      <h1>Receiver Component</h1>
      <p>Name: {{ name }}</p>
      <p>Age: {{ age }}</p>
      <p>Country: {{ country }}</p>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      // 使用计算属性从路由查询参数中提取值
      name() {
        return this.$route.query.name || 'N/A';
      },
      age() {
        return this.$route.query.age || 'N/A';
      },
      country() {
        return this.$route.query.country || 'N/A';
      }
    }
  };
  </script>
  
  <style scoped>
  /* 样式可以根据需要添加 */
  </style>