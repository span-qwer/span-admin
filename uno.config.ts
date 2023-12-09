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
  th1: {
    tx1: '#333',
    tx2: '#666',
    tx3: '#999',
    tx4: '#ccc',
    tx5: '#fff',
    bg1: '#ddd',
    bg2: '#ccc'
  },
  th2: {
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
  shortcuts: {
    animation300: 'transition-all duration-300',
    'text-base-tx1': 'text-tx1 dark:text-[#ddd] animation300',
    'text-base-tx2': 'text-tx2 dark:text-[#bbb] animation300',
    'text-base-tx3': 'text-tx3 dark:text-[#999] animation300',
    'text-base-tx4': 'text-tx4 dark:text-[#666] animation300',
    'text-base-tx5': 'text-tx5 dark:text-[#333] animation300',
    'bg-base-bg1': 'bg-bg1 dark:bg-[#222]',
    'bg-base-bg2': 'bg-bg2 dark:bg-[#333]',
    'bg-base-logo': 'bg-red-7 dark:bg-green-4',
    'text-base-sz1': 'text-[10px]',
    'text-base-sz2': 'text-[12px]',
    'text-base-sz3': 'text-[14px]',
    'text-base-sz4': 'text-[16px]',

    wrap: 'w-[1080px] mx-[auto]',
    'flex-x': 'flex items-center',
    'flex-y': 'flex justify-center'
  },
  theme: {
    colors: {
      ...THEME_CONFIG[THEME || 'th1']
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
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
