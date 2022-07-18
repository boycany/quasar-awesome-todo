<template>
  <q-page padding>
    <ul>
      <task 
        v-for="(task, idx) in tasks"
        :task="task"
        :idx="idx"
        :key="task.id"
        :deleteTask="deleteTask"
        >
      {{ task.name }}
      </task>
    </ul>
  </q-page>
</template>

<script>
  import Task from '../components/Task'
  export default {
    data(){
      return {
        tasks: [
        {
          id: 1,
          name: 'First Thing',
          dueDate: '2018/05/12',
          dueTime: '18:30'
        }, 
        {
          id: 2,
          name: 'Second Thing',
          dueDate: '2018/05/12',
          dueTime: '18:30'
        },
        {
          id: 3,
          name: 'Third Thing',
          dueDate: '2018/05/12',
          dueTime: '18:30'
        }]
      }
    }, 
    methods: {
      deleteTask(idx){
        this.tasks.splice(idx, 1)
      }
    },
    components: {
      'task': Task
    }
  }
</script>
<style lang="scss">
 
</style>