require('./css/settings.scss');
var app = angular.module('StarterApp', ['WixControls']);

app.controller('settingCtrl', ['$scope','$http', function($scope,$http) {
  console.log('setup'); 
  $scope.defaultTabIndex = 0;
  $scope.msgIsValid = false;
  $scope.emailIsValid = false;
  $scope.buttonDisabled = true;
  $scope.showFacebookSection =false;
  $scope.settingDesignSection1=true;
  $scope.settingDesignSection2=false;
  $scope.settingDesignSection2youtube=false;
  $scope.settingDesignSection2amazon=false;
  $scope.settingDesignSection2apple=false;
  $scope.settingDesignSection2instagram=false;
  $scope.settingDesignSection2spotify=false;
  $scope.settingDesignSection2twitter=false;
  $scope.settingDesignSection2facebook=false;
  $scope.urlsData={
    "facebookUrl":"https://www.facebook.com/shubham.mehra.5891",
    "instagramUrl":"#",
    "spotifyUrl":"#",
    "appleUrl":"#",
    "amazonUrl":"#",
    "twitter":"#"
  }
  //$scope.facebookSection=
 
  $scope.onUpdate = function (key) { //setup a callback function for components to use when changed
    return function (value) {
      const dataone = {key: key, value: value};
      //var compId=Wix.Utils.getOrigCompId();
      Wix.Settings.triggerSettingsUpdatedEvent(dataone,Wix.Utils.getOrigCompId());
    }
  };
  $scope.instanceId=Wix.Utils.getInstanceId();
  console.log(Wix.Utils.getInstanceId());
  $scope.changeSection1to2=function(value)
  {
    if(value=='facebook'){
      $scope.settingDesignSection1=false;
      $scope.settingDesignSection2facebook=true;
    }
    if(value=='twitter'){
      $scope.settingDesignSection1=false;
      $scope.settingDesignSection2twitter=true;
    }
    if(value=='instagram'){
      $scope.settingDesignSection1=false;
      $scope.settingDesignSection2instagram=true;
    }
    if(value=='spotify'){
      $scope.settingDesignSection1=false;
      $scope.settingDesignSection2spotify=true;
    }
    if(value=='amazon'){
      $scope.settingDesignSection1=false;
      $scope.settingDesignSection2amazon=true;
    }
    if(value=='apple'){
      $scope.settingDesignSection1=false;
      $scope.settingDesignSection2apple=true;
    }
    if(value=='youtube'){
      $scope.settingDesignSection1=false;
      $scope.settingDesignSection2youtube=true;
    }
  }
  $scope.backSection2to1=function()
  {
    
    console.log("backSection2 to 1")
    $scope.settingDesignSection1=true;
    $scope.settingDesignSection2youtube=false;
    $scope.settingDesignSection2amazon=false;
    $scope.settingDesignSection2apple=false;
    $scope.settingDesignSection2instagram=false;
    $scope.settingDesignSection2spotify=false;
    $scope.settingDesignSection2twitter=false;
    $scope.settingDesignSection2facebook=false;

  }
  $scope.setUrl = function (val) {
    if (val.indexOf("facebook") > -1) {
      key="fVariable";
    }
    else if (val.indexOf("instagram") > -1) {
      key="iVariable";
    }
    else if (val.indexOf("apple") > -1) {
      key="appVariable";
    }
    else if (val.indexOf("spotify") > -1) {
      key="sVariable";
    }
    else if (val.indexOf("amazon") > -1) {
      key="aVariable";
    }
    else if (val.indexOf("twitter") > -1) {
      key="tVariable";
    }
    else if (val.indexOf("youtube") > -1) {
      key="yVariable";
    }
    else
    {
      alert('Something Went wrong!!');
    }
    const dataone = {key: key, value: val};
      //var compId=Wix.Utils.getOrigCompId();
    Wix.Settings.triggerSettingsUpdatedEvent(dataone,Wix.Utils.getOrigCompId());
    
  };
$scope.getsettingsdata=function(){
  debugger;
  console.log("am inside getsettings");
  $http.get("/getSettings/"+Wix.Utils.getInstanceId()).then(function(data){
    console.log(data);
  });
}

}]);
