var _ = require('lodash');

module.exports = function(Parse) {
  var Department = Parse.Object.extend('Department', {
    asJson: function() {
      return {
        name: this.get('name')
      };
    }
  }, {
    getAll: function() {
      return new Parse.Query(Department).ascending('name').find();
    },
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
    },
    pointer: function(id) {
      var department = new Department();
      department.id = id;
      return department;
    }
  });

  return Department;
};
