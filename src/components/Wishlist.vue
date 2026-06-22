<script setup>
import { useWishlistStore } from '@/stores/wishlist'
const wishlist = useWishlistStore()


</script>

<template>
    <v-row>
        <v-col md="12">
            <div class="text-display-medium mb-12 mt-12 text-center">
                My Wishlist
            </div>
        </v-col>
    </v-row>

    <v-container>
        <div>
        <v-row>
            <v-col v-for="book in wishlist.items" :key="book.id" cols="12" sm="6" md="4">
            <v-card>
                <v-img :src="book.image" height="200px" class="mt-4"></v-img>
                <v-card-title>{{ book.title }}</v-card-title>
                <v-card-text>{{ book.description }}</v-card-text>
                <v-btn color="primary" variant="elevated">Add to Cart</v-btn>

            </v-card>
            </v-col>
        </v-row>
        </div>
    </v-container>
 
</template>

