'use strict';

/**
 * @ngdoc service
 * @name meetTheTurtleApp.playlist
 * @description
 * # playlist
 * Factory in the meetTheTurtleApp.
 */
angular.module('meetTheTurtleApp')
  .factory('playlist', function () {



    var playlist = {

      playlists: [{name: 'Rock', tracks: []},{name: 'KLRW', tracks: []}, {name: 'RAP', tracks: []}],

      createPlaylist: function(){},

      deletePlaylist: function(){},

      addTrackToPlayList: function(track,playlist){
          this.playlists[playlist].tracks.push(track);
      },

      removeTrackFromPlaylist: function(){}

    };

    return playlist;

  });
