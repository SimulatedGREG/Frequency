import mkdirp from 'mkdirp'
import path from 'path'
import { LocalStorage } from 'node-localstorage'

const indexDir = path.join(__root, 'index')
mkdirp.sync(indexDir)

const localStorage = new LocalStorage(path.join(__root, 'index'))

let libraryIndex = [
  'REMOVE_SINGLE_INDEX',
  'UPDATE_INDEX',
  'UPDATE_SINGLE_INDEX'
]

const localStorageMiddleware = {
  onMutation ({ type }, state, store) {
    if (libraryIndex.indexOf(type) > -1) {
      localStorage.setItem(
        'library.index',
        JSON.stringify(state.library.index)
      )
    }
  }
}

export default [localStorageMiddleware]
