import { Extensions } from '@tiptap/vue-3'
import { ExtractPropTypes, PropType } from 'vue'

export const senderProps = {
  placeholder: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  extensions: {
    type: Array as PropType<Extensions>,
    default: () => [],
  },
}

export type SenderPropsType = PropType<
  Partial<ExtractPropTypes<typeof senderProps>>
>
