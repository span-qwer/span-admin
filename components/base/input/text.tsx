export default function InputText(props: any, { slots, attrs }: any) {
  return (
    <el-input
      {...attrs}
      v-slots={slots}
      type={'text'}
      style={{
        width: attrs.width ? attrs.width : '140px'
      }}
      autocomplete={'new-password'}
    />
  )
}
