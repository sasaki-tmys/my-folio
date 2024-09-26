import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ForbiddenView from '@/views/ForbiddenView.vue'

import { useAuthStore } from '@/stores/auth'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            meta: {
                isCameFromQRcode: true
            },
            component: HomeView
        },
        {
            path: '/forbidden',
            name: 'forbidden',
            component: ForbiddenView
        }
    ]
})

router.beforeEach(async (to, from, next) => {
    const store = useAuthStore()

    // `/forbidden` へのアクセスを制御（無限リダイレクトを防ぐ）
    if (to.name === 'forbidden') {
        next() // forbidden画面へのアクセスはそのまま許可
        return
    }

    // `isCameFromQRcode`をmetaに持つルートのみに対してチェック
    if (to.matched.some((record) => record.meta.isCameFromQRcode)) {
        const params = new URLSearchParams(window.location.search)
        const token = params.get('token')
        console.log('token', token)
        console.log('import.meta.env.VITE_TOKEN_PATH', import.meta.env.VITE_TOKEN_PATH)
        console.log(token === import.meta.env.VITE_TOKEN_PATH)
        // tokenの検証
        if (token === import.meta.env.VITE_TOKEN_PATH) {
            // QRコードからの正しいアクセスの場合
            store.setCameFromQRcode(true)
            next()
        } else {
            // 不正なtokenの場合
            console.log('token === import.meta.env.VITE_TOKEN_PATH', token === import.meta.env.VITE_TOKEN_PATH)
            next('/forbidden')
        }
    } else {
        // `isCameFromQRcode`を持たないルートには`forbidden`にリダイレクト
        console.log('isCameFromQRcodeがfalse')
        next('/forbidden')
    }
})

export default router
