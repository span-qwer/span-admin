<template>
  <div>
    <TableLite v-loading="getData.Loading" :height="800" :data="tableData" style="width: 100%">
      <TableColumn v-for="item in columns" :prop="item.prop" :label="item.label" :key="item.key" />
    </TableLite>


    <el-button @click="getData" type="info" :loading="getData.Loading">
      {{ $t('ajax') }}
    </el-button>
  </div>
</template>

<script setup lang="ts">
const tableData: any = ref([])
const columns: any = ref([])

const store = appStore()
const getData = useLoading(async () => {
  await store.setAppId()

  const columns_ = Array.from({ length: 11 }).map((r, i) => ({
    key: `${i++}-key`,
    prop: `${i++}-prop`,
    label: `label${i++}`,
  }))
  columns.value = columns_

  const data = Array.from({ length: 2001 }).map((r, rIndex) => {
    return columns_.reduce(
      (row: any, col: any, cIndex) => {
        row[col.prop] = `d${rIndex++}-${cIndex++}`
        return row
      },
      { id: `${rIndex} - id` }
    )
  })

  tableData.value = data
})


onMounted(() => {
  getData()
})

</script>
