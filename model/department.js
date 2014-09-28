var _ = require('lodash');

module.exports = function(Parse) {
  var Department = Parse.Object.extend('Department', {
  }, {
    createAll: function(departments) {
      return Parse.Promise.when(_.map(departments, Department.create)).then(function() {
        return _.toArray(arguments);
      })
    },
    create: function(department) {
      var d = new Department();
      return d.save({
        name: department.name
      });
    }
  });

  return Department;
};