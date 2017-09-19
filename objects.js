var playlist = {
  Eagles : 'Already Gone'
}
function updatePlayList(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { artistName : songTitle } )
}
//function removeFromPlaylist (playlist,artistName) {
//
//}
