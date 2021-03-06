
/**
 * SpeakerRecognitionAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ) on 11/04/2017
 */
var BaseModel = require("./BaseModel");
/**
 * Creates an instance of RetrieveAListOfAllRepresentativesResponse
 *
 * @constructor
 */
RetrieveAListOfAllRepresentativesResponse = function (obj) {
    if(!obj) {
        this.id = null;     
        this.name = null;     
        this.createdAt = null;     
        this.gender = null;     
        this.active = null;     
        //Append to variable dictionary
        this._variableDict['createdAt'] = 'created_at';
    } else {
        this.id = (obj.id !== undefined && obj.id !== null)? obj.id : null;
        this.name = (obj.name !== undefined && obj.name !== null)? obj.name : null;
        this.createdAt = (obj.created_at !== undefined && obj.created_at !== null)? obj.created_at : null;
        this.gender = (obj.gender !== undefined && obj.gender !== null)? obj.gender : null;
        this.active = (obj.active !== undefined && obj.active !== null)? obj.active : null;
        //Append to variable dictionary
        this._variableDict['createdAt'] = 'created_at';
    }
};

RetrieveAListOfAllRepresentativesResponse.prototype = new BaseModel();
RetrieveAListOfAllRepresentativesResponse.prototype.constructor = RetrieveAListOfAllRepresentativesResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
RetrieveAListOfAllRepresentativesResponse.prototype.getId = function() {
    return this.id;
};

/**
 * Setter for Id
 * 
 * @param {string} value 
 */
RetrieveAListOfAllRepresentativesResponse.prototype.setId = function(value) {
    this.id = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
RetrieveAListOfAllRepresentativesResponse.prototype.getName = function() {
    return this.name;
};

/**
 * Setter for Name
 * 
 * @param {string} value 
 */
RetrieveAListOfAllRepresentativesResponse.prototype.setName = function(value) {
    this.name = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
RetrieveAListOfAllRepresentativesResponse.prototype.getCreatedAt = function() {
    return this.createdAt;
};

/**
 * Setter for CreatedAt
 * 
 * @param {string} value 
 */
RetrieveAListOfAllRepresentativesResponse.prototype.setCreatedAt = function(value) {
    this.createdAt = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
RetrieveAListOfAllRepresentativesResponse.prototype.getGender = function() {
    return this.gender;
};

/**
 * Setter for Gender
 * 
 * @param {string} value 
 */
RetrieveAListOfAllRepresentativesResponse.prototype.setGender = function(value) {
    this.gender = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {bool}
 */
RetrieveAListOfAllRepresentativesResponse.prototype.getActive = function() {
    return this.active;
};

/**
 * Setter for Active
 * 
 * @param {bool} value 
 */
RetrieveAListOfAllRepresentativesResponse.prototype.setActive = function(value) {
    this.active = value;
};


module.exports = RetrieveAListOfAllRepresentativesResponse;
