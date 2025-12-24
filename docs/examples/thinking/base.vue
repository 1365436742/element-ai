<template>
  <ElAThinking v-model="expanded">
    <ElAMarkdown
      :content="content"
      :theme="isDark ? 'dark' : 'light'"
    ></ElAMarkdown>
  </ElAThinking>
</template>

<script setup lang="ts">
import { ElAThinking, ElAMarkdown } from 'element-ai-vue'
import { useData } from 'vitepress'
import { ref } from 'vue'

const { isDark } = useData()
const expanded = ref(false)
const content = ref(`
# 一级标题一级标题一级标题一级标题一级标题一级标题一级标题一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

**这是粗体文本**    *这是斜体文本*  
__这也是粗体文本__   _这也是斜体文本_

***这是粗斜体文本***  ~~这是带删除线的文本~~
`)
</script>

<style scoped></style>
