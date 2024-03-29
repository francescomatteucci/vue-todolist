const { createApp } = Vue

createApp({
    data() {
        return {
            todos: [
                {
                    text: 'Fai la doccia',
                    done: true
                    
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
    },

    methods: {
        done(todo) {
            if (todo.done === true) {
                return 'bar-text'
            }
        },

        remove(index){
            this.todos.splice(index, 1);
        },
        
       
    }
}).mount('#app')