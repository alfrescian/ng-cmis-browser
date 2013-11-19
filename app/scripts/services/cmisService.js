'use strict';

angular.module('alfrescianCmisBrowserApp').factory('cmisService', function ($http) {
    //var baseUrl = 'http://localhost:8080/alfresco/api/-default-/public/cmis/versions/1.1/browser/',
	var baseUrl = 'http://cmis.alfresco.com/cmisbrowser/bb212ecb-122d-47ea-b5c1-128affb9cd8f/',
    callback = 'callback=JSON_CALLBACK';

    return {

        getChildren: function (path) {
            return $http.jsonp(baseUrl + 'root/' + path + '?cmisselector=children&succinct=true&' + callback);
        },
        
        getBaseUrl : function(){
            return baseUrl;
        }

    };
});