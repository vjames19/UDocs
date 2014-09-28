var _ = require('lodash');

module.exports = function(Parse) {
  var Department = require('./department')(Parse);
  var Document = Parse.Object.extend('Document', {
    asJson: function() {
      return {
        name: this.get('name'),
        kloudAccount: this.get('kloudAccount'),
        kloudId: this.get('kloudId'),
        kloudLink: this.get('kloudLink'),
        mimetype: this.get('mimetype'),
        filePreview: this.get('filePreview'),
        professor: this.get('professor'),
        course: this.get('course'),
        department: this.get('department')
      }
    }
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
        department: Department.pointer(document.department.objectId)
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
