
/**
 * SpeakerRecognitionAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ) on 11/04/2017
 */
var BaseModel = require("./BaseModel");
/**
 * Creates an instance of RetrieveAListOfAllCallsResponse
 *
 * @constructor
 */
RetrieveAListOfAllCallsResponse = function (obj) {
    if(!obj) {
        this.id = null;     
        this.dataLink = null;     
        this.createdAt = null;     
        this.hints = null;     
        this.rep = null;     
        this.client = null;     
        this.status = null;     
        //Append to variable dictionary
        this._variableDict['dataLink'] = 'data_link';
        this._variableDict['createdAt'] = 'created_at';
    } else {
        this.id = (obj.id !== undefined && obj.id !== null)? obj.id : null;
        this.dataLink = (obj.data_link !== undefined && obj.data_link !== null)? obj.data_link : null;
        this.createdAt = (obj.created_at !== undefined && obj.created_at !== null)? obj.created_at : null;
        this.hints = (obj.hints !== undefined && obj.hints !== null)? obj.hints : null;
        this.rep = (obj.rep !== undefined && obj.rep !== null)? obj.rep : null;
        this.client = (obj.client !== undefined && obj.client !== null)? obj.client : null;
        this.status = (obj.status !== undefined && obj.status !== null)? obj.status : null;
        //Append to variable dictionary
        this._variableDict['dataLink'] = 'data_link';
        this._variableDict['createdAt'] = 'created_at';
    }
};

RetrieveAListOfAllCallsResponse.prototype = new BaseModel();
RetrieveAListOfAllCallsResponse.prototype.constructor = RetrieveAListOfAllCallsResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
RetrieveAListOfAllCallsResponse.prototype.getId = function() {
    return this.id;
};

/**
 * Setter for Id
 * 
 * @param {string} value 
 */
RetrieveAListOfAllCallsResponse.prototype.setId = function(value) {
    this.id = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
RetrieveAListOfAllCallsResponse.prototype.getDataLink = function() {
    return this.dataLink;
};

/**
 * Setter for DataLink
 * 
 * @param {string} value 
 */
RetrieveAListOfAllCallsResponse.prototype.setDataLink = function(value) {
    this.dataLink = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
RetrieveAListOfAllCallsResponse.prototype.getCreatedAt = function() {
    return this.createdAt;
};

/**
 * Setter for CreatedAt
 * 
 * @param {string} value 
 */
RetrieveAListOfAllCallsResponse.prototype.setCreatedAt = function(value) {
    this.createdAt = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
RetrieveAListOfAllCallsResponse.prototype.getHints = function() {
    return this.hints;
};

/**
 * Setter for Hints
 * 
 * @param {array} value 
 */
RetrieveAListOfAllCallsResponse.prototype.setHints = function(value) {
    this.hints = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
RetrieveAListOfAllCallsResponse.prototype.getRep = function() {
    return this.rep;
};

/**
 * Setter for Rep
 * 
 * @param {array} value 
 */
RetrieveAListOfAllCallsResponse.prototype.setRep = function(value) {
    this.rep = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
RetrieveAListOfAllCallsResponse.prototype.getClient = function() {
    return this.client;
};

/**
 * Setter for Client
 * 
 * @param {array} value 
 */
RetrieveAListOfAllCallsResponse.prototype.setClient = function(value) {
    this.client = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
RetrieveAListOfAllCallsResponse.prototype.getStatus = function() {
    return this.status;
};

/**
 * Setter for Status
 * 
 * @param {string} value 
 */
RetrieveAListOfAllCallsResponse.prototype.setStatus = function(value) {
    this.status = value;
};


module.exports = RetrieveAListOfAllCallsResponse;