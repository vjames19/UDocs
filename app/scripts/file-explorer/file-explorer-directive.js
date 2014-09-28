app.directive('fileExplorer', function(explorer) {
  return {
    restrict: 'E',
    scope: {
      callbacks: '='
    },
    template: '<button class="file-explorer-button">Choose one</button>',
    link: function(scope, element) {
      var fileExplorer = explorer.get(scope.callbacks);
      fileExplorer.choosify(element.children()[0]);
    }
  }
});
