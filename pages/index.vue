<template>
  <NuxtLayout
    name="welcome"
    class="grid gap-[60px] grid-cols-[repeat(3,1fr)] p-[60px]"
  >
    <div class="grid gap-[10px] grid-rows-[repeat(3,32px)]">
      <div>
        <el-input v-model="form.name" placeholder="Please input" />
      </div>
      <div>
        <el-input v-model="form.age" placeholder="Please input" />
      </div>
      <div>
        <el-button @click="getData" type="info" :loading="getData.Loading">
          {{ $t('ajax') }}
        </el-button>
      </div>
    </div>
    <div class="grid gap-[10px] grid-rows-[repeat(3,32px)]">
      <div>
        <el-button @click="sortAsc" type="primary">SortAsc</el-button>
      </div>
      <div v-auto-animate class="grid grid-cols-[repeat(3,auto)] gap-[10px]">
        <el-tag v-for="item in items" :key="item" type="danger">
          {{ item }}
        </el-tag>
      </div>
    </div>
    <div class="grid gap-[10px] grid-rows-[repeat(3,32px)]">
      <div>
        <el-button @click="toggleDark()" type="primary">ToggleDark</el-button>
        <el-button
          @click="locale == 'en' ? (locale = 'cn') : (locale = 'en')"
          type="primary"
        >
          Locale
        </el-button>
      </div>
      <div>
        {{ $t('title') }}
      </div>
    </div>
    <div class="grid gap-[10px] grid-rows-[repeat(3,32px)]">
      <div class="text-base-tx1 flex items-center">Lorem ipsum dolor sit</div>
      <div class="text-base-tx2 flex items-center">Lorem ipsum dolor sit</div>
      <div class="text-base-tx3 flex items-center">Lorem ipsum dolor sit</div>
    </div>
    <div class="grid gap-[10px] grid-rows-[repeat(3,32px)]">
      <span class="text-base-tx1 flex items-center">
        this is pc id: {{ getData.Loading ? 'loading...' : appStore().appId }}
      </span>
      <span class="text-base-tx1 flex items-center">
        this is pc name: {{ form.name }}
      </span>
      <span class="text-base-tx1 flex items-center">
        this is pc age: {{ form.age }}
      </span>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { appStore } from '../store/appStore'

definePageMeta({
  layout: false
})
const { locale } = useLocales()

const dark = useDark({ disableTransition: false })
const toggleDark = useToggle(dark)

const items = ref<string[]>(['Vue', 'React', 'Angular'])
const sort = ref(true)
const sortAsc = (): void => {
  sort.value ? items.value.sort() : items.value.sort().reverse()
  sort.value = !sort.value
}

const store = appStore()
const { form, reset }: FormType = useForm({ name: '', age: '' })
const getData = useLoading(async () => {
  await store.setAppId()
  reset()
})

onMounted(() => {
  getData()
  console.log('%cindex.vue line:89 locale', 'color: #007acc;', locale)
})
</script>
~/store/app~/store/appStore
