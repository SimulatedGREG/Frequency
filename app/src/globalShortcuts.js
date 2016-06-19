import { index } from './indexer'
import { remote } from 'electron'

const globalShortcut = remote.globalShortcut

globalShortcut.register('CommandOrControl+i', index)

if (process.env.NODE_ENV !== 'production') {
  window.onbeforeunload = () => {
    globalShortcut.unregisterAll()
  }
}
