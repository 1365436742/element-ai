import { ExtractPropTypes, PropType } from 'vue'

export const thinkingProps = {
  modelValue: {
    type: Boolean,
    default: false,
  },
}

export type ThinkingEmitsType = {
  (e: 'update:modelValue', value: boolean): void
}

export type ThinkingPropsType = PropType<
  Partial<ExtractPropTypes<typeof thinkingProps>>
>
