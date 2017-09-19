var playlist = {
  Eagles : 'Already Gone',
  Prince: '1999'
}

function updatePlayList(obj, artistName, songTitle) {
  return Object.assign( {}, obj, { [artistName] : songTitle } )
}
//function removeFromPlaylist (playlist,artistName) {
//
//}
