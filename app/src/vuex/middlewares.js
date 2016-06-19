const localStorageMiddleware = {
  onMutation ({ type }, state, store) {
    if (type === 'UPDATE_INDEX') {
      localStorage.setItem(
        'library.index',
        JSON.stringify(state.library.index)
      )
    }
  }
}

export default [localStorageMiddleware]
