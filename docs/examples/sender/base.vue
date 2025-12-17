<template>
  <ShadowBox>
    <ElASender v-model="content" :placeholder="placeholder"></ElASender>
  </ShadowBox>
</template>

<script setup lang="ts">
import { ElASender } from 'element-ai-vue'
import { ref } from 'vue'
import ShadowBox from '../shadow-box.vue'

const content = ref(`<p>ss</p><p>ss</p>`)

const placeholder = ref(`# 欢迎使用 Sender 组件！`)
</script>

<style scoped></style>
