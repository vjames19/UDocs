app.controller('HomeCtrl', function(Data) {
  this.departments = Data.getDepartments();
  this.search = function() {
    console.log('searching', this.searchText);
  }
});
