'use strict';

/**
 * @ngdoc service
 * @name meetTheTurtleApp.hipermedia
 * @description Makes request to the hipermedia API
 * # hipermedia
 * Factory in the meetTheTurtleApp.
 */
angular.module('meetTheTurtleApp')
  .factory('hipermedia', function ($http) {

    var hipermedia =  {

      // Creates playlist
      createPlaylist: function(name,id){

        $http( {
          method: 'PUT',
          url: 'http://api.hipermedia.local/query',
          headers:
            {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
          data:"INSERT INTO playlists (name,playlist_id) VALUES ('" + name + "','" + id + "')"
        });
      },

      // Gets playlist information
      getPlaylist: function(){

        var promise = $http( {
          method: 'PUT',
          url: 'http://api.hipermedia.local/query',
          headers:
          {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data:"SELECT * FROM playlists"
        }).then(function (response) {
          return response.data;
        });

        return promise;
      },

      // Gets tracks that belong to a playlist
      getTracksFromPlaylist: function(playlist_id){

        var promise = $http( {
          method: 'PUT',
          url: 'http://api.hipermedia.local/query',
          headers:
          {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data:"SELECT * FROM music WHERE playlist_id=" + playlist_id
        }).then(function (response) {
          return response.data;
        });

        return promise;
      },

      // Adds track to playlist
      addTrackToPlaylist: function(track, id,playlist_id){


        $http( {
          method: 'PUT',
          url: 'http://api.hipermedia.local/query',
          headers:
            {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
          data:"INSERT INTO music (track_id, artist, title, playlist_id, album, image_small, image_large, playcount) " +
                "VALUES ('" + id +
                "','" + track.artist + "'" +
                ",'" + track.name + "'" +
                ",'" + playlist_id + "'" +
                ",'" + track.album + "'" +
                ",'" + track.image_small + "'" +
                ",'" + track.image_large + "'" +
                ",'" + track.playcount + "'" +
                ")"
        });
      },

      // Removes track from playlist
      removeTrackFromPlaylist: function(id,playlist_id){


        $http( {
          method: 'PUT',
          url: 'http://api.hipermedia.local/query',
          headers:
          {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data:"DELETE FROM music WHERE track_id=" + id + " AND playlist_id=" + playlist_id
        });

      },

      // Deletes playlist
      deletePlaylist: function(playlist_id){

        $http( {
          method: 'PUT',
          url: 'http://api.hipermedia.local/query',
          headers:
          {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data:"DELETE FROM music WHERE playlist_id=" + playlist_id
        });

        $http( {
          method: 'PUT',
          url: 'http://api.hipermedia.local/query',
          headers:
          {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data:"DELETE FROM playlists WHERE playlist_id=" + playlist_id
        });

      }


    };
    return hipermedia;

  });
