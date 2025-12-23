<template>
  <div ref="box"></div>
</template>
<script setup lang="ts">
import {
  h,
  onMounted,
  onBeforeUnmount,
  render,
  useSlots,
  useTemplateRef,
} from 'vue'
// @ts-ignore
import themeChalk from '@element-ai-vue/theme-chalk/src/index.scss?inline'
// @ts-ignore
import shadowBoxChalk from './shadow-box.scss?inline'

const shadowHost = useTemplateRef('box')
const slots = useSlots()
let container: Element | null = null

const renderDom = () => {
  if (!shadowHost.value) return

  let shadowRoot = shadowHost.value.shadowRoot
  if (!shadowRoot) {
    shadowRoot = shadowHost.value.attachShadow({ mode: 'open' })
    const style = document.createElement('style')
    style.textContent = themeChalk + shadowBoxChalk
    shadowRoot.appendChild(style)
  }

  container = shadowRoot.querySelector('.shadow-container')
  if (!container) {
    container = document.createElement('div')
    container.className = 'shadow-container'
    shadowRoot.appendChild(container)
  }

  const vnode = h({
    render: () => slots.default?.(),
  })
  render(vnode, container)
}

onMounted(() => {
  renderDom()
})

onBeforeUnmount(() => {
  if (container) {
    render(null, container)
    container = null
  }
})
</script>
