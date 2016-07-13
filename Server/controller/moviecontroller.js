
var restful = require('node-restful');

module.exports = function(app,route)
{

  //Setting up Controller for REST
  var rest = restful.model(
              'movie',
              app.models.movie
   ).methods(['get','put','post','delete']);

   //Register this endpoint with the app
   rest.register(app,route);

   //Return Middleware
   return function(req,res,next)
   {
       next();
   };
};
