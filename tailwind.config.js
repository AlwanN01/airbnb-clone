import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,ts,jsx,tsx}']
export const theme = {
  extend: {}
}
export const plugins = [
  plugin(({ addVariant }) => {
    addVariant('second', '&:nth-child(2)')
    addVariant('third', '&:nth-child(3)')
    addVariant('fourth', '&:nth-child(4)')
    addVariant('child', '& > *')
    addVariant('child-hover', '& > *:hover')
  })
]
