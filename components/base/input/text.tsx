export default function InputText(props: any, { slots, attrs }: any) {
  return (
    <el-input
      {...attrs}
      v-slots={slots}
      type={'text'}
      autocomplete={'new-password'}
    />
  )
}
