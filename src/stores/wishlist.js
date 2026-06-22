import { defineStore } from 'pinia'

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    items: []
  }),
  actions: {
    add(book) {
      this.items.push(book)
    },
    remove(bookId) {
      this.items = this.items.filter(b => b.id !== bookId)
    },
    toggle(book) {
      const exists = this.items.find(b => b.id === book.id)
      if (exists) {
        this.remove(book.id)
      } else {
        this.add(book)
      }
    },
    isInWishlist(book) {
      return this.items.some(b => b.id === book.id)
    }
  }
})
