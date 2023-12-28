export default function InputMoney(props: any, { slots, attrs }: any) {
  return (
    <el-input
      {...attrs}
      v-slots={slots}
      type={'text'}
      autocomplete={'new-password'}
    />
  )
}
