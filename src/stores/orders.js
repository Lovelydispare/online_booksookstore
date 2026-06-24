import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useOrdersStore = defineStore('orders',  {
   state: () => {
        const orders= {
            0:{
                id: 1,
                customer_id: 1,
                book_id: 4,
                quantity: 1,
                total_paid: 2500,
                status: "processing",
            },
            1:{
                id: 2,
                customer_id: 2,
                book_id: 12,
                quantity: 5,
                total_paid: 12500,
                status: "fullfilled",
            },
            2:{
                id: 3,
                customer_id: 3,
                book_id: 8,
                quantity: 2,
                total_paid: 5000,
                status: "fullfilled",
            },
            3:{
                id: 4,
                customer_id: 4,
                book_id: 1,
                quantity: 1,
                total_paid: 3000,
                status: "processing",
            },
            4:{
                id: 5,
                customer_id: 5,
                book_id: 10,
                quantity: 1,
                total_paid: 1500,
                status: "fullfilled",
            },
            5:{
                id: 6,
                customer_id: 6,
                book_id: 15,
                quantity: 1,
                total_paid: 2000,
                status: "processing",
            },
        }
        return{
            orders
        }
   },
   actions:{
    
   },
   persist: true,
})