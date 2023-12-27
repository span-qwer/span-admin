import { NuxtLink } from '#components'

export default function (props: any, { slots, attrs }: any) {
  return (
    <NuxtLink {...attrs} class='text-base-tx1'>
      {slots.default()}
    </NuxtLink>
  )
}
