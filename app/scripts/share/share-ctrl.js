app.controller('ShareCtrl', function(Data) {
	this.disableSubmit = true;
	this.callbacks = {
    success: function(files) {
      console.log('the success callback', files);
      this.disableSubmit = false;
      Data.createDocument(files).then(function(response) {
        console.log('promise', response);
        this.disableSubmit = true;
      });
    }
  };
	this.submitForm = function() {
		var departmentName = this.department;
		var courseName = this.course;
		var professorName = this.professor;

	}
});
