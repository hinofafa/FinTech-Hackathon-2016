
/**
 * SpeakerRecognitionAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ) on 11/04/2017
 */
var BaseModel = require("./BaseModel");
/**
 * Creates an instance of ListAllOrganizationsResponse
 *
 * @constructor
 */
ListAllOrganizationsResponse = function (obj) {
    if(!obj) {
        this.id = null;     
        this.name = null;     
        this.createdAt = null;     
        //Append to variable dictionary
        this._variableDict['createdAt'] = 'created_at';
    } else {
        this.id = (obj.id !== undefined && obj.id !== null)? obj.id : null;
        this.name = (obj.name !== undefined && obj.name !== null)? obj.name : null;
        this.createdAt = (obj.created_at !== undefined && obj.created_at !== null)? obj.created_at : null;
        //Append to variable dictionary
        this._variableDict['createdAt'] = 'created_at';
    }
};

ListAllOrganizationsResponse.prototype = new BaseModel();
ListAllOrganizationsResponse.prototype.constructor = ListAllOrganizationsResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
ListAllOrganizationsResponse.prototype.getId = function() {
    return this.id;
};

/**
 * Setter for Id
 * 
 * @param {string} value 
 */
ListAllOrganizationsResponse.prototype.setId = function(value) {
    this.id = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
ListAllOrganizationsResponse.prototype.getName = function() {
    return this.name;
};

/**
 * Setter for Name
 * 
 * @param {string} value 
 */
ListAllOrganizationsResponse.prototype.setName = function(value) {
    this.name = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
ListAllOrganizationsResponse.prototype.getCreatedAt = function() {
    return this.createdAt;
};

/**
 * Setter for CreatedAt
 * 
 * @param {string} value 
 */
ListAllOrganizationsResponse.prototype.setCreatedAt = function(value) {
    this.createdAt = value;
};


module.exports = ListAllOrganizationsResponse;
