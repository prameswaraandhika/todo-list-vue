

const todosApp = {
    data() {
        return {
            todos: [],
            newTodo: {}
        }
    },
    methods: {
        createTodo() {
            this.todos.push(this.newTodo)
            this.newTodo = {
                done: false
            }
        },
        clearTodos() {
            this.todos = {}
        }
    }
};

Vue.createApp(todosApp).mount('#app')