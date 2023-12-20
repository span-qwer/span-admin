import { defineStore } from 'pinia'

export const appStore = defineStore({
  id: 'appStore',
  state: () => {
    return {
      appId: '544000',
      menu: []
    }
  },
  getters: {
    getAppId: state => state.appId,
    getMenu: state => state.menu
  },
  actions: {
    async setAppId() {
      const { appId }: any = await $fetch('/api/appId')
      this.appId = appId
      return { appId }
    },
    async setMenu() {
      const { menu }: any = await $fetch('/api/menu')
      this.menu = menu
      return { menu }
    }
  }
})
