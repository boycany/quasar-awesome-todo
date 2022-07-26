<template>
  <q-page class="q-pa-md">
    <q-list 
      v-if="Object.keys(tasks).length"
      bordered
      separator
      >
      <task v-for="(task, key) in tasks"
        :key="key" :task="task" :id="key"></task>
    </q-list>
    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        @click="showAddTask = true"
        round
        color="primary"
        size="24px"
        icon="add"
      />
    </div>
    <!-- 用 v-model 的方式來製作 Dialog -->
    <q-dialog v-model="showAddTask">
      <AddTask @close="showAddTask = false"/>
    </q-dialog>
  </q-page>
</template>

<script>
  import { mapGetters } from 'vuex'
  import AddTask from '../components/Modals/AddTask.vue'

  export default {
    data(){
      return {
        showAddTask: false
      }
    },
    computed: {
      ...mapGetters('tasks', ['tasks'])
    },
    components: {
      'task': require('../components/Tasks/Task.vue').default,
      AddTask
    }
  }
</script>
<style lang="scss">
 
</style>