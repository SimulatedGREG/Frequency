import mkdirp from 'mkdirp'
import path from 'path'
import { LocalStorage } from 'node-localstorage'

const indexDir = process.env.NODE_ENV === 'production'
  ? path.join(__root, 'index')
  : '/Users/gregholguin/Documents/Projects/Personal/frequency/app/dist/index'

mkdirp.sync(indexDir)

const localStorage = new LocalStorage(indexDir)

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
