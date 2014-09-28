var _ = require('lodash');

module.exports = function(Parse) {
  var Professor = require('./professor')(Parse);
  var Course = Parse.Object.extend('Course', {
    asJson: function() {
      return {
        name: this.get('name'),
        professors: this.get('professors')
      };
    }
  }, {
    createAll: function(courses) {
      return Parse.Promise.when(_.map(courses, Course.create)).then(function() {
        return _.toArray(arguments);
      });
    },
    create: function(courseBody) {
      return Parse.Promise.when(Professor.createAll(courseBody.professors)).then(function(professors) {
        var course = new Course();
        return course.save({
          name: courseBody.name,
          professors: professors
        });
      });
    }
  });

  return Course;
};
