<template>
    <v-card 
    variant="outlined"
    >
        <v-img 
        :src="require(`@/assets/img/Project/sample${props.project.id}.png`)"
        height="200px"
        cover
        ></v-img>

        <v-card-title>{{ props.project.title }}</v-card-title>
        <v-card-subtitle>{{ props.project.subtitle }}</v-card-subtitle>

        <v-card-actions>
            <v-btn variant="outlined">
            詳細
            </v-btn>
        </v-card-actions>
        
    </v-card>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    project: Object,
})
</script>
