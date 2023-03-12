module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "bookmark-purple": "#8240e8", // columns
        "bookmark-red": "#8240e8",    // login
        "bookmark-blue": "#242424",  // body 
        "bookmark-grey": "#FFFFFF",  // TEXT
        "bookmark-white": "#FFFFFF",  //  Body Text
        "bookmark-dark": "#242424",  // #Column 2
      }
    },
    fontFamily: {
      Poppins: ['Poppins, sans-serif'],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
