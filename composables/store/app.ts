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
    async setAppId() {
      const { appId }: any = await $fetch('/api/appId')
      this.appId = appId
      return { appId }
    }
  }
})
