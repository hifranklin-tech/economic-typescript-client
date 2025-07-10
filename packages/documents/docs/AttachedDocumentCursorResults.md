# AttachedDocumentCursorResults

Array of objects along with a cursor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | **string** | Use this continuation cursor in a request back to continue the list. In case there are no more items to retrieve, the cursor is not returned at all.&lt;p style&#x3D;\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\&#39;&gt;Read-only: true&lt;/p&gt;&lt;p style&#x3D;\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\&#39;&gt;Filterable: not filterable&lt;/p&gt;&lt;p style&#x3D;\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\&#39;&gt;Sortable: false&lt;/p&gt; | [optional] [readonly] [default to undefined]
**items** | [**Array&lt;AttachedDocument&gt;**](AttachedDocument.md) | Max number of items returned is 1000.&lt;p style&#x3D;\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\&#39;&gt;Filterable: not filterable&lt;/p&gt;&lt;p style&#x3D;\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\&#39;&gt;Sortable: false&lt;/p&gt; | [optional] [default to undefined]

## Example

```typescript
import { AttachedDocumentCursorResults } from 'economic-documents-client';

const instance: AttachedDocumentCursorResults = {
    cursor,
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
