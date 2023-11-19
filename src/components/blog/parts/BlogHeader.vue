<template>
    <v-app-bar
    image="https://picsum.photos/1920/1080?random"
    >
    <template v-slot:image>
        <v-img
        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
        ></v-img>
    </template>
    
    <v-app-bar-title class="text-center">佐々木智康の日記</v-app-bar-title>
    
    <v-spacer></v-spacer>

    <v-col cols="auto">
        <v-btn variant="outlined">カテゴリ1</v-btn>
    </v-col>
    <v-col cols="auto">
        <v-btn variant="outlined">カテゴリ2</v-btn>
    </v-col>
    <v-col cols="auto">
        <v-btn variant="outlined">カテゴリ3</v-btn>
    </v-col>
    <v-col cols="auto">
        <v-btn variant="outlined">カテゴリ4</v-btn>
    </v-col>
    <v-col cols="auto">
        <v-btn variant="outlined">カテゴリ5</v-btn>
    </v-col>
    </v-app-bar>
</template>

<style scoped>

</style>

<script>
export default {
    name: 'BlogHeader',
    setup() {
        
    },
}
</script>