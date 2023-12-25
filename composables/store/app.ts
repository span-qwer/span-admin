import { defineStore } from 'pinia'

export const appStore = defineStore({
  id: 'appStore',
  state: () => {
    return {
      authToken: '',
      appId: '544000',
      menu: []
    }
  },
  getters: {
    getAppId: state => state.appId,
    getMenu: state => state.menu,
    getAuthToken: state => state.authToken
  },
  actions: {
    async setAppId(payload?: any) {
      const { appId }: any = await $http({
        url: '/appId',
        method: 'post',
        body: { ...payload }
      })
      this.appId = appId
      return { appId }
    },
    async setMenu() {
      const { menu }: any = await $http('/menu')
      this.menu = menu
      return { menu }
    },
    async setAuthToken(token: string) {
      this.authToken = token
    }
  }
})
