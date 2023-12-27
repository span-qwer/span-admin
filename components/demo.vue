<template>
  <div class="grid gap-[60px] grid-cols-[repeat(3,1fr)] p-[10px]">
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
        <el-button @click="getData2" type="info" :loading="getData2.Loading">
          {{ $t('ajax') }} 2
        </el-button>
        <el-button @click="getData3" type="info" :loading="getData3.Loading">
          {{ $t('ajax') }} 3
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
        <el-button
          @click="locale == 'en' ? (locale = 'cn') : (locale = 'en')"
          type="primary"
        >
          Locale
        </el-button>
        <BaseSwitchDark />
      </div>
      <div>
        {{ $t('title') }}
      </div>
      <div>
        <BaseLink to="/admin">
          <el-button type="warning">admin</el-button>
        </BaseLink>
      </div>
    </div>
    <div class="grid gap-[10px] grid-rows-[repeat(3,32px)]">
      <div class="text-base-tx1 flex items-center">Lorem ipsum dolor sit</div>
      <div class="text-base-tx2 flex items-center">Lorem ipsum dolor sit</div>
      <div class="text-base-tx3 flex items-center">Lorem ipsum dolor sit</div>
    </div>
    <div class="grid gap-[10px] grid-rows-[repeat(3,32px)]">
      <span class="text-base-tx1 flex items-center">
        id: {{ getData.Loading ? 'loading...' : appStore().appId }}
      </span>
      <span class="text-base-tx1 flex items-center">name: {{ form.name }}</span>
      <span class="text-base-tx1 flex items-center">age: {{ form.age }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useLocales()

const items = ref<string[]>(['Vue', 'React', 'Angular'])
const sort = ref(true)
const sortAsc = (): void => {
  sort.value ? items.value.sort() : items.value.sort().reverse()
  sort.value = !sort.value
}

const store = appStore()
const { form, reset }: FormType = useForm({ name: '', age: '' })

const getData = useLoading(async () => {
  await store.setAppId({ ...form })
  reset()
})

const getData2 = useLoading(async () => {
  await store.setAppId()
  reset()
})

const getData3 = useLoading(async () => {
  await store.setAppId()
  reset()
})

onMounted(() => {
  getData()
})
</script>
