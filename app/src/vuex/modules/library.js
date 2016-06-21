import _ from 'lodash'
import mkdirp from 'mkdirp'
import path from 'path'
import { LocalStorage } from 'node-localstorage'

const indexDir = process.env.NODE_ENV === 'production'
  ? path.join(__root, 'index')
  : '/Users/gregholguin/Documents/Projects/Personal/frequency/app/dist/index'

mkdirp.sync(indexDir)

const localStorage = new LocalStorage(indexDir)

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
  [UPDATE_SINGLE_INDEX] (state, p, metadata) {
    let i
    state.index.find((t, pos) => {
      if (t.path === p) {
        i = pos
        return true
      } else return false
    })

    state.index[i] = _.assign(state.index[i], metadata)
  }
}

export default {
  state,
  mutations
}
