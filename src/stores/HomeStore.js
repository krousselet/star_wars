import { defineStore } from 'pinia'
export const useHomeStore = defineStore('home', {
    state: () => (
        {
            count: 0,
            name: 'Home',
        }),
})