import Vuex from "vuex"
import Vue from "vue"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        greeting: "hello,",
        location: "world!"
    },
        
    // get data from the store
    getters: {
        getGreeting: state => {
            return state.greeting + ' ' + state.location;
        }
    },

    // change / update data
    mutations: {
       
    },

    // Make api calls etc here 
    actions: {
    
    }
})