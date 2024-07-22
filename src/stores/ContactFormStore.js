import { defineStore } from 'pinia';
import axios from 'axios';

export const useContactFormStore = defineStore('contactForm', {
    state: () => ({
        labels: ['Nom', 'Email', 'Message'],
        formData: {
            name: '',
            email: '',
            message: '',
        },
        urlResponse: '/.netlify/functions/submitForm',
    }),
    actions: {
        async submitForm() {
            try {
                const response = await axios.post(this.urlResponse, this.formData);
                await axios.post(this.urlResponse, this.formData);
                console.log('Submission response:', response.data);

                // Reset form data after successful submission
                this.formData = { name: '', email: '', message: '' };
            } catch (error) {
                console.error('Form submission error:', error);
            }
        },
    },
});
