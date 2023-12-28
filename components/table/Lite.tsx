export default function Lite(props: any, { slots, attrs }: any) {
  return <el-table {...attrs} border v-slots={slots} />
}

Lite.inheritAttrs = false
