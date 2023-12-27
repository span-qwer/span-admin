export default function Lite(props: any, { slots, attrs }: any) {
  return <el-table {...attrs}>{slots.default?.()}</el-table>
}

Lite.inheritAttrs = false
