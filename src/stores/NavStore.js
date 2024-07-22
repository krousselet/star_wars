import { defineStore } from 'pinia'

export const useNavStore = defineStore('nav', {
    state: () => ({
        pages: [
            {
                label: 'Accueil',
                link: '/',
            },
            {
                label: 'Details',
                link: '/about',
            },
            {
                label: 'Developpement',
                link: '/development',
            },
            {
                label: 'Contacter',
                link: '/contact',
            },
        ],
        // saber: [
        //     {
        //         srcMobile: '@/assets/mobile/lightsaber_frame_backgrounless_mobile.png',
        //         srcDesktop: '@/assets/desktop/lightsaber_frame_backgrounless_desktop.png'
        //     }
        // ]

    }),
})
