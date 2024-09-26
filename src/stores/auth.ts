import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        isCameFromQRcode: false
    }),
    actions: {
        setCameFromQRcode(flag: boolean) {
            this.isCameFromQRcode = flag
        }
    },
    persist: true
})
