<template>
  <div :class="ns.b()">
    <slot name="header">
      <div :class="ns.e('header')">
        <div :class="ns.e('language')">{{ language }}</div>
      </div>
      <div :class="ns.e('action')">
        <span class="element-ai-vue-iconfont icon-fuzhi"></span>
      </div>
    </slot>
    <div :class="ns.e('content')" v-html="htmlContent"></div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ElACodeHighlight',
})
import { commonLangs } from '@element-ai-vue/constants'
import { useNamespace } from '@element-ai-vue/hooks'
import { getHighlighter, HighlighterType } from '@element-ai-vue/utils'
import { onMounted, ref, watch } from 'vue'
import { codeHighlightProps } from './props'

const ns = useNamespace('code-highlight')
const props = defineProps({
  content: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    default: '',
  },
  ...codeHighlightProps,
})
const htmlContent = ref('')
const highlighter = ref<HighlighterType | null>(null)

onMounted(async () => {
  highlighter.value = await getHighlighter({
    langs: props.extendLanguages || [],
    themes: props.extendThemes || [],
  })
})

watch(
  [() => props.content, () => highlighter.value],
  async () => {
    if (!highlighter.value) return
    const hasLang = commonLangs.includes(props.language || '')
    const html = await highlighter.value.codeToHtml(props.content, {
      lang: hasLang ? props.language : 'plaintext',
      theme: 'github-light',
    })
    htmlContent.value = html
  },
  { immediate: true }
)
</script>
