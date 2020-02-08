import Vue from 'vue';
import Vuex from 'vuex';
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)
export default new Vuex.Store({
    //用户信息存储在根实例
    state: {
        userInfo: {
            email: 'xxxxxxxx@qq.com'
        }
    },
    modules: {
        cart,
        products
    }
})