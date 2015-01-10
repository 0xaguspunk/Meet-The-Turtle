'use strict';

/**
 * @ngdoc service
 * @name meetTheTurtleApp.formatTrack
 * @description Changes the format of the object returned by the API request
 *              to the format defined by this same service that the whole app will use.
 * # formatTrack
 * Factory in the meetTheTurtleApp.
 */
angular.module('meetTheTurtleApp')
  .factory('formatTrack', function () {

    // Track object constructor for the App
    function Track (name, artist, album, image_small, image_large, playcount) {

      this.name = name;
      this.artist = artist;
      this.album = album || '';
      this.image_small = image_small || '';
      this.image_large = image_large || '';
      this.playcount = playcount || -1;
      this.link = undefined;
    }

    var formatTrack = {

      // Adapts the Lastfm response format to the App format
      lastfmToTrack: function(lastfm_response) {

        var response = lastfm_response.tracks.track;
        var tracks = [];
        var track, name, artist, album, image_small, image_large, playcount;

        for (var element = 0; element < response.length ; element++) {

          name = response[element].name;
          artist = response[element].artist.name;
          if(response[element].hasOwnProperty('image')) {
            image_small = response[element].image[1]['#text'];
            image_large = response[element].image[3]['#text'];
          }
          playcount = response[element].playcount;

          track = new Track (name, artist, album, image_small, image_large, playcount)

          tracks.push(track);
        }

        return tracks;
      },

      // Adapts the Spotify response format to the App format
      spotifyToTrack: function(spotify_response) {

        var response = spotify_response.tracks.items;
        var tracks = [];
        var track, name, artist, album, image_small, image_large, playcount;

        for (var element = 0; element < response.length ; element++) {

          name = response[element].name;
          artist = response[element].artists[0].name;
          album = response[element].album.name;
          image_small = response[element].album.images[2].url;
          image_large = response[element].album.images[1].url;
          playcount = response[element].popularity;

          track = new Track (name, artist, album, image_small, image_large, playcount);

          tracks.push(track);
        }

        return tracks;
      },

      // Adapts the Youtube response format to the App format
      youtubeToLink: function(youtube_response) {

        var response = youtube_response.feed.entry[0];
        var link = response.id.$t.split('/')[6];

        return link;

      }
    };

    return formatTrack;
  });
