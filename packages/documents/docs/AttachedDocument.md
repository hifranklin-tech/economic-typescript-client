# AttachedDocument


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number** | **number** | The unique number of the attached document&lt;p style&#x3D;\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\&#39;&gt;Filterable: eq, ne, lt, lte, gt, gte, in, nin&lt;/p&gt;&lt;p style&#x3D;\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\&#39;&gt;Sortable: true&lt;/p&gt; | [optional] [default to undefined]
**note** | **string** | The note of the attached document&lt;p style&#x3D;\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\&#39;&gt;Filterable: not filterable&lt;/p&gt;&lt;p style&#x3D;\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\&#39;&gt;Sortable: false&lt;/p&gt; | [optional] [default to undefined]
**pageCount** | **number** | The number of pages of the attached document&lt;p style&#x3D;\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\&#39;&gt;Filterable: not filterable&lt;/p&gt;&lt;p style&#x3D;\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\&#39;&gt;Sortable: false&lt;/p&gt; | [optional] [default to undefined]
**voucherNumber** | **number** | The number of the voucher that the document is attached to&lt;p style&#x3D;\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\&#39;&gt;Filterable: eq, ne, lt, lte, gt, gte, in, nin&lt;/p&gt;&lt;p style&#x3D;\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\&#39;&gt;Sortable: false&lt;/p&gt; | [default to undefined]
**accountingYear** | **string** | The accounting year of the voucher that the document is attached to&lt;p style&#x3D;\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\&#39;&gt;Filterable: eq, ne, lt, lte, gt, gte, in, nin&lt;/p&gt;&lt;p style&#x3D;\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\&#39;&gt;Sortable: false&lt;/p&gt; | [default to undefined]
**file** | **File** | &lt;p style&#x3D;\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\&#39;&gt;Filterable: not filterable&lt;/p&gt;&lt;p style&#x3D;\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\&#39;&gt;Sortable: false&lt;/p&gt;&lt;p style&#x3D;\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\&#39;&gt;Max allowed file size: 9 MB&lt;/p&gt;&lt;p style&#x3D;\&#39;font-style:italic;font-family:monospace;font-size:small;margin:0\&#39;&gt;Allowed content types: application/pdf (&lt;strong&gt;.pdf&lt;/strong&gt;)&lt;/p&gt; | [default to undefined]

## Example

```typescript
import { AttachedDocument } from 'economic-documents-client';

const instance: AttachedDocument = {
    number,
    note,
    pageCount,
    voucherNumber,
    accountingYear,
    file,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
