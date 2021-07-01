module.exports = {
  purge: ['src/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  // mode: 'jit',
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'registration': "url(../img/registration.svg)",

      }),
      fontFamily: {
        'title': ['Poppins'],
        'body': ['Gilroy-Light'],
        'subTitle': ['Gilory-Medium']
      },

      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        background: {
          light: '#E5E5E5',
          DEFAULT: '#E5E5E5',
          dark: '#009eeb',
        },
      }
    },
  },
  variants: {
    extend: {
      ringColor: ['hover', 'active'],
      textColor: ['active'],
    },
  },
  plugins: [],
}
