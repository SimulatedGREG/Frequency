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
  // library.forEach(k => {
  //   mm(fs.createReadStream(k), (err, metadata) => {
  //     if (err) console.error(err)

  //     metadata.path = k

  //     store.dispatch(UPDATE_SINGLE_INDEX, {
  //       key: _.uniqueId(),
  //       metadata
  //     })
  //   })
  // })

  for (let i = 0; i < library.length; i++) {
    mm(fs.createReadStream(library[i].path), (err, metadata) => {
      if (err) console.error(err)

      store.dispatch(UPDATE_SINGLE_INDEX, library[i].path, metadata)
    })
  }
}

export const index = () => {
  dialog.showOpenDialog({
    title: 'What folder is your music saved in?',
    properties: ['openDirectory']
  }, filenames => {
    dir.files(filenames[0], (err, files) => {
      if (err) console.error(err)

      files = files.filter(file => /\.mp3$|\.m4a$|\.ogg$|\.flac$/.test(file))

      let library = []
      for (let i = 0; i < files.length; i++) {
        library.push({
          path: files[i]
        })
      }

      store.dispatch(UPDATE_INDEX, library, parseMetadata)
    })
  })
}
