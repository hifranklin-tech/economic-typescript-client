## economic-documents-client@2.1.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install economic-documents-client@2.1.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://apis.e-conomic.com/documentsapi/v2.1.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AttachedDocumentsApi* | [**attachPdfAsync**](docs/AttachedDocumentsApi.md#attachpdfasync) | **POST** /AttachedDocuments | Attach PDF
*AttachedDocumentsApi* | [**deleteAttachedDocumentById**](docs/AttachedDocumentsApi.md#deleteattacheddocumentbyid) | **DELETE** /AttachedDocuments/{number} | Delete single AttachedDocument
*AttachedDocumentsApi* | [**getAllAttachedDocuments**](docs/AttachedDocumentsApi.md#getallattacheddocuments) | **GET** /AttachedDocuments | Retrieve all AttachedDocuments
*AttachedDocumentsApi* | [**getAttachedDocumentById**](docs/AttachedDocumentsApi.md#getattacheddocumentbyid) | **GET** /AttachedDocuments/{number} | Retrieve single AttachedDocument
*AttachedDocumentsApi* | [**getNumberOfAttachedDocuments**](docs/AttachedDocumentsApi.md#getnumberofattacheddocuments) | **GET** /AttachedDocuments/count | Retrieve the number of AttachedDocuments
*AttachedDocumentsApi* | [**getPageOfAttachedDocuments**](docs/AttachedDocumentsApi.md#getpageofattacheddocuments) | **GET** /AttachedDocuments/paged | Retrieve a page of AttachedDocuments
*AttachedDocumentsApi* | [**getPdfForAttachedDocument**](docs/AttachedDocumentsApi.md#getpdfforattacheddocument) | **GET** /AttachedDocuments/{number}/pdf | Retrieve the pdf file for a single AttachedDocument


### Documentation For Models

 - [AttachedDocument](docs/AttachedDocument.md)
 - [AttachedDocumentCursorResults](docs/AttachedDocumentCursorResults.md)
 - [ModelError](docs/ModelError.md)
 - [ProblemDetails](docs/ProblemDetails.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="X-AppSecretToken"></a>
### X-AppSecretToken

- **Type**: API key
- **API key parameter name**: X-AppSecretToken
- **Location**: HTTP header

<a id="X-AgreementGrantToken"></a>
### X-AgreementGrantToken

- **Type**: API key
- **API key parameter name**: X-AgreementGrantToken
- **Location**: HTTP header

