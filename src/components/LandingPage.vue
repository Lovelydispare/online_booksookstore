<script setup>

</script>

<template>
    <v-container max-width="100%">
        <v-row>
            <v-col>
                <v-carousel hide-delimiters
                :show-arrows="false"
                 cycle>
                    <v-carousel-item src="/carousel1.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/carousel2.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/carousel3.jpg" cover></v-carousel-item>              
                    <v-carousel-item src="/carousel4.jpg" cover></v-carousel-item>
                </v-carousel>
                
            </v-col>
        </v-row>
    </v-container>
   
    <!-- About Us -->

    <v-container class="bg-secondary" max-width="100%">
        <v-row>
            <v-col class="text-center">
                <div class="text-display-medium md-12 text-black font-weight-bold"> Welcome to Books Vooks. Home of all great literature.</div>
                <div class="text-title-large font-weight-light text-medium-emphasis mb-8 font-weight-semibold">  Discover thousands of books across genres, from timeless classics to the latest bestsellers—all at your fingertips. Step into a world of stories where imagination meets convenience, with our curated collection of novels, educational texts, and inspiring reads—all accessible with just a click.</div>
                <div class="text-title-large font-weight-light text-medium-emphasis mb-8 font-weight-semibold">  Your one-stop online bookstore offering easy browsing, secure checkout, and fast delivery for every reader’s needs. Whether you’re searching for timeless literature or the latest releases, we make discovering your next favorite book simple and enjoyable. Browse, shop, and have your selections delivered right to your door.</div>
            </v-col>
        </v-row>
    </v-container>

    <!-- Our Bestsellters -->

    <v-container max-width="100%">
        <v-row>
            <v-col md="3">
                <v-card>
                    <v-img src="/fall-on-your-knees.jpg" cover></v-img>
                    <v-card-title>Fall On Your Knees</v-card-title>
                    <v-card-subtitle> Ksh 3000 </v-card-subtitle>
                    <v-btn to="/cart" color="primary">Add to cart</v-btn>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-img src="/percy-last-olympian.jpg" cover></v-img>
                    <v-card-title>Percy Jackson and the Last Olympian</v-card-title>
                    <v-card-subtitle> Ksh 2000 </v-card-subtitle>
                    <v-btn to="/cart" color="primary">Add to cart</v-btn>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-img src="/the-sixth-man.jpg" cover></v-img>
                    <v-card-title>The Sixth Man</v-card-title>
                    <v-card-subtitle> Ksh 2500 </v-card-subtitle>
                    <v-btn to="/cart" color="primary">Add to cart</v-btn>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-img src="/angels-in-hell.jpg" cover></v-img>
                    <v-card-title>Angels in Hell</v-card-title>
                    <v-card-subtitle> Ksh 1500 </v-card-subtitle>
                    <v-btn to="/cart" color="primary">Add to cart</v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <!-- Footer -->

    <v-container class="bg-primary" max-width="100%">
         <v-row>
             <v-col>
                 <div align="center">
                     <router-link to="/">
                         <v-img src="/FullLogo_Transparent.png" width="40%" height="40%" ></v-img>
                    </router-link>

                <p> Copyright Books Vooks Online Book Store &copy; 2026</p>

                </div>
            </v-col>
            <v-col md="4" >
                <div class="text-center">
                    <p>Follow us on:</p>
                    <v-icon icon="mdi-instagram"></v-icon>
                    <v-icon icon="mdi-twitter"></v-icon>
                    <v-icon icon="mdi-facebook"></v-icon>
                </div>
            </v-col>
            <v-col md="4">
                <div class="text-center">
                    <p> Contact Us:</p>
                    <p>Email: info@booksvooks.com</p>
                    <p>Phone: 254707662875</p>
                </div>
            </v-col>
        </v-row>
    </v-container>

</template>