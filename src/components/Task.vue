<template>
  <div>
      <li>
        <div><slot></slot></div>
        <small>{{ task.dueDate }} @ {{ task.dueTime }}</small>
        <button @click="deleteTask(idx)">X</button>
      </li>
  </div>
</template>
<script>
    export default {
      props: ['task', 'idx', 'deleteTask']
    };
</script>
<style>

</style>
