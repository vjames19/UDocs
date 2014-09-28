app.controller('TestCtrl', function(Data) {
  this.callbacks = {
    success: function(files) {
      console.log('the success callback', files);
      Data.createDocument(files).then(function(response) {
        console.log('promise', response);
      });
    }
  };
});
