module.exports = {
  purge: ['src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  // mode: 'jit',
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'registration': "url(../img/registration.svg)",
       
      }),
      fontFamily: {
        'title': ['Poppins',]
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
    extend: {},
  },
  plugins: [],
}
