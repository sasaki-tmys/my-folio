<script setup lang="ts">
import { useScrollStore } from '@/stores/scroll'
import { useRouter } from 'vue-router'

const store = useScrollStore()
const router = useRouter()

const sections = [
    { title: 'このサイトについて', target: 'About' },
    { title: '成果物', target: 'Project' },
    { title: '技術一覧', target: 'Skill' },
    // { title: '最新ブログ', target: 'Blog' },
    { title: '生成画像', target: 'Gallery' },
    { title: '経歴', target: 'Carrer' }
    // {title: 'お問い合わせ', target: 'Contact'},
]
const scrollToTarget = (sectionRef: string) => {
    store.setSectionToScroll(sectionRef)
}
</script>

<template>
    <v-app-bar style="background-color: transparent !important; box-shadow: none !important">
        <v-spacer />
        <v-row>
            <v-col cols="auto" v-for="(section, index) in sections" :key="index">
                <v-btn
                    flat
                    variant="elevated"
                    color="background"
                    @click.stop="scrollToTarget(section.target)"
                    :text="section.title"
                />
            </v-col>
            <v-col cols="auto">
                <v-btn
                    flat
                    variant="elevated"
                    color="background"
                    target="_blank"
                    text="BabylonJS"
                    @click="router.push('/babylonfolio')"
                />
            </v-col>
        </v-row>
    </v-app-bar>
</template>

<style scoped></style>
