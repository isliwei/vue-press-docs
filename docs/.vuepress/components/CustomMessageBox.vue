<template>
  <div>
    <h1>这是一个自定义消息弹窗组件</h1>
    <button @click="open">打开</button>
  </div>
</template>

<script setup>
  import { ElMessage } from 'element-plus'

  const open = () => {
    ElMessage('This is a message.')
  }
</script>

<style scoped>
  h1 {
    color: blue;
  }
</style>