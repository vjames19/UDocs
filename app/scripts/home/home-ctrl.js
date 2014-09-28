app.controller('HomeCtrl', function($state, Data) {
  this.departments = Data.getDepartments();
  this.search = function() {
    $state.go('home.search', {text: this.searchText});
  }
});
