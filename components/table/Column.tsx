export default function Column(props: any, { slots, attrs }: any) {
  return <el-table-column {...attrs} v-slots={slots} />
}

Column.inheritAttrs = false
