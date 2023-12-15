import { reactive } from 'vue'

export interface FormType {
  form: object | any
  reset: () => void
}

export default function (obj: object): FormType {
  const defaultForm = () => ({ ...obj })

  const form: object = reactive(defaultForm())

  const reset = () => {
    Object.assign(form, defaultForm())
  }

  return { form, reset }
}
