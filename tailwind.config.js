const config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './common/components/**/*.{js,ts,jsx,tsx}',
    './common/utils/**/*.{js,ts,jsx,tsx}',
    './common/constants/**/*.{js,ts,jsx,tsx}',
    './modules/**/components/**/*.{js,ts,jsx,tsx}',
    './modules/**/templates/**/*.{js,ts,jsx,tsx}',
    './modules/**/utils/**/*.{js,ts,jsx,tsx}',
    './modules/**/constants/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    variants: {},
    plugins: [],
    purge: false,
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#c2410c',
          secondary: '#d926a9',
          accent: '#1fb2a6',
          neutral: '#ffffff',
          'base-100': '#f2f2f2',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272',
        },
      },
      {
        dark: {
          primary: '#c2410c',
          secondary: '#d926a9',
          accent: '#1fb2a6',
          neutral: '#2a303c',
          'base-100': '#242933',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272',
        },
      },
    ],
  },
};

export default config;
