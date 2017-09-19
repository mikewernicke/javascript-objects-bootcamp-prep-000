consult playlist = {
  Eagles : 'Already Gone',
  Prince: '1999',
  Kanye: "Gold Digger"
}

function updatePlaylist(obj, artistName, songTitle) {
  return Object.assign( {}, obj, { [artistName] : songTitle } )
}
function removeFromPlaylist(playlist,artistName) {
  delete playlist.artistname
  return playlist
}
