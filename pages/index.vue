<template>
  <NuxtLayout name="welcome" class="grid grid-cols-none gap-[10px]">
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
    <el-button @click="sortAsc" type="success">sortAsc</el-button>
    <el-button @click="sortDesc" type="success">sortDesc</el-button>
    <el-button @click="toggleDark()" type="success">toggleDark</el-button>
    <div v-auto-animate>
      <el-tag v-for="item in items" :key="item" type="success">
        {{ item }}
      </el-tag>
    </div>
    <el-button @click="getData" type="info" :loading="getData.Loading">
      {{ $t('title') }}
    </el-button>
    <el-input v-model="form.name" placeholder="Please input" />
    <el-input v-model="form.age" placeholder="Please input" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { appStore } from '@/stores/app'
import Loading_ from '@/hooks/useAsyncFunction'
import useForm, { type FormType } from '@/hooks/useForm'

definePageMeta({
  layout: false
})

const dark = useDark({ disableTransition: false })
const toggleDark = useToggle(dark)

const items = ref<string[]>(['Vue', 'React', 'Angular'])

function sortAsc(): void {
  items.value.sort()
}

function sortDesc(): void {
  items.value.sort().reverse()
}

const store = appStore()
const { form, reset }: FormType = useForm({ name: '', age: '' })

const getData = Loading_(async () => {
  const params = { ...form }
  console.log('%cindex.vue line:59 object', 'color: #007acc;', params)
  await store.setAppId()
  reset()
})

onMounted(() => {
  getData()
})
</script>
