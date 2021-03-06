
/**
 * SpeakerRecognitionAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ) on 11/04/2017
 */
var BaseModel = require("./BaseModel");
/**
 * Creates an instance of UpdateAnExistingCallRecordAndTriggerRecognitionAlgorithmExecutionRequest
 *
 * @constructor
 */
UpdateAnExistingCallRecordAndTriggerRecognitionAlgorithmExecutionRequest = function (obj) {
    if(!obj) {
        this.id = null;     
        this.dataLink = null;     
        this.hints = null;     
        //Append to variable dictionary
        this._variableDict['dataLink'] = 'data_link';
    } else {
        this.id = (obj.id !== undefined && obj.id !== null)? obj.id : null;
        this.dataLink = (obj.data_link !== undefined && obj.data_link !== null)? obj.data_link : null;
        this.hints = (obj.hints !== undefined && obj.hints !== null)? obj.hints : null;
        //Append to variable dictionary
        this._variableDict['dataLink'] = 'data_link';
    }
};

UpdateAnExistingCallRecordAndTriggerRecognitionAlgorithmExecutionRequest.prototype = new BaseModel();
UpdateAnExistingCallRecordAndTriggerRecognitionAlgorithmExecutionRequest.prototype.constructor = UpdateAnExistingCallRecordAndTriggerRecognitionAlgorithmExecutionRequest;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
UpdateAnExistingCallRecordAndTriggerRecognitionAlgorithmExecutionRequest.prototype.getId = function() {
    return this.id;
};

/**
 * Setter for Id
 * 
 * @param {string} value 
 */
UpdateAnExistingCallRecordAndTriggerRecognitionAlgorithmExecutionRequest.prototype.setId = function(value) {
    this.id = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
UpdateAnExistingCallRecordAndTriggerRecognitionAlgorithmExecutionRequest.prototype.getDataLink = function() {
    return this.dataLink;
};

/**
 * Setter for DataLink
 * 
 * @param {string} value 
 */
UpdateAnExistingCallRecordAndTriggerRecognitionAlgorithmExecutionRequest.prototype.setDataLink = function(value) {
    this.dataLink = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
UpdateAnExistingCallRecordAndTriggerRecognitionAlgorithmExecutionRequest.prototype.getHints = function() {
    return this.hints;
};

/**
 * Setter for Hints
 * 
 * @param {array} value 
 */
UpdateAnExistingCallRecordAndTriggerRecognitionAlgorithmExecutionRequest.prototype.setHints = function(value) {
    this.hints = value;
};


module.exports = UpdateAnExistingCallRecordAndTriggerRecognitionAlgorithmExecutionRequest;
