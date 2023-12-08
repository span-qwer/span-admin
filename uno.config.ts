import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

const THEME_CONFIG: any = {
  ob: {
    tx1: '#000',
    tx2: '#666',
    tx3: '#999',
    tx4: '#eee',
    tx5: '#fff',
    bg1: '#ddd',
    bg2: '#ccc'
  },
  kk: {
    tx1: '#f00',
    tx2: '#0f0',
    tx3: '#00f',
    tx4: '#ff0',
    tx5: '#0ff',
    bg1: '#ddd',
    bg2: '#ccc'
  }
}

const THEME: any = process.env.APP_THEME

export default defineConfig({
  // shortcuts: {
  //   'switch-animation': 'transition duration-300',
  //   'bg-base':
  //     'bg-[#f0f0f0] dark:bg-[#20202a] switch-animation',
  //   'card-base':
  //     'bg-[#ffffff] dark:bg-[#10101a] switch-animation',
  //   'text-base':
  //     'text-[#20202a] dark:text-[#f0f0f0] switch-animation',
  //   'switch-label-base':
  //     'bg-gray-200 dark:bg-gray-800 switch-animation',
  //   'switch-span-base':
  //     'bg-white dark:bg-gray-300 switch-animation',
  // },
  shortcuts: {
    wrap: 'w-[1080px] mx-[auto]',
    centerXY: 'flex items-center justify-center',
    centerY: 'flex items-center',
    centerX: 'flex justify-center'
  },
  theme: {
    colors: {
      ...THEME_CONFIG[THEME || 'ob']
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      }
    })
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ]
})
