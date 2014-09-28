var app = angular.module('udocs', [
  'ui.router'
]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('home');

  $stateProvider.
      state('home', {
        url: '/home',
        templateUrl: '/scripts/home/home.html',
        controller: 'HomeCtrl'
      });
}]);
