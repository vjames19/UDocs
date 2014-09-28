var _ = require('lodash');

module.exports = function(Parse) {
  var Course = require('./course')(Parse);
  var Department = Parse.Object.extend('Department', {
  }, {
    createAll: function(departments) {
      return Parse.Promise.when(_.map(departments, Department.create)).then(function() {
        return _.toArray(arguments);
      })
    },
    create: function(department) {
      return Parse.Promise.when(Course.createAll(department.courses)).then(function(courses) {
        var d = new Department();
        return d.save({
          name: department.name,
          courses: courses
        });
      });
    }
  });

  return Department;
};
