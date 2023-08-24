<template>
  <v-app>
    <Header></Header>
    <v-main>
      <HomeView/>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import HomeView from './components/HomeView.vue'
import Header from './components/HeaderView.vue'
import Footer from './components/FooterView.vue'

export default {
  name: 'App',

  components: {
    HomeView,
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
}
</script>
