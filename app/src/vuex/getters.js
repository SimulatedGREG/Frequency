export function library (state) {
  return state.library.index
}

export function queue (state) {
  return state.queue.album
}

export function currentSong (state) {
  return state.queue.currentSong
}
