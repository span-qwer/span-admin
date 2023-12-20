<template>
  <NuxtLayout>
    <el-config-provider :locale="lang">
      <NuxtPage />
    </el-config-provider>
  </NuxtLayout>
</template>
<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
const { locale } = useLocales()
const langs: any = { cn: zhCn, en }
const lang = computed(() => {
  return langs[locale.value]
})

const store = appStore()
onMounted(() => {
  store.setMenu()
})
</script>
