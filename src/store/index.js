import {
    defineStore
} from 'pinia'

export const useStore = defineStore({
    id: 'counter',
    state: () => ({
        showModal: false,
        selectedGrid: []
    })
})