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
});
explorer.on('cancel', function () {
  console.log('File selection cancelled.');
});
explorer.on('error', function(error) {
  console.log('error occurred', error);
});
explorer.choosify(document.getElementById('explorer-test'));
