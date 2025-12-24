<template>
  <div :class="ns.b()">
    <div
      :class="[ns.e('top'), ns.is('expanded', modelValue)]"
      ref="thinkingRef"
    >
      <slot name="title">
        <div :class="ns.em('top', 'title')">已完成思考，参考 16 篇资料</div>
      </slot>
      <slot name="action">
        <div
          :class="ns.em('top', 'action')"
          @click="emit('update:modelValue', !modelValue)"
        >
          <span>
            {{ modelValue ? '收' : '展' }}
          </span>
        </div>
      </slot>
    </div>
    <Transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <div v-show="modelValue" :class="ns.e('content')" style="opacity: 0">
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from '@element-ai-vue/hooks'
import { useTemplateRef, watch } from 'vue'
import { ThinkingEmitsType, thinkingProps } from './props'

defineOptions({
  name: 'ElAThinking',
})
const props = defineProps({
  ...thinkingProps,
})
const emit = defineEmits<ThinkingEmitsType>()
const ns = useNamespace('thinking')
const thinkingRef = useTemplateRef('thinkingRef')

let transitionEndHandler: ((e: TransitionEvent) => void) | null = null

watch(
  () => props.modelValue,
  (newVal) => {
    const el = thinkingRef.value
    if (!el) return

    if (transitionEndHandler) {
      el.removeEventListener('transitionend', transitionEndHandler)
      transitionEndHandler = null
    }

    const startWidth = el.offsetWidth
    // 禁用 transition 以便准确测量目标宽度
    el.style.transition = 'none'
    el.style.width = newVal ? '100%' : 'min-content'
    // eslint-disable-next-line no-unused-expressions
    el.offsetHeight // 强制重绘
    const targetWidth = el.offsetWidth

    el.style.width = `${startWidth}px`
    // eslint-disable-next-line no-unused-expressions
    el.offsetHeight // 强制重绘

    // 启用 transition 并开始动画
    el.style.transition = 'width 0.3s ease-in-out'
    requestAnimationFrame(() => {
      el.style.width = `${targetWidth}px`
    })

    transitionEndHandler = (e: TransitionEvent) => {
      if (e.propertyName !== 'width') return
      el.style.width = ''
      el.style.transition = ''
      if (transitionEndHandler) {
        el.removeEventListener('transitionend', transitionEndHandler)
        transitionEndHandler = null
      }
    }
    el.addEventListener('transitionend', transitionEndHandler)
  }
)

const beforeEnter = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = '0'
  element.style.overflow = 'hidden'
  element.style.transition = 'height 0.3s ease-in-out'
}

const enter = (el: Element) => {
  const element = el as HTMLElement
  if (element.scrollHeight !== 0) {
    element.style.height = `${element.scrollHeight}px`
  } else {
    element.style.height = ''
  }
}

const afterEnter = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = ''
  element.style.overflow = ''
  element.style.transition = ''
}

const beforeLeave = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = `${element.scrollHeight}px`
  element.style.overflow = 'hidden'
  element.style.transition = 'height 0.3s ease-in-out'
}

const leave = (el: Element) => {
  const element = el as HTMLElement
  if (element.scrollHeight !== 0) {
    element.style.height = '0'
  }
}

const afterLeave = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = ''
  element.style.overflow = ''
  element.style.transition = ''
}
</script>
