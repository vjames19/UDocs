app.service('explorer', function($window) {
  this.get = function(callbacks) {
    var emptyFunc = function() {};
    callbacks.success = callbacks.success ||  emptyFunc;
    callbacks.error = callbacks.error ||  emptyFunc;
    callbacks.cancel = callbacks.cancel ||  emptyFunc;
    var explorer = window.Kloudless.explorer({
      app_id: 'g7IpOr4lT66_m5u8ZEQnHKh7anrMnYapX_rV357nx6X2I36U',
      multiselect: false,
      computer: false,
      link: true,
      direct_link: true,
      services: ['all'],
      types: ['all']
    });

    explorer.on('success', function (files) {
      console.log('Successfully selected files: ', files);
      callbacks.success(files);
    });
    explorer.on('cancel', function () {
      console.log('File selection cancelled.');
      callbacks.cancel();
    });
    explorer.on('error', function(error) {
      console.log('error occurred', error);
      callback.error(error);
    });

    return explorer;
  }
});
