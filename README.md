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


You can specify config defaults that will be applied to every request.


```js
oraclecloud.oracleBaseURL = 'https://planning-test-b345242.pbcs.us6.oraclecloud.com';
// URL Format: https://<SERVICE_NAME>-<TENANT_NAME>.<SERVICE_TYPE>.<dcX>.oraclecloud.com

oraclecloud.oracleUserName = 'b345242.cjolie@thehackettgroup.com';
// Format: identitydomain.johnsmith@mycompany.com
// User must be an identity domain administrator

oraclecloud.oraclePW = 'myoraclepassword';
oraclecloud.oracleAppName = 'ORGPLN';
oraclecloud.oracleAPIVersion = 'v3';
```

### EPBCS Request Examples



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
