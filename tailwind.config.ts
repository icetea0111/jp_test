import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray01: '#323438',
        gray02: '#85878C',
        gray03: '#E5E6E9'
      },
      backgroundImage: {
        'bookmark_wrap': 'url(/assets/images/bookmark.png)',
        'bookmark_off': 'url(/assets/images/icon_bookmark_off.png)',
        'bookmark_on': 'url(/assets/images/icon_bookmark_on.png)',
        'star': 'url(/assets/images/icon_star.png)',
        'won': 'url(/assets/images/icon_won.png)',
      }
    },

  },
  plugins: [],
}
export default config
