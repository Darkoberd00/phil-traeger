export const useUserStore = defineStore("user", {
  state: () => ({
    isLoggedIn: false,
  }),
  getters: {},
  actions: {
    login() {
      this.isLoggedIn = true;
      useRouter().push({ path: "/" })
    },
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
