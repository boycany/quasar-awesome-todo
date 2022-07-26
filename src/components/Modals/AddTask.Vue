<template>
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
    <form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none q-mx-xl">
        <div class="row q-mb-sm">
          <q-input 
            class="col-12"
            outlined 
            autofocus
            :rules="[val => !!val || 'Field is required']"
            v-model="taskToSubmit.name"  
            ref="name"
            label="Task Name">
            <template v-slot:append>
              <q-icon 
                v-if="taskToSubmit.name"
                name="close" 
                @click="taskToSubmit.name = ''" 
                class="cursor-pointer" />
            </template>
          </q-input>
        </div>
        <div class="row q-mb-sm">  
          <q-input 
            class="col"
            outlined 
            :rules="[ v => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(v) || 'Please enter the correct date.']"
            label="Due Date"
            ref="date"
            v-model="taskToSubmit.dueDate">
            <template v-slot:append>
              <q-icon 
                v-if="taskToSubmit.dueDate"
                name="close" 
                @click="clearDueDate" 
                class="cursor-pointer" />
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
            :rules="[ v => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(v) || 'Please enter the correct time.' ]"
            class="col"
            v-if="taskToSubmit.dueDate"
            outlined 
            ref="time"
            label="Due Time"
            v-model="taskToSubmit.dueTime">
            <template v-slot:append>
              <q-icon 
                v-if="taskToSubmit.dueTime"
                name="close" 
                @click="taskToSubmit.dueTime = ''" 
                class="cursor-pointer" />
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
        <q-btn 
          flat 
          label="Save" 
          color="primary" 
          type="submit"
          />
      </q-card-actions>
    </form>
  </q-card>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data(){
    return {
      taskToSubmit: {
      name: '',
      dueDate: '',
      dueTime: '',
      completed: false
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['addTask']),
    submitForm(){
      this.$refs.name.validate()
      this.$refs.date.validate()
      // console.log('this.$refs.date :>> ', this.$refs.date);
      if( !this.$refs.name.hasError && 
          !this.$refs.date.hasError && 
          !this.$refs.time.hasError )
      {
        this.submitTask()
      }
    },
    submitTask(){
      this.addTask(this.taskToSubmit)
      this.$emit('close')
    },
    clearDueDate(){
      this.taskToSubmit.dueDate = ""
      this.taskToSubmit.dueTime = ""
    }
  },
}
</script>
<style>

</style>