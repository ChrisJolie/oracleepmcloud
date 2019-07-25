# OracleEPMCloud

node.js module for communicating with Oracle EPM Cloud applications


## Prerequisites

* Access as a service administrator to the Oracle EPM Cloud application you are trying to communicate with.
* Technical and functional knowledge of Oracle EPM Cloud applications including: Enterprise Planning and Budgeting Cloud, Data Management, Profitability and Cost Management Cloud, Account Reconciliation Cloud.
* Functions which call a job within the Oracle EPM Cloud application assume that job has already been setup.  For example, importing or exporting metadata.



## Installing

```bash
$ npm install oracleepmcloud
```

## Examples

### Setting Global Defaults


Require the module:

```js
var oraclecloud = require('oracleepmcloud');
```


You must specify config defaults that will be applied to every request:

```js
/*
Set your base Oracle Cloud URL

URL Format:
https://<SERVICE_NAME>-<TENANT_NAME>.<SERVICE_TYPE>.<dcX>.oraclecloud.com
*/
oraclecloud.oracleBaseURL = 'https://planning-test-b345242.pbcs.us6.oraclecloud.com';

/*
Set your Oracle Cloud username

Format: identitydomain.johnsmith@mycompany.com
Note: User must be an identity domain administrator
*/
oraclecloud.oracleUserName = 'b345242.cjolie@thehackettgroup.com';

// Set your Oracle Cloud password
oraclecloud.oraclePW = 'myoraclepassword';

// Set your application name
oraclecloud.oracleAppName = 'ORGPLN';

// Set your Oracle Cloud API version
oraclecloud.oracleAPIVersion = 'v3';

// Set your Oracle Cloud Migration API version
oraclecloud.oracleMigrationAPIVersion = '11.1.2.3.600';

// Set your Oracle REST API version
oraclecloud.oracleRESTVersion = 'v1';

```

### EPBCS Request Examples

Requesting API Version:

```js
// Create instance
var getRESTAPIVersion = oraclecloud.getRESTAPIVersion;

// Call instance
getRESTAPIVersion()
  .then(function(response) {
    console.log(response.data);
    // Then send response to client
    // res.sendStatus(response.status);
  }).catch(function(error){
    console.log(error);
    // respond with error
    // next(error);
  });
```

Requesting API Version Info:

```js
// Create instance
var getVersionInfo = oraclecloud.getVersionInfo;

let versionRequest = "v3"; // or oraclecloud.oracleAPIVersion

// Call instance
getVersionInfo(versionRequest)
  .then(function(response) {
    console.log(response.data);
    // Then send response to client
    // res.sendStatus(response.status);
  }).catch(function(error){
    console.log(error);
    // respond with error
    // next(error);
  });
```

Requesting Application Name:

```js
// Create instance
var getApplicationName = oraclecloud.getApplicationName;

// Call instance
getApplicationName()
  .then(function(response) {
    console.log(response);
    // Then send response to client
    // res.sendStatus(response.status);
  }).catch(function(error){
    console.log(error);
    // respond with error
    // next(error);
  });
```

Requesting Job Definitions:

```js
// Create instance
var getJobDefinitions = oraclecloud.getJobDefinitions;

var jobTypes = "CUBE_REFRESH"; // Supported Job Types: RULES, RULESET, PLAN_TYPE_MAP, IMPORT_DATA, EXPORT_DATA, EXPORT_METADATA, IMPORT_METADATA, CUBE_REFRESH, and CLEAR_CUBE

// Call instance
getJobDefinitions(jobTypes)
  .then(function(response) {
    console.log(response.data);
    // Then send response to client
    // res.sendStatus(response.status);
  }).catch(function(error){
    console.log(error);
    // respond with error
    // next(error);
  });
```

Requesting Job Status:

