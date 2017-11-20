
/**
 * SpeakerRecognitionAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ) on 11/04/2017
 */
var BaseModel = require("./BaseModel");
/**
 * Creates an instance of CreateAnOrganizationRequest
 *
 * @constructor
 */
CreateAnOrganizationRequest = function (obj) {
    if(!obj) {
        this.id = null;     
        this.name = null;     
    } else {
        this.id = (obj.id !== undefined && obj.id !== null)? obj.id : null;
        this.name = (obj.name !== undefined && obj.name !== null)? obj.name : null;
    }
};

CreateAnOrganizationRequest.prototype = new BaseModel();
CreateAnOrganizationRequest.prototype.constructor = CreateAnOrganizationRequest;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
CreateAnOrganizationRequest.prototype.getId = function() {
    return this.id;
};

/**
 * Setter for Id
 * 
 * @param {string} value 
 */
CreateAnOrganizationRequest.prototype.setId = function(value) {
    this.id = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
CreateAnOrganizationRequest.prototype.getName = function() {
    return this.name;
};

/**
 * Setter for Name
 * 
 * @param {string} value 
 */
CreateAnOrganizationRequest.prototype.setName = function(value) {
    this.name = value;
};


module.exports = CreateAnOrganizationRequest;
