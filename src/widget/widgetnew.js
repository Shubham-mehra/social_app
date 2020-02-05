require('./widget.css');
var app = angular.module('StarterApp', []);

app.controller('WidgetCtrl', ['$scope', '$document','$window', function($scope,$location,$window) {
  // $scope.facebookUrl=function(){
  //   //expect($location.absUrl()).toBe('http://www.facebook.com');
  //   //console.log("facebook");
  // }
  $scope.fVariable= 'http://www.facebook.com';
  $scope.iVariable= 'http://instagram.com/';
  $scope.tVariable= 'http://twitter.com/';
  $scope.sVariable= 'http://spotify.com/';
  $scope.aVariable= 'http://amazon.com/';
  $scope.appVariable= 'http://apple.com/';
  $scope.yVariable= 'http://youtube.com/';

  $scope.facebookUrl = () => {
    
    $window.location.href = $scope.fVariable;
  }
  $scope.instagramUrl = () => {
    $window.location.href = $scope.iVariable;
  }
  $scope.twitterUrl = () => {
    $window.location.href = $scope.tVariable;
  }
  $scope.spotifyUrl = () => {
    $window.location.href = $scope.sVariable;
  }
  $scope.amazonUrl = () => {
    $window.location.href = $scope.aVariable;
  }
  $scope.appleUrl = () => {
    $window.location.href = $scope.appVariable;
  }
  $scope.youtubeUrl = () => {
    $window.location.href = $scope.yVariable;
  }
  $scope.settingsData={
    "disp_facebook_icon": true,
    "disp_instagram_icon": true,
    "disp_twitter_icon": true,
    "disp_spotify_icon": true,
    "disp_amazon_icon": true,
    "disp_apple_icon": true,
    "disp_youtube_icon": true
  }

  Wix.addEventListener(Wix.Events.SETTINGS_UPDATED, function(e) {
   if (e.key == "disp_facebook_icon"
        ||e.key == "disp_instagram_icon"
        ||e.key == "disp_twitter_icon"
        ||e.key == "disp_amazon_icon"
        ||e.key == "disp_apple_icon"
        ||e.key == "disp_spotify_icon"
        ||e.key == "disp_youtube_icon"
      )
    {
      $timeout(function(){
        $scope.settingsData[e.key] = e.value;
      },0)
    }   
})


  // $(document).ready(function() {
  //   Wix.addEventListener(Wix.Events.STYLE_PARAMS_CHANGE, function(event) {
  //       console.log("Edit mode changed to " + event.editMode);
  //   });
  //   Wix.addEventListener(Wix.Events.SETTINGS_UPDATED, function(event) {
  //     console.log("Edit mode changed to " + event.editMode);
  //   })
  // });
  // // Wix.addEventListener(Wix.Events.SETTINGS_UPDATED, onSettingsUpdate);
  // // // You can get the style params programmatically, un-comment the following snippet to see how it works:
  // // /*Wix.Styles.getStyleParams(style => {
  // // console.log(style);
  // // });*/

  // // // You can also get the style every time it changes, try this:
  // // /*Wix.addEventListener(Wix.Events.STYLE_PARAMS_CHANGE, style => {
  // // console.log(style);
  // // });*/
  // $scope.navToHome = () => {
  //   Wix.getSiteMap(pages => {
  //     Wix.navigateToPage(pages[0].pageId.substring(1));
  //   });
  // }

  // $scope.showBox = false;
  // $scope.display = true;
  

  // function onSettingsUpdate(update) {
  //   $scope.display=update.__displaybody;
  //   $scope.showBox = true;
  //   update = stringify(update);
  //   $scope.settingsUpdate = update;
  //   $scope.$apply();
  //   console.log('SETTINGS UPDATED')
  //   updateCompHeight();
  //   console.log(update);
  // }
  // function updateCompHeight(height) {
  //   const desiredHeight = height || $document[0].documentElement.scrollHeight;
  //   Wix.setHeight(desiredHeight);
  // }
  // function stringify(input) {
  //   try {
  //     return JSON.stringify(input, null, 4);
  //   } catch (err) {
  //     return input;
  //   }
  // }
}]);