```js
// Create instance
var getJobStatus = oraclecloud.getJobStatus;

var jobID = "924"; // Job ID can be found in the Job Console

// Call instance
getJobStatus(jobID)
  .then(function(response) {
    console.log(response.data);
    // Then send response to client
    // res.sendStatus(response.status);
  }).catch(function(error){
    console.log(error);
    // respond with error
    // next(error);
  });
```

Requesting Job Status Details:

```js
// Create instance
var getJobStatusDetails = oraclecloud.getJobStatusDetails;

var jobID = "924"; // Job ID can be found in the Job Console

// Call instance
getJobStatusDetails(jobID)
  .then(function(response) {
    console.log(response.data);
    // Then send response to client
    // res.sendStatus(response.status);
  }).catch(function(error){
    console.log(error);
    // respond with error
    // next(error);
  });
```

Requesting Child Job Status Details:

```js
// Create instance
var getChildJobStatusDetails = oraclecloud.getChildJobStatusDetails;

var jobID = "924"; // Job ID can be found in the Job Console
var childJobID = "86"; // Child Job ID is returned as part of Job details

// Call instance
getChildJobStatusDetails(jobID,childJobID)
  .then(function(response) {
    console.log(response.data);
    // Then send response to client
    // res.sendStatus(response.status);
  }).catch(function(error){
    console.log(error);
    // respond with error
    // next(error);
  });
```

Requesting Member Details:

```js
// Create instance
var getMember = oraclecloud.getMember;

var dimension = "Account";
var member = "A400000";

// Call instance
getMember(dimension,member)
  .then(function(response) {
    console.log(response.data);
    // Then send response to client
    // res.sendStatus(response.status);
  }).catch(function(error){
    console.log(error);
    // respond with error
    // next(error);
  });
```

Requesting User Preferences:

```js
// Create instance
var getUserPreferences = oraclecloud.getUserPreferences;

// Call instance
getUserPreferences()
  .then(function(response) {
    console.log(response.data);
    // Then send response to client
    // res.sendStatus(response.status);
  }).catch(function(error){
    console.log(error);
    // respond with error
    // next(error);
  });
```

Requesting All Substitution Variables:

```js
// Create instance
var getAllSubstitutionVariables = oraclecloud.getAllSubstitutionVariables;

// Call instance
getAllSubstitutionVariables()
  .then(function(response) {
    console.log(response.data);
    // Then send response to client
    // res.sendStatus(response.status);
  }).catch(function(error){
    console.log(error);
    // respond with error
    // next(error);
  });
```

Requesting a Single Substitution Variable:

```js
// Create instance
var getSubstitutionVariable = oraclecloud.getSubstitutionVariable;

var subvar = 'FCSTStartYr'; // Only works for Global Sub Variables

// Call instance
getSubstitutionVariable(subvar)
  .then(function(response) {
    console.log(response.data);
    // Then send response to client
    // res.sendStatus(response.status);
  }).catch(function(error){
    console.log(error);
    // respond with error
    // next(error);
  });
```

Requesting Substitution Variables for a Plan Type:

```js
// Create instance
var getPlanTypeSubstitutionVariables = oraclecloud.getPlanTypeSubstitutionVariables;

var plantype = 'OEP_FS';

// Call instance
getPlanTypeSubstitutionVariables(plantype)
  .then(function(response) {
    console.log(response.data);
    // Then send response to client
    // res.sendStatus(response.status);
  }).catch(function(error){
    console.log(error);
    // respond with error
    // next(error);
  });
```

Requesting Derived Substitution Variables:

```js
// Create instance
var getDerivedSubstitutionVariables = oraclecloud.getDerivedSubstitutionVariables;

var plantype = 'OEP_FS';

// Call instance
getDerivedSubstitutionVariables(plantype)
  .then(function(response) {
    console.log(response.data);
    // Then send response to client
    // res.sendStatus(response.status);
  }).catch(function(error){
    console.log(error);
    // respond with error
    // next(error);
  });
```

Requesting a Substitution Variable for a Plan Type:

