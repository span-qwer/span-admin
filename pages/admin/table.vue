<template>
  <div>
    <el-form :inline="true" :model="form" autocomplete="off">
      <el-form-item :label="$t('username')">
        <BaseInputText
          :placeholder="$t('username')"
          clearable
          v-model="form.username"
        />
      </el-form-item>
      <el-form-item :label="$t('password')">
        <BaseInputPassword
          :placeholder="$t('password')"
          clearable
          v-model="form.password"
        />
      </el-form-item>

      <el-form-item>
        <el-button @click="getData" type="info" :loading="getData.Loading">
          {{ $t('ajax') }}
        </el-button>
      </el-form-item>
    </el-form>

    <TableLite
      v-loading="getData.Loading"
      :data="tableData"
      style="width: 100%"
    >
      <TableColumn
        v-for="item in columns"
        :prop="item.prop"
        :label="item.label"
        :key="item.key"
      />
    </TableLite>
  </div>
</template>

<script setup lang="ts">
const { form, reset } = useForm({ username: '', password: '' })

const app_ = appStore()
const getData = useLoading(async () => {
  console.log('%ctable.vue line:46 {...form}', 'color: #007acc;', { ...form })
  await app_.setAppId()
})

const tableData: any = ref([])
const columns: any = ref([])
const columns_ = Array.from({ length: 9 }).map((r, i) => ({
  key: `${i}-key`,
  prop: `${i}-prop`,
  label: `LABEL-${i + 1}`
}))
columns.value = columns_
const data = Array.from({ length: 10 }).map((r, rIndex) => {
  return columns_.reduce(
    (row: any, col: any, cIndex) => {
      row[col.prop] = `data-${rIndex + 1}-${cIndex + 1}`
      return row
    },
    { id: `${rIndex} - id` }
  )
})
tableData.value = data

onMounted(() => {
  getData()
})
</script>
