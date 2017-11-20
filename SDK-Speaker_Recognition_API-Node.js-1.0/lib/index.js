/**
  * @module SpeakerRecognitionAPILib
  *  
  * TODO: Add a description
  */

var Configuration = require('./Configuration');;
var AuthorizationController = require('./Controllers/AuthorizationController');
var OrganizationsController = require('./Controllers/OrganizationsController');
var RepresentativesController = require('./Controllers/RepresentativesController');
var ClientsController = require('./Controllers/ClientsController');
var ModelsController = require('./Controllers/ModelsController');
var CallsController = require('./Controllers/CallsController');
var GetAPIVersionAndTestAuthenticationResponse = require('./Models/GetAPIVersionAndTestAuthenticationResponse');
var ListAllOrganizationsResponse = require('./Models/ListAllOrganizationsResponse');
var CreateAnOrganizationRequest = require('./Models/CreateAnOrganizationRequest');
var RetrieveAListOfAllRepresentativesResponse = require('./Models/RetrieveAListOfAllRepresentativesResponse');
var GetARepresentativeResponse = require('./Models/GetARepresentativeResponse');
var CreateARepresentativeRequest = require('./Models/CreateARepresentativeRequest');
var CreateARepresentativeResponse = require('./Models/CreateARepresentativeResponse');
var RetrieveAListOfAllClientsResponse = require('./Models/RetrieveAListOfAllClientsResponse');
var GetAClientResponse = require('./Models/GetAClientResponse');
var UpdateAClientRequest = require('./Models/UpdateAClientRequest');
var UpdateAClientResponse = require('./Models/UpdateAClientResponse');
var RetrieveAListOfAllModelsResponse = require('./Models/RetrieveAListOfAllModelsResponse');
var RetrieveAModelResponse = require('./Models/RetrieveAModelResponse');
var RetrieveAListOfAllCallsResponse = require('./Models/RetrieveAListOfAllCallsResponse');
var RetrieveACallResponse = require('./Models/RetrieveACallResponse');
var CreateANewCallRecordAndTriggerRecognitionAlgorithmExecutionRequest = require('./Models/CreateANewCallRecordAndTriggerRecognitionAlgorithmExecutionRequest');
var CreateANewCallRecordAndTriggerRecognitionAlgorithmExecutionResponse = require('./Models/CreateANewCallRecordAndTriggerRecognitionAlgorithmExecutionResponse');
var UpdateAnExistingCallRecordAndTriggerRecognitionAlgorithmExecutionRequest = require('./Models/UpdateAnExistingCallRecordAndTriggerRecognitionAlgorithmExecutionRequest');
var UpdateAnExistingCallRecordAndTriggerRecognitionAlgorithmExecutionResponse = require('./Models/UpdateAnExistingCallRecordAndTriggerRecognitionAlgorithmExecutionResponse');


function initializer () { }

//Main functional components of SpeakerRecognitionAPILib
initializer.Configuration = Configuration;
initializer.AuthorizationController = AuthorizationController;
initializer.OrganizationsController = OrganizationsController;
initializer.RepresentativesController = RepresentativesController;
initializer.ClientsController = ClientsController;
initializer.ModelsController = ModelsController;
initializer.CallsController = CallsController;

//Main Models of SpeakerRecognitionAPILib
initializer.GetAPIVersionAndTestAuthenticationResponse = GetAPIVersionAndTestAuthenticationResponse;
initializer.ListAllOrganizationsResponse = ListAllOrganizationsResponse;
initializer.CreateAnOrganizationRequest = CreateAnOrganizationRequest;
initializer.RetrieveAListOfAllRepresentativesResponse = RetrieveAListOfAllRepresentativesResponse;
initializer.GetARepresentativeResponse = GetARepresentativeResponse;
initializer.CreateARepresentativeRequest = CreateARepresentativeRequest;
initializer.CreateARepresentativeResponse = CreateARepresentativeResponse;
initializer.RetrieveAListOfAllClientsResponse = RetrieveAListOfAllClientsResponse;
initializer.GetAClientResponse = GetAClientResponse;
initializer.UpdateAClientRequest = UpdateAClientRequest;
initializer.UpdateAClientResponse = UpdateAClientResponse;
initializer.RetrieveAListOfAllModelsResponse = RetrieveAListOfAllModelsResponse;
initializer.RetrieveAModelResponse = RetrieveAModelResponse;
initializer.RetrieveAListOfAllCallsResponse = RetrieveAListOfAllCallsResponse;
initializer.RetrieveACallResponse = RetrieveACallResponse;
initializer.CreateANewCallRecordAndTriggerRecognitionAlgorithmExecutionRequest = CreateANewCallRecordAndTriggerRecognitionAlgorithmExecutionRequest;
initializer.CreateANewCallRecordAndTriggerRecognitionAlgorithmExecutionResponse = CreateANewCallRecordAndTriggerRecognitionAlgorithmExecutionResponse;
initializer.UpdateAnExistingCallRecordAndTriggerRecognitionAlgorithmExecutionRequest = UpdateAnExistingCallRecordAndTriggerRecognitionAlgorithmExecutionRequest;
initializer.UpdateAnExistingCallRecordAndTriggerRecognitionAlgorithmExecutionResponse = UpdateAnExistingCallRecordAndTriggerRecognitionAlgorithmExecutionResponse;

module.exports = initializer;
