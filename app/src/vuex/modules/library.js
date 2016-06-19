import {
  REMOVE_SINGLE_INDEX,
  UPDATE_INDEX,
  UPDATE_SINGLE_INDEX
} from '../mutation-types'

const state = {
  index: JSON.parse(localStorage.getItem('library.index') || '[]')
}

const mutations = {
  [REMOVE_SINGLE_INDEX] (state, key) {
    delete state.index[key]
  },
  [UPDATE_INDEX] (state, library, cb) {
    state.index = library
    cb(library)
  },
  [UPDATE_SINGLE_INDEX] (state, { path, metadata }) {
    state.index[path] = metadata
  }
}

export default {
  state,
  mutations
}
