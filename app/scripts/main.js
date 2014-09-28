/*
 *    Welcome to the Kloudless JS File Explorer!
 *
 *    To view the explorer in action click 'Result'!
 */

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
  var fileContainer = document.getElementById('file-info');

  // remove all elements
  while (fileContainer.lastChild) {
    fileContainer.removeChild(fileContainer.lastChild);
  }

  var fileJSON = document.createElement('pre');
  fileJSON.appendChild(document.createTextNode(
      JSON.stringify(files, null, 2)));

  fileContainer.appendChild(fileJSON);
});
explorer.on('cancel', function () {
  console.log('File selection cancelled.');

  var fileContainer = document.getElementById('file-info');

  // remove all elements
  while (fileContainer.lastChild) {
    fileContainer.removeChild(fileContainer.lastChild);
  }

  var result = document.createElement('p');
  result.appendChild(document.createTextNode('File selection cancelled!'));
  fileContainer.appendChild(result);
});
explorer.on('error', function (error) {
  console.log('An error occurred: ', error);

  var fileContainer = document.getElementById('file-info');

  // remove all elements
  while (fileContainer.lastChild) {
    fileContainer.removeChild(fileContainer.lastChild);
  }

  var result = document.createElement('p');
  result.appendChild(document.createTextNode('An error occurred in file selection!'));
  fileContainer.appendChild(result);
});

explorer.on('addAccount', function(account) {
  console.log('Succesfully added account: ', account);

  var fileContainer = document.getElementById('file-info');

  // remove all elements
  while (fileContainer.lastChild) {
    fileContainer.removeChild(fileContainer.lastChild);
  }

  var result = document.createElement('p');
  result.appendChild(document.createTextNode('Account added: ' +
      JSON.stringify(account)));
  fileContainer.appendChild(result);
});

explorer.on('deleteAccount', function(account) {
  console.log('Succesfully deleted account: ', account);

  var fileContainer = document.getElementById('file-info');

  // remove all elements
  while (fileContainer.lastChild) {
    fileContainer.removeChild(fileContainer.lastChild);
  }

  var result = document.createElement('p');
  result.appendChild(document.createTextNode('Deleted account: ' +
      JSON.stringify(account)));
  fileContainer.appendChild(result);
});


explorer.choosify(document.getElementById('explorer-test'));