```js
// Create instance
var getSinglePlanTypeSubstitutionVariable = oraclecloud.getSinglePlanTypeSubstitutionVariable;

var plantype = 'OEP_FS';
var subvar = 'OEP_YearRange'

// Call instance
getSinglePlanTypeSubstitutionVariable(plantype,subvar)
  .then(function(response) {
    console.log(response.data);
    // Then send response to client
    // res.sendStatus(response.status);
  }).catch(function(error){
    console.log(error);
    // respond with error
    // next(error);
  });
```

Requesting a Single Derived Substitution Variable:

```js
// Create instance
var getSingleDerivedSubstitutionVariable = oraclecloud.getSingleDerivedSubstitutionVariable;

var plantype = 'OEP_FS';
var subvar = 'OEP_YearRange'

// Call instance
getSingleDerivedSubstitutionVariable(plantype,subvar)
  .then(function(response) {
    console.log(response.data);
    // Then send response to client
    // res.sendStatus(response.status);
  }).catch(function(error){
    console.log(error);
    // respond with error
    // next(error);
  });
```

Execute a Job:

```js
// Create instance
var executeJob = oraclecloud.executeJob;

// Job must be created in EPBCS first
var jobParameters = {
  "jobType":"RULES",
  "jobName":"ORG_Agg_Financials",
  "parameters":{
    "Scenario":"OEP_Plan",
    "Version":"OEP_Working"
  }
};

// Call instance
executeJob(jobParameters)
  .then(function(response) {
    console.log(response.data);
    // Then send response to client
    // res.sendStatus(response.status);
  }).catch(function(error){
    console.log(error);
    // respond with error
    // next(error);
  });
```

Create a New Member:

```js
// Create instance
var createMember = oraclecloud.createMember;

// Call instance
createMember(req.body)
  .then(function(response) {
    console.log(response.status);
    // Then send response to client
    // res.sendStatus(response.status);
  }).catch(function(error){
    console.log(error);
    // respond with error
    // next(error);
  });
```

Update a Substitution Variable:

```js
// Create instance
var updateSubstitutionVariable = oraclecloud.updateSubstitutionVariable;

var payload = {
  "items": [
    {
      "name": "PlanStartPeriod",
      "value": "Jan",
      "planType": "ALL"
    },
    {
      "name": "PlanEndPeriod",
      "value": "Dec",
      "planType": "ALL"
    }
  ]
}

// Call instance
updateSubstitutionVariable(payload)
  .then(function(response) {
    console.log(response.data);
    // Then send response to client
    // res.sendStatus(response.status);
  }).catch(function(error){
    console.log(error);
    // respond with error
    // next(error);
  });
```

Update a Plan Type Specific Substitution Variable:

```js
// Create instance
var updatePlanTypeSubstitutionVariable = oraclecloud.updatePlanTypeSubstitutionVariable;

var payload = {
  "items": [
    {
      "name": "PlanStartPeriod",
      "value": "Jan",
      "planType": "ALL"
    },
    {
      "name": "PlanEndPeriod",
      "value": "Dec",
      "planType": "ALL"
    }
  ]
};

var plantype = "ALL";

// Call instance
updatePlanTypeSubstitutionVariable(payload,plantype)
  .then(function(response) {
    console.log(response.data);
    // Then send response to client
    // res.sendStatus(response.status);
  }).catch(function(error){
    console.log(error);
    // respond with error
    // next(error);
  });
```

### Data Management Requests

Get Migration REST API Version

```js
// Create instance
var getMigrationRESTAPIVersion = oraclecloud.getMigrationRESTAPIVersion;

// Call instance
getMigrationRESTAPIVersion()
  .then(function(response) {
    console.log(response.data);
  // Then send response to client
  // res.sendStatus(response.status);
  }).catch(function(error){
  console.log(error);
  // respond with error
  // next(error);
  });
```

Get Migration Version Information

