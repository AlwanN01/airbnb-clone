import plugin from 'tailwindcss/plugin'
import type { Config } from 'tailwindcss'
export const content: Config['content'] = ['./src/**/*.{js,ts,jsx,tsx}']
export const theme: Config['theme'] = {
  extend: {
    boxShadow: {
      csm: '0 0px 3px 1px rgba(0, 0, 0, 0.1), 0 0px 2px -2px rgba(0, 0, 0, 0.1)',
      cmd: '0 0px 6px 1px rgba(0, 0, 0, 0.1), 0 0px 4px -2px rgba(0, 0, 0, 0.1)',
      clg: '0 0px 12px 1px rgba(0, 0, 0, 0.1), 0 0px 6px -2px rgba(0, 0, 0, 0.1)'
    }
  }
}
export const plugins: Config['plugins'] = [
  plugin(({ addComponents, addVariant }) => {
    addComponents({
      '.grid-cols': {
        display: 'grid',
        'grid-auto-flow': 'column'
      }
    })
    addVariant('second', '&:nth-child(2)')
    addVariant('third', '&:nth-child(3)')
    addVariant('fourth', '&:nth-child(4)')
    addVariant('child', '& > *')
    addVariant('child-hover', '& > *:hover')
    addVariant('child-hover', '& > *:hover')
  })
]
