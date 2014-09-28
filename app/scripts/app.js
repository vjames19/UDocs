var app = angular.module('udocs', [
  'ui.router',
  'angular-loading-bar'
]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home/overview');

  $stateProvider.
      state('home', {
        url: '/home',
        abstract: true,
        templateUrl: '/scripts/home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'ctrl'
      }).
      state('home.overview', {
        url: '/overview',
        templateUrl: '/scripts/home/home.overview.html'
      }).
      state('home.list', {
        url: '/list/:objectId/:name',
        templateUrl: '/scripts/home/home.list.html',
        controller: function($stateParams) {

          console.log('state', $stateParams);
          this.selectedDepartment = {
            name: $stateParams.name,
            objectId: $stateParams.objectId
          }
        },
        controllerAs: 'other'
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
        controllerAs: 'ctrl'
      });
}]);
