import {
  SET_CURRENT_SONG,
  SET_ALBUM
} from '../mutation-types'

const state = {
  album: [],
  currentSong: 0
}

const mutations = {
  [SET_CURRENT_SONG] (state, index) {
    state.currentSong = index
  },
  [SET_ALBUM] (state, album) {
    state.album = album
  }
}

export default {
  state,
  mutations
}
