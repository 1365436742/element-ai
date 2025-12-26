# CodeMermaid Flowchart

CodeMermaid is a flowchart rendering component based on [Mermaid](https://mermaid.js.org/), supporting dynamic rendering of Mermaid diagrams.

## Basic Usage

Use the `content` property to pass in a Mermaid syntax string.

:::demo CodeMermaidBase

```vue
<template>
  <ElACodeMermaid :content="content"></ElACodeMermaid>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElACodeMermaid } from 'element-ai-vue'

const content = ref(`graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
`)
</script>
```

:::

## Slot - Custom Toolbar

Supports slot definitions. When customizing the toolbar, you need to handle theme color adaptation yourself.
There are two types of toolbars:

1. Hover toolbar
2. Fullscreen toolbar

:::demo CodeMermaidSlotExampls

```vue
<template>
  <ElACodeMermaid :content="content">
    <template
      #toolbar="{
        zoomIn,
        zoomOut,
        resetZoom,
        toggleFullscreen,
        downloadPng,
        isCodeView,
        toggleView,
        onCopy,
        isCopied,
      }"
    >
      <div class="tool">
        <template v-if="isCodeView">
          <button @click="onCopy">{{ isCopied ? 'Copied' : 'Copy' }}</button>
          <button @click="toggleView">Preview</button>
        </template>
        <template v-else>
          <button @click="zoomIn">Zoom In</button>
          <button @click="zoomOut">Zoom Out</button>
          <button @click="resetZoom">Reset</button>
          <button @click="downloadPng">Download PNG</button>
          <button @click="toggleFullscreen">Toggle Fullscreen</button>
          <button @click="toggleView">View Code</button>
        </template>
      </div>
    </template>
    <template
      #fullscreen-toolbar="{
        zoomIn,
        zoomOut,
        resetZoom,
        toggleFullscreen,
        downloadPng,
      }"
    >
      <div class="tool-fullscreen">
        <button @click="zoomIn">Zoom In</button>
        <button @click="zoomOut">Zoom Out</button>
        <button @click="resetZoom">Reset</button>
        <button @click="downloadPng">Download PNG</button>
        <button @click="toggleFullscreen">Exit Fullscreen</button>
      </div>
    </template>
  </ElACodeMermaid>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElACodeMermaid } from 'element-ai-vue'

const content = ref(`flowchart TD
    A[User visits registration page] --> B{Enter registration info}
    B -->|Info complete| C[Backend validates info]
    B -->|Info missing| D[Prompt user to fill required fields]
    D --> B
    C -->|Validation passed| E[Send verification email/SMS]
    C -->|Validation failed| F[Show error message (e.g., phone already registered)]
    F --> B
    E --> G{User completes verification}
    G -->|Verified within 24h| H[Create user account, registration successful]
    G -->|Timeout| I[Verification link expired, resend]
    I --> E
    E --> G{User completes verification}
    G -->|Verified within 24h| H[Create user account, registration successful]
    G -->|Timeout| I[Verification link expired, resend]
    I --> E
    E --> G{User completes verification}
    G -->|Verified within 24h| H[Create user account, registration successful]
    G -->|Timeout| I[Verification link expired, resend]
    I --> E
    E --> G{User completes verification}
    G -->|Verified within 24h| H[Create user account, registration successful]
    G -->|Timeout| I[Verification link expired, resend]
    I --> E
`)
</script>

<style scoped lang="scss">
.tool {
  background-color: #000;
  display: flex;
  gap: 8px;
  color: #fff;
}
.tool-fullscreen {
  background-color: #000;
  display: flex;
  gap: 8px;
  color: #fff;
}
</style>
```

:::

::: warning
When configuring `theme` and `mermaidConfig` individually, all components must have the same configuration. Because [Mermaid](https://mermaid.js.org/config/schema-docs/config.html) uses globally unified rendering configuration and cannot be configured individually during rendering, otherwise it will cause inconsistent rendering configurations. Unless you are rendering asynchronously, tab switching types can be changed.
:::

## Props

| Property                    | Type            | Required | Default | Description                                                                                        |
| :-------------------------- | :-------------- | :------- | :------ | :------------------------------------------------------------------------------------------------- |
| content                     | `string`        | Yes      | —       | Mermaid syntax content                                                                             |
| disabledWheelZoom           | `boolean`       | No       | false   | Disable mouse wheel zoom and mouse movement (non-fullscreen mode)                                  |
| disabledFullscreenWheelZoom | `boolean`       | No       | false   | Disable mouse wheel zoom and mouse movement in fullscreen mode                                     |
| theme                       | `string`        | No       | `base`  | Mermaid theme, supports `default`, `forest`, `dark`, `neutral`, `base`                             |
| fullscreenMode              | `string`        | No       | `page`  | Fullscreen mode, supports `web` (web fullscreen) and `page` (page fullscreen)                      |
| mermaidConfig               | `MermaidConfig` | No       | `{}`    | Mermaid config object, see [Mermaid Config](https://mermaid.js.org/config/schema-docs/config.html) |

## Slots

| Slot Name          | Description        | Slot Parameters                                                                                                                                                                                                                                                                                                                                                           |
| :----------------- | :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| fullscreen-toolbar | Fullscreen toolbar | `isCodeView`: Currently showing code(true) or mermaid chart(false)<br>`isCopied`: Copy status, 1s interval before next copy<br>`onCopy`: Copy code function<br>`toggleView`: Toggle between code and mermaid chart<br>`zoomIn`: Zoom in<br>`zoomOut`: Zoom out<br>`resetZoom`: Reset to default<br>`toggleFullscreen`: Toggle fullscreen<br>`downloadPng`: Download image |
| toolbar            | Normal toolbar     | Same parameters as above                                                                                                                                                                                                                                                                                                                                                  |

## Ref

| Method Name      | Description            | Parameters |
| :--------------- | :--------------------- | :--------- |
| toggleView       | Toggle code/chart view | -          |
| zoomIn           | Zoom in                | -          |
| zoomOut          | Zoom out               | -          |
| resetZoom        | Reset zoom             | -          |
| toggleFullscreen | Toggle fullscreen      | -          |
| downloadPng      | Download PNG image     | -          |
| onCopy           | Copy code              | -          |
