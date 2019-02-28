/*
vuex最核心的管理对象: store
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

import msite from './modules/msite'
import user from './modules/user'
import shop from './modules/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    msite,
    user,
    shop
  }


})
