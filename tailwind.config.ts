import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      fontFamily: {
       
        'quicksand': ['Quicksand', 'sans-serif'],
        'fredericka': ['Fredericka', 'sans-serif'],
        'jawadwipa': ['Jawadwipa', 'sans-serif'],
        'qageto': ['Qageto', 'sans-serif'],
        'romantic': ['romantic', 'sans-serif'],
        'redressed': ['Redressed', 'cursive'],
        'youkiss': ['YOUKISS', 'sans-serif'],
        'jawa': ['Jawa Palsu', 'sans-serif'],
        'newsreader': ['Newsreader', 'serif'],
        'edwardian': ['Edwardian', 'cursive']

      },
    },
  },
  plugins: [],
}
export default config
