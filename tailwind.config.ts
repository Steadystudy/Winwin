import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        blue100: '#7AC6F8',
        blue200: '#11B2F7',
        blue300: '#1890FF',
        background: '#F8F8F8',
        gray100: '#EBEBEB',
        orange100: '#F5A814',
      },
    },
  },
  plugins: [],
};
export default config;
