'use strict';

angular.module('alfrescianCmisBrowserApp')
    .controller('MainCtrl', function ($scope, $log, cmisService) {
        $scope.parents = [];

        $scope.breadcrumb = function (index) {
            var selected = $scope.parents[index];
            $scope.parents = $scope.parents.slice(0, index);
            $scope.openFolder(selected.path, selected.name);
        };

        $scope.openFolder = function (path, name) {
            cmisService.getDocuments(path).then(function (response) {
                $scope.nodes = response.data.objects;
                $log.log($scope.nodes);
                $scope.parents.push({
                    path: path,
                    name: name
                });
            });
        };

        $scope.nodes = $scope.openFolder('Sites', 'Sites');

    }).directive('cmisObject', function () {
        return {
            restrict: 'EA',
            scope: {
                properties: '=',
                clickHandler: '&clickHandler'
            },
            link: function (scope, element, attrs) {
                scope.click = function () {
                    scope.clickHandler({
                        path: scope.properties['cmis:path'],
                        name: scope.properties['cmis:name']
                    });
                };
            },
            templateUrl: '/partials/cmisObject.html'
        };
    });