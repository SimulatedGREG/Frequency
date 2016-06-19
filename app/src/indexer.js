import dir from 'node-dir'
import store from 'src/vuex/store'
import { UPDATE_INDEX } from 'src/vuex/mutation-types'
import { remote } from 'electron'

const dialog = remote.dialog

export const index = () => {
  dialog.showOpenDialog({
    title: 'What folder is your music saved in?',
    properties: ['openDirectory']
  }, filenames => {
    console.log(filenames)
    dir.files(filenames[0], (err, files) => {
      if (err) console.error(err)

      files = files.filter(file => {
        return /\.mp3$|\.m4a$|\.ogg$|\.flac$/.test(file)
      })

      store.dispatch(UPDATE_INDEX, files)
    })
  })
}
