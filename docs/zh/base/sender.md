# Sender 输入框

基于 [tiptap](https://tiptap.dev/) 的富文本输入框组件，支持多种扩展和自定义布局。

## 基础用法

:::demo SenderBase

```vue
<template>
  <button class="switch-btn" @click="variant = 'updown'">垂直</button>
  <button class="switch-btn" @click="variant = 'default'">水平</button>
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
const placeholder = ref(`请输入聊天内容`)
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

## 插入html

:::demo SenderBaseHtml

```vue
<template>
  <div>
    <button class="switch-btn" @click="variant = 'updown'">垂直</button>
    <button class="switch-btn" @click="variant = 'default'">水平</button>
  </div>

  <div>
    <button class="switch-btn" @click="showInputTagPrefix = true">
      前置标签开启
    </button>
    <button class="switch-btn" @click="showInputTagPrefix = false">
      前置标签关闭
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
      inputTagPrefixValue="技能：翻译"
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

const placeholder = ref(`请输入聊天内容`)
const showInputTagPrefix = ref(false)

const options = ref([
  { label: '前端开发', value: '1' },
  { label: '设计视觉', value: '2' },
  { label: 'java开发', value: '3' },
])
const temp: Record<string, string> = {
  'input-slot':
    '我是一个<input-slot placeholder="[职业你好我试试]"></input-slot>',
  'select-slot': `我是<select-slot value="3" options='${JSON.stringify(
    options.value
  )}'></select-slot>，帮我完成...`,
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

::: tip 扩展提醒
如果你想扩展更多html类型，可以查看源码方式，自行传入extensions进行扩展使用
:::

## 主题设置

:::demo SenderBaseHtmlDark

```vue
<template>
  <div>
    <button class="switch-btn" @click="variant = 'updown'">垂直</button>
    <button class="switch-btn" @click="variant = 'default'">水平</button>
  </div>

  <div>
    <button class="switch-btn" @click="showInputTagPrefix = true">
      前置标签开启
    </button>
    <button class="switch-btn" @click="showInputTagPrefix = false">
      前置标签关闭
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
        inputTagPrefixValue="技能：翻译"
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

const placeholder = ref(`请输入聊天内容`)
const showInputTagPrefix = ref(false)

const options = ref([
  { label: '前端开发', value: '1' },
  { label: '设计视觉', value: '2' },
  { label: 'java开发', value: '3' },
])
const temp: Record<string, string> = {
  'input-slot':
    '我是一个<input-slot placeholder="[职业你好我试试]"></input-slot>',
  'select-slot': `我是<select-slot value="3" options='${JSON.stringify(
    options.value
  )}'></select-slot>，帮我完成...`,
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

## @成员 扩展用法

::: tip 扩展提醒
使用tiptap提供的[Mention](https://tiptap.dev/docs/editor/extensions/nodes/mention#page-title)扩展能力。
:::

:::demo SenderExtensions

```vue
<!-- @include: ../../examples/sender/extensions.vue -->
```

:::

:::details ./metion/suggestions 文件

::: code-group

<<< ../../examples/sender/metion/suggestions.ts

<<< ../../examples/sender/metion/MentionList.vue

:::

## props

| 属性名                        | 说明                                                                  | 类型                                               | 默认值      |
| ----------------------------- | --------------------------------------------------------------------- | -------------------------------------------------- | ----------- |
| v-model                       | 输入框的html                                                          | `string`                                           | `''`        |
| v-model:show-input-tag-prefix | 是否显示输入框前置标签                                                | `boolean`                                          | `false`     |
| theme                         | 主题                                                                  | `'light' \| 'dark'`                                | `'light'`   |
| placeholder                   | 占位文本                                                              | `string`                                           | `''`        |
| disabled                      | 是否禁用                                                              | `boolean`                                          | `false`     |
| extensions                    | [tiptap](https://tiptap.dev/docs/editor/extensions/overview) 扩展配置 | `Array<Extensions>`                                | `[]`        |
| inputTagPrefixValue           | 输入框前置标签内容                                                    | `string`                                           | `''`        |
| enterBreak                    | 回车是否换行，为 `false` 时回车触发 `enterPressed` 事件               | `boolean`                                          | `false`     |
| onHandleKeyDown               | 自定义键盘事件处理                                                    | `(view: EditorView, event: KeyboardEvent) => void` | -           |
| variant                       | 布局变体                                                              | `'default' \| 'updown'`                            | `'default'` |

## slots

| 插槽名              | 说明                     | 作用域参数                          |
| ------------------- | ------------------------ | ----------------------------------- |
| prefix              | 前置内容插槽             | -                                   |
| input-tag-prefix    | 输入框前置标签自定义内容 | -                                   |
| action-list         | 操作栏列表插槽           | -                                   |
| send-btn            | 发送按钮插槽             | `{ disabled: boolean }`             |
| select-slot-content | select-slot 点击弹窗插槽 | `{ options: SenderSelectOption[] }` |

## events

| 事件名       | 说明                                           | 回调参数                  |
| ------------ | ---------------------------------------------- | ------------------------- |
| enterPressed | 回车键按下时触发（当 `enterBreak` 为 `false`） | -                         |
| paste        | 粘贴时触发                                     | `(event: ClipboardEvent)` |
| pasteFile    | 粘贴文件时触发                                 | `(files: File[])`         |
| blur         | 失去焦点时触发                                 | -                         |
| focus        | 获得焦点时触发                                 | -                         |
| send         | 点击发送按钮或回车发送时触发                   | `(content: string)`       |

## exposes

| 名称   | 说明                                                            | 类型           |
| ------ | --------------------------------------------------------------- | -------------- |
| editor | [tiptap editor](https://tiptap.dev/docs/editor/api/editor) 实例 | () => `Editor` |
| focus  | 自动聚焦                                                        | `void`         |
