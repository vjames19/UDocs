var _ = require('lodash');

module.exports = function(Parse) {
  var Course = require('./course');
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
    },
    search: function(query) {
      var nameSearch = new Parse.Query(Document).
          matches('name', query, 'i');

      var courseSearch = new Parse.Query(Course).
          matches('name', query, 'i');
      var searchByCourse = new Parse.Query(Course).
          matchesKeyInQuery('course', 'objectId', courseSearch);

      return Parse.Query.or(nameSearch, searchByCourse);
    }
  });

  return Document;
};
