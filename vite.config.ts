/*
 * @Author: Pan Jingyi
 * @Date: 2023-01-02 03:03:52
 * @LastEditTime: 2023-01-02 03:12:56
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss'
import Unocss from 'unocss/vite'
import {
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    WindiCSS(),
    Unocss({
      shortcuts: [
        [
          'icon-btn',
          'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600',
        ],
      ],
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
          warn: true,
        }),
        presetWebFonts({
          fonts: {
            serif: 'DM Serif Display',
            mono: 'DM Mono',
          },
        }),
      ],
      rules: [
        ['font28', { 'font-size': '25px' }],
        ['mar-t', {'margin-top': '20px'}]
      ]
    }),
  ]
})
