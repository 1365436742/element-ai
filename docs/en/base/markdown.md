# Markdown

The Markdown component's core is built on the `unified` and `remark` ecosystem. It parses Markdown text into an AST (Abstract Syntax Tree) and leverages Vue's rendering mechanism to convert it into DOM nodes. This architecture design gives the component extremely high flexibility, supporting Slots and custom component rendering to meet complex business requirements.

**Features:**

- **Core Engine**: Based on `unified` and `remark`, providing precise parsing and a rich ecosystem.
- **Vue Rendering**: Uses Vue to render AST, supporting seamless embedding of Vue components and slots.
- **Built-in Support**: Default support for math formulas (KaTeX), code highlighting, Mermaid flowcharts/sequence diagrams, etc.
- **Extensibility**: Supports custom extensions, easily integrating third-party chart libraries like ECharts.
- **Component Decomposition**: Markdown breaks down basic [Code Highlighting](/en/base/code-highlight.html) and [Mermaid](/en/base/code-mermaid.html) into two separate components.

## Basic Usage

:::demo markdownBaseExampls

```vue
<template>
  <ElAMarkdown :content></ElAMarkdown>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { ElAMarkdown } from '@element-ai-vue/components'
const content = ref(`
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

**This is bold text**    *This is italic text*  
__This is also bold__   _This is also italic_

***This is bold italic***  ~~This is strikethrough text~~

- Unordered list item 1
- Unordered list item 2
  - Sub-item 2.1
  - Sub-item 2.2

[element-ai-vue](/ "element-ai-vue")

![Example image](/logo.svg "An example image")

>This is a blockquote
>
>> This is a nested blockquote
---
| Name | Age | Occupation |
| ---- | ---- | ---- |
| John | 25   | Engineer |
| Jane | 30   | Designer |
`)
</script>
```

:::

## Slot - Custom Toolbar

:::demo markdownCodeSlotExampls

```vue
<template>
  <ElAMarkdown :content="content">
    <template #code-highlight-header="{ content, language, isCopied, onCopy }">
      <div class="header">
        <div>{{ language }}</div>
        <button @click="onCopy">{{ isCopied ? 'Copied' : 'Copy' }}</button>
      </div>
    </template>
    <template
      #code-mermaid-toolbar="{
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
      #code-mermaid-fullscreen-toolbar="{
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
  </ElAMarkdown>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { ElAMarkdown } from '@element-ai-vue/components'

const content = ref(`
# JavaScript Code Block
\`\`\`javascript
/**
 * Generate a random integer within the range [min, max] (inclusive)
 * @param {number} min - Minimum value (integer)
 * @param {number} max - Maximum value (integer)
 * @returns {number} Random integer
 */
function getRandomInt(min, max) {
  // Round to avoid non-integer parameter issues
  min = Math.ceil(min);
  max = Math.floor(max);
  // Math.random() generates [0,1), resulting in [min, max]
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example: Generate a random integer between 1 and 10 (inclusive)
console.log(getRandomInt(1, 10)); // Output: Random number between 1~10
\`\`\`
# Mermaid Flowchart Example
\`\`\`mermaid
flowchart TD
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
\`\`\`
`)
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: #000;
  padding: 8px;
  color: #fff;
}
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

## Slot - Custom Code Block Using ECharts

:::demo markdownCustomCodeArea

```vue
<template>
  <ElAMarkdown :content="content">
    <template #code="props">
      <div v-if="props.language === 'echarts'">
        <echartsTest
          :content="props.content"
          :theme="props.theme"
        ></echartsTest>
      </div>
      <ElACodeHighlight v-else v-bind="props"></ElACodeHighlight>
    </template>
  </ElAMarkdown>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { ElAMarkdown, ElACodeHighlight } from '@element-ai-vue/components'
import echartsTest from './echarts-test.vue'

const content = ref(`
# ECharts Custom
\`\`\`echarts
option = {
  title: {
    text: 'Stacked Line'
  },
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};
\`\`\`


# JavaScript Code Block
\`\`\`javascript
/**
 * Generate a random integer within the range [min, max] (inclusive)
 * @param {number} min - Minimum value (integer)
 * @param {number} max - Maximum value (integer)
 * @returns {number} Random integer
 */
function getRandomInt(min, max) {
  // Round to avoid non-integer parameter issues
  min = Math.ceil(min);
  max = Math.floor(max);
  // Math.random() generates [0,1), resulting in [min, max]
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example: Generate a random integer between 1 and 10 (inclusive)
console.log(getRandomInt(1, 10)); // Output: Random number between 1~10
\`\`\`

`)
</script>
```

:::

:::details Custom ECharts File Example ./echarts-test.vue
<<< @/examples/markdown/echarts-test.vue
:::

## Typewriter Output

:::demo markdownTypewriter

```vue
<template>
  <div class="btns">
    <button class="switch-btn" @click="start">Start</button>
    <button class="switch-btn" @click="paused">Pause</button>
    <button class="switch-btn" @click="stop">Stop</button>
  </div>
  <ElAMarkdown :content="content"></ElAMarkdown>
</template>
<script setup lang="ts">
import { useTyperwriter, ElAMarkdown } from 'element-ai-vue'
const { start, paused, stop, setText, content } = useTyperwriter({
  interval: 50,
})

const allText = `
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

**This is bold text**    *This is italic text*  
__This is also bold__   _This is also italic_

***This is bold italic***  ~~This is strikethrough text~~

- Unordered list item 1
- Unordered list item 2
  - Sub-item 2.1
  - Sub-item 2.2

[element-ai-vue](/ "element-ai-vue")

![Example image](/logo.svg "An example image")

>This is a blockquote
>
>> This is a nested blockquote
---
| Name | Age | Occupation |
| ---- | ---- | ---- |
| John | 25   | Engineer |
| Jane | 30   | Designer |

# JavaScript Code Block
\`\`\`javascript
console.log(123); 
\`\`\`

# Mermaid Code Block
\`\`\`mermaid
flowchart TD
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
\`\`\`
`
setText(allText)
</script>
```

:::

## Props

| Property           | Description                                                                     | Type                     | Default   |
| ------------------ | ------------------------------------------------------------------------------- | ------------------------ | --------- |
| theme              | Theme mode                                                                      | `'dark' \| 'light'`      | `'light'` |
| content            | Markdown content                                                                | `string`                 | `''`      |
| remarkPlugins      | Custom remark plugins                                                           | `MiddlewarePluginItem[]` | `[]`      |
| codeHighlightProps | Props passed to [`CodeHighlight`](/en/base/code-highlight.html#props) component | `CodeHighlightPropsType` | `{}`      |
| codeMermaidProps   | Props passed to [`CodeMermaid`](/en/base/code-mermaid.html#props) component     | `CodeMermaidPropsType`   | `{}`      |

## Slots

| Slot Name                       | Description                       | Parameters                                                               |
| ------------------------------- | --------------------------------- | ------------------------------------------------------------------------ |
| mermaid                         | Custom Mermaid code block render  | `{ content, language, theme, ...codeMermaidProps }`                      |
| code-mermaid-toolbar            | Custom Mermaid toolbar            | See [`CodeMermaid`](/en/base/code-mermaid.html#slots) component docs     |
| code-mermaid-fullscreen-toolbar | Custom Mermaid fullscreen toolbar | See [`CodeMermaid`](/en/base/code-mermaid.html#slots) component docs     |
| code                            | Custom code block render          | `{ content, language, theme, ...codeHighlightProps }`                    |
| code-highlight-header           | Custom code block header          | See [`CodeHighlight`](/en/base/code-highlight.html#slots) component docs |
