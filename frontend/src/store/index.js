import { createStore } from 'vuex'

export default createStore({
  state:{
    cart: {
      items: [],
    },
    isAuthenticated: false,
    token: '',
  },
  mutations:{
    initializeStorage(state){
      //we check if the localstorage exists with an item called cart, else we create it using setitem
      if(localStorage.getItem('cart')){
        //cart exists
        state.cart = JSON.parse(localStorage.getItem('cart'))

      }else{
        //cart doesn't exist, we create it
        localStorage.setItem('cart', JSON.stringify(state.cart))

      }
      if(localStorage.getItem('token')){
        //token exists so isAuthenticated is set to true
        state.token = localStorage.getItem('token')
        state.isAuthenticated=true

      }else{
        //token doesn't exist so isAuthenticated is set to false
        state.token = ''
        state.isAuthenticated=false

      }
    },
    addToCart(state, item){
        
        const exists = state.cart.items.filter(i => i.product.id === item.product.id)
  
        if (exists.length){
          console.log('exists')
          exists[0].quantity = parseInt(exists[0].quantity) + parseInt(item.quantity)
        }
        else{
          console.log('push')
          state.cart.items.push(item)
        }
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }
  },
  actions: {
  },
  modules: {
  }
})
