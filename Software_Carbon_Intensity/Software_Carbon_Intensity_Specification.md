## Scope

This document, the Software Carbon Intensity technical specification, describes how to calculate the carbon intensity of a software application. It describes the methodology of calculating the total carbon emissions and the selection criteria to turn the total into a rate that can be used to achieve real-wold, physical emissions reductions, also known as abatement.

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
  <caption>Marginal </caption>
  <tbody>
    <tr>
	<td><strong>Marginal Carbon Intensity </strong></td>
	<td>This is the emissions intensity of the marginal power plant which will be turned up if you schedule some compute (e.g. increase electricity demand from the grid) at that moment.</td>
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

#### Problem Statement

The purpose of this specification will be to enable standardization across industry empowering individuals and organizations to make more informed choices in the software solutions that they pick. This solves the problem of incompatible and opaque metrics that are potentially _gameable_ today making it difficult for the end-consumer to make a choice that is aligned with what they are looking for in terms of meeting their environmental goals when purchasing / using software solutions. It will also help developers and users compare one software solution offering against another on environmental impacts.

#### Applications Of This Specification

The specification can be applied to any software to measure and reduce its carbon emissions by creating a standardized and practical methodology.

#### Target Audience

The target audience for this are technical stakeholders (e.g. software architects, developers, and maintainers) who ideally can use this as a methodology so that they can understand the characteristics of their software solution and minimize the associated emissions.


## Methodology Summary

This standard can be used to calculate the real-world emissions associated with software by measuring the total change in global emissions associated with a particular piece of software.

Electricity has a carbon intensity depending on where and when it is consumed. An intensity is a rate. It has a numerator and a denominator. A rate provides you with helpful information when considering the growth of a software product and allows for the computation of a marginal rate.

### Measurements of real-world emissions

`C` = Total Carbon Emissions, or the total amount of carbon the software is emitting over a time period

`CI` = Carbon intensity, or total carbon intensity rate per baseline

`R` = Baseline as a deomninator  (e.g. carbon per additional user, api-call, ML job, etc)

**Carbon intensity (`CI`) compares total carbon intensity (`C`) against a baseline (`R`).**

### Calculating the measurements
`C = O + M ` = Total amount of carbon the software is emitting over a time period

`CI = C / R` = Total carbon intensity rate per baseline

`R` = Baseline as a demoninator  (e.g. carbon per additional user, api-call, ML job, etc)

#### Underlying definitions of variables
Further information on calculating these variables is given below.

`O` = Operational emissions of a given piece of software

`E`= Energy consumed by a given piece of code at a given taxonomy

`I`= Location-based marginal carbon emissions

`O = E * I ` = Operational emissions based on energy consumption (E) and location-based carbon intensity measurement (I)

`M` = Embodied emissions of a given piece of software

## Taxonomy & Terminology of Green Software

Green Software broadly addresses emissions in these categories.

### Operational Emissions  (`O`)
To calculate the operational emissions associate with software, multiply the electricity consumption of the hardware the software is running on by the regional, granular marginal emissions rate. Because this standard uses a consequential approach, marginal emissions rates should be used for electricity consumption. The marginal emissions rate reflects the change in emissions assoicated with a change in demand.

Carbon aware software will optimize the timing and location of operation to minimize emissions associated with operation. This could consist of moving computation to regions with cleaner grid emissions or delaying jobs to cleaner periods (or a combination of both). Energy efficient software will also run on hardware that requires less energy to operate or the software can be re-architected to require less energy to execute. All combined, these effects should be reflected in the total operational emissions.

#### Energy Measurement (`E`)
This is a reflection of the energy consumption consumed by a given piece of software for a given task. This could be applied for several taxonomies:
- Datacenter
- Indiviudual machine (e.g. VM/Node)
- Indiviudual service (e.g. API call, ML training job)
- Execution of code

#### Location-Based Marginal Carbon Intensity Measurement (`I`)
The carbon intensity of electricity is a measure of how much carbon (CO2eq) emissions are produced per kilowatt-hour (kWh) of electricity consumed, for a standard unit of gCO2eq/kWh. This requires 'Marginal' carbon (defined above), and This is the emissions intensity of the marginal power plant which will be turned up if you schedule some compute (e.g. increase electricity demand from the grid) at that moment.

