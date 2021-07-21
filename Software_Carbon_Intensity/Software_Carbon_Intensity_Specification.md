## Scope

This document, the Software Carbon Intensity technical specification, describes how to calculate the carbon intensity of a software application. It describes the methodology of calculating the total carbon emissions and the selection criteria to turn the total into a rate that can be used to achieve real-wold, physical emissions reductions, also known as abatement.

Electricity has a carbon intensity depending on where and when it is consumed. An intensity is a rate. It has a numerator and a denominator. A rate provides you with helpful information when considering the growth of a software product. This specification describes the carbon intensity of a software application or service.

## References
### Normative References

```
The policy for reference lists is:
1. GSF documents listed should have at least one approved version – draft-only docs should not be referenced.
An exception exists for documents approved with or after the referenced doc is approved (maybe part of the same enabler package). In short – approved docs should not reference unapproved docs.
2. The name + version (no date) for GSF specifications are generally sufficient – dates should be used only if there is a specific reason to limit the usage.
3. References to other affiliate docs should similarly provide sufficient information to uniquely determine the needed document and should provide the appropriate source information.
4. The URL for GSF material (new GSF and affiliate) should always be http://www.greensoftware.foundation
    
Models to use:
	[REFLABEL]	<General Model> "Ref Title", Ref information (source, date, id), URL:http//<ref-source>/ 
	[GSFDOC]	<GSF Model> "GSF Document Title",{ Version x.y,} Green Software Foundation™, GSF <docname>{    <version>}, URL:http//www.openmobilealliance.org/ 

If there are no entries in the table – enter 'none' to be precise.

DELETE THIS COMMENT
```
<table>
  <caption>Normative References </caption>
  <tbody>
    <tr>
      <td><strong>[RFC2119]</strong></td>
      <td>"Key words for use in RFCs to Indicate Requirement Levels", S. Bradner, March 1997, URL:http://www.ietf.org/rfc/rfc2119.txt</td>
    </tr>
    <tr>
      <td><strong>[RFC5234]</strong></td>
      <td>"Augmented BNF for Syntax Specifications: ABNF", D. Crocker, Ed., P. Overell, Janury 2008, URL: https://tools.ietf.org/rfc/rfc5234.txt</td>
    </tr>
  </tbody>
</table>

```
Add/Remove reference rows as needed - DELETE This Row 
```

### Informative References

```
Check the version of the Dictionary you are using and update the reference below. Delete the [GSFDICT] entry if the Dictionary is not used. In general, use the latest
available version unless seeking alignment with an existing set of specifications.

DELETE THIS COMMENT
```
<table>
  <caption>Informative References </caption>
  <tbody>
    <tr>
      <td><strong>[GSFDICT]</strong></td>
      <td>"Dictionary for GSF Specifications", Version x.y, Green Software Foundation™, GSF-ORG-Dictionary-Vx_y, URL:http://greensoftware.foundation/</td>
    </tr>
  </tbody>
</table>

```
Add/Remove references as needed - DELETE This Row
```

## Terminology and Conventions
### Conventions

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC2119].

All sections and appendixes, except "Scope" and "Introduction", are normative unless they are explicitly indicated to be informative.

```
If needed, describe or declare using appropriate normative references the additional conventions that are used. DELETE THIS COMMENT
```

### Definitions

```
Add definitions in new rows of the following table as needed. The following examples show how dictionary references should be made as well as locally defined terms. This table should be maintained in sorted alphabetic order based on the labels of the terms.

Examples:
	Entity              Use definition #1 from [GSFDICT]
	Interactive Service Use definition from [GSFDICT]
	Local Term          The definition description would be presented directly

DELETE THIS COMMENT
```
<table>
  <caption>Definitions</caption>
  <tbody>
    <tr>
	<td><strong>Definition-1</strong></td>
	<td>Description definition-1</td>
    </tr>
    <tr>
	<td><strong>Definition-2</strong></td>
	<td>Description definition-2</td>
    </tr>
  </tbody>
</table>

```
Add/Remove definition rows as needed - DELETE This Row
```

