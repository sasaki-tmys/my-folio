<template>
    <h1 class="display-2 font-weight-bold mb-4">
        お問い合わせ
        </h1>
    <form @submit.prevent="submit">
    <v-text-field
        v-model="name.value.value"
        :counter="10"
        :error-messages="name.errorMessage.value"
        label="氏名または企業名"
    ></v-text-field>

    <v-text-field
        v-model="phone.value.value"
        :counter="7"
        :error-messages="phone.errorMessage.value"
        label="電話番号"
    ></v-text-field>

    <v-text-field
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        label="メールアドレス"
    ></v-text-field>

    <v-textarea
        v-model="select.value.value"
        :items="items"
        :error-messages="select.errorMessage.value"
        label="問い合わせ内容"
    ></v-textarea>

    <v-checkbox
        v-model="checkbox.value.value"
        :error-messages="checkbox.errorMessage.value"
        value="1"
        label="内容を確認しました"
        type="checkbox"
    ></v-checkbox>

    <v-btn
        class="me-4"
        type="submit"
    >
        送信
    </v-btn>

    <v-btn @click="handleReset">
        クリア
    </v-btn>
    </form>
</template>

<script setup>
import { useField, useForm } from 'vee-validate'
const { handleSubmit, handleReset } = useForm({
    validationSchema: {
        name (value) {
            if (value?.length >= 2) return true
            return 'Name needs to be at least 2 characters.'
        },
        phone (value) {
            if (value?.length > 9 && /[0-9-]+/.test(value)) return true
            return 'Phone number needs to be at least 9 digits.'
        },
        email (value) {
            if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
            return 'Must be a valid e-mail.'
        },
        select (value) {
            if (value) return true
            return 'Select an item.'
        },
        checkbox (value) {
            if (value === '1') return true
            return 'Must be checked.'
        },
    },
})
const name = useField('name')
const phone = useField('phone')
const email = useField('email')
const select = useField('select')
const checkbox = useField('checkbox')
const items = useField('items')

const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
})
</script>