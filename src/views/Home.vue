<template>
  <div class="container">
    <NewTodo/>
    <Todo/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Todo from '@/components/todo'
import NewTodo from '@/components/newTodo'
export default {
  name: 'Home',
  components: {
    Todo,
    NewTodo
  },
  computed: mapGetters(["allTodos"])
  methods: {
    
  },
}
</script>

<style lang="less" scoped>

  .container {
    max-width: 1100px;
    margin: auto;
    overflow: auto;
    padding: 0 2rem;
  }
</style>
