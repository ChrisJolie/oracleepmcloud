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
```

### EPBCS Request Examples

In Progress

### Data Management Requests

Coming Soon

### Profitability and Cost Management Requests

Coming Soon

### Account Reconciliation Requests

Coming Soon


## Built With

* [Axios](https://www.npmjs.com/package/axios) - REST API module


## Authors

**Christopher Jolie** - *Initial work* - [chrisjolie](https://github.com/ChrisJolie)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* The Hackett Group (https://www.thehackettgroup.com/)
