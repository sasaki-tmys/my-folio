<template>
    <v-container>
    <v-list>
        <h2>最新ブログ</h2>
        <v-list-item v-for="blog in blog_list" :key="blog.key" @click="goToBlogPage(blog.id)">
        <v-list-item-content>
            <v-list-item-title>{{ blog.date }} {{ blog.category }}</v-list-item-title>
            <v-list-item-subtitle class="pl-10">{{ blog.title }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-divider></v-divider>
        </v-list-item>
    </v-list>
    </v-container>
</template>

<script setup>
import blogTestData from '@/components/test/blogdata.json'
import router from '@/router';
import { ref } from 'vue';

const blog_list = ref(blogTestData)

const goToBlogPage = (postId) => {
    router.push({ name: 'blogpost', params: { id: postId } });
};
</script>

<style scoped>
.v-list {
    background-color: #E1F5FE;
}
</style>