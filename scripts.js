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
            todos: window.todos,
            newTodo: {}
        }
    },
    methods: {
        createTodo() {
            this.todos.push(this.newTodo)
            this.newTodo = {
                done: false
            }
        }
    }
};

Vue.createApp(todosApp).mount('#app')