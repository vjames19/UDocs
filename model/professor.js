var _ = require('lodash');

module.exports = function(Parse) {
  var Professor = Parse.Object.extend('Professor', {
  }, {
    createAll: function(professors) {
      return Parse.Promise.when(_.map(professors, Professor.create)).then(function() {
        return _.toArray(arguments);
      })
    },
    create: function(professorBody) {
      var professor = new Professor();
      return professor.save({
        name: professorBody.name
      });
    }
  });

  return Professor;
};