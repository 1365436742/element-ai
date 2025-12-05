<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="demo-component">
    <h3>自定义 Vue 3 组件</h3>
    <p>这是一个在 Markdown 中使用的自定义组件。</p>
    <button @click="count++">点击次数: {{ count }}</button>
  </div>
</template>

<style scoped>
.demo-component {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
}

button {
  padding: 8px 16px;
  background-color: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: var(--vp-c-brand-dark);
}
</style>
