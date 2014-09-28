app.service('Data', function($http) {
  this.createDocument = function(documents) {
    var document = documents[0];
    return $http.post('/documents', document);
  };
});
