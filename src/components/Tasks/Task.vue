<template>
  <q-item
    :class="task.completed ? 'bg-green-1' : 'bg-orange-1'"
    @click="
      updateTask({
        id: id,
        updates: {
          completed: !task.completed,
        },
      })
    "
    clickable
    v-ripple
  >
    <q-item-section side top>
      <q-checkbox 
        v-model="task.completed"
      />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{ 'text-strikethrough': task.completed }">
        {{ task.name }}
      </q-item-label>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <div class="column justify-center">
          <q-icon name="event" size="20px" left />
        </div>
        <div class="column">
          <q-item-label caption class="row justify-end">
            {{ task.dueDate }}
          </q-item-label>
          <q-item-label caption class="row justify-end">
            {{ task.dueTime }}
          </q-item-label>
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <q-btn 
        @click.stop="promptToDelete(id)"
        flat 
        round 
        dense
        color="negative" 
        icon="delete_forever" />
    </q-item-section>
  </q-item>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  props: ["task", "id"],
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),
    promptToDelete(id){
      this.$q.dialog({
        title: 'Confirm',
        message: 'Really delete?',
        ok:{
          push: true,
        },
        cancel: {
          push: true,
          color: "negative"
        },
        persistent: true
      }).onOk(() => {
        console.log('deleted')
        this.deleteTask(id)
      })
    },
  },
};
</script>
<style></style>
