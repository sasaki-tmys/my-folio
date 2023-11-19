<template>
    <v-container class="text-center" id="aboutThisSite">
    <v-row>
        <v-col cols="12">
        <div>
            <v-img 
            :src="require('@/assets/logo.svg')" 
            class="my-3" 
            contain 
            height="200"
            />
        </div>
        </v-col>
        <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
            このサイトについて
        </h1>
        <p class="subheading font-weight-regular">
            勉強の内容や成果物を公開するサイトです。<br />あと、経歴やスキルなども公開しています。
        </p>
        </v-col>
    </v-row>
    </v-container>
</template>
<style scoped>
#v-container {
    height: 100%;
}
</style>