# CodeHighlight

CodeHighlight is a code highlighting component based on [Shiki](https://shiki.tmrs.site/), a beautiful and powerful syntax highlighter built on TextMate grammar and themes. It uses the same syntax highlighting engine as VS Code, providing precise and fast syntax highlighting for almost all major programming languages.

## Core Features

- **Based on Shiki**: Uses Shiki as the underlying highlighting engine, supporting TextMate grammar. The generated HTML is nearly identical to VS Code.
- **High Performance**: Optimized loading strategy, supporting on-demand loading of languages and themes.

## Basic Usage

Use the `content` property to pass in a code string, and the `language` property to specify the programming language.

:::demo CodeHighlightBase

```vue
<template>
  <ElACodeHighlight language="javascript" :content="content"></ElACodeHighlight>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElACodeHighlight } from 'element-ai-vue'

const content = ref(`/**
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
console.log(getRandomInt(1, 10)); // Output: Random number between 1~10`)
</script>
```

:::

## Slot - Custom Header

Supports slot definitions. When customizing the header, you need to handle theme color adaptation yourself.

:::demo CodeHighlightSlotExampls

```vue
<template>
  <ElACodeHighlight language="javascript" :content="content">
    <template #header="{ content, language, isCopied, onCopy }">
      <div class="header">
        <div>{{ language }}</div>
        <button @click="onCopy">{{ isCopied ? 'Copied' : 'Copy' }}</button>
      </div>
    </template>
  </ElACodeHighlight>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElACodeHighlight } from 'element-ai-vue'

const content = ref(`/**
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
console.log(getRandomInt(1, 10)); // Output: Random number between 1~10`)
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
</style>
```

:::

## Individual Theme Configuration

:::demo CodeHighlightDark

```vue
<!-- @include: ../../examples/code-highlight/dark.vue -->
```

:::

::: tip
Default supported languages: `javascript`, `typescript`, `vue`, `html`, `css`, `json`, `bash`, `shell`, `yaml`, `markdown`, `python`, `java`, `go`, `sql`, `rust`, `mermaid`
:::

## Props

| Property        | Type                | Required | Default | Description                                                                       |
| :-------------- | :------------------ | :------- | :------ | :-------------------------------------------------------------------------------- |
| content         | `string`            | Yes      | —       | Code content to highlight                                                         |
| language        | `string`            | No       | —       | Code language                                                                     |
| theme           | `string`            | No       | `light` | Highlight theme, defaults support `light`, `dark`                                 |
| extendLanguages | `BundledLanguage[]` | No       | `[]`    | Additional languages to load, see [Shiki Languages](https://shiki.style/languages) |
| extendThemes    | `BundledTheme[]`    | No       | `[]`    | Additional themes to load, see [Shiki Themes](https://shiki.style/themes)         |

## Slots

| Slot Name | Description          | Slot Parameters                                                                                                                         |
| :-------- | :------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| header    | Custom header content | `content`: Code content<br>`language`: Language<br>`isCopied`: Copy status, 1s interval before next copy<br>`onCopy`: Copy code function |

## Ref

| Method Name | Description | Parameters |
| :---------- | :---------- | :--------- |
| onCopy      | Copy code   | -          |
