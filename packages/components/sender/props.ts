import { Extensions } from '@tiptap/vue-3'
import { EditorView } from '@tiptap/pm/view'
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
  iputTagPrefixValue: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
  showInputTagPrefix: {
    type: Boolean,
    default: false,
  },
  onHandleKeyDown: {
    type: Function as PropType<
      (view: EditorView, event: KeyboardEvent) => void
    >,
  },
}

export type SenderPropsType = PropType<
  Partial<ExtractPropTypes<typeof senderProps>>
>
