var axios = require('axios');
var fs = require('fs');

var oracleepmcloud = exports;

module.exports = {

  oracleBaseURL: "",
  oracleUserName: "",
  oraclePW: "",
  oracleAppName: "",
  oracleAPIVersion: "",
  oracleMigrationAPIVersion: "",

  /* EPBCS GET requests */

  // GET REST API Versions for planning
  getRESTAPIVersion: async function(){
    let apiCall = await axios.get('/HyperionPlanning/rest/',{
      baseURL: module.exports.oracleBaseURL,
      auth: {
        username: module.exports.oracleUserName,
        password: module.exports.oraclePW
      },
    });
    //let applicationName = apiCall.data.items[0].name;
    return apiCall;
  },

  // GET Information about a Specific REST API Version for planning
  getVersionInfo: async function(version){

    console.log("Version variable: " + version);

    let apiCall = await axios.get('/HyperionPlanning/rest/' + version,{
      baseURL: module.exports.oracleBaseURL,
      auth: {
        username: module.exports.oracleUserName,
        password: module.exports.oraclePW
      },
    });
    //let applicationName = apiCall.data.items[0].name;
    return apiCall;
  },

  // GET Job Definitions
  getJobDefinitions: async function(jobTypes){

    console.log("Job Types parameter: " + jobTypes);

    if (jobTypes) {
      var requestURL = '/HyperionPlanning/rest/' + module.exports.oracleAPIVersion + '/applications/' + module.exports.oracleAppName + '/jobdefinitions?q={"jobType":"' + jobTypes + '"}';
    } else {
      var requestURL = '/HyperionPlanning/rest/' + module.exports.oracleAPIVersion + '/applications/' + module.exports.oracleAppName + '/jobdefinitions';
    };

    console.log(requestURL);

    let apiCall = await axios.get(requestURL,{
      baseURL: module.exports.oracleBaseURL,
      auth: {
        username: module.exports.oracleUserName,
        password: module.exports.oraclePW
      },
    });
    //let applicationName = apiCall.data.items[0].name;
    return apiCall;
  },

  // Retrieve Job status
  getJobStatus: async function(jobID){

    console.log("Job ID: " + jobID);

    var requestURL = '/HyperionPlanning/rest/' + module.exports.oracleAPIVersion + '/applications/' + module.exports.oracleAppName + '/jobs/' + jobID;

    console.log(requestURL);

    let apiCall = await axios.get(requestURL,{
      baseURL: module.exports.oracleBaseURL,
      auth: {
        username: module.exports.oracleUserName,
        password: module.exports.oraclePW
      },
    });
    //let applicationName = apiCall.data.items[0].name;
    return apiCall;
  },

  // Retrieve Job Status Details
  getJobStatusDetails: async function(jobID){

    console.log("Job ID: " + jobID);

    var requestURL = '/HyperionPlanning/rest/' + module.exports.oracleAPIVersion + '/applications/' + module.exports.oracleAppName + '/jobs/' + jobID + '/details';

    console.log(requestURL);

    let apiCall = await axios.get(requestURL,{
      baseURL: module.exports.oracleBaseURL,
      auth: {
        username: module.exports.oracleUserName,
        password: module.exports.oraclePW
      },
    });
    //let applicationName = apiCall.data.items[0].name;
    return apiCall;
  },

  // Retrieve Child Job Status Details
  getChildJobStatusDetails: async function(jobID,childJobID){

    console.log("Job ID: " + jobID);
    console.log("Child Job ID: " + childJobID)

    var requestURL = '/HyperionPlanning/rest/' + module.exports.oracleAPIVersion + '/applications/' + module.exports.oracleAppName + '/jobs/' + jobID + '/childjobs/' + childJobID + '/details';

    console.log(requestURL);

    let apiCall = await axios.get(requestURL,{
      baseURL: module.exports.oracleBaseURL,
      auth: {
        username: module.exports.oracleUserName,
        password: module.exports.oraclePW
      },
    });
    //let applicationName = apiCall.data.items[0].name;
    return apiCall;
  },

  // Get Member
  getMember: async function(dimension,member){

    console.log("Dimension: " + dimension);
    console.log("Member: " + member);

    var requestURL = '/HyperionPlanning/rest/' + module.exports.oracleAPIVersion + '/applications/' + module.exports.oracleAppName + '/dimensions/' + dimension + '/members/' + member;

    console.log(requestURL);

    let apiCall = await axios.get(requestURL,{
      baseURL: module.exports.oracleBaseURL,
      auth: {
        username: module.exports.oracleUserName,
        password: module.exports.oraclePW
      },
    });
    //let applicationName = apiCall.data.items[0].name;
    return apiCall;
  },

  // GET Application Name
  getApplicationName: async function(){

      var requestURL = '/HyperionPlanning/rest/' + module.exports.oracleAPIVersion + '/applications/';
      console.log(requestURL);

    let apiCall = await axios.get(requestURL,{
      baseURL: module.exports.oracleBaseURL,
      auth: {
        username: module.exports.oracleUserName,
        password: module.exports.oraclePW
      },
    });
    let applicationName = apiCall.data.items[0].name;
    return applicationName;
  },

  // COMING SOON - Get Planning Unit History and Annotations

  // COMING SOON -  Get a Planning Unit Owner Photo

  // COMING SOON -  Get Planning Unit Promotional Path

  // COMING SOON - Get Available Planning Unit Actions

  // COMING SOON - Get Filters with All Possible Values

  // Get User Preferences
  getUserPreferences: async function(){

      var requestURL = '/HyperionPlanning/rest/' + module.exports.oracleAPIVersion + '/applications/' + module.exports.oracleAppName + '/userpreferences';
      console.log(requestURL);

    let apiCall = await axios.get(requestURL,{
      baseURL: module.exports.oracleBaseURL,
      auth: {
        username: module.exports.oracleUserName,
        password: module.exports.oraclePW
      },
    });
    return apiCall;
  },

  // Get All Substitution Variables Defined for the Application
  getAllSubstitutionVariables: async function(){

      var requestURL = '/HyperionPlanning/rest/' + module.exports.oracleAPIVersion + '/applications/' + module.exports.oracleAppName + '/substitutionvariables';
      console.log(requestURL);

    let apiCall = await axios.get(requestURL,{
      baseURL: module.exports.oracleBaseURL,
      auth: {
        username: module.exports.oracleUserName,
        password: module.exports.oraclePW
      },
    });
    return apiCall;
  },

  // Get a Single Substitution Variable Defined for the Application
  getSubstitutionVariable: async function(subvar){

      var requestURL = '/HyperionPlanning/rest/' + module.exports.oracleAPIVersion + '/applications/' + module.exports.oracleAppName + '/substitutionvariables/' + subvar;
      console.log(requestURL);

    let apiCall = await axios.get(requestURL,{
      baseURL: module.exports.oracleBaseURL,
      auth: {
        username: module.exports.oracleUserName,
        password: module.exports.oraclePW
      },
    });
    return apiCall;
  },

  // Get Substitution Variables Defined at the Plan Type Level
  getPlanTypeSubstitutionVariables: async function(plantype){

      var requestURL = '/HyperionPlanning/rest/' + module.exports.oracleAPIVersion + '/applications/' + module.exports.oracleAppName + '/plantypes/' + plantype + '/substitutionvariables';
      console.log(requestURL);

    let apiCall = await axios.get(requestURL,{
      baseURL: module.exports.oracleBaseURL,
      auth: {
        username: module.exports.oracleUserName,
        password: module.exports.oraclePW
      },
    });
    return apiCall;
  },

  // Get Derived Substituion Variables at the Plan Type Level
  getDerivedSubstitutionVariables: async function(plantype){

      var requestURL = '/HyperionPlanning/rest/' + module.exports.oracleAPIVersion + '/applications/' + module.exports.oracleAppName + '/plantypes/' + plantype + '/substitutionvariables?q={"derivedValues":true}';
      console.log(requestURL);

    let apiCall = await axios.get(requestURL,{
      baseURL: module.exports.oracleBaseURL,
      auth: {
        username: module.exports.oracleUserName,
        password: module.exports.oraclePW
      },
    });
    return apiCall;
  },

  // Get a Substituion Variable Defined at the Plan Type Level
  getSinglePlanTypeSubstitutionVariable: async function(plantype,subvar){

      var requestURL = '/HyperionPlanning/rest/' + module.exports.oracleAPIVersion + '/applications/' + module.exports.oracleAppName + '/plantypes/' + plantype + '/substitutionvariables/' + subvar;
      console.log(requestURL);

    let apiCall = await axios.get(requestURL,{
      baseURL: module.exports.oracleBaseURL,
      auth: {
        username: module.exports.oracleUserName,
        password: module.exports.oraclePW
      },
    });
    return apiCall;
  },

  // Get a Derived Substituion variable Defined at the Plan Type Level
  getSingleDerivedSubstitutionVariable: async function(plantype,subvar){

      var requestURL = '/HyperionPlanning/rest/' + module.exports.oracleAPIVersion + '/applications/' + module.exports.oracleAppName + '/plantypes/' + plantype + '/substitutionvariables/' + subvar + '?q={"derivedValues":true}';

      console.log(requestURL);

    let apiCall = await axios.get(requestURL,{
      baseURL: module.exports.oracleBaseURL,
      auth: {
        username: module.exports.oracleUserName,
        password: module.exports.oraclePW
      },
    });
    return apiCall;
  },


/* EPBCS POST requests */

  // Execute a Job
  executeJob: async function(jobParameters){

    console.log("Job parameters: " + jobParameters);

    let apiCall = await axios.post('/HyperionPlanning/rest/' + module.exports.oracleAPIVersion + '/applications/' + module.exports.oracleAppName + '/jobs',
    jobParameters,
    {
      baseURL: module.exports.oracleBaseURL,
      auth: {
        username: module.exports.oracleUserName,
        password: module.exports.oraclePW
      },
      headers: {
        'Content-Type': 'application/json'
      }
    });
    //console.log(apiCall);
    return apiCall;

  },

  // POST Add a member
  createMember: async function(member){

    let apiCall = await axios.post('/HyperionPlanning/rest/v3/applications/ENTPLAN/dimensions/Account/members',
    {
      "memberName": member.memberName,
      "parentName": member.parentName
    },
    {
      baseURL: module.exports.oracleBaseURL,
      auth: {
        username: module.exports.oracleUserName,
        password: module.exports.oraclePW
      },
      headers: {
        'Content-Type': 'application/json'
      }
    });
    //console.log(apiCall);
    return apiCall;

  },

  // COMING SOON - List All Planning Units

  // COMING SOON - Change Planning Unit status

  // COMING SOON - Import Data Slice

  // COMING SOON - Export Data Slice

  // COMING SOON - Clear Data Slice

  // Create or Update All Substituion Variables Defined for the Application
  updateSubstitutionVariable: async function(payload){

    console.log("Subvar: " + payload);

    var requestURL = '/HyperionPlanning/rest/' + module.exports.oracleAPIVersion + '/applications/' + module.exports.oracleAppName + '/substitutionvariables';

    let apiCall = await axios.post(requestURL,
    payload,
    {
      baseURL: module.exports.oracleBaseURL,
      auth: {
        username: module.exports.oracleUserName,
        password: module.exports.oraclePW
      },
      headers: {
        'Content-Type': 'application/json'
      }
    });
    //console.log(apiCall);
    return apiCall;

  },

  // Create and Update Substituion Variables at the Plan Type Level
  updatePlanTypeSubstitutionVariable: async function(payload,plantype){

    console.log("Subvar: " + payload.items);

    var requestURL = '/HyperionPlanning/rest/' + module.exports.oracleAPIVersion + '/applications/' + module.exports.oracleAppName + '/plantypes/' + plantype + '/substitutionvariables';

    let apiCall = await axios.post(requestURL,
    payload,
    {
      baseURL: module.exports.oracleBaseURL,
      auth: {
        username: module.exports.oracleUserName,
        password: module.exports.oraclePW
      },
      headers: {
        'Content-Type': 'application/json'
      }
    });
    //console.log(apiCall);
    return apiCall;

  },



/* Data Management Requests */

  // GET REST API Version for Migration
  getMigrationRESTAPIVersion: async function(){
    let apiCall = await axios.get('/interop/rest/',{
      baseURL: module.exports.oracleBaseURL,
      auth: {
        username: module.exports.oracleUserName,
        password: module.exports.oraclePW
      },
    });
    //let applicationName = apiCall.data.items[0].name;
    return apiCall;
  },

  // Get Information about a Specific Version of Migration Sample code
  getMigrationVersionInfo: async function(version){

    console.log("Version variable: " + version);

    let apiCall = await axios.get('/interop/rest/' + version,{
      baseURL: module.exports.oracleBaseURL,
      auth: {
        username: module.exports.oracleUserName,
        password: module.exports.oraclePW
      },
    });
    //let applicationName = apiCall.data.items[0].name;
    return apiCall;
  },

  // Upload Application Snapshot
  uploadSnapshot: async function(fileName,fileSize){

    console.log("File Name: " + fileName.path);
    console.log("Size: " + fileSize);

    var requestURL = '/interop/rest/' + module.exports.oracleMigrationAPIVersion + '/applicationsnapshots/'+ fileName.path +'/contents?q={"isLast":true,"chunkSize":' + fileSize + ',"isFirst":true}';

    let apiCall = await axios.post(requestURL,
    fileName,
    {
      baseURL: module.exports.oracleBaseURL,
      auth: {
        username: module.exports.oracleUserName,
        password: module.exports.oraclePW
      },
      headers: {
        'Content-Type': 'application/octet-stream'
      },
      encoding: null
      //data: fileName
    });
    //let applicationName = apiCall.data.items[0].name;
    return apiCall;
  },

  // Upload File to DM Inbox
  /* Copy from above and modify location */

  // Download File
  downloadFile: async function(fileName){

    console.log("File Name: " + fileName);

    var requestURL = '/interop/rest/' + module.exports.oracleMigrationAPIVersion + '/applicationsnapshots/'+ fileName +'/contents';

    let apiCall = await axios.get(requestURL,{
      baseURL: module.exports.oracleBaseURL,
      auth: {
        username: module.exports.oracleUserName,
        password: module.exports.oraclePW
      },
      headers: {
        //'Content-Type': 'application/octet-stream'
      },
      //allows creation of binary write stream
      responseType: 'arraybuffer'

    });
    //let applicationName = apiCall.data.items[0].name;
    return apiCall;
  },

  // List Files
  listFiles: async function(fileName){

    //can accept a specific file name or list all files

    if(fileName){
      var requestURL = '/interop/rest/' + module.exports.oracleMigrationAPIVersion + '/applicationsnapshots/' + fileName;
    } else {
      var requestURL = '/interop/rest/' + module.exports.oracleMigrationAPIVersion + '/applicationsnapshots';
    }

    //console.log(requestURL);

    let apiCall = await axios.get(requestURL,{
      baseURL: module.exports.oracleBaseURL,
      auth: {
        username: module.exports.oracleUserName,
        password: module.exports.oraclePW
      },
      headers: {
        //'Content-Type': 'application/octet-stream'
      },
      //allows creation of binary write stream
      //responseType: 'arraybuffer'

    });
    //let applicationName = apiCall.data.items[0].name;
    return apiCall;
  },

  // Delete Files
  deleteFile: async function(fileName){

    console.log("File Name: " + fileName);

    var requestURL = '/interop/rest/' + module.exports.oracleMigrationAPIVersion + '/applicationsnapshots/' + fileName;

    let apiCall = await axios.delete(requestURL,{
      baseURL: module.exports.oracleBaseURL,
      auth: {
        username: module.exports.oracleUserName,
        password: module.exports.oraclePW
      },
      headers: {
        //'Content-Type': 'application/octet-stream'
      },

    });
    //let applicationName = apiCall.data.items[0].name;
    return apiCall;
  },

  // Get Information about All Services
  servicesInfo: async function(){

    //console.log("File Name: " + fileName);

    var requestURL = '/interop/rest/' + module.exports.oracleMigrationAPIVersion + '/services';

    let apiCall = await axios.get(requestURL,{
      baseURL: module.exports.oracleBaseURL,
      auth: {
        username: module.exports.oracleUserName,
        password: module.exports.oraclePW
      },
      headers: {
        //'Content-Type': 'application/octet-stream'
      },

    });
    return apiCall;
  },

  // Run Recreate on a Service *** COMING SOON - Need Test Environment ***

  // Restart the Service Instance  *** COMING SOON - Need Test Environment ***

  // Get Information About All Application Snapshots *** Same as ListFiles ***

  // Upload Application Snapshots *** Same as upload ***

  // Download Application Snapshots  *** Same as download ***

  // Provide Feedback  *** COMING SOON - Need Test Environment ***

  // LCM exports *** COMING SOON ***

  // LCM Import *** COMING SOON ***

  // Get the Build Version and Daily Maintenance Window time
  maintenanceWindow: async function(){

    //console.log("File Name: " + fileName);

    var requestURL = '/interop/rest/' + module.exports.oracleMigrationAPIVersion + '/services/dailymaintenance';

    let apiCall = await axios.get(requestURL,{
      baseURL: module.exports.oracleBaseURL,
      auth: {
        username: module.exports.oracleUserName,
        password: module.exports.oraclePW
      },
      headers: {
        //'Content-Type': 'application/octet-stream'
      },

    });
    return apiCall;
  }

  // Setting the Daily Maintenance Window Time

  // Copy Application Snapshot

  // Add Users to an Identity Domain

  // Remove Users from an Identity Domain

  // Assign Users to Predefined Roles

  // Remove Users' Role Assignment

  // Add Users to an Identity Domain

  // Remove Users from an Identity Domain

  // User Audit Report

  // User Provisioning Report

  // Get API Versions for Data Management APIs

  // Get Information about a Specific API Version for Data Management APIs

  // Running Data Rules

  // Running Batch Rules

  // Import Data Mapping

  // Export Data Mapping

  // Execute Reports

/* Account Reconciliation Requests - COMING SOON */

/* Oracle Profitability and Cost Management Cloud Requests - COMING SOON */

}
