import { defineStore } from 'pinia'

export const stateMgr = defineStore({
  // arrow function recommended for full type inference
  state: () => {
    return {
      name: '',
      role: '',
      authenticated : false
    }
  }
})

/*
export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})


export const stateMgr = defineStore({
  // arrow function recommended for full type inference
  state: () => {
    return {
      name: '',
      role: '',
      authenticated : false
    }
  },
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
*/