import Vue from 'vue';
import { uid } from 'quasar';

const state = {
  tasks: {
    // "ID1": {
    //   name: 'BNT',
    //   completed: false,
    //   dueDate: '2019/05/12',
    //   dueTime: '18:30'
    // },
    // "ID2": {
    //   name: 'NOVAVAX',
    //   completed: false,
    //   dueDate: '2022/04/20',  
    //   dueTime: '17:20'          
    // },
  }
}

const mutations = {
  updateTask(state, payload){
    console.log('payload from mutations :>> ', payload);
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, id){
    console.log('DELETE id :>> ', id);
    Vue.delete(state.tasks, id)
  },
  addTask(state, payload){
    Vue.set(state.tasks, payload.id, payload.task)
  }
}

const actions = {
  updateTask({ commit }, payload){
    // console.log('payload from actions:>> ', payload);
    // console.log('updateTask action');
    //commit('name of mutation we want to trigger', 'sth want to pass in mutation')
    commit('updateTask', payload)
  },
  deleteTask({ commit }, id){
    commit('deleteTask', id)
  },
  addTask({ commit }, task){
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task
    }
    commit('addTask', payload)
  }
}

const getters = {
    tasks: (state) => {
        return state.tasks
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}