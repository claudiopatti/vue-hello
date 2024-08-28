const { createApp } = Vue

        createApp({
            data() {
            return {
                message: 'Hello VUE!',
                imageData: 'img/gerry.jfif'
            }
            }
        }).mount('#app')