app.controller('ShareCtrl', function(Data, $state) {
  var file = [];
  this.departments = Data.getDepartments();
  this.disableSubmit = true;
  this.callbacks = {
    success: function(files) {
      file = files[0];

    },
    cancel: function() {
      file = null;
    },
    error: function() {
      file = null;
    }
  };

  this.submitForm = function() {
    var document = file;
    document.department = this.department;
    document.course = this.course;
    document.professor = this.professor;
    Data.createDocument(document).then(function(response) {
      console.log('created the document', response);
      $state.go('home.overview');
    }, function(err) {
      alert(err);
    });
  };
});
