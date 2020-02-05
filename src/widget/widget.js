require('./widget.css');
var app = angular.module('StarterApp', []);

app.controller('WidgetCtrl', ['$scope', '$location','$timeout', '$window', function ($scope, $location,$timeout,$window) {

  // $scope.fVariable = 'https://www.facebook.com';
  // $scope.iVariable = 'http://instagram.com/';
  // $scope.tVariable = 'http://twitter.com/';
  // $scope.sVariable = 'http://spotify.com/';
  // $scope.aVariable = 'http://amazon.com/';
  // $scope.appVariable = 'http://apple.com/';
  // $scope.yVariable = 'http://youtube.com/';
  
  $scope.settingsData={
    "fVariable":'#',
    "iVariable":'#',
    "tVariable":'#',
    "sVariable":'#',
    "aVariable":'#',
    "appVariable":'#',
    "yVariable":'#',
    "disp_facebook_icon":true,
    "disp_instagram_icon":true,
    "disp_twitter_icon":true,
    "disp_spotify_icon":true,
    "disp_amazon_icon":true,
    "disp_apple_icon":true,
    "disp_youtube_icon":true,
  }
  $scope.facebookUrl = function(){

    console.log('clicked');
   $window.open($scope.settingsData.fVariable,"_blank");
    //$window.location.href = $scope.fVariable;
  }
  $scope.instagramUrl = () => {
    $window.open($scope.settingsData.iVariable,"_blank");
  }
  $scope.twitterUrl = () => {
    $window.open($scope.settingsData.tVariable,"_blank");
  }
  $scope.spotifyUrl = () => {
    $window.open($scope.settingsData.sVariable,"_blank");
  }
  $scope.amazonUrl = () => {
    $window.open($scope.settingsData.aVariable,"_blank");
  }
  $scope.appleUrl = () => {
    $window.open($scope.settingsData.appVariable,"_blank");
  }
  $scope.youtubeUrl = () => {
    $window.open($scope.settingsData.yVariable,"_blank");
  }
  Wix.addEventListener(Wix.Events.SETTINGS_UPDATED, onSettingsUpdate);
  function onSettingsUpdate(update) {
    $scope.showBox = true;
    //update = stringify(update);
    $scope.settingsData[update.key] = update.value;
    $scope.$apply();
    console.log('SETTINGS UPDATED')
  }
  
}]);
