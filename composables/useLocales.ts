export default function () {
  const { locale } = useI18n()
  watch(
    () => locale.value,
    value => {
      localStorage.setItem('locale', value)
    }
  )

  return { locale }
}
