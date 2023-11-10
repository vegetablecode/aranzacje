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
    extend: {
      inset: {
        '1/2': '50%',
        '2/5': '40%',
        '1/7': '15%',
        full: '100%',
      },
      lineHeight: {
        14: '3.2rem',
        16: '3.4rem',
      },
      colors: {
        primary: {
          default: '#F77F2D',
          50: '#FEEBDE',
          100: '#FDDFCA',
          200: '#FBC7A3',
          300: '#FAAF7C',
          400: '#F89754',
          500: '#f25139',
          600: '#d93921',
          700: '#AD4A07',
          800: '#773305',
          900: '#411C02',
        },
        secondary: {
          default: '#FEB057',
          50: '#FFFFFF',
          100: '#fdf6ed',
          200: '#FFE9D1',
          300: '#FED6A8',
          400: '#FEC380',
          500: '#FEB057',
          600: '#FE961F',
          700: '#E37A01',
          800: '#AC5C01',
          900: '#743E01',
        },
        pastele: {
          default: '#f7f5ed',
          50: '#f7f5ed',
          100: '#949cff',
          200: '#64c67e',
          300: '#809cff',
          400: '#ffc73b',
        },
        accent: {
          20: '#F4F4F5',
          30: '#F5F5F7',
          40: '#f9fafb',
          50: '#E3E3E3',
          60: '#efefef',
          70: '#f0f0f0',
          80: '#eaeaea',
          90: '#A0AEB8',
          100: '#eeeeee',
          200: '#6E6E72',
          500: '#1d1d20',
        },
        dm: {
          100: '#464649',
          150: '#333438',
          200: '#252329',
          300: '#252329',
          400: '#252329',
          500: '#1a191e',
          600: '#121212',
          700: '#1c1c20',
          800: '#1a191e',
          900: '#141414',
        },
        yellow: {
          500: '#ffdd03',
        },
      },
      borderRadius: {
        st: '1.5rem',
        wp: '1.2rem',
        mp: '0.9rem',
        tb: '0.7rem',
        xl: '2rem',
      },
      spacing: {
        26: '7rem',
        90: '22.5rem',
        100: '24rem',
        108: '27.5rem',
        128: '32rem',
      },
      width: {
        28: '7.5rem',
        34: '8.5rem',
        150: '50rem',
      },
      height: {
        112: '30.5rem',
        144: '36rem',
        250: '48rem',
      },
      maxWidth: {
        '1/3': '30%',
        '2/5': '40%',
        '8xl': '84rem',
      },
      margin: {
        60: '15rem',
        70: '19rem',
      },
      boxShadow: {
        st: '1px 1px 3px 0 rgba(0, 0, 0, 0.05)',
        cd: '3px 3px 52px 0 rgba(0, 0, 0, 0.04)',
        bt: '0px 4px 25px rgba(0, 0, 0, 0.28)',
        qt: '-5px -4px -10px -4px rgba(0, 0, 0, 0.15)',
        bx: '0px 4px 70px rgba(0, 0, 0, 0.05)',
        br: '1px 1px 6px rgba(0, 0, 0, 0.06)',
        lr: '2px 2px 10px rgba(0, 0, 0, 0.07)',
        gr: '2px 2px 14px rgba(0, 0, 0, 0.14)',
        tw: '0px 1px 11px 2px rgba(0, 0, 0, 0.04)',
        lw: '0px 2px 13px 8px rgba(0, 0, 0, 0.04)',
        sc: '0px 6px 38px 8px rgba(0, 0, 0, 0.25)',
        yc: '0px 1px 3px 0px rgba(0, 0, 0, 0.25)',
      },
    },
    scale: {
      0: '0',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      1005: '1.002',
      101: '1.01',
      103: '1.03',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
    },
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
          primary: '#641ae6',
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
          primary: '#641ae6',
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
