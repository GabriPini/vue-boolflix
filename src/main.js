import Vue from 'vue'
import App from './App.vue'
import CountryFlag from 'vue-country-flag'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faStar) 
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('country-flag', CountryFlag)
const bootstrap = require('bootstrap')
Vue.use(bootstrap)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
