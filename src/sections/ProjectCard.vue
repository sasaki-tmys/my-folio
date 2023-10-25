<template>
    <v-card class="ma-auto" max-width="344" variant="outlined">
        <v-img 
        src="../assets/sample01.png"
        height="200px"
        cover
        ></v-img>
        <v-card-title>{{ project.title }}</v-card-title>
        <v-card-subtitle>{{ project.subtitle }}</v-card-subtitle>
        <v-card-actions>
            <v-btn variant="outlined">
            詳細
            </v-btn>
        </v-card-actions>
        
    </v-card>
</template>

<script>
export default {
    props: ['project'],
    name: 'ProjectCard',
}
</script>

<style>

</style>