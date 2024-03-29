const { createApp } = Vue

  createApp({
    data() {
      return {
        todos: [
            {
                text: 'Fai la doccia',
                done: false
            },

            {
                text: 'Fai la spesa',
                done: false
            },

            {
                text: 'Mangia il cane',
                done: false
            },
            

            
        ]
      }
    }
  }).mount('#app')