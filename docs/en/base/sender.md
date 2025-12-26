# Sender Input

Rich text input component based on [tiptap](https://tiptap.dev/), supporting multiple extensions and custom layouts.

## Basic Usage

:::demo SenderBase

```vue
<template>
  <button class="switch-btn" @click="variant = 'updown'">Vertical</button>
  <button class="switch-btn" @click="variant = 'default'">Horizontal</button>
  <div class="wapper" :class="{ 'focus-class': focusClass }">
    <ElASender
      v-model="content"
      :placeholder
      :variant
      @focus="focusClass = true"
      @blur="focusClass = false"
    ></ElASender>
  </div>
</template>

<script setup lang="ts">
import { ElASender } from 'element-ai-vue'
import { ref } from 'vue'

const content = ref(``)
const variant = ref<'default' | 'updown'>('default')
const focusClass = ref(false)
const placeholder = ref(`Enter chat content`)
</script>

<style scoped lang="scss">
html.dark {
  .wapper {
    border-color: rgba(121, 121, 121, 0.6);

    &.focus-class {
      border-color: rgba($color: #fff, $alpha: 0.6);
    }
  }
}

.wapper {
  width: 600px;
  border-radius: 8px;
  padding: 8px 7px;
  border: 1px solid rgba(17, 25, 37, 0.15);

  &.focus-class {
    border-color: rgba(17, 25, 37, 0.45);
  }
}
</style>
```

:::

## Insert HTML

:::demo SenderBaseHtml

```vue
<template>
  <div>
    <button class="switch-btn" @click="variant = 'updown'">Vertical</button>
    <button class="switch-btn" @click="variant = 'default'">Horizontal</button>
  </div>

  <div>
    <button class="switch-btn" @click="showInputTagPrefix = true">
      Enable Prefix Tag
    </button>
    <button class="switch-btn" @click="showInputTagPrefix = false">
      Disable Prefix Tag
    </button>
    <button class="switch-btn" @click="changeContent('input-slot')">
      input-slot
    </button>
    <button class="switch-btn" @click="changeContent('select-slot')">
      select-slot
    </button>
  </div>

  <div class="wapper" :class="{ 'focus-class': focusClass }">
    <ElASender
      v-model="content"
      v-model:show-input-tag-prefix="showInputTagPrefix"
      inputTagPrefixValue="Skill: Translation"
      :placeholder
      :variant
      @focus="focusClass = true"
      @blur="focusClass = false"
    >
    </ElASender>
  </div>
</template>

<script setup lang="ts">
import { ElASender } from 'element-ai-vue'
import { ref } from 'vue'

const content = ref(``)
const variant = ref<'default' | 'updown'>('default')
const focusClass = ref(false)

const placeholder = ref(`Enter chat content`)
const showInputTagPrefix = ref(false)

const options = ref([
  { label: 'Frontend Developer', value: '1' },
  { label: 'Visual Designer', value: '2' },
  { label: 'Java Developer', value: '3' },
])
const temp: Record<string, string> = {
  'input-slot':
    'I am a <input-slot placeholder="[Occupation placeholder]"></input-slot>',
  'select-slot': `I am <select-slot value="3" options='${JSON.stringify(
    options.value
  )}'></select-slot>, help me complete...`,
}
const changeContent = (key: string) => {
  content.value = temp[key]
}
</script>

<style scoped lang="scss">
html.dark {
  .wapper {
    border-color: rgba(121, 121, 121, 0.6);

    &.focus-class {
      border-color: rgba($color: #fff, $alpha: 0.6);
    }
  }
}

.wapper {
  width: 100%;
  border-radius: 8px;
  padding: 8px;
  border: 1px solid rgba(17, 25, 37, 0.15);

  &.focus-class {
    border-color: rgba(17, 25, 37, 0.45);
  }
}
</style>
```

:::

::: tip Extension Reminder
If you want to extend more HTML types, you can check the source code and pass in custom extensions for extended usage.
:::

## Theme Settings

:::demo SenderBaseHtmlDark

```vue
<template>
  <div>
    <button class="switch-btn" @click="variant = 'updown'">Vertical</button>
    <button class="switch-btn" @click="variant = 'default'">Horizontal</button>
  </div>

  <div>
    <button class="switch-btn" @click="showInputTagPrefix = true">
      Enable Prefix Tag
    </button>
    <button class="switch-btn" @click="showInputTagPrefix = false">
      Disable Prefix Tag
    </button>
    <button class="switch-btn" @click="changeContent('input-slot')">
      input-slot
    </button>
    <button class="switch-btn" @click="changeContent('select-slot')">
      select-slot
    </button>
  </div>
  <div class="box">
    <div class="wapper" :class="{ 'focus-class': focusClass }">
      <ElASender
        v-model="content"
        v-model:show-input-tag-prefix="showInputTagPrefix"
        theme="dark"
        inputTagPrefixValue="Skill: Translation"
        :placeholder
        :variant
        @focus="focusClass = true"
        @blur="focusClass = false"
      >
      </ElASender>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElASender } from 'element-ai-vue'
