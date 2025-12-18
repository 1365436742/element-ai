import { ExtractPropTypes, PropType } from 'vue'
import { baseInputProps } from './base-input/props'

export const senderProps = {
  ...baseInputProps,
}

export type SenderPropsType = PropType<
  Partial<ExtractPropTypes<typeof senderProps>>
>
