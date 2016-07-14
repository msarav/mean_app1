'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MoviesCtrl', function ($scope, Movie) {

    // From Movie object - i,e from API
    $scope.movies= Movie.getList().$object;

    //  Static data
    // $scope.movies= [
    //   {
    //     title: 'A New Hope',
    //     url: 'http://youtube.com/embed/lg3_CFmnU7K'
    //   },
    //
    //   {
    //     title: 'The Empire Strikes Back',
    //     url: 'http://youtube.com/embed/96v4XraJEPI'
    //   },
    //
    //   {
    //     title:'Return of the Jedi',
    //     url: 'http://youtube.com/embed/96v4XraJEPI'
    //   }
    //
    // ];
  });