import { ref } from 'vue'

const content = ref(``)
const variant = ref<'default' | 'updown'>('default')
const focusClass = ref(false)

const placeholder = ref(`Enter chat content`)
const showInputTagPrefix = ref(false)

const options = ref([
  { label: 'Frontend Developer', value: '1' },
  { label: 'Visual Designer', value: '2' },
  { label: 'Java Developer', value: '3' },
])
const temp: Record<string, string> = {
  'input-slot':
    'I am a <input-slot placeholder="[Occupation placeholder]"></input-slot>',
  'select-slot': `I am <select-slot value="3" options='${JSON.stringify(
    options.value
  )}'></select-slot>, help me complete...`,
}
const changeContent = (key: string) => {
  content.value = temp[key]
}
</script>

<style scoped lang="scss">
.box {
  background-color: #000;
  padding: 20px;
  .wapper {
    width: 100%;
    border-radius: 8px;
    padding: 8px;
    border: 1px solid rgba(121, 121, 121, 0.6);

    &.focus-class {
      border-color: rgba($color: #fff, $alpha: 0.6);
    }
  }
}
</style>
```

:::

## @Mention Extension Usage

::: tip Extension Reminder
Uses tiptap's [Mention](https://tiptap.dev/docs/editor/extensions/nodes/mention#page-title) extension capability.
:::

:::demo SenderExtensions

```vue
<!-- @include: ../../examples/sender/extensions.vue -->
```

:::

:::details ./metion/suggestions File

::: code-group

<<< ../../examples/sender/metion/suggestions.ts

<<< ../../examples/sender/metion/MentionList.vue

:::

## Advanced Chat Input

- Set input max height via CSS.
- Combine with `ElADragUpload`, `useFileOperation`, `ElAFilesUpload` for drag-drop, Ctrl+V paste, and click upload.
- Use `ElAFilesCard` for file upload preview.

:::demo SenderChat

```vue
<template>
  <button class="switch-btn" @click="variant = 'updown'">Vertical</button>
  <button class="switch-btn" @click="variant = 'default'">Horizontal</button>
  <ElADragUpload class="upload-area" v-bind="commonProps" v-model="fileList">
    <div class="area">
      <div class="text-desc">This area supports drag and drop</div>
      <div class="wapper" :class="{ 'focus-class': focusClass }">
        <div class="file-card" v-if="fileList.length">
          <ElAFilesCard v-model="fileList"></ElAFilesCard>
        </div>
        <ElASender
          v-model="content"
          placeholder="Enter chat content"
          class="sender"
          :variant
          @focus="focusClass = true"
          @blur="focusClass = false"
          @paste-file="handleFileUpload"
        >
          <template #action-list>
            <select
              class="model-select"
              :class="{ dark: isDark }"
              placeholder="Please select"
            >
              <option value="chatgpt">chatgpt</option>
              <option value="gemini3">gemini3</option>
              <option value="claude">claude</option>
            </select>
            <button class="upload-btn" :style="{ marginLeft: 'auto' }">
              Voice
            </button>
          </template>
          <template #prefix>
            <ElAFilesUpload v-bind="commonProps" v-model="fileList">
              <button class="upload-btn">Upload</button>
            </ElAFilesUpload>
          </template>
        </ElASender>
      </div>
    </div>
  </ElADragUpload>
</template>

<script setup lang="ts">
import {
  ElASender,
  ElAFilesUpload,
  ElADragUpload,
  FilesUploadItem,
  ElAFilesCard,
  FilesUploadErrorParams,
  useFileOperation,
} from 'element-ai-vue'
import { ref } from 'vue'

const fileList = ref<FilesUploadItem[]>([])

const content = ref(``)
const variant = ref<'default' | 'updown'>('default')
const focusClass = ref(false)

const mockUpload = (onProgress: (progress: number) => void) => {
  let progress = 0
  const interval = setInterval(() => {
    progress += 30
    onProgress(progress)
    if (progress >= 100) {
      onProgress(100)
      clearInterval(interval)
    }
  }, 500)
}
const onErrorMessage = ({ message, type }: FilesUploadErrorParams) => {
  alert(type + ' ' + message)
}
const onUpload = async (fileUploadItems: FilesUploadItem[]) => {
  for (let i = 0; i < fileUploadItems.length; i++) {
    const element = fileList.value.find(
      (item) => item.fileId === fileUploadItems[i].fileId
    )
    mockUpload((progress) => {
      if (element) {
        element.progress = progress
        if (progress >= 100) {
          element.uploadingStatus = 'success'
          // You can replace fileUrl with CDN link here
          // element.fileUrl = "";
        }
      }
    })
  }
}
const commonProps = {
  fileSizeLimit: 1, // 10MB
  maxFileLength: 5,
  accept: ['.pdf', '.docx', '.doc', '.png', '.jpg'],
  onUpload,
  onErrorMessage,
}
const { handleFileUpload } = useFileOperation(commonProps, fileList)
</script>

<style scoped lang="scss">
.input-content {
  margin: 10px 0;
  border: 1px solid #eee;
  padding: 8px;
  border-radius: 4px;
}

.wapper {
  width: 100%;
  border-radius: 8px;
  padding: 8px;
  border: 1px solid rgba(17, 25, 37, 0.15);
  .file-card {
    margin-bottom: 10px;
  }
  &.focus-class {
    border-color: rgba(17, 25, 37, 0.45);
  }
}
.upload-area {
  width: 100%;
  height: 400px;
}

.sender {
  .el-ai-sender__content {
    max-height: 200px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 6px;
      background-color: rgba(144, 147, 153, 0.3);
      &:hover {
        background-color: rgba(144, 147, 153, 0.5);
      }
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }
}

.area {
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(17, 25, 37, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .text-desc {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
```

:::

## Props

| Property                      | Description                                                           | Type                                               | Default     |
| ----------------------------- | --------------------------------------------------------------------- | -------------------------------------------------- | ----------- |
| v-model                       | Input box HTML content                                                | `string`                                           | `''`        |
| v-model:show-input-tag-prefix | Whether to show input prefix tag                                      | `boolean`                                          | `false`     |
| theme                         | Theme                                                                 | `'light' \| 'dark'`                                | `'light'`   |
| placeholder                   | Placeholder text                                                      | `string`                                           | `''`        |
| disabled                      | Whether disabled                                                      | `boolean`                                          | `false`     |
| extensions                    | [tiptap](https://tiptap.dev/docs/editor/extensions/overview) extensions | `Array<Extensions>`                                | `[]`        |
| inputTagPrefixValue           | Input prefix tag content                                              | `string`                                           | `''`        |
| enterBreak                    | Whether Enter creates new line. When `false`, Enter triggers `enterPressed` event | `boolean`                                          | `false`     |
| onHandleKeyDown               | Custom keyboard event handler                                         | `(view: EditorView, event: KeyboardEvent) => void` | -           |
| variant                       | Layout variant                                                        | `'default' \| 'updown'`                            | `'default'` |

## Slots

| Slot Name           | Description                      | Scope Parameters                    |
| ------------------- | -------------------------------- | ----------------------------------- |
| prefix              | Prefix content slot              | -                                   |
| input-tag-prefix    | Custom input prefix tag content  | -                                   |
| action-list         | Action bar list slot             | -                                   |
| send-btn            | Send button slot                 | `{ disabled: boolean }`             |
| select-slot-content | select-slot click popup slot     | `{ options: SenderSelectOption[] }` |

## Events

| Event Name   | Description                                           | Callback Parameters       |
| ------------ | ----------------------------------------------------- | ------------------------- |
| enterPressed | Triggered on Enter key (when `enterBreak` is `false`) | -                         |
| paste        | Triggered on paste                                    | `(event: ClipboardEvent)` |
| pasteFile    | Triggered when pasting files                          | `(files: File[])`         |
| blur         | Triggered on blur                                     | -                         |
| focus        | Triggered on focus                                    | -                         |
| send         | Triggered on send button click or Enter send          | `(content: string)`       |

## Exposes

| Name   | Description                                                         | Type           |
| ------ | ------------------------------------------------------------------- | -------------- |
| editor | [tiptap editor](https://tiptap.dev/docs/editor/api/editor) instance | () => `Editor` |
| focus  | Auto focus                                                          | `void`         |
