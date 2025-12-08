<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData, useRouter } from 'vitepress'
import { onMounted, watch } from 'vue'

const { Layout } = DefaultTheme
const { page } = useData()
const router = useRouter()

onMounted(() => {
  watch(
    () => page.value.isNotFound,
    (isNotFound) => {
      if (isNotFound) {
        // 避免在 /zh/ 路径下无限循环跳转
        if (router.route.path !== '/zh/') {
          router.go('/zh/')
        }
      }
    },
    { immediate: true }
  )
})
</script>

<template>
  <Layout />
</template>
