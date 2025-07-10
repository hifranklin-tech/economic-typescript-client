# AttachedDocumentsApi

All URIs are relative to *https://apis.e-conomic.com/documentsapi/v2.1.0*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**attachPdfAsync**](#attachpdfasync) | **POST** /AttachedDocuments | Attach PDF|
|[**deleteAttachedDocumentById**](#deleteattacheddocumentbyid) | **DELETE** /AttachedDocuments/{number} | Delete single AttachedDocument|
|[**getAllAttachedDocuments**](#getallattacheddocuments) | **GET** /AttachedDocuments | Retrieve all AttachedDocuments|
|[**getAttachedDocumentById**](#getattacheddocumentbyid) | **GET** /AttachedDocuments/{number} | Retrieve single AttachedDocument|
|[**getNumberOfAttachedDocuments**](#getnumberofattacheddocuments) | **GET** /AttachedDocuments/count | Retrieve the number of AttachedDocuments|
|[**getPageOfAttachedDocuments**](#getpageofattacheddocuments) | **GET** /AttachedDocuments/paged | Retrieve a page of AttachedDocuments|
|[**getPdfForAttachedDocument**](#getpdfforattacheddocument) | **GET** /AttachedDocuments/{number}/pdf | Retrieve the pdf file for a single AttachedDocument|

# **attachPdfAsync**
> attachPdfAsync()

Use this endpoint to attach a PDF to Booked or Draft Entries.

### Example

```typescript
import {
    AttachedDocumentsApi,
    Configuration
} from 'economic-documents-client';

const configuration = new Configuration();
const apiInstance = new AttachedDocumentsApi(configuration);

let voucherNumber: number; //The number of the voucher that the document is attached to<p style=\\\'font-style:italic;font-family:monospace;font-size:small;margin:0\\\'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p style=\\\'font-style:italic;font-family:monospace;font-size:small;margin:0\\\'>Sortable: false</p> (default to undefined)
let accountingYear: string; //The accounting year of the voucher that the document is attached to<p style=\\\'font-style:italic;font-family:monospace;font-size:small;margin:0\\\'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p style=\\\'font-style:italic;font-family:monospace;font-size:small;margin:0\\\'>Sortable: false</p> (default to undefined)
let file: File; //<p style=\\\'font-style:italic;font-family:monospace;font-size:small;margin:0\\\'>Filterable: not filterable</p><p style=\\\'font-style:italic;font-family:monospace;font-size:small;margin:0\\\'>Sortable: false</p><p style=\\\'font-style:italic;font-family:monospace;font-size:small;margin:0\\\'>Max allowed file size: 9 MB</p><p style=\\\'font-style:italic;font-family:monospace;font-size:small;margin:0\\\'>Allowed content types: application/pdf (<strong>.pdf</strong>)</p> (default to undefined)
let number: number; //The unique number of the attached document<p style=\\\'font-style:italic;font-family:monospace;font-size:small;margin:0\\\'>Filterable: eq, ne, lt, lte, gt, gte, in, nin</p><p style=\\\'font-style:italic;font-family:monospace;font-size:small;margin:0\\\'>Sortable: true</p> (optional) (default to undefined)
let note: string; //The note of the attached document<p style=\\\'font-style:italic;font-family:monospace;font-size:small;margin:0\\\'>Filterable: not filterable</p><p style=\\\'font-style:italic;font-family:monospace;font-size:small;margin:0\\\'>Sortable: false</p> (optional) (default to undefined)
let pageCount: number; //The number of pages of the attached document<p style=\\\'font-style:italic;font-family:monospace;font-size:small;margin:0\\\'>Filterable: not filterable</p><p style=\\\'font-style:italic;font-family:monospace;font-size:small;margin:0\\\'>Sortable: false</p> (optional) (default to undefined)

const { status, data } = await apiInstance.attachPdfAsync(
    voucherNumber,
    accountingYear,
    file,
    number,
    note,
    pageCount
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **voucherNumber** | [**number**] | The number of the voucher that the document is attached to&lt;p style&#x3D;\\\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\\\&#39;&gt;Filterable: eq, ne, lt, lte, gt, gte, in, nin&lt;/p&gt;&lt;p style&#x3D;\\\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\\\&#39;&gt;Sortable: false&lt;/p&gt; | defaults to undefined|
| **accountingYear** | [**string**] | The accounting year of the voucher that the document is attached to&lt;p style&#x3D;\\\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\\\&#39;&gt;Filterable: eq, ne, lt, lte, gt, gte, in, nin&lt;/p&gt;&lt;p style&#x3D;\\\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\\\&#39;&gt;Sortable: false&lt;/p&gt; | defaults to undefined|
| **file** | [**File**] | &lt;p style&#x3D;\\\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\\\&#39;&gt;Filterable: not filterable&lt;/p&gt;&lt;p style&#x3D;\\\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\\\&#39;&gt;Sortable: false&lt;/p&gt;&lt;p style&#x3D;\\\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\\\&#39;&gt;Max allowed file size: 9 MB&lt;/p&gt;&lt;p style&#x3D;\\\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\\\&#39;&gt;Allowed content types: application/pdf (&lt;strong&gt;.pdf&lt;/strong&gt;)&lt;/p&gt; | defaults to undefined|
| **number** | [**number**] | The unique number of the attached document&lt;p style&#x3D;\\\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\\\&#39;&gt;Filterable: eq, ne, lt, lte, gt, gte, in, nin&lt;/p&gt;&lt;p style&#x3D;\\\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\\\&#39;&gt;Sortable: true&lt;/p&gt; | (optional) defaults to undefined|
| **note** | [**string**] | The note of the attached document&lt;p style&#x3D;\\\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\\\&#39;&gt;Filterable: not filterable&lt;/p&gt;&lt;p style&#x3D;\\\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\\\&#39;&gt;Sortable: false&lt;/p&gt; | (optional) defaults to undefined|
| **pageCount** | [**number**] | The number of pages of the attached document&lt;p style&#x3D;\\\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\\\&#39;&gt;Filterable: not filterable&lt;/p&gt;&lt;p style&#x3D;\\\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\\\&#39;&gt;Sortable: false&lt;/p&gt; | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[X-AgreementGrantToken](../README.md#X-AgreementGrantToken), [X-AppSecretToken](../README.md#X-AppSecretToken)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | **Bad request.** Your request does not pass our validation. Check the errors array for more details. |  -  |
|**401** | **Unauthorized access.** Please take a look at https://apis.e-conomic.com and follow the links to help on authorization, or use the word demo for both tokens. |  -  |
|**403** | **Access forbidden.** You won’t necessarily have access to everything. So even though you were authorized we might still deny access to certain resources. This depends on the roles asked for when the grant was issued. |  -  |
|**429** | **Too many requests.** You have made too many calls towards our API. You are over your quota. Need to wait a bit. Check info in the response headers. |  -  |
|**500** | **Internal server error.** Something went wrong but the error has been logged. If you continue to see errors here, please contact api@e-conomic.com. Remember to include log id and agreement number when contacting support. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteAttachedDocumentById**
> deleteAttachedDocumentById()

Use this endpoint to delete a single AttachedDocument by number.

### Example

```typescript
import {
    AttachedDocumentsApi,
    Configuration
} from 'economic-documents-client';

const configuration = new Configuration();
const apiInstance = new AttachedDocumentsApi(configuration);

let number: number; // (default to undefined)

const { status, data } = await apiInstance.deleteAttachedDocumentById(
    number
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **number** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[X-AgreementGrantToken](../README.md#X-AgreementGrantToken), [X-AppSecretToken](../README.md#X-AppSecretToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Success |  -  |
|**400** | **Bad request.** Your request does not pass our validation. Check the errors array for more details. |  -  |
|**401** | **Unauthorized access.** Please take a look at https://apis.e-conomic.com and follow the links to help on authorization, or use the word demo for both tokens. |  -  |
|**403** | **Access forbidden.** You won’t necessarily have access to everything. So even though you were authorized we might still deny access to certain resources. This depends on the roles asked for when the grant was issued. |  -  |
|**404** | **Resource not found.** The resource you have been looking for does not exist. |  -  |
|**429** | **Too many requests.** You have made too many calls towards our API. You are over your quota. Need to wait a bit. Check info in the response headers. |  -  |
|**500** | **Internal server error.** Something went wrong but the error has been logged. If you continue to see errors here, please contact api@e-conomic.com. Remember to include log id and agreement number when contacting support. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllAttachedDocuments**
> AttachedDocumentCursorResults getAllAttachedDocuments()

Use this endpoint to retrieve all AttachedDocuments in bulk. <br/>The maximum number of items returned in a single call is defined in the `x-cursor-page-size` extension of the response type. Usually, the size is 1000, but in some cases, where we explicitly state so, it can be smaller than that.<br/>Use the continuation cursor parameter to set the cursor for retrieval of the next set of data.<br/>Please check the [pagination instructions](#section/Retrieving-data/Pagination).

### Example

```typescript
import {
    AttachedDocumentsApi,
    Configuration
} from 'economic-documents-client';

const configuration = new Configuration();
const apiInstance = new AttachedDocumentsApi(configuration);

let cursor: string; // (optional) (default to undefined)
let filter: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getAllAttachedDocuments(
    cursor,
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cursor** | [**string**] |  | (optional) defaults to undefined|
| **filter** | [**string**] |  | (optional) defaults to undefined|


### Return type

**AttachedDocumentCursorResults**

### Authorization

[X-AgreementGrantToken](../README.md#X-AgreementGrantToken), [X-AppSecretToken](../README.md#X-AppSecretToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | **Bad request.** Your request does not pass our validation. Check the errors array for more details. |  -  |
|**401** | **Unauthorized access.** Please take a look at https://apis.e-conomic.com and follow the links to help on authorization, or use the word demo for both tokens. |  -  |
|**403** | **Access forbidden.** You won’t necessarily have access to everything. So even though you were authorized we might still deny access to certain resources. This depends on the roles asked for when the grant was issued. |  -  |
|**429** | **Too many requests.** You have made too many calls towards our API. You are over your quota. Need to wait a bit. Check info in the response headers. |  -  |
|**500** | **Internal server error.** Something went wrong but the error has been logged. If you continue to see errors here, please contact api@e-conomic.com. Remember to include log id and agreement number when contacting support. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAttachedDocumentById**
> AttachedDocument getAttachedDocumentById()

Use this endpoint to load a single AttachedDocument by number.

### Example

```typescript
import {
    AttachedDocumentsApi,
    Configuration
} from 'economic-documents-client';

const configuration = new Configuration();
const apiInstance = new AttachedDocumentsApi(configuration);

let number: number; // (default to undefined)

const { status, data } = await apiInstance.getAttachedDocumentById(
    number
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **number** | [**number**] |  | defaults to undefined|


### Return type

**AttachedDocument**

### Authorization

[X-AgreementGrantToken](../README.md#X-AgreementGrantToken), [X-AppSecretToken](../README.md#X-AppSecretToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | **Bad request.** Your request does not pass our validation. Check the errors array for more details. |  -  |
|**401** | **Unauthorized access.** Please take a look at https://apis.e-conomic.com and follow the links to help on authorization, or use the word demo for both tokens. |  -  |
|**403** | **Access forbidden.** You won’t necessarily have access to everything. So even though you were authorized we might still deny access to certain resources. This depends on the roles asked for when the grant was issued. |  -  |
|**404** | **Resource not found.** The resource you have been looking for does not exist. |  -  |
|**429** | **Too many requests.** You have made too many calls towards our API. You are over your quota. Need to wait a bit. Check info in the response headers. |  -  |
|**500** | **Internal server error.** Something went wrong but the error has been logged. If you continue to see errors here, please contact api@e-conomic.com. Remember to include log id and agreement number when contacting support. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getNumberOfAttachedDocuments**
> number getNumberOfAttachedDocuments()

Call this endpoint to get the number of AttachedDocuments. You can use filtering as well.

### Example

```typescript
import {
    AttachedDocumentsApi,
    Configuration
} from 'economic-documents-client';

const configuration = new Configuration();
const apiInstance = new AttachedDocumentsApi(configuration);

let filter: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getNumberOfAttachedDocuments(
    filter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **filter** | [**string**] |  | (optional) defaults to undefined|


### Return type

**number**

### Authorization

[X-AgreementGrantToken](../README.md#X-AgreementGrantToken), [X-AppSecretToken](../README.md#X-AppSecretToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | **Bad request.** Your request does not pass our validation. Check the errors array for more details. |  -  |
|**401** | **Unauthorized access.** Please take a look at https://apis.e-conomic.com and follow the links to help on authorization, or use the word demo for both tokens. |  -  |
|**403** | **Access forbidden.** You won’t necessarily have access to everything. So even though you were authorized we might still deny access to certain resources. This depends on the roles asked for when the grant was issued. |  -  |
|**429** | **Too many requests.** You have made too many calls towards our API. You are over your quota. Need to wait a bit. Check info in the response headers. |  -  |
|**500** | **Internal server error.** Something went wrong but the error has been logged. If you continue to see errors here, please contact api@e-conomic.com. Remember to include log id and agreement number when contacting support. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPageOfAttachedDocuments**
> Array<AttachedDocument> getPageOfAttachedDocuments()

Use this endpoint to load a page of AttachedDocuments.

### Example

```typescript
import {
    AttachedDocumentsApi,
    Configuration
} from 'economic-documents-client';

const configuration = new Configuration();
const apiInstance = new AttachedDocumentsApi(configuration);

let filter: string; // (optional) (default to undefined)
let sort: string; // (optional) (default to undefined)
let pageSize: number; // (optional) (default to 20)
let skipPages: number; // (optional) (default to 0)

const { status, data } = await apiInstance.getPageOfAttachedDocuments(
    filter,
    sort,
    pageSize,
    skipPages
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **filter** | [**string**] |  | (optional) defaults to undefined|
| **sort** | [**string**] |  | (optional) defaults to undefined|
| **pageSize** | [**number**] |  | (optional) defaults to 20|
| **skipPages** | [**number**] |  | (optional) defaults to 0|


### Return type

**Array<AttachedDocument>**

### Authorization

[X-AgreementGrantToken](../README.md#X-AgreementGrantToken), [X-AppSecretToken](../README.md#X-AppSecretToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | **Bad request.** Your request does not pass our validation. Check the errors array for more details. |  -  |
|**401** | **Unauthorized access.** Please take a look at https://apis.e-conomic.com and follow the links to help on authorization, or use the word demo for both tokens. |  -  |
|**403** | **Access forbidden.** You won’t necessarily have access to everything. So even though you were authorized we might still deny access to certain resources. This depends on the roles asked for when the grant was issued. |  -  |
|**429** | **Too many requests.** You have made too many calls towards our API. You are over your quota. Need to wait a bit. Check info in the response headers. |  -  |
|**500** | **Internal server error.** Something went wrong but the error has been logged. If you continue to see errors here, please contact api@e-conomic.com. Remember to include log id and agreement number when contacting support. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPdfForAttachedDocument**
> File getPdfForAttachedDocument()

Call this endpoint to retrieve the pdf file for a single AttachedDocument.

### Example

```typescript
import {
    AttachedDocumentsApi,
    Configuration
} from 'economic-documents-client';

const configuration = new Configuration();
const apiInstance = new AttachedDocumentsApi(configuration);

let number: number; // (default to undefined)

const { status, data } = await apiInstance.getPdfForAttachedDocument(
    number
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **number** | [**number**] |  | defaults to undefined|


### Return type

**File**

### Authorization

[X-AgreementGrantToken](../README.md#X-AgreementGrantToken), [X-AppSecretToken](../README.md#X-AppSecretToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**401** | **Unauthorized access.** Please take a look at https://apis.e-conomic.com and follow the links to help on authorization, or use the word demo for both tokens. |  -  |
|**403** | **Access forbidden.** You won’t necessarily have access to everything. So even though you were authorized we might still deny access to certain resources. This depends on the roles asked for when the grant was issued. |  -  |
|**404** | **Resource not found.** The resource you have been looking for does not exist. |  -  |
|**429** | **Too many requests.** You have made too many calls towards our API. You are over your quota. Need to wait a bit. Check info in the response headers. |  -  |
|**500** | **Internal server error.** Something went wrong but the error has been logged. If you continue to see errors here, please contact api@e-conomic.com. Remember to include log id and agreement number when contacting support. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

