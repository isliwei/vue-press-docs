import { defineClientConfig } from 'vuepress/client'
import './styles/palette.scss'
import ElementPlus from 'element-plus'
import MyCustomComponent from './components/MyCustomComponent.vue'
import CustomMessageBox from './components/CustomMessageBox.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(ElementPlus)
    app.component('CustomMessageBox', CustomMessageBox)
    app.component('MyCustomComponent', MyCustomComponent)
  },
  setup() { },
  rootComponents: [],
})