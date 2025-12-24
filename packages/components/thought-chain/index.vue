<template>
  <div :class="ns.b()"></div>
</template>

<script setup lang="ts">
import { useNamespace } from '@element-ai-vue/hooks'

defineOptions({
  name: 'ElAThoughtChain',
})
const ns = useNamespace('thought-chain')
</script>
