'use strict';

/**
 * @ngdoc directive
 * @name meetTheTurtleApp.directive:youtube
 * @description
 * # youtube
 */
angular.module('meetTheTurtleApp')
  .directive('youtube', function ($window, YT_event) {
    return {
      restrict: "E",

      scope: {
        height: "@",
        width: "@",
        videoid: "@"
      },

      template: '<div></div>',

      link: function(scope, element) {
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        var player;

        $window.onYouTubeIframeAPIReady = function() {

          player = new YT.Player(element.children()[0], {
            playerVars: {
              autoplay: 0,
              html5: 1,
              theme: "light",
              modesbranding: 0,
              color: "white",
              iv_load_policy: 3,
              showinfo: 1,
              controls: 1
            },

            height: scope.height,
            width: scope.width,
            videoId: scope.videoid,

            events: {
              'onStateChange': function (event) {

                var message = {
                  event: YT_event.STATUS_CHANGE,
                  data: ""
                };

                switch (event.data) {
                  case YT.PlayerState.PLAYING:
                    message.data = "PLAYING";
                    break;
                  case YT.PlayerState.ENDED:
                    message.data = "ENDED";
                    break;
                  case YT.PlayerState.UNSTARTED:
                    message.data = "NOT PLAYING";
                    break;
                  case YT.PlayerState.PAUSED:
                    message.data = "PAUSED";
                    break;
                  case YT.PlayerState.BUFFERING:
                    message.data = "BUFFERING";
                    break;
                };

                scope.$apply(function() {
                  scope.$emit(message.event, message.data);
                });
              }
            }
          });
        }

        scope.$watch('videoid', function(newValue, oldValue) {
          if (newValue == oldValue) {
            return;
          }

          player.cueVideoById(scope.videoid);

        });

        scope.$watch('height + width', function(newValue, oldValue) {
          if (newValue == oldValue) {
            return;
          }

          player.setSize(scope.width, scope.height);

        });


        scope.$on(YT_event.STOP, function () {
          player.seekTo(0);
          player.stopVideo();
        });

        scope.$on(YT_event.PLAY, function () {
          player.playVideo();
        });

        scope.$on(YT_event.PAUSE, function () {
          player.pauseVideo();
        });

      }
    };
  });
