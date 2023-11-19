<template>
  <v-app>
    <v-main >
      <router-view/>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script setup>
import Footer from '@/components/global/FooterView.vue';

</script>