```js
// Create instance
var getMigrationVersionInfo = oraclecloud.getMigrationVersionInfo;

let versionRequest = "11.1.2.3.600";

// Call instance
getMigrationVersionInfo(versionRequest)
  .then(function(response) {
    console.log(response.data);
  // Then send response to client
  // res.sendStatus(response.status);
  }).catch(function(error){
  console.log(error);
  // respond with error
  // next(error);
  });
```

Upload a File

```js
// Create instance
var uploadSnapshot = oraclecloud.uploadSnapshot;

//create stream
const MY_FILE_PATH = 'cjtestsnapshotv3.zip';
const readmeStream = fs.createReadStream(MY_FILE_PATH);
const {size} = fs.statSync(MY_FILE_PATH);

// Call instance
uploadSnapshot(readmeStream,size)
  .then(function(response) {
    console.log(response.data);
    // Then send response to client
    // res.sendStatus(response.status);
  }).catch(function(error){
    console.log(error);
    // respond with error
    // next(error);
  });
```

Download a File

```js
// Create instance
var downloadFile = oraclecloud.downloadFile;

//Name of the file you want to download from the inbox
var fileName = 'myFileName';

// Call instance
downloadFile(fileName)
  .then(function(response) {

    // create Write stream
    var writeStream = fs.createWriteStream('myDownload.zip');

    //pipe data to Write Stream
    writeStream.write(response.data);
    writeStream.end();

    // Then send response to client
    // res.sendStatus(response.status);
  }).catch(function(error){
    console.log(error);
    // respond with error
    // next(error);
  });
```

List Files in Inbox

```js
// Create instance
var listFiles = oraclecloud.listFiles;

// Call instance
listFiles()
  .then(function(response) {
    console.log(response.data);
    // Then send response to client
    // res.sendStatus(response.status);
  }).catch(function(error){
    console.log(error);
    // respond with error
    // next(error);
  });
```

Delete a File

```js
// Create instance
var deleteFile = oraclecloud.deleteFile;

// Name of file to delete
var fileName = 'mySnapshot';

// Call instance
deleteFile(fileName)
  .then(function(response) {
    console.log(response.data);
    // Then send response to client
    // res.sendStatus(response.status);
  }).catch(function(error){
    console.log(error);
    // respond with error
    // next(error);
  });
```

Get information on services

```js
// Create instance
var servicesInfo = oraclecloud.servicesInfo;

// Call instance
servicesInfo()
  .then(function(response) {
    console.log(response.data);
    // Then send response to client
    // res.sendStatus(response.status)
  }).catch(function(error){
    console.log(error);
    // respond with error
    // next(error);
  });
```

Get Maintenance Window

```js
// Create instance
var maintenanceWindow = oraclecloud.maintenanceWindow;

// Call instance
maintenanceWindow()
  .then(function(response) {
    console.log(response.data);
    // Then send response to client
    // res.sendStatus(response.status)
  }).catch(function(error){
    console.log(error);
    // respond with error
    // next(error);
  });
```

Set Maintenance Window

```js
// Create instance
var setMaintenanceTime = oraclecloud.setMaintenanceTime;
  
// use 24 hour format, 1 - 24
var maintenanceTime = "11";

// Call instance
setMaintenanceTime(maintenanceTime)
  .then(function(response) {
    console.log(response.data);
    // Then send response to client
    // res.sendStatus(response.status)
  }).catch(function(error){
    console.log(error);
    // respond with error
    // next(error);
  });
```

Additional Data Management Functions Coming Soon

### Profitability and Cost Management Requests

Coming Soon

### Account Reconciliation Requests

Coming Soon


## Reference


## Built With

* [Axios](https://www.npmjs.com/package/axios) - REST API module


## Authors

**Christopher Jolie** - *Initial work* - [chrisjolie](https://github.com/ChrisJolie)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* The Hackett Group (https://www.thehackettgroup.com/)
