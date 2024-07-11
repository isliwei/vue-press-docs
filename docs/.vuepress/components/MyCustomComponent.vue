<template>
  <div>
    <h1>这是一个自定义组件</h1>
    <p>{{ message }}</p>
    <button @click="add">ADD</button> {{ account }}
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const account = ref(0)
  const add = () => {
    account.value++
  }
  const message = ref('Hello, VuePress 2!');  
</script>

<style scoped>
  h1 {
    color: blue;
  }
</style>