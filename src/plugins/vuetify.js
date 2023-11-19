// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: { // https://vuetifyjs.com/en/styles/colors/#material-colors
        light: {
        dark: false,
        colors: {
            background: '#E1F5FE',
            primary: '#FAFAFA',
            'primary-darken-1': '#EC407A', 
            secondary: '#E1F5FE',
            'secondary-darken-1': '#6200EA', 
            error: '#FF5252',
            info: '#2196F3', 
            warning: '#FB8C00',
            accent: '#FF8F00',
        },
        },
        dark: {
        dark: true,
        colors: {
            background: '#263238',
            primary: '#FAFAFA', 
            'primary-darken-1': '#EC407A', 
            secondary: '#E1F5FE', 
            'secondary-darken-1': '#03A9F4', 
            error: '#FF5252', 
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FB8C00',
            accent: '#FF8F00',
        },
        },
    },
    },
})
