<template>
  <q-page class="q-pa-md">
    <q-list 
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
      <q-card>
        <q-card-section class="row justify-between">
          <div class="text-h6">Add Task</div>
          <q-btn 
            dense 
            flat 
            round 
            v-close-popup
            color="dark" 
            icon="close" />
        </q-card-section>

        <q-card-section class="q-pt-none q-mx-xl">
          <div class="row q-mb-sm">
            <q-input 
              class="col-12"
              outlined 
              v-model="taskToSubmit.name" 
              label="Task Name" />
          </div>
          <div class="row q-mb-sm">  
            <q-input 
              outlined 
              label="Due Date"
              v-model="taskToSubmit.dueDate">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="taskToSubmit.dueDate">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="row q-mb-sm"> 
            <q-input 
              outlined 
              label="Due Time"
              v-model="taskToSubmit.dueTime">
              <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                  <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-time v-model="taskToSubmit.dueTime">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-time>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Save" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data(){
      return {
        showAddTask: true,
        taskToSubmit: {
          name: '',
          dueDate: '',
          dueTime: '',
          completed: false
        }
      }
    },
    computed: {
      ...mapGetters('tasks', ['tasks'])
    },
    components: {
      'task': require('../components/Tasks/Task.vue').default,
    }
  }
</script>
<style lang="scss">
 
</style>