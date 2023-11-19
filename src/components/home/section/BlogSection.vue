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
import router from '@/router';
import { ref } from 'vue';

const blog_list = ref([
    {id: '01', date: '2023年10月1日', category: 'その他', title: 'まだまだ暑いですな。季節の変わり目はいつも体調を崩してし...', },
    {id: '02', date: '2023年10月8日', category: '居酒屋探訪', title: '寒かったのでおでんを食べに行きました。私が好きなおでんはま...', },
    {id: '03', date: '2023年10月15日', category: '読了した本', title: '伊坂幸太郎の終末のフールを読み終えました。', },
    {id: '04', date: '2023年11月20日', category: 'プログラミング', title: 'プログラミングの勉強としてブログ投稿プラットフォームの作成を始めました！', },
])

const goToBlogPage = (postId) => {
    router.push({ name: 'blogpost', params: { id: postId } });
};
</script>

<style scoped>
.v-list {
    background-color: #E1F5FE;
}
</style>