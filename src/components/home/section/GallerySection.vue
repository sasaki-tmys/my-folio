<template>
    <v-container id="GallerySection" class="padding">
        <v-chip variant="outlined" size="x-large" text="DALL-E2" />
        <v-carousel hide-delimiters>
            <v-carousel-item
                v-for="(collection, index) in 15"
                :key="index"
                :src="`/src/assets/img/Gallery/GalleryCollection${collection}.png`"
            />
        </v-carousel>
    </v-container>
</template>

<style scoped>
img {
    max-width: 80%;
    max-height: 80%;
    vertical-align: bottom;
}
.padding {
    padding-top: 100px;
    padding-bottom: 100px;
}
</style>
