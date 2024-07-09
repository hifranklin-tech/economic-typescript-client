/* tslint:disable */
/* eslint-disable */
/**
 * Visma e-conomic OpenAPI Journals
 * # Changelog <details> <summary>Click to see changelog.</summary>  | Version | Description | Date | |:--------|:------------|:-----| |5.0.0| 1. The Name property is now required on [`journals`](#tag/Journals). <br> 2. JournalNumber and VoucherNumber is now required on [`draft-entries`](#tag/DraftEntries). <br> 3. Sorting disabled on [`draft-entries`](#tag/DraftEntries) for the following properties: Date, AccountNumber, VatCode, Amount, Currency, ContraAccountNumber, ContraVatCode, Text, ProjectNumber, CostTypeNumber, SupplierNumber. <br> 4. Filtering disabled on [`draft-entries`](#tag/DraftEntries) for the following properties: VatCode, Amount, ContraVatCode, Text CostTypeNumber. <br> 5. Sorting disabled on [`journals`](#tag/Journals) for the following properties: BalancingBehavior, AutoApprove, Type, IsStandingJournal, RequireAdminApproval, LockVatCodes, NextVoucherNumber, MinimumVoucherNumber, MaximumVoucherNumber, CustomerContraAccount, SupplierContraAccount, CustomerPaymentText, SupplierPaymentText, Name, Priority, AllowPartialBooking, RequireBalancePerVoucherId, RepeatText, PaymentMessageText, DefaultDepartment. <br> 6. Filtering disabled on [`journals`](#tag/Journals) for the following properties: AutoApprove, RequireAdminApproval, LockVatCodes, NextVoucherNumber, MinimumVoucherNumber MaximumVoucherNumber, SupplierContraAccount, CustomerContraAccount, CustomerPaumentText, SupplierPaymentText, Name, Priority, AllowPartialBooking, RequireBalancePerVoucherId, RepeatText, PaymentMessageText, DefaultDepartment. | July, 2024|  |4.0.0| Added the ObjectVersion property to [`draft-entries`](#tag/DraftEntries) and [`draft-entries/dimensions`](#tag/DraftEntryDimensions). OperationId updated for POST, Bulk POST, PUT and Bulk PUT in [`draft-entries`](#tag/DraftEntries). OperationId updated for PUT, GET Count in [`draft-entries/dimensions`](#tag/DraftEntryDimensions). OperationId updated for POST, PUT, DELETE, GET All Cursor, GET All Paged in [`journals`](#tag/Journals)  | June, 2024|  |3.2.0| [`draft-entries`](#tag/DraftEntries) /count endpoint added | 07/05/2024|  |3.1.1| Description updated. | 07/05/2024|  |3.1.0| [`journals`](#tag/Journals) Added GET, POST, PUT and DELETE endpoints for managing journals | 01/05/2024|  |3.0.0| [`entries/booked`](#tag/BookedEntries) Moved to /booked-entries/.\\ Booking of journals has moved to journals/[id]/book.\\ [`draft-entries`](#tag/DraftEntries) endpoint added | 01/04/2024|  |2.0.0| [`entries/booked`](#tag/BookedEntries) CustomerNumber added. | 13/02/2024|  |1.1.2| Description updated. | 06/02/2024|  |1.1.1| Fixed response type in documentation for [`entries/draft/book`](#tag/DraftEntries/operation/Book) and [`entries/draft/bookwithdateinterval`](#tag/DraftEntries/operation/BookWithDateInterval) endpoints. | 05/02/2024|  |1.1.0| [`entries/draft/book`](#tag/DraftEntries/operation/Book) and [`entries/draft/bookwithdateinterval`](#tag/DraftEntries/operation/BookWithDateInterval) endpoints added. | 31/01/2024|  |1.0.0| [`entries/booked`](#tag/BookedEntries) endpoints added. | 02/10/2023|  </details>  # TL;DR  **Add these three headers to your requests.**  | Header                | Value                      | What is this?                                                | | :-------------------- | :------------------------- | :----------------------------------------------------------- | | X-AppSecretToken      | YOUR_PRIVATE_TOKEN         | This identifies your app. This is your secret token. Try using the value `demo`. | | X-AgreementGrantToken | YOUR_AGREEMENT_GRANT_TOKEN | This identifies the grant issued by an agreement, to allow your app to access the agreements data. Try using the value `demo`. | | Content-Type          | application/json           | We’re a JSON based API. This tells us that you agree with us on using JSON. |  **Optional headers:**  | Header                | Value                      | What is this?                                                | | :-------------------- | :------------------------- | :----------------------------------------------------------- | | Idempotency-Key       | YOUR_IDEMPOTENCY_KEY       | This represents your own unique idempotency key. Enables you to make use of our [Idempotency Tokens](#section/Retrieving-data/Idempotency-tokens) feature. You can\'t use this feature with GET requests. |  ### Examples  #### jQuery  ```javascript/jQuery $.ajax({     url: \"https://apis.e-conomic.com/journalsapi/v5.0.0/the_resource\",     dataType: \"json\",     headers: {         \'X-AppSecretToken\': \"demo\",         \'X-AgreementGrantToken\': \"demo\",         \'Accept\': \"application/json\"     },     type: \"GET\" })     .always(function (data) {     $(\"#output\").text(JSON.stringify(data, null, 4)); }); ```  #### cURL  ```curl curl -H \"X-AppSecretToken: demo\" -H \"X-AgreementGrantToken: demo\" https://apis.e-conomic.com/journalsapi/v5.0.0/the_resource ```    # Introduction  Welcome to the **Visma e-conomic OpenAPI** documentation!  The e-conomic API is a document-based JSON REST API.   For more in-depth information about e-conomic itself, please have a look at the e-copedia [http://wiki.e-conomic.dk](http://wiki.e-conomic.dk/).  ## Usage  - **Generating a client** can easily be done using tools like [swagger-codegen](https://github.com/swagger-api/swagger-codegen) or others that work with [OpenAPI Specification](https://github.com/OAI/OpenAPI-Specification) specs.   ## Versioning  API releases are versioned using a three-part versioning scheme: `{major version}.{minor version}.{patch version}`.  We broadly follow [Semantic Versioning](https://semver.org/) principles when versioning the API. The major version number is incremented when a breaking change occurs.   The format is:  `/{resource-api}/v{major version}.{minor version}.{patch version}/{resource-name}`  Each value of the above are integers and you should configure the specific version in each API call.   An example could be: `/subscriptionsapi/v1.0.0/subscriptions`  To track the changes of versions, please see our [changelog](#section/Changelog).  We reserve the right to deprecate versions at intervals since this allows for moving into a friendly environment for you faster.  ## Demo authentication  If you wish to try out the API before registering a developer agreement, you can do this by using the demo agreement, which mimics the authentication flow you will have to use when you create your app. All you have to do is specify HTTP header tokens `X-AgreementGrantToken: demo` and `X-AppSecretToken: demo`. Note however that you can only do GET requests with the demo agreement. If you want full access to our API\'s, you will need to register.  # Retrieving data  Our data is exposed as collections of items. Each item has many properties, with one property as a unique identifier, usually called `number` or `id`. You can always get a single item if you already know the unique identifier. In case the unique identifier is not known, you can always search the collection and retrieve an array of items that satisfy the search criteria, or retrieve only the count of items that satisfy the search criteria. When you search for items in a collection, you can always use filtering, sorting and pagination. When it comes to pagination, we offer two distinct approaches available on separate endpoints. You can read more about filtering, sorting and pagination in the following sections.   ## Filtering  Filtering is enabled on all collection endpoints but not on all properties.  Filtering on collections can be done using the query string parameter `filter`. A filter is made up of a set of predicates and follows a syntax inspired by mongoDB. A predicate is made up of a property name, an operator, and a value.  Example: `?filter=name$eq:Joe`  This matches all resources with the value Joe in the property name.  Predicates can be chained using either of the logical operators AND and OR.  Example: `?filter=name$eq:Joe$and:city$like:*port`  Filtering on strings is case insensitive.  #### Filterable properties Information about what properties allow filtering and on what operators can be found in the property in the schema for the collection. Each property that allows filtering has the property `\"x-filterable\"` in combination with `operators` set. If you try to filter on something that isn’t allowed the server will respond with a status code 400.  #### Specifying Operator affinity If you want to control the operator affinity then you can use parentheses.  An example is: `?filter=name$eq:Joe$and:(city$like:*port$or:age$lt:40)`  #### URL Encoding URL parameter values should always be URL compatible. Always URL encode filter strings.  #### Filter Operators The possible filtering operators are:  | Operator   | Syntax | | --------   | ------ | |Equals | $eq:| |Not equals | $ne:| |Greater than | $gt:| |Greater than or equal | $gte:| |Less than | $lt:| |Less than or equal | $lte:| |Substring match | $like:| |And also | $and:| |Or else | $or:| |In | $in:| |Not In | $nin:|  #### Substring matching  The `$like:` operator supports both using wildcards (*) and not using wildcards. If no wildcards are used, the expression is considered a `contains` expression and effectively becomes a filter with a wildcard at the start of the string and one at the end of the string. This operator is only allowed on some properties.  #### Escaping special characters in your filter To not interfere with the parsing of the filter expression, certain escape sequences are necessary.  - “$” is escaped with “$$” - “(” is escaped with “$(” - “)” is escaped with “$)” - “*” is escaped with “$*” - “,” is escaped with “$,” - “[” is escaped with “$[” - “]” is escaped with “$]”  #### Using null values in your filter Should you want to filter for the nonexistence of a property (i.e. null value) you can use the null escape sequence.  `$null:`  #### Using in and not in operators To determine whether a specified value matches any value in (or not in) a list you filter using the `$in:` or `$nin:` operator. The list to filter by has to be enclosed in brackets and values separated by commas.  `customerNumber$in:[2,5,7,22,45]`   It is possible to also use the `$null:` keyword if you wish to include that in the filter. The max supported length of an array using the `$in:` or `$nin:` operator is 200.   ## Sorting  Sorting on strings is case insensitive.  ### Sort ascending  Sorting on collections can be done using the query string parameter ‘sort’.  ``` ?sort=name ```  ### Sort descending  The default sort direction is ascending, but this can be turned by prepending a minus (-).  ``` ?sort=-name ```  ### Sort by multiple properties  If you need to sort by multiple properties these can just be separated by commas. Mixing of directions is allowed.  ``` ?sort=-name,age ```  ### Sort alphabetically  In certain cases, you might want to enforce that even numeric values are sorted alphabetically, so 1000 is less than 30. In those cases, you can prepend the sort property with a tilde (~).  ``` ?sort=~name ```  #### Sortable properties Information about what properties are sortable can be found in the schema for the collection. Each property that allows sorting has the property `\"x-sortable\": true` set.   ## Pagination  When it comes to retrieving a collection of items, you can use two distinct approaches:  * **Cursor-based pagination** (continued loading of items using a `cursor` as a query parameter to get the next page of items)   * This is the recommended approach, and the one you should use by default.   * The endpoint naming scheme is **\"Retrieve all `Items`\"**. (Usage: `/{ITEM}?cursor={CURSOR_VALUE}`)   * The maximum number of items returned in a single call is defined in the `x-cursor-page-size` extension of the response type. Usually, the size is 1000, but in some cases, where we explicitly state so, it can be smaller.   * **Classic pagination** (limited functionality*. Specify `skippages` and `pagesize ` as query parameters to get a specific page of items)   * You should only consider using classic pagination, if you rely on loading pages (i.e. for list views or table/grid-based UI\'s).   * The endpoint naming scheme is **\"Retrieve a page of `Items`\"**. (Usage: `/{ITEM}/paged?skippages=0&pagesize=20`)       \\* It\'s important to note that there is a limit of 10.000 items using this approach. Any items outside of the first 10.000 items will not be loaded.  Please bear in mind that the two approaches are supported by **separate endpoints**. To use classic pagination, add `/paged` to your request URL.  If you need to know the total count of items that you can expect to get from your search, you can use a separate endpoint called **\"Retrieve the number of `Items`\"**.   You can also use the result of this endpoint to calculate the pagination navigation buttons for a table/grid-based UI.   ### Which approach should you use? We highly recommend that you use cursor-based pagination because: - It is more performant and offers much faster retrieval of items; - It can be used for very large collections of many thousands or millions of items, whereas classic pagination is limited to only returning 10.000 results, everything else is ignored;     Classic pagination is only appropriate when you have an app with a table/grid-based UI.  ### Cursor-based pagination  #### How it works  When you search for items in a large collection, the response will contain a first set of items and a cursor that you can use in a subsequent request to get the next series of items. This way you can retrieve the next set of items only when needed (if the first set suffices, you dont need to send a second request).  The first set of items usually consists of 1000 results, but in some cases, where we explicitly state so, there may be fewer.              Please note that the cursor is currently the `id` of the first `item` on the next set and it should not be mistaken for the number of items which are yet to be displayed. Also, if the cursor is not present in the response, it means that there are no more items in the results.  ##### Real world example  I want to retrieve all subscriptions.  1) I send a request to https://apis.e-conomic.com/subscriptionsapi/v1.0.0/subscriptions     and get back an array of 1.000 subscriptions, and a cursor with value 34781  2) I send a request for the next items in the resulting collection:    https://apis.e-conomic.com/subscriptionsapi/v1.0.0/subscriptions?cursor=34781    and get back an array of 1.000 subscriptions and a cursor with value 87695  3) I send a request for the next items in the result:    https://apis.e-conomic.com/subscriptionsapi/v1.0.0/subscriptions?cursor=87695    and get back an array of 56 items and no cursor.    No cursor means I have retrieved all the subscriptions, i.e. I have reached the end of the list.  #### Compound cursor pagination  We also provide compound cursor pagination for endpoints which return all sales document lines.  Usage: /{ITEM}?cursor={DOCUMENT_NUMBER}_{LINE_NUMBER}  This will return all the first 1000 items ordered by document number and by line number.  ##### Real world example  I want to retrieve all subscription lines  1) I send a request to `https://apis.e-conomic.com/subscriptionsapi/v1.0.0/subscriptionlines`    and get back an array of 1.000 lines and a cursor with value 20_100.     This means that the first 1000 lines belong to subscriptions 1-20 and stopped at line 99 (or whichever the last line before 100 was) of subscription 20.  2) I send a request for the next items in the resulting collection:    `https://apis.e-conomic.com/subscriptionsapi/v1.0.0/subscriptionlines?cursor=20_100`    and get back an array of 1.000 lines starting with subscription number 20, line number 100 and a cursor with value 70_25  3) I send a request for the next items in the result:    `https://apis.e-conomic.com/subscriptionsapi/v1.0.0/subscriptionlines?cursor=70_25`    and get back an array of 56 items and no cursor.  ### Classic pagination  If no parameters are used, the collection endpoint returns 20 items at a time. URL parameters allow you to increase this to up to 100 items or to skip pages if necessary.  ##### Real world example  I want to show a grid with page size of 50 and pagination navigation buttons.  1) I send a request to see how many subscriptions there are in the collection:      `https://apis.e-conomic.com/subscriptionsapi/v1.0.0/subscriptions/count`      I get the number of subscriptions in the collection, `2056`, and I can calculate the number of pages to be 2056 divided by 50 = 40 with 6 as remainder, meaning I have 41 pages total. I can then use this to present the user the navigation buttons.   2) I send a request to retrieve the first page of subscriptions that my user will see:      `https://apis.e-conomic.com/subscriptionsapi/v1.0.0/subscriptions/paged?pagesize=50&sort=-number`      with this I get back an array of 50 subscriptions, sorted by number in descending order.   3) Now if the user wants to see page number 6, I\'ll send a new request, skipping the first 5 pages to get the subscriptions from page number 6:      `https://apis.e-conomic.com/subscriptionsapi/v1.0.0/subscriptions/paged?pagesize=50&skippages=5&sort=-number`      I get back an array of 50 subscriptions that belong to page number 6 when sorting by number in descending order.    ### Number of items in a collection  As mentioned before we offer endpoint to get the count of items in the collection. You can also use this info for calculation of pagination navigation in case of classic pagination.  Example `https://apis.e-conomic.com/subscriptionsapi/v1.0.0/subscriptions/count`   ## HTTP Status Codes  The Open API returns these HTTP status codes.  | Code | Text                   | Description                                                  | | :--- | :--------------------- | :----------------------------------------------------------- | | 200  | OK                     | Everything is OK                                             | | 201  | Created                | When you create resources, this is what you get. This will be accompanied by the created resource in the body and a location header with a link to the created resource. | | 204  | No Content             | In certain cases there is nothing to return. So we will let you know by returning a 204. | | 400  | Bad Request            | The request you made was somehow malformed. A malformed request could be failed validation on creation or updating. If you try to filter on something that isn’t filterable this is also what you’ll see. Whenever possible we will also try to include a developer hint to help you get around this issue. | | 401  | Unauthorized           | The credentials you supplied us with weren’t correct, or perhaps you forgot them altogether. If an agreement has revoked the grant they gave your app, this is what you will see. | | 403  | Forbidden              | You won’t necessarily have access to everything. So even though you were authorized we might still deny access to certain resources. This depends on the roles asked for when the grant was issued. | | 404  | Not Found              | This is returned when you try to request something that doesn’t exist. This could be a resource that has been deleted or just a URL you tried to hack. If you see a lot of these, it could be an indication that you aren’t using the links provided by the API. You should never need to concatenate any URLs. The API should provide you with the links needed. | | 405  | Method Not Allowed     | Not all endpoints support all HTTP methods. If you try issue a PUT request to a collection resource this is what you get. | | 409  | Conflict               | The request cannot be completed due to a conflict with the current state of the target resource. Retrieve the resource/object and try the update again. This is needed in order to prevent you from rolling back another user\'s update. | | 415  | Unsupported Media Type | Our API is a JSON api. If you ask us to give you anything else, we give you this, and tell you why in the JSON body of the response. | | 500  | Internal Server Error  | We don’t like to see these, and they are flagged in our logs. When you see this, something went wrong on our end. Either try again, or contact our support. |   ## Required and Readonly Properties  Since OpenAPI allows client generation based on the specification, we decided to use the same model/schema in our for both read and write endpoints where possible.  This led us to chose not to have the Id/Number in the URL parameter for PUT requests, but to use the one from the body, so there is no confusion.  When a property is marked as `required` it means you need to provide a value on each POST and PUT requests.  When a property is marked as `readonly` it means you should provide the same value you get in the GET requests, or do not send the property in the JSON at all (skip it).  ## Resource encoding  All non-alphanumeric characters in resource URLs are standard URL encoded. Please refer to standard URL encoding.  ## Implementation specifics  Helpful details to know when implementing e-conomic REST.  ### Booleans  Booleans should only be expected to be represented in responses when true. A false boolean is omitted from response body. The same logic applies to write operations such as POST and PUT.  ### Nulling  We do not generally accept null as a value and a validation exception should be expected. To null a property you must exclude it from your JSON on the write operation.  ## Object version  ObjectVersion is the mechanism that enforces updates only on latest state of an object. ObjectVersion property is mandatory in Put Requests. ObjectVersion property is retrieved on Get Request and needs to be included in Put Request. If object was modified between Get and Put requests, Put request will fail with error code `409 Conflict`  ``` {   \"message\": \"Update conflict. Version does not match.\",   \"developerHint\": \"The resource has been updated by another user. Retrieve the resource/object and try the update again. This is needed in order to prevent you from rolling back another user\'s update.\",   \"logId\": \"09580053-1141-4e7f-85e1-bed8600e0278\",   \"logTimeUtc\": \"2021-11-04T09:07:56\",   \"property\": \"version\" } ```  ## Idempotency tokens  Idempotency tokens are unique keys that help maintain the integrity of operations on the API’s. These tokens prevent accidental duplication of requests, ensuring that the same operation is not performed multiple times, even if the same request is sent repeatedly.    When making a request, you can set `Idempotency-Key` header with your own unique value for that specific request. In case of a network failure, if you don\'t get the response, you can retry the request with the same value for the header. Our system will prevent duplicate requests, instead you will get the original response from our cache.     Keep in mind that this is cached for only **one hour** window.     When we return a response from the cache, we set a response header `X-ResultFromCache` to true.   It’s important to note that **you will be responsible for generating and keeping track of these keys**.   The [Idempotency Tokens feature](https://techtalk.e-conomic.com/idempotency-tokens-in-e-conomic-apis/) is not available for GET requests.  ## The LastUpdated property of resources The `LastUpdated` property shows the date when a resource was last updated. A resource is considered updated when any property in the model has been changed. If there aren’t any changes, `LastUpdated` will equal the creation date.   Please bear in mind that not all resources have a LastUpdated property. Also, sometimes the LastUpdated property is modified by changes to a different model, as is the case with sales documents. For example, when an invoice line is created, the LastUpdated field on the invoice is modified.   The main usage for this property is to help retrieve only data that has been changed within a certain interval. This will save processing and network time spent on the client side.   Usage example: https://apis.e-conomic.com/journalsapi/v5.0.0/the_resource?filter$eq:lastUpdated$gt:2024-02-24 This will return all resources which have been updated since 24.02.2024.        ## Custom extensions in OpenAPI specification  In the specification file, there are some custom extensions that developers can make use of when consuming endpoints. Those extensions are always prefixed by `x-`.  1) `x-required-roles`: The list of roles that are required for each group of endpoints. 2) `x-error-codes`: The list of error codes that are potentially returned from each group of endpoints. 3) `x-cursor-page-size`: The maximum number of items in `CursorResults` that can be returned in a single call.   # Authentication  <SecurityDefinitions />
 *
 * The version of the OpenAPI document: 5.0.0
 * Contact: api@e-conomic.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { DraftEntry } from './draft-entry';

/**
 * Array of objects along with a cursor.
 * @export
 * @interface DraftEntryCursorResults
 */
export interface DraftEntryCursorResults {
    /**
     * Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.<p style=\'font-style:italic;font-family:monospace;font-size:small;margin:0\'>Read-only: true</p><p style=\'font-style:italic;font-family:monospace;font-size:small;margin:0\'>Filterable: not filterable</p><p style=\'font-style:italic;font-family:monospace;font-size:small;margin:0\'>Sortable: false</p>
     * @type {string}
     * @memberof DraftEntryCursorResults
     */
    'cursor'?: string | null;
    /**
     * Max number of items returned is 1000.<p style=\'font-style:italic;font-family:monospace;font-size:small;margin:0\'>Filterable: not filterable</p><p style=\'font-style:italic;font-family:monospace;font-size:small;margin:0\'>Sortable: false</p>
     * @type {Array<DraftEntry>}
     * @memberof DraftEntryCursorResults
     */
    'items'?: Array<DraftEntry> | null;
}

