<template>
  <q-page class="q-pa-md">
    <q-list 
      bordered
      separator
      >
      <q-item 
        :class="!task.completed ? 'bg-orange-1': 'bg-green-1'"
        v-for="task in tasks"
        :key="task.id"
        @click="task.completed = !task.completed"
        clickable    
        v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label
            :class="{ 'text-strikethrough': task.completed }"
          >
            {{ task.name }}
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="row">
            <div class="column justify-center">
              <q-icon name="event" size="20px" left/>
            </div>
            <div class="column">
              <q-item-label caption class="row justify-end">
                {{task.dueDate}}
              </q-item-label>
              <q-item-label caption class="row justify-end">
                {{task.dueTime}}
              </q-item-label>
            </div>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
  export default {
    data(){
      return {
        tasks: [
          {
            id: 1,
            name: 'BNT',
            completed: false,
            dueDate: '2019/05/12',
            dueTime: '18:30'
          },
          {
            id: 2,
            name: 'NOVAVAX',
            completed: false,
            dueDate: '2022/04/20',  
            dueTime: '17:20'          
          },
          {
            id: 3,
            name: 'MD',
            completed: false,
            dueDate: '2021/05/14',
            dueTime: '16:20'
          },
        ]
      }
    }
  }
</script>
<style lang="scss">
 
</style>