import Vue from 'vue'
import Electron from 'vue-electron'
import Resource from 'vue-resource'
import Router from 'vue-router'

import App from './App'
import routes from './routes'
import './globalShortcuts'

Vue.use(Electron)
Vue.use(Resource)
Vue.use(Router)

Vue.config.debug = true

const router = new Router()

window.bindAudio = () => {
  Vue.prototype.$player = document.getElementsByTagName('audio')[0]
}

router.map(routes)
router.beforeEach(() => {
  window.scrollTo(0, 0)
})
router.redirect({
  '*': '/'
})

router.start(App, 'app')
