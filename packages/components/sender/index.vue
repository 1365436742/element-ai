<template>
  <editor-content :editor="editor" />
</template>

<script setup lang="ts">
defineOptions({
  name: 'ElASender',
})
import { watch } from 'vue'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import HardBreak from '@tiptap/extension-hard-break'
import History from '@tiptap/extension-history'
import Placeholder from '@tiptap/extension-placeholder'
import { senderProps } from './props'

const props = defineProps({
  ...senderProps,
})

const content = defineModel({
  type: String,
  default: '',
})

const editor = useEditor({
  content: content.value,
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
      includeChildren: true,
      showOnlyCurrent: false,
    }),
    ...props.extensions,
  ],
})

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

watch(content, (newContent) => {
  const isSame = editor.value?.getHTML() === newContent
  if (isSame) return
  editor.value?.commands.setContent(newContent)
})

defineExpose({
  editor,
})
</script>
