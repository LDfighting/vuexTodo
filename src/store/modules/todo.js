import axios from 'axios'

const state = {
  todos: []

}

const getters = {
  allTodos: (state)=> state.todos
}

const actions = {
  async getAllTodos({commit}) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    commit('saveTodos', response.data)
  },
  async addTodo({commit}, title) {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })

    commit('saveNewTodo', response.data)
  }
}

const mutations = {
  saveTodos: (state, todos) => { state.todos =  todos },
  saveNewTodo: (state, newTodo) => { state.todos.unshift(newTodo) }
}

export default {
  state,
  getters,
  actions,
  mutations
}
