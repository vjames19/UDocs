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
      }).
      state('test', {
        url: '/test',
        templateUrl: '/scripts/test/test.html',
        controller: 'TestCtrl',
        controllerAs: 'ctrl'
      }).
      state('share', {
        url: '/share',
        templateUrl: '/scripts/share/share.html',
        controller: 'ShareCtrl',
        controller: 'ctrl'
      });
}]);
