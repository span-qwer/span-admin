<template>
  <NuxtLayout :name="layout">
    <!-- <NuxtWelcome /> -->
    <div class="flex flex-col gap-4">
      <div>
        <div>this is pc id: {{ appStore().appId }}</div>
      </div>
      <div class="text-base-tx1 flex justify-center items-center">
        Lorem ipsum dolor sit amet consectetur adipisicing
      </div>
      <div class="text-base-tx2 flex justify-center items-center">
        Lorem ipsum dolor sit amet consectetur adipisicing
      </div>
      <div class="text-base-tx3 flex justify-center items-center">
        Lorem ipsum dolor sit amet consectetur adipisicing
      </div>
    </div>
    <div>
      {{ $t('title') }}
    </div>
    <el-button @click="sortAsc" type="success">
      sortAsc
    </el-button>
    <el-button @click="sortDesc" type="success">
      sortDesc
    </el-button>
    <div v-auto-animate>
      <el-tag v-for="item in items" :key="item" type="success"> {{ item }}</el-tag>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
// import { appStore } from '@/stores/app'
const { isMobile } = useDevice()
const layout = computed(() => {
  return !!isMobile ? 'h5-base' : 'pc-base'
})

const items = ref(['Vue', 'React', 'Angular'])
function sortAsc() {
  items.value.sort()
}
function sortDesc() {
  items.value.sort().reverse()
}


</script>
<style></style>
