app.directive('departmentRow', function(Data) {
  return {
    restrict: 'E',
    scope: {
      department: '=',
      limit: '='
    },
    templateUrl: '/scripts/home/department-row.html',
    controller: function($scope) {
      Data.getDocuments($scope.department.objectId).then(function(documents) {
        $scope.documents = documents.data;
      });

      $scope.getThumbnail = function (document) {
        console.log(document);
        return document.filePreview.metadata.results.thumbnails[0].url;
      };
    }
  }
});
