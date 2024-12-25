<template>
    <button   @click="goToHellowWorld" >跳转到 /</button>
      <div>
        <h1>详细信息</h1>
        <p>{{ detailData }}</p>
        <router-link to = "/routercs">返回</router-link>>
      </div>
    </template>
    
    <script >
export default{
    // props: {
    //     data: {
    //         type: String,
    //         required: true // 根据需要设置
    //     }
    // },
    computed:{
        detailData(){
            return this.$route.params.data;
        }
    }
}
  
    </script>
    
    <style scoped>
  
    </style>