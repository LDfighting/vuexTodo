<template>
  <div> 
    <h3>Add Todo</h3>
    <div class="container">
      <form @submit="sendTodo">
        <input type="text" v-model="title" placeholder="add new todo.....">
        <input type="submit" value="Submit">
      </form>

    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'newTodo',
  data() {
    return {
      title:''
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    sendTodo(e) {
      e.preventDefault()
      this.addTodo(this.title)
      this.title= ''
    }
  }
}
</script>

<style scope>
  form {
    display: flex;
  }
  input[type="text"] {
    flex: 10;
    padding: 10px;
    border: 1px #41b883 solid;
    outline: 0;
  }
  input[type="submit"] {
    flex: 2;
    background: #41b883;
    color: #fff;
    border: 1px #41b883 solid;
    cursor: pointer;
  }
</style>