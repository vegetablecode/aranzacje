const config = {
  mode: 'jit',
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
    './modules/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'green-pattern': "url('/bg/green.png')",
        'orange-pattern': "url('/bg/orange.png')",
        'purple-pattern': "url('/bg/purple.jpg')",
        'interior-pattern': "url('/bg/interior.png')",
        'premium-pattern': "url('/bg/premium.png')",
        'design-pattern': "url('/design.jpg')",
      },
    },
    variants: {},
    plugins: [],
    purge: false,
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#171c26',
          secondary: '#f5cf1e',
          accent: '#d9d9d9',
          'base-100': '#f8f9fb',
          'base-200': '#f8f9fb',
          'base-300': '#ffffff',
          neutral: '#EDEDED',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272',
        },
      },
      /*
      {
        dark: {
          primary: '#db5447',
          secondary: '#d926a9',
          accent: '#1e232e',
          neutral: '#121824',
          'base-100': '#010a1a',
          'base-200': '#010a1a',
          'base-300': '#363d4a',
          'base-red': '#bd2e26',
          'base-gray': '#999da3',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272',
        },
      },
      /* {
        dark: {
          primary: '#c2410c',
          secondary: '#d926a9',
          accent: '#1fb2a6',
          neutral: '#282c2d',
          'base-100': '#1e2021',
          'base-200': '#1e2021',
          'base-300': '#c2c2c2',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272',
        },
      }, */
    ],
  },
};

export default config;
