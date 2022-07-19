<template>
     <q-item 
        :class=" task.completed ? 'bg-green-1' : 'bg-orange-1'"
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
</template>
<script>
export default {
    props: ['task', 'id']
}
</script>
<style>

</style>