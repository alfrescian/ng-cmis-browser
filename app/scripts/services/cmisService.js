'use strict';

angular.module('alfrescianCmisBrowserApp').factory('cmisService', function ($http) {
    var baseUrl = 'http://localhost:8080/alfresco/api/-default-/public/cmis/versions/1.1/browser/',
    callback = 'callback=JSON_CALLBACK';

    return {

        getDocuments: function (path) {
            return $http.jsonp(baseUrl + 'root/' + path + '?cmisselector=children&succinct=true&' + callback);
        }

    };
});