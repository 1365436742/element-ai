<template>
  <div>
    <div ref="maxWidthRef"></div>
    <div ref="thinkingRef" :class="ns.b()">
      <div
        ref="minWidthRef"
        :class="[ns.e('top'), ns.is('expanded', !modelValue)]"
      >
        <div :class="ns.em('top', 'title')" ref="titleRef">
          <slot name="title">{{ title }}</slot>
        </div>

        <slot name="action">
          <div
            :class="ns.em('top', 'action')"
            @click="emit('update:modelValue', !modelValue)"
          >
            <span
              class="element-ai-vue-iconfont"
              :class="modelValue ? 'icon-out-screen' : 'icon-full-screen'"
            ></span>
          </div>
        </slot>
      </div>
      <TransitionHeight :show="modelValue">
        <div :class="ns.e('content')" :style="{ width: maxWidth || 'auto' }">
          <slot></slot>
        </div>
      </TransitionHeight>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from '@element-ai-vue/hooks'
import { useElementSize, useMutationObserver } from '@vueuse/core'
import { computed, onMounted, useTemplateRef, watch } from 'vue'
import { ThinkingEmitsType, thinkingProps } from './props'
import TransitionHeight from './transition-height.vue'

defineOptions({
  name: 'ElAThinking',
})
const props = defineProps({
  ...thinkingProps,
})
const emit = defineEmits<ThinkingEmitsType>()
const ns = useNamespace('thinking')
const thinkingRef = useTemplateRef('thinkingRef')
const maxWidthRef = useTemplateRef('maxWidthRef')
const minWidthRef = useTemplateRef('minWidthRef')
const titleRef = useTemplateRef('titleRef')
const { width: maxWidthVal } = useElementSize(maxWidthRef)

const maxWidth = computed(() => {
  const el = thinkingRef.value
  if (el?.clientWidth !== maxWidthVal.value && el) {
    if (!props.modelValue) {
      el.style.width = getMinWidth()
    } else {
      el.style.width = maxWidthVal.value + 'px'
    }
  }
  return maxWidthVal.value + 'px'
})

const getMinWidth = () => {
  const el = minWidthRef.value
  if (!el) return '0px'
  el.style.width = 'min-content'
  const width = Math.min(el.offsetWidth + 2, maxWidthVal.value) + 'px'
  el.style.width = 'auto'
  return width
}

const handleTitleChange = () => {
  if (!props.modelValue) {
    const el = thinkingRef.value
    if (el) {
      el.style.width = getMinWidth()
    }
  }
}

useMutationObserver(
  titleRef,
  () => {
    handleTitleChange()
  },
  {
    childList: true,
    subtree: true,
    characterData: true,
  }
)

watch(
  () => props.modelValue,
  (newVal) => {
    const el = thinkingRef.value
    if (!el) return
    const startWidth = el.offsetWidth + 'px'
    const minWidth = getMinWidth()
    const targetWidth = newVal ? maxWidth.value : minWidth
    el.style.width = startWidth
    el.style.transition = 'width 0.2s ease-in-out'
    requestAnimationFrame(() => {
      el.style.width = targetWidth
    })
  }
)

onMounted(() => {
  const el = thinkingRef.value
  if (!el) return
  if (!props.modelValue) {
    el.style.width = getMinWidth()
  }
})
</script>
