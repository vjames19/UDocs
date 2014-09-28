var _ = require('lodash');

module.exports = function(Parse) {
  var Document = Parse.Object.extend('Document', {
  }, {
    create: function(document) {
      var d = new Document();
      return d.save({
        name: document.name,
        kloudAccount: document.account,
        kloudId: document.id,
        kloudLink: document.link,
        mimetype: document.filePreview.mimetype,
        filePreview: document.filePreview
      });
    }
  });

  return Document;
};
