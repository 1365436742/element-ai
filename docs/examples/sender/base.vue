<template>
  <ShadowBox>
    <ElASender
      v-model="content"
      v-model:show-input-tag-prefix="showInputTagPrefix"
      iputTagPrefixValue="技能：翻译"
      :placeholder="placeholder"
    ></ElASender>
  </ShadowBox>
</template>

<script setup lang="ts">
import { ElASender } from 'element-ai-vue'
import { ref } from 'vue'
import ShadowBox from '../shadow-box.vue'

const content = ref(`<p>ss</p>`)

const placeholder = ref(`# Sender 组件！`)

const showInputTagPrefix = ref(true)
</script>

<style scoped></style>
