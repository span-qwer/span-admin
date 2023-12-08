import { defineStore } from 'pinia'

export const appStore = defineStore({
  id: 'appStore',
  state: () => {
    return {
      appId: '544000'
    }
  },
  getters: {
    getAppId: state => state.appId
  },
  actions: {
    setAppId(id: any) {
      this.appId = id
    }
  }
})