Location-based measures the grid carbon intensity (annual average) of a regional balancing authority. From a developer perspective, only the location-based info is important for having an impact on reducing carbon emissions. This excludes market-based measures, and is distinct from 100% renewable energy claims.

The only figure that matters if you’re trying to optimize the scheduling of your compute in real-time is the marginal emissions intensity. This is the emissions intensity of the marginal power plant which will be turned up if you schedule some compute (e.g. increase electricity demand from the grid) at that moment.

Some categories of applications that apply Operational Emissions (O):

- **Carbon Aware Application**: Applications that change behaviour to use the cleanest energy possible, for instance a laptop that charged only when there is lots of renewable power currently available.
- **Energy Efficient Applications:** Applications that use less energy, and thus causes less emissions, to perform the same function.



<!-- `Operational Emissions ('O') = Energy Measurement (kWh) * Marginal Carbon Intensity ` expressed as latex below using https://md-math.netlify.app/ -->
<img alt="Operational Emissions ('O') = Energy Measurement (kWh) * Marginal Carbon Intensity" src="https://render.githubusercontent.com/render/math?math=\underbrace{O%20=%20\overbrace{kWh}^\text{Energy%20Measurement%20('E')}%20*%20\overbrace{I}^\text{Marginal%20Carbon%20Intensity}}_\text{Operational%20Emissions}" />

### Embodied Emissions  (`M`)
[placeholder]

Some categories of applications that apply Embodied Emissions (Embodied):
- **Hardware Efficient Applications:** Applications that use the least physical resources possible to perform their function.

## Characteristics for calculating total carbon emissions (`C`)

#### C should be sensitive to carbon awareness, energy efficiency, or hardware efficiency improvements to the application

#### Calculating Total Emissions, C
Total emissions, C, is the sum of operational and embodied emissions.

Overall, if we calculate the total carbon emissions C of an application as X, and then we make the application carbon aware, a characteristic of the methodology of calculation is that the value of X should go down. If we make the application more energy efficient the value of X should go down. If we make the application more hardware efficient, the value of X should go down.

The challenges with existing methods of calculation is that they are only sensitive to some of the above methods of making an application green. For instance there are methods of calculation of carbon emissions that are purely cost based, using those methods results in a value of C that will not not change if you make the application carbon aware or energy efficient.

To calculate the carbon intensity (`CI`) we need to compare total emissions (`C`) against a baseline (`R`).

`R` = Baseline, the other measure we will be comparing against (baseline, or carbon counterfactual)

<!-- `Total Carbon Intensity ('CI') = C / R` expressed as latex below using https://md-math.netlify.app/ -->
<img alt="Total Carbon Intensity ('CI') = C / R" src="https://render.githubusercontent.com/render/math?math=\underbrace{CI%20=%20\overbrace{C}^\text{total%20emissions}%20/%20\overbrace{R}^\text{baseline%20emissions%20or%20carbon%20counterfactual}}_\text{total%20carbon%20intensity}" />

## Exclusions

Because this standard lays out a consequential methodology for calculating the emissions associated with a piece of software, the following must not be included in the calculation:

### Market-based Measures
**“Market-based measures"** are achieved through renewables matching (e.g. PPA for solar near a datacenter) that helps lower the grid carbon intensity for everyone in the area. From a carbon accounting perspective PPAs, RECs etc can allow datacenters to get to “100% renewable”, even if the grid is not 100% renewable 24x7 from a grid perspective. Market-based measures includes, but is not limited to the following:
- Carbon offsets
- Electricity Attribute Certificates (EACs)
- Power Purchase Agreements (PPAs)
- Renewable Energy Credits (RECs)

### Infrastructure Meaures
**“Infrastructure measures”** including any infrastructure that integrate renewables via a "direct wire connection" (e.g. a datacenter with solar panels on the roof and a battery storage located onsite). This is conceptually closer to a Microgrid, where there is a higher % of renewable energy usage than the local grid carbon intensity.




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
