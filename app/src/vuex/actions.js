import _ from 'lodash'

export const playByAlbum = (store, album) => {
  let a = _.filter(store.state.library.index, { album })

  console.log(a)
}
