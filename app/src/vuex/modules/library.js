import {
  UPDATE_INDEX
} from '../mutation-types'

const state = {
  index: JSON.parse(localStorage.getItem('library.index') || '[]')
}

const mutations = {
  [UPDATE_INDEX] (state, files) {
    state.index = files
  }
}

export default {
  state,
  mutations
}
