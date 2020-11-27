export const state = () => {
  return {
    isMenuActive: false,
  }
}

export const mutations = {
  SET_MENU_ACTIVE_STATUS(state, status) {
    state.isMenuActive = status
  },
}
