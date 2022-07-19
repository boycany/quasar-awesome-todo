const state = {
  tasks: {
    "ID1": {
      name: 'BNT',
      completed: false,
      dueDate: '2019/05/12',
      dueTime: '18:30'
    },
    "ID2": {
      name: 'NOVAVAX',
      completed: false,
      dueDate: '2022/04/20',  
      dueTime: '17:20'          
    },
    "ID3": {
      name: 'MD',
      completed: false,
      dueDate: '2021/05/14',
      dueTime: '16:20'
    },
  }
}

const mutations = {

}

const actions = {

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