Kindly consult [GSFDICT] for more definitions used in this document.

### Abbreviations

```
Add abbreviations as needed. No special notation should be made regarding terms copied from the Dictionary.  
The list should be maintained in alphabetic order. DELETE This Row
```

<table>
<caption>Definitions</caption>
<tbody>
  <tr>
    <td>GSF</td>
    <td>Green Software Foundation</td>
  </tr>
</tbody>
</table>

## Introduction

A carbon intensity is a rate of carbon emissions compared against another measure. The carbon intensity of electricity is carbon emissions per kWh. 

To calculate the carbon intensity we need to decide two things.

`C / R`

`C` = The total amount of carbon the software is emitting over a time period.

`R` = The other measure we will be comparing against.

## Taxonomy of Green Software

The taxonomy of Green Software is broadly split into these categories.

- **Carbon Aware Application**: Applications that change behaviour to use the cleanest energy possible, for instance a laptop that charged only when there is lots of renewable power currently being generated.
- **Energy Efficient Applications:** Applications that use less energy to perform the same function.
- **Hardware Efficient Applications:** Applications that use the least physical resources possible to perform their function.

## Characteristics for calculating total carbon emissions, C

### (1) `C` should be sensitive to carbon awareness, energy efficiency or hardware efficiency improvements to the application

The challenges with existing methods of calculation is that they are only sensitive to some of the above methods of making an application green. For instance there are methods of calculation of carbon emissions that are purely cost based, using those methods results in a value of C that will not not change if you make the application carbon aware or energy efficient.

For example if we calculate the total carbon emissions of an application as X, and then we make the application carbon aware, a characteristic of our methodology of calculation is that the value of X should go down. If we make the application more energy efficient the value of X should go down. If we make the application more hardware efficient, the value of X should go down.

## Comparison Measure, R
[placeholder]


### Version 1.0

```
This section provides a high level, concise and informative description of the main functionality supported in the initial version of the specification. The description should be brief; the target length should be a few paragraphs. 
When the enabler or reference release is finished, this description should be aligned with the final functionality. 

DELETE THIS COMMENT
```

### Version (x.y)

```
This section should be included for each new major or minor version of the specification.

It should provide a high level, concise and informative description of the new or modified functionality introduced in this version of the specification, compared to the previous version. The description should be brief, and the target length should be a few paragraphs. When the enabler or reference release is finished, this description should be 
aligned with the final functionality differences.

DELETE THIS COMMENT
```

#### Version (x.y.z)

```
Service indicator (z) for the document. It is incremented every time a corrective update is made to the approved document version by the WG. This section should describe the main changes made to the specification at a high level compared to the previous version. The description should be brief, and the target length should be one paragraph.

DELETE THIS COMMENT
```

## Sections As Needed

```
Sections for the normative specification text. Fill in as needed. The following validates the styles used for the headers. DELETE THIS COMMENT 
```

### Example Level 2
(Add text here.)

#### Example Level 3
(Add text here.)

##### Example Level 4
(Add text here.)

<figure>
	<img src="images/governance.svg" alt="GSF governance">
	<figcaption>GSF governance</figcaption> 
</figure>	


<table>
  <caption>Example Table</caption>
  <thead>
      <tr>
	  <th>Item</th>
	  <th>Function</th>
	  <th>Reference</th>
      </tr>	      
  </thead>	    
  <tbody>
    <tr>
	<td>Row 1</td>
	<td>Grid 1,1 data</td>
	<td>Grid 1,2 data</td>	    
    </tr>
    <tr>
	<td>Row 2</td>
	<td>Grid 2,1 data</td>
	<td>Grid 2,2 data</td>	    
    </tr>
  </tbody>
</table>

## Appendix Change History (Informative)

### Approved Version x.y History

<table>
    <caption>Approved Version x.y History</caption>
    <thead>
        <tr>
            <th>Reference</th>
            <th>Date</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>    
        <tr>
            <td>n/a</td>
            <td>n/a</td>
            <td>No prior version</td>
        </tr>
    </tbody>
</table>
