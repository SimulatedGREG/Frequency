import dir from 'node-dir'
import fs from 'fs'
import mm from 'musicmetadata'
import store from 'src/vuex/store'
import {
  UPDATE_INDEX,
  UPDATE_SINGLE_INDEX
} from 'src/vuex/mutation-types'
import { remote } from 'electron'

const dialog = remote.dialog

function parseMetadata (library) {
  Object.keys(library).forEach(k => {
    /* eslint-disable no-new */
    mm(fs.createReadStream(k), (err, metadata) => {
      if (err) console.error(err)

      store.dispatch(UPDATE_SINGLE_INDEX, {
        path: k,
        metadata
      })
    })
  })
}

export const index = () => {
  dialog.showOpenDialog({
    title: 'What folder is your music saved in?',
    properties: ['openDirectory']
  }, filenames => {
    dir.files(filenames[0], (err, files) => {
      if (err) console.error(err)

      files = files.filter(file => /\.mp3$|\.m4a$|\.ogg$|\.flac$/.test(file))

      let library = {}
      for (let i = 0; i < files.length; i++) {
        library[files[i]] = null
      }

      store.dispatch(UPDATE_INDEX, library, parseMetadata)
    })
  })
}
