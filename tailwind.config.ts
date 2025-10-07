/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      screens: {
        'sm': '390px',    
        'md': '768px',
        'lg': '1024px',   
        'xl': '1280px',   
        '2xl': '1536px',
      },
      extend: {
        colors: {
          'primary': '#4640DE', 
          'accent': '#111827',  
          'text-gray': '#444444', 
          'bg-light': '#F3F4F6', 
          'neutrals': '#25324B',
        },
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
          'rubik': ['Rubik', 'sans-serif'],

        },
        fontSize: {
          'body-sb': ['16px', { 
            lineHeight: '160%', 
            fontWeight: '600',  
          }],
        },
        maxWidth: {
          'container': '1192px', 
        }
      },
    },
    plugins: [],
  }