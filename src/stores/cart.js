import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart',  {
   state: () => {
        const cart= []

        return{
            cart
        }
   },
   actions:{
       updateCart(payload) {
           this.cart.push(payload)
           console.log(payload)
       },
   },
   persist: true,
})