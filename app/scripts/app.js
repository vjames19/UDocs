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
      state('home.search', {
        url: '/search/:text',
        templateUrl: '/scripts/home/home.search.html',
        controller: function($stateParams, Data) {
          console.log($stateParams);
          var self = this;
          Data.searchDocuments($stateParams.text).then(function(documents) {
            self.documents = documents.data;
          });

          this.getThumbnail = function (document) {
            console.log(document);
            return document.filePreview.metadata.results.thumbnails[0].url;
          };
        },
        controllerAs: 'search'
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
