<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="rad-a">
     <div class="rad-b">
     </div>
     <div class="rad-c">
     </div>
     <div class="rad-d">
     </div>
  </div>
  <h1>{{ msg }}</h1>
  <h1>{{ msg }}</h1><h1>{{ msg }}</h1><h1>{{ msg }}</h1>
  <div class="card">
    <button type="button" @click="count++"> {{ count }}</button>
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
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}




.rad-a{
  justify-content: center;
  display: flex;
  background-color: aqua;
  width: 250px;
  height: 250px;
  align-items: flex-end;
  justify-content: space-between;
  position: absolute;
  z-index: -1;
  .rad-b{
    display: flex;
    /* margin-left: 60px; */
    background-color: red;
    width: 50px;
    height: 50px;
  }
  .rad-c{
    position: absolute;
    /* display: flex; */
    background-color: blue;
    width: 80%;
    height: 170px;
    margin: 25px 25px;
  }
  .rad-d{
    background-color: blueviolet;
    /* position: absolute; */
    display: flex;
    width: 50px;
    height: 50px;

  }
}

</style>
