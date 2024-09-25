<script setup lang="ts">
import Footer from '@/components/global/FooterView.vue'
</script>

<template>
    <v-app>
        <v-main>
            <router-view />
            <Footer />
        </v-main>
    </v-app>
</template>
