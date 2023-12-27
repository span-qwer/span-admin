export default function Column(props: any, { slots, attrs }: any) {
  return <el-table-column {...attrs}>{slots.default?.()}</el-table-column>
}

Column.inheritAttrs = false
