'use strict';

describe('Service: cmisService', function () {

    // load the service's module
    beforeEach(module('meetTheExpertsApp'));

    // instantiate service
    var cmisSrv;
    beforeEach(inject(function (cmisService) {
        cmisSrv = cmisService;
    }));

    it('should have an getDocuments function', function () {
        expect(angular.isFunction(cmisSrv.getDocuments)).toBe(true);
    });
    //add more tests here later...
});