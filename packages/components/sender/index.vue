<template>
  <div
    :style="{
      'min-height': placeholderHeight,
      opacity,
    }"
  >
    <InputTagPrefix
      v-if="showInputTagPrefix && iputTagPrefixValue"
      :value="iputTagPrefixValue"
      @remove="closeInputTagPrefix"
    ></InputTagPrefix>
    <editor-content :editor="editor" />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ElASender',
})
import { watch, ref } from 'vue'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import HardBreak from '@tiptap/extension-hard-break'
import History from '@tiptap/extension-history'
import Placeholder from '@tiptap/extension-placeholder'
import { EditorView } from '@tiptap/pm/view'
import InputTagPrefix from './input-tag-prefix.vue'
import { senderProps } from './props'

const props = defineProps({
  ...senderProps,
})

const emits = defineEmits(['update:value', 'update:showInputTagPrefix'])

const placeholderHeight = ref('')
const opacity = ref(0)

const handleKeyDown = (view: EditorView, event: KeyboardEvent) => {
  // 如果是退格键，判断内容是否为空
  if (event.key === 'Backspace') {
    // 如果内容为空或仅包含空白字符，阻止删除操作
    if (editor.value?.isEmpty && props.iputTagPrefixValue) {
      emits('update:showInputTagPrefix', false)
    }
  }
  if (props.onHandleKeyDown) {
    return props.onHandleKeyDown(view, event)
  }
  // // 如果是回车键
  if (event.key === 'Enter') {
    // 如果按下了 Shift 键，允许换行
    if (event.shiftKey) {
      return false // 让默认行为处理（换行）
    }
    // emits('enterPressed')
    // 单独按回车键，阻止换行
    event.preventDefault()
    return true
  }
  return false
}

const editor = useEditor({
  content: '',
  editable: !props.disabled,
  extensions: [
    Document,
    Paragraph,
    Text,
    HardBreak,
    History,
    Placeholder.configure({
      placeholder: () => props.placeholder,
      showOnlyWhenEditable: false,
    }),
    ...props.extensions,
  ],
  editorProps: {
    handleKeyDown,
  },
  onCreate() {
    if (editor.value?.isEmpty) {
      placeholderHeight.value = getPlaceholderHeight()
    }
    // editor.value?.commands.setContent(props.modelValue || '')
    opacity.value = 1
  },
})

const getPlaceholderHeight = () => {
  const placeholder = editor.value?.view.dom.querySelector(
    '[data-placeholder]'
  ) as HTMLElement
  if (placeholder) {
    const style = window.getComputedStyle(placeholder, '::before')
    return style.height || '0px'
  }
  return ''
}

const closeInputTagPrefix = () => {
  emits('update:showInputTagPrefix', false)
}

watch(
  () => props.disabled,
  () => {
    editor.value?.setEditable(!props.disabled)
  }
)

watch(
  () => props.placeholder,
  () => {
    editor.value?.view.dispatch(editor.value.state.tr)
  }
)

watch(
  () => props.modelValue,
  (newContent) => {
    const isSame = editor.value?.getHTML() === newContent
    if (isSame) return
    editor.value?.commands.setContent(newContent)
  }
)

defineExpose({
  editor,
})
</script>
