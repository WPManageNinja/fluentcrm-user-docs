import DefaultTheme from 'vitepress/theme'
import Feedback from './components/Feedback.vue' // Import the file for feedback widget
import ZoomableImage from './components/ZoomableImage.vue' // Click-to-zoom wrapper for doc images
import Layout from './Layout.vue' // Import new layout file
import './style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Feedback', Feedback)
    // Guard against a duplicate-registration warning when enhanceApp runs
    // more than once (HMR, or multiple render passes).
    if (!app.component('ZoomableImage')) {
      app.component('ZoomableImage', ZoomableImage)
    }
  }
} 
