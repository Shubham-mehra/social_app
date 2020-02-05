var express = require("express");
var app = express();
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    https: true //Change this to true when testing on a server
}).listen(5000, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }

    console.log('Listening at https://localhost:5000/');
});
app.get("/getSettings/:instanceId",function(req,res){
    var instanceId = req.params.instanceId;
    console.log(instanceId);
    // db.recipeCollection.find({instanceId:instanceId},function(err, docs) {
    //   if (docs == "")
    //   {
    //     var settings =
    //     { 
    //       //Code for Category Option Dropdown(hide/show)-setting Start here
    //           "category":{
    //             "DISP_INGREDIENTS": true,
    //             "DISP_CUISINE": true,
    //             "DISP_COURSE": true,
    //             "DISP_SEASON": true,
    //             "DISP_MEALTIME": true,
    //             "DISP_DIFFICULTY": true
    //           },
    //       //Code for Category Option Dropdown(hide/show)-setting Ends here
  
    //       "disp_RecipePage_SearchBox": true,
    //       "disp_RecipePage_SearchDrop": true,
    //       "disp_RecipePage_SocialShare": true,
    //       "disp_RecipePage_tags": true,
    //       "disp_RecipeDetail_nutrition":true,
    //       "_backgroundColor": "#FFFFFF",
    //       "search_backgroundColor": "#F5F5F5",
    //       "drop_backgroundColor": "#F5F5F5",
    //       "recipePage_font": "Raleway",
    //       "disp_RecipeDetail_SocialShare": true,
    //       "disp_RecipeDetail_Tags": true,
    //       "recipeDetPage_font": "Raleway",
    //       "det_bodyColor": "#FFFFFF",
    //       "appLangCode":"en",
    //       "appLang":"English",
    //       "selectedLayout":"block",
    //       "selectedDropdown":"searchrecipe",
    //       "defaultTab":0,
    //       "det_ingreColor": "#BFBEBE"

    //   }
    //    res.json(settings);
    //   }
    //   else{
    //   var settings = docs[0].settings;
    //   //console.log(recipes);
    //   res.json(settings);
    //   }
    // })

  })