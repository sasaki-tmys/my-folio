<template>
    <v-container id="GallerySection">
        <h1 class="display-2 font-weight-bold mb-4">
        ギャラリー
        </h1>
        <carousel 
        :itemsToShow="1.95"
        :wrap-around="true" 
        :autoplay="2500" 
        :transition="800">
            <slide v-for="(collection, index) in 15" :key="index">
                <img :src="require(`@/assets/img/Gallery/GalleryCollection${collection}.png`)" class="rounded-pill">
            </slide>
        <template #addons>
            <Pagination />
        </template>
        </carousel>
    </v-container>
</template>

<script setup>
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

</script>

<style scoped>
img {
    max-width: 80%;
    max-height: 80%;
    vertical-align: bottom;
}
.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9; 
    transform: rotateY(-20deg) scale(0.9); 
}

.carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
}
</style>