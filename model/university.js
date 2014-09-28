module.exports = function(Parse) {
  var Department = require('./department')(Parse);
  var University = Parse.Object.extend('University',{
    // Instance methods
    asJson: function() {
      return {
        name: this.get('name'),
        state: this.get('state'),
        departments: this.get('departments')
      };
    }
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
    },

    get: function(id) {
      return new Parse.Query(University).
          include('departments').
          include('departments.courses').
          get(id);
    }
  });

  return University;
};
