<template>
    <v-app-bar
    image="https://picsum.photos/1920/1080?random"
    >
    <template v-slot:image>
        <v-img
        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
        ></v-img>
    </template>
    
    <v-app-bar-title class="text-center">佐々木智康のポートフォリオ</v-app-bar-title>
    
    <v-spacer></v-spacer>

    <v-col cols="auto">
        <v-btn variant="outlined" v-on:click.stop="scrollToTarget()">このサイトについて</v-btn>
    </v-col>
    <v-col cols="auto">
        <v-btn variant="outlined" v-on:click.stop="scrollToTarget()">成果物</v-btn>
    </v-col>
    <v-col cols="auto">
        <v-btn variant="outlined" v-on:click.stop="scrollToTarget()">技術一覧</v-btn>
    </v-col>
    <v-col cols="auto">
        <v-btn variant="outlined" v-on:click.stop="scrollToTarget()">経歴</v-btn>
    </v-col>
    <v-col cols="auto">
        <v-btn variant="outlined" v-on:click.stop="scrollToTarget()">お問い合わせ</v-btn>
    </v-col>
    <v-col cols="auto">
        <v-btn icon >
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-col>
    </v-app-bar>
</template>
<script>
export default {
    name: 'HeaderView',
    data: () => ({
    }),
    methods: {
      // 対象のコンテナまでスクロールする
        scrollToTarget() {
            // 対象のコンテナを取得する
            const HomeView = this.$refs.HomeView;
            // 対象のコンポーネントが存在しない場合
                if (!HomeView) {
                    return
                }
            // コンテナまでスクロールする
            window.scrollTo(0, HomeView.$el.getBoundingClientRect().top);
        }
    }
}
</script>
<style scoped>

</style>