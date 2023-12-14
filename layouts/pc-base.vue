<template>
  <div
    class="min-h-screen min-w-screen bg-base-bg1 text-base-tx1 text-base-sz2"
  >
    <LazyPcHeader />
    <main class="px-[30px] pt-[--header-height]">
      <slot />
      <button @click="getData2">fun_(loading, getData)</button>
      <div v-if="getData2.Loading">loading...</div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { appStore } from '../stores/app'
import { useLoadingFun } from '../hooks/useLoadingFun'
import __ from '../hooks/useAsyncFunction'
const store = appStore()

const getData = async () => {
  await store.setAppId()
}
const id = 123
const getData2: any = __(async (id: any) => {
  const data = await store.setAppId()
  console.log('%cpc-base.vue line:26 id', 'color: #007acc;', id);
})
const { f, fLoading }: any = useLoadingFun([getData])

onMounted(() => {
  getData2(id)
})
</script>

<style></style>
