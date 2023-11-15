/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm_mobile: '300px',
      lg_mobile: '350px',
      xl_mobile: '420px',
      sm_tablet: '600px',
      md_tablet: '750px',
      lg_tablet: '992px',
      sm_desktop: '1206px',
      md_desktop: '1350px',
      xm_desktop: '1500px',
      lg_desktop: '1900px'
    },
    extend: {
      fontFamily: {
        jomolhari: ['Jomolhari', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
  transitionProperty: {
    'opacity': 'opacity',
  },
}

