/*
 * SpeakerRecognitionAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */
var assert = require('chai').assert;
var TestHelper = require('../TestHelper');
var APIHelper = require('../../lib/APIHelper');
var testerlib = require('../../lib');
var testConfiguration = require('../TestBootstrap');

var controller = testerlib.OrganizationsController;
 
var List all Organizations Response = testerlib.List all Organizations Response;
var Create an Organization request = testerlib.Create an Organization request;

describe('OrganizationsController Tests', function() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Organizations have the following attributes:
- **id**
- **name**
- **created_at**
     */ 
    it('should testListAllOrganizations1 response', function(done) {
        
        controller.listAllOrganizations(function(error, response, context) {
            // Test response code
            assert.equal(200, context.response.statusCode);
            // Test headers
            var headers = [];
            headers["Authorization"] = null ;
            headers["Content-Type"] = null ;
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            assert.isNotNull(response);
            assert.equal("[{  \"id\": \"550e8400-e29b-41d4-a716-446655440000\", \"name\": \"Organization #1\", \"created_at\": \"2013-10-30T19:20:30-05:00\"}, {  \"id\": \"550e8400-e29b-41d4-a716-446655440001\", \"name\": \"Organization #2\", \"created_at\": \"2013-10-30T19:20:30-05:00\"}]", context.response.body);
            done();
        });
    });

});
