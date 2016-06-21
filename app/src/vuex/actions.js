import _ from 'lodash'
import * as types from 'src/vuex/mutation-types'

export const playByAlbum = (store, album) => {
  let a = _.filter(store.state.library.index, { album })

  store.dispatch(types.SET_ALBUM, a)
}

export const setCurrentSong = (store, index) => {
  store.dispatch(types.SET_CURRENT_SONG, index)
}
