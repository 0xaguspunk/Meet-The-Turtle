'use strict';

/**
 * @ngdoc service
 * @name meetTheTurtleApp.playlist
 * @description
 * # playlist
 * Factory in the meetTheTurtleApp.
 */
angular.module('meetTheTurtleApp')
  .factory('playlist', function (hipermedia, formatTrack) {

    var createPlaylist = hipermedia.createPlaylist,
        getPlaylist = hipermedia.getPlaylist,
        formatPlaylist = formatTrack.hipermediaToPlaylist,
        getTracksFromPlaylist = hipermedia.getTracksFromPlaylist,
        formatTracks = formatTrack.hipermediaToTracks;

    var addTrackToPlaylist = hipermedia.addTrackToPlaylist,
        removeTrackFromPlaylist = hipermedia.removeTrackFromPlaylist,
        deletePlaylist = hipermedia.deletePlaylist;


    // Init list
    var queryPlaylist = [{id: 0, name: 'Starred', tracks: []},
                         {id: 1, name: 'Search', tracks: []},
                         {id: 2, name: 'Recommendations', tracks: []}];

    // List request
    getPlaylist().then(function(data) {

      var result = formatPlaylist(data),
          index;

      for(var list in result) {
        // Add the list to program variable
        queryPlaylist.push(result[list]);
        index = parseInt(list) + 3;

        // Set tracks
        queryPlaylist[index].tracks = [];

        // Request the tracks
        getTracksFromPlaylist(queryPlaylist[index].id)
          .then(function (data) {
            var result = formatTracks(data);
            if(result.length > 0) {
              for(var i in queryPlaylist) {
                if(queryPlaylist[i].id == result[0].playlist_id)
                queryPlaylist[i].tracks = result;
              }
            }
          });
      }

    });

    var playlist = {

      playlists: queryPlaylist,

      createPlaylist: function(name){
        var id = Math.floor((Math.random() * 9999) + 1);
        createPlaylist(name,id);
        this.playlists.push({name: name, tracks: [], id: id});
      },

      deletePlaylist: function(playlistIndex) {
        deletePlaylist(this.playlists[playlistIndex].id);
        this.playlists.splice(playlistIndex,1);
      },

      addTrackToPlayList: function(track,playlist){
        var id = Math.floor((Math.random() * 9999) + 1);
        addTrackToPlaylist(track, id, this.playlists[playlist].id);
        this.playlists[playlist].tracks.push(track);
      },

      removeTrackFromPlaylist: function(songIndex,playlistIndex){
        removeTrackFromPlaylist(this.playlists[playlistIndex].tracks[songIndex].id,
                                this.playlists[playlistIndex].id);
        this.playlists[playlistIndex].tracks.splice(songIndex,1);
      }

    };

    return playlist;

  });
