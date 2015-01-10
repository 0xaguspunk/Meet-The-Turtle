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

      playlists: [{name: 'Starred', tracks: []},{name: 'Search', tracks: []}],

      createPlaylist: function(name){
        this.playlists.push({name: name, tracks: []});
      },

      deletePlaylist: function(playlistIndex){
        this.playlists.splice(playlistIndex,1);
      },

      addTrackToPlayList: function(track,playlist){
          this.playlists[playlist].tracks.push(track);
      },

      removeTrackFromPlaylist: function(songIndex,playlistIndex){
        this.playlists[playlistIndex].tracks.splice(songIndex,1);
      }

    };

    return playlist;

  });
