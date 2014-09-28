module.exports = function(Parse) {
  var Department = require('./department')(Parse);
  var University = Parse.Object.extend('University',{
    // Instance methods
  },{
    create: function(university) {
      return Parse.Promise.when(Department.createAll(university.departments)).then(function(departments) {
        var u = new University();
        return u.save({
          name: university.name,
          state: university.state,
          departments: departments
        });
      });
    }
  });

  return University;
};
