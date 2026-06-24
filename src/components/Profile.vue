<script setup>
const user = JSON.parse(localStorage.getItem('user'))
</script>

<template>
    <container>
        <v-row>
            <v-col md="2">
                    <v-btn icon="mdi-arrow-left" color="primary" to="/books" class="ma-12"></v-btn>
                    </v-col>
                    <v-col md="10">
                        <div class="text-display-medium mb-12 mt-12 text-center">
                            Profile
                        </div>
                    </v-col>
        </v-row>

        <v-row>
            <v-col md="6">
            <v-card>
                <v-img class="align-end text-white" height="620" src="/public/bait.jpg"  ></v-img>
            </v-card>
            </v-col>
        </v-row>

        

    </container>
</template>