import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E88E5',       // azul confianza
        secondary: '#43A047',     // verde crecimiento
        accent: '#FB8C00',        // naranja dinamismo
        neutral: {
          100: '#FAFAFA',
          900: '#212121'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      }
      // spacing y demás quedan igual
    }
  },
  plugins: [],
}

export default config
