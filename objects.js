var playlist = {
  Eagles : 'Already Gone',
  Prince: '1999'
}

function updatePlayList(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName] : songTitle } )
}
//function removeFromPlaylist (playlist,artistName) {
//
//}
