<template>
    <v-container class="text-center my-5">
        <v-row justify="center">
            <v-col cols="12" md="6">
                <v-card class="pa-5" color="background" flat>
                    <v-card-title>
                        <v-icon large color="error">mdi-alert-circle-outline</v-icon>
                        <span class="ml-3">アクセスが拒否されました</span>
                    </v-card-title>
                    <v-card-text>
                        <p>このページには特定の条件でのみアクセス可能です。</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts"></script>

<style scoped>
.v-card-title {
    font-size: 24px;
    font-weight: bold;
}
</style>
