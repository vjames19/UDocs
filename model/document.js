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
        filePreview: document.filePreview,
        professor: document.professor,
        course: document.course,
        department: document.department
      });
    },
    search: function(query) {
      var nameSearch = new Parse.Query(Document).
          matches('name', query, 'i');
      var courseSearch = new Parse.Query(Document).
          matches('course', query, 'i');
      var professorSearch = new Parse.Query(Document).
          matches('professor', query, 'i');

      return Parse.Query.or(nameSearch, courseSearch, professorSearch).
          descending('createdAt').
          find();
    }
  });

  return Document;
};
