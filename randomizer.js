var sp = getSpotifyApi(1);
var models = sp.require('sp://import/scripts/api/models');
var player = models.player;

exports.init = init;

function init() {
  document.getElementsByTagName('div')[0].addEventListener( 'click', playRandomTrack, false );
}

var playRandomTrack = function() {
  var randomChar = String.fromCharCode(Math.random()*25+97);

  sp.core.search( randomChar, {
    onSuccess: function( result ) {
      for (var i = 0; i < 100; i++) {
        var track = result.tracks[Math.floor(Math.random()*100)];
        if (track.availableForPlayback) break;
      }

      player.play(track.uri);
    }
  });
};
