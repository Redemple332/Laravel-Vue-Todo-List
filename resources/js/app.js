require('./bootstrap')

import { createApp } from 'vue'
import HelloWorld from './vue/app'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faPlusSquare, faTrash} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faPlusSquare, faTrash)
const app = createApp({})
 

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('hello-world', HelloWorld)

app.mount('#app')