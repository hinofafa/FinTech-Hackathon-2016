
/**
 * SpeakerRecognitionAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ) on 11/04/2017
 */
var BaseModel = require("./BaseModel");
/**
 * Creates an instance of UpdateAClientRequest
 *
 * @constructor
 */
UpdateAClientRequest = function (obj) {
    if(!obj) {
        this.name = null;     
    } else {
        this.name = (obj.name !== undefined && obj.name !== null)? obj.name : null;
    }
};

UpdateAClientRequest.prototype = new BaseModel();
UpdateAClientRequest.prototype.constructor = UpdateAClientRequest;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
UpdateAClientRequest.prototype.getName = function() {
    return this.name;
};

/**
 * Setter for Name
 * 
 * @param {string} value 
 */
UpdateAClientRequest.prototype.setName = function(value) {
    this.name = value;
};


module.exports = UpdateAClientRequest;