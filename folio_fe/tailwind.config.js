/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          background: '#1E1E1E',   // main dark background
          foreground: '#FAFAFA',   // soft light section background
          text: '#F4F4F5',         // main readable text
          muted: '#A1A1AA',        // subtle text
          xmuted: '#525254',      // very subtle text for borders
          border: '#D1D5DB',       // light gray border
          card: '#FFFFFF',         // white for cards (used in profile pic bg)
          interactive: '#D4D4D8',  // subtle hover or highlight
        },
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
        },
        borderRadius: {
          xl: '1rem',
        },
        boxShadow: {
          card: '0 8px 24px rgba(0, 0, 0, 0.12)',
        },
      },
    },
    darkMode: 'class',
    plugins: [],
  }
  