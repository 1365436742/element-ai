<template>
  <div :class="ns.b()">
    <BaseInput
      v-bind="props"
      ref="baseInputRef"
      @update:modelValue="(val) => emits('update:modelValue', val)"
      @update:showInputTagPrefix="
        (val) => emits('update:showInputTagPrefix', val)
      "
      @enterPressed="emits('enterPressed')"
      @paste="(event) => emits('paste', event)"
      @pasteFile="(files) => emits('pasteFile', files)"
      @blur="emits('blur')"
      @focus="emits('focus')"
    >
      <template #input-tag-prefix>
        <slot name="input-tag-prefix"></slot>
      </template>
    </BaseInput>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ElASender',
})
import { useNamespace } from '@element-ai-vue/hooks'
import BaseInput from './base-input/index.vue'
import { BaseInputEmitsType } from './base-input/props'
import { senderProps } from './props'
import { useTemplateRef } from 'vue'

const ns = useNamespace('sender')
const props = defineProps({
  ...senderProps,
})

const emits = defineEmits<BaseInputEmitsType>()
const baseInputRef = useTemplateRef('baseInputRef')

defineExpose({
  ...baseInputRef.value,
})
</script>
