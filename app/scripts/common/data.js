app.service('Data', function($http) {
  this.createDocument = function(document) {
    return $http.post('/api/documents', document);
  };

  this.getDepartments = function() {
//    return $http.get('/api/departments', {
//      cache: true
//    });

    return [
      {
        "name": "Industrial Engineering",
        "objectId": "MPA2HaC86N",
        "createdAt": "2014-09-28T14:06:05.886Z",
        "updatedAt": "2014-09-28T14:06:05.886Z"
      },
      {
        "name": "Chemistry",
        "objectId": "C73yUnW0uJ",
        "createdAt": "2014-09-28T14:05:50.136Z",
        "updatedAt": "2014-09-28T14:05:50.136Z"
      },
      {
        "name": "Computer Engineering",
        "objectId": "Cl0OktUBsv",
        "createdAt": "2014-09-28T14:05:41.063Z",
        "updatedAt": "2014-09-28T14:05:41.063Z"
      },
      {
        "name": "Computer Science",
        "objectId": "ae5uIRtSwR",
        "createdAt": "2014-09-28T14:05:29.736Z",
        "updatedAt": "2014-09-28T14:05:29.736Z"
      },
      {
        "name": "Electrical Engineering",
        "objectId": "QRTmVNiWyi",
        "createdAt": "2014-09-28T14:05:31.802Z",
        "updatedAt": "2014-09-28T14:05:31.802Z"
      },
      {
        "name": "Humanities",
        "objectId": "B2KNJxDl9h",
        "createdAt": "2014-09-28T14:05:55.881Z",
        "updatedAt": "2014-09-28T14:05:55.881Z"
      },
      {
        "name": "Math",
        "objectId": "NEuj30Xhb1",
        "createdAt": "2014-09-28T14:05:00.380Z",
        "updatedAt": "2014-09-28T14:05:18.864Z"
      },
      {
        "name": "Physics",
        "objectId": "jkVnzs0eQn",
        "createdAt": "2014-09-28T14:05:46.048Z",
        "updatedAt": "2014-09-28T14:05:46.048Z"
      }
    ];
  };

  this.getDocuments = function(departmentId) {
    return $http.get('/api/documents', {
      params: {
        departmentId: departmentId
      }
    });
  };

  this.searchDocuments = function(query) {
    return $http.get('/api/search/documents', {
      cache: true,
      params: {
        q: query
      }
    });
  };
});
