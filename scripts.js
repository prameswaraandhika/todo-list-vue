var todos = [
    {
        text: 'Learn Java',
        done: true
    },
    {
        text: 'Learn Springboot',
        done: true
    }
]

const todosApp = {
    data() {
        return {
            todos: window.todos
        }
    }
};

Vue.createApp(todosApp).mount('#app')