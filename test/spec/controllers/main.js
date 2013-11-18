'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('meetTheExpertsApp'));

    var MainCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should parents be initialized empty scope', function () {
        expect(scope.parents.length).toBe(0);
    });

    //add more tests here later...
});