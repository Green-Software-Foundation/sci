## Scope

This document, the Software Carbon Intensity technical specification, describes how to calculate the carbon intensity of a software application. It describes the methodology of calculating the total carbon emissions and the selection criteria to turn the total into a rate that can be used to achieve real-world, physical emissions reductions, also known as abatement.

## References
### Normative References

<table>
  <caption>Normative References </caption>
  <tbody>
    <tr>
      <td><strong>[RFC2119]</strong></td>
      <td>"Key words for use in RFCs to Indicate Requirement Levels", S. Bradner, March 1997, URL:http://www.ietf.org/rfc/rfc2119.txt</td>
    </tr>
    <tr>
      <td><strong>[RFC5234]</strong></td>
      <td>"Augmented BNF for Syntax Specifications: ABNF", D. Crocker, Ed., P. Overell, January 2008, URL: https://tools.ietf.org/rfc/rfc5234.txt</td>
    </tr>
    <tr><td><strong>[RFC4122]</strong></td>
    <td>"A Universally Unique IDentifier (UUID) URN Namespace",  Leach, Mealling, et al, July 2005, URL: https://www.ietf.org/rfc/rfc4122.txt</td>
    </tr>
    <tr><td><strong>[RFC3339]</strong></td>
    <td>"Date and Time on the Internet: Timestamps",  G. Klyne, et al, July 2002, URL: https://www.ietf.org/rfc/rfc3339.txt</td>
    </tr>
  </tbody>
</table>

### Informative References

|||
| ----------- | ----------- |
| **[GSFDICT]** | https://github.com/Green-Software-Foundation/Dictionary |
| **Principles of Green Software Engineering** | https://principles.green |

## Terminology and Conventions
### Conventions

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC2119].

All sections and appendixes, except "Scope" and "Introduction", are normative unless they are explicitly indicated to be informative.

### Definitions

<table>
  <caption></caption>
  <tbody>
    <tr>
	<td><strong>Marginal Carbon Intensity (I) </strong></td>
	<td>This is the emissions intensity of the marginal power plant which will be turned up if you schedule some compute (e.g. increase electricity demand from the grid) at that moment.</td>
    </tr>
    <tr>
	<td><strong>Carbon Delta (D)</strong></td>
	<td>Carbon difference between an initial and modified carbon intensity. This is an optional parameter used to capture a "what if", by comparing a real number against another situation. This allows quantification of carbon savings by using the SCI to compare two carbon intensities, and facilitates a singular statement of, "Over X predictions made, users on average reduced their carbon footprint by Z %</td>
    </tr>
  </tbody>
</table>

Kindly consult [GSFDICT] for more definitions used in this document.

### Abbreviations

<table>
<caption></caption>
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

## Software Sustainability Actions

All actions that can reduce the carbon emissions of a piece of software fall into one of three categories. The SCI specification intends to encourage more of these actions to be taken in developing software applications.

- **Energy Efficiency**: Actions taken to make software use less electricity to perform the same function.
- **Hardware Efficiency**: Actions taken to make software use less physical resources to perform the same function.
- **Carbon Awareness**: Actions taken to time or region-shift software computation to take advantage of clean, renewable or low carbon sources of electricity.

Carbon aware software will optimize the timing and location of operation to minimize emissions associated with operation. This could consist of moving computation to regions with cleaner grid emissions or delaying jobs to cleaner periods (or a combination of both). Energy efficient software will also run on hardware that requires less energy to operate or the software can be re-architected to require less energy to execute. All combined, these effects are reflected in the total operational emissions.

## Software Boundary

The calculation of software carbon intensity MUST include all supporting infrastructure and systems that significantly contributes to the software operation.

Supporting infrastructure and systems MAY include:
- compute resources
- storage
- networking equipment
- memory
- monitoring
- idle machines
- logging
- scanning
- build and deploy pipelines
- testing
- training ML models
- operations
- backup
- resources to support redundancy
- resources to support failover

The entity calculating software carbon intensity MUST report what is included within this boundary.

## Methodology Summary

This standard can be used to calculate the real-world emissions associated with software by measuring the total change in global emissions associated with a particular piece of software.

Electricity has a carbon intensity depending on where and when it is consumed. An intensity is a rate. It has a numerator and a denominator. A rate provides you with helpful information when considering the growth of a software product and allows for the computation of a marginal rate.

To calculate the carbon intensity the following information is needed:

`O`= Operational emissions of a given piece of software

`E`= Energy consumed by a given piece of software

`I`= Location-based marginal carbon emissions

`O = E * I ` = Operational emissions based on energy consumption (E) and location-based carbon intensity measurement (I)

`M` = Embodied emissions of a given piece of software
****
**These are used to calculate total carbon emissions (`C`) and carbon intensity (`CI`):**

`C = O + M ` = Total amount of carbon the software is emitting over a time period

`R` = Baseline as a denominator (e.g. carbon per additional user, API-call, ML job, etc)

**carbon intensity (`CI`) compares this carbon against a baseline :**

`CI = C / R` = Total carbon intensity rate per baseline

**carbon delta (`D`) is the difference between two carbon intensities :**

`D = CI(initial) - CI(modified)` = Carbon difference between an initial and modified carbon intensity, and is an optional parameter to quantify gains from implementation of Green Software Engineering methods.

### Lab-based alternatives to Real-world measurements
The goal is to calculate how much `C` is emitted per **one unit** of `R`. This is the carbon intensity of your software with respect to `R`.

First, you decide on your baseline unit, your choice of `R`. Then you calculate how much `C` is emitted per unit of `R`.

You MAY achieve this by measuring the total real-world carbon emissions of your component `C` over a time period and dividing by the number of `R` units in the same time period to get `C` per `R`. For instance, you may measure data regarding the real-world usage of your application "in the wild" and then divide by the number of users serviced in the same time period to get `C` per `User`.

Or, you MAY model what one unit of `R` looks like and measure the total `C` for executing one unit of `R` in a controlled lab environment. For instance, you may create a benchmark application that models a `User` interacting with your application and then measure the `C` emitted per run of that benchmark. The result is still a `C` per `User`.

You MAY need to use a mixture of both for some components in your application using real-world measurements and for others using a lab-based model of `R`. However, you MUST use a consistent choice of `R` across all your components.

### Operational Emissions  (`O`)
To calculate the operational emissions associate with software, multiply the electricity consumption of the hardware the software is running on by the regional, granular marginal emissions rate. Because this standard uses a consequential approach, marginal emissions rates should be used for electricity consumption. The marginal emissions rate reflects the change in emissions associcated with a change in demand.

#### Energy Measurement (`E`)
This is a measurement of the energy consumed by a given piece of software for a given task. This must be a measurement of energy consumption in kilowatt hours (kWh) of all supporting infrastructure and systems. This could be applied to several taxonomies:
- Datacenter
- Individual machine (e.g. VM/Node)
- Individual service (e.g. API call, ML training job)
- Execution of code

#### Location-Based Marginal Carbon Intensity Measurement (`I`)
The carbon intensity of electricity is a measure of how much carbon (CO2eq) emissions are produced per kilowatt-hour (kWh) of electricity consumed, for a standard unit of gCO2eq/kWh. This requires 'Marginal' carbon (defined above), and This is the emissions intensity of the marginal power plant which will be turned up if you schedule some compute (e.g. increase electricity demand from the grid) at that moment.

Location-based measures the grid carbon intensity (annual average) of a regional balancing authority. From a developer perspective, only the location-based info is important for having an impact on reducing carbon emissions. This excludes market-based measures, and is distinct from 100% renewable energy claims.

The only figure that matters if you’re trying to optimize the scheduling of your compute in real-time is the marginal emissions intensity. This is the emissions intensity of the marginal power plant which will be turned up if you schedule some compute (e.g. increase electricity demand from the grid) at that moment.

### Embodied Emissions  (`M`)
Embodied carbon (otherwise referred to as “Embedded Carbon”) is the amount of carbon emitted during the creation and disposal of a hardware device.

When software runs on a device, a fraction of the total embodied emissions of the device is allocated to the software. This is the value of `M` that you need to calculate in the SCI equation.

This fraction consists of both a time-share and a resource-share. The length of time your software runs on the device determines the time-share. The percentage of the device reserved just for your application during the time-share determines your resource-share.

To calculate the time-share, amortize the total embodied carbon over the expected life span of your device and then extrapolate based on the time reserved for your usage. For example, if the device’s embodied carbon was 1000kg with an expected lifespan of 4 years and you reserved use for 1hr, the time-share embodied emissions would be 1000 * 1/(4\*365\*24) or around 28g of the total.

To calculate resource-share, we look at the share of total available resources reserved for use by your software. For instance, the percentage of total virtual CPUs reserved for your software is a good choice for the resource-share metric in the virtualized cloud space.

To calculate the share of `M` for a software application, we use:

`M = TE * (TR/EL) * (RR/TR)`

Where:

- `TE` = Total Embodied Emissions, the sum of LCA emissions for all hardware components.
- `TR` = Time Reserved, the length of time the hardware is reserved for use by the software.
- `EL` = Expected Lifespan, the anticipated time that the equipment will be installed.
- `RR` = Resources Reserved, the number of resources reserved for use by the software.
- `TR` = Total Resources, the total number of resources available.

We can further refine the equation to

`M = TE * TS * RS`

Where:

- `TE` = Total Embodied Emissions, the sum of Life Cycle Assessment (LCA) emissions for all hardware components.
- `TS = TR/EL` = Time-share, the share of the total life span of the hardware reserved for use by the software.
- `RS = RR/TR` = Resource-share, the share of the total available resources of the hardware reserved for use by the software.

You MUST include an estimate of all the embodied emissions for the hardware used within your software boundary.

You MAY use simple models to estimate embodied emissions; however, you SHOULD use the most granular data possible and ideally emissions data from a devices life cycle analysis when calculating your embodied carbon.


### Preset List for Baselines
[placeholder]

## Core Characteristics

As the SCI specification matures and develops, these core characteristics MUST remain true.

### The SCI is sensitive to carbon awareness, energy efficiency, or hardware efficiency

- The purpose of the SCI is to encourage actions that reduce the carbon emissions of software. Therefore, the SCI MUST be sensitive to those actions described in this document under **Software Sustainability Actions**, precisely carbon awareness, energy efficiency, or hardware efficiency.
- If an application's SCI is X, and then actions are taken to make the application more carbon aware, more energy efficient, or more hardware efficient, the value of X MUST go down.

### The SCI takes a systems-footprint view

- The purpose of the SCI is to encourage actions that reduce carbon emissions of software in a way that create reductions at a system-wide level rather than just at a local level. Local level optimizations MAY lead to micro-improvements but MAY have negative downstream impacts at a macro-level that negate the impact of those actions.
- Such a systems view MUST be adopted by articulating the [boundaries](#boundaries) of the software and its associated infrastructure, keeping in mind the [exclusions](#exclusions) mentioned in this specification.

### The SCI is easy to implement

To achieve impact at scale, the SCI needs to encourage adoption through ease of implementation.

- Anyone without much experience or training MUST be able to follow the SCI specification instructions.
- Calculation of the SCI MUST be possible without incurring any cost, for instance, for data or services or tooling.
- Where possible, teams SHOULD consider investing more time or money in calculating their SCI number to increase its accuracy.

### The SCI encourages the use of granular data

In calculating the SCI value, you SHOULD use the highest granularity data available to you to compute each of `O`, `E`, `I`, and `M`. In cases where temporal granular data is not available, annual values SHALL be used which are the lowest acceptable level of granularity.

### Reporting the SCI value

- You MUST report the `CI` value and you SHOULD report the `C` value but if you are unable to report the `C` value, you MUST provide a reason for why you are unable to do so.
- You SHOULD use a value for `R` from the specified [preset list](#preset-list-for-baselines) to compute `CI` but if you choose to use another value for `R`, you MUST provide a reason for that choice.


## Boundaries

[placeholder]

## Exclusions

Because this standard lays out a consequential methodology for calculating the emissions associated with a piece of software, the following must not be included in the calculation:

### Market-based Measures
**“Market-based measures"** are achieved through renewables matching (e.g. PPA for solar near a datacenter) that helps lower the grid carbon intensity for everyone in the area. From a carbon accounting perspective PPAs, RECs etc can allow datacenters to get to “100% renewable”, even if the grid is not 100% renewable 24x7 from a grid perspective. Market-based measures includes, but is not limited to the following:
- Carbon offsets
- Electricity Attribute Certificates (EACs)
- Power Purchase Agreements (PPAs)
- Renewable Energy Credits (RECs)

### Infrastructure Measures
**“Infrastructure measures”** including any infrastructure that integrate renewables via a "direct wire connection" (e.g. a datacenter with solar panels on the roof and a battery storage located onsite). This is conceptually closer to a Microgrid, where there is a higher % of renewable energy usage than the local grid carbon intensity.

## Reporting Requirements
For an entity to be compliant with this specification, and implementing carbon transparency, certain reporting requirements MUST be met.

### Data elements to be reported
The following list contains the REQUIRED and OPTIONAL data elements to be reported. Some data elements are defined elsewhere in the specification as REQUIRED, and are included again for completeness.

| Name | Identifier | Optionality | Format | Notes |
| - | - | - | - | - |
| Supporting infrastructure and systems contained within the [Software Boundary](#software-boundary) | sci/software-boundary | MUST | List | An array of names, or an array of key-value pairs.
| [Software Carbon Intensity](#reporting-the-sci-value) - `CI`| sci/ci | MUST | Numeric | The [Software Carbon Intensity](#reporting-the-sci-value) of the entity itself.
| [Software Carbon Intensity](#reporting-the-sci-value) - `C`| sci/c | SHOULD | Numeric | Where `C` is not reported, a reason MUST be provided |
| [Software Carbon Intensity](#reporting-the-sci-value) - `C` comment where not provided | sci/c-missing-comment | SHALL | Text | This item SHALL be provided, only where the `sci/c` element is missing. It should describe the reason why `c` is missing. |
| [Software Carbon Intensity](#reporting-the-sci-value) - `R` baseline value| sci/r | MUST | Numeric |
| [Software Carbon Intensity](#reporting-the-sci-value) - `R` baseline source| sci/r-source | MUST | Text | The text should refer to one of the identifiers in the [pre-set list](#preset-list-for-baselines). If it does not, then a freetext comment SHALL be added in `sci/r-source-comment`. |
| [Software Carbon Intensity](#reporting-the-sci-value) - reason for not selecting `R` baseline from provided items| sci/r-source-comment | SHALL | Text | This item SHALL be provided, only where the `sci/r-source` element does not contain one of the identifiers in the [pre-set list](#preset-list-for-baselines). |
| Product Name, entity name, or Software Product | metadata/name | MUST | Text | |
| Contact name | metadata/contact-name | MUST | Text | The point of contact responsible and accountable for the report. |
| Contact email | metadata/contact-email | MUST | Text | The point of contact responsible and accountable for the report. |
| Organization | metadata/organization | SHOULD | Text | This SHALL be populated where the report is not by an individual contributor, otherwise it is not required. |
| GUID | metadata/guid | MUST | GUID | Following a format in [RFC4122], provided to uniquely identify this particular product, resource, or service. |
| Version | metadata/version | MAY | Text | |
| Date of Calculation | metadata/calculation-date | MUST | Date | Following a format described in [RFC3339], [a subset](https://ijmacd.github.io/rfc3339-iso8601/) of ISO 8601 |
| Further information on calculation | metadata/calculation-information | MAY | Text | More information on your calculation methodology can be provided as freetext, or as a URL to an external document or software repository. |
| Further information on report | metadata/report-information-url | MAY | URL | More information on your calculation methodology may be provided, and this SHALL be a URL to an external document or software repository.  |


<!--

- Supporting infrastructure and systems contained within the [Software Boundary](#software-boundary)
-
  - `CI` MUST be reported
  - `C` SHOULD be reported, but where it is not reported, a reason MUST be provided
  - The `R` baseline used MUST be reported
  - If the `R` baseline used wa not selected from the  for baselines, then a reason for that choice MUST be provided
- Metadata for the SCI value being reported
  - Product name MUST be reported
  - Contact details, including a name and email, for a point of contact responsible for the report MUST be provided
  - Organization SHOULD be provided, where the report is not by an individual contributor
  - A GUID, following a format described in [RFC4122], MUST be provided to uniquely identify this particular product, resource, or service.
  - A software version for the software product about which this report is made, MAY be provided.
  - The date the calculation was made, following a format described in [RFC3339], MUST be provided.
  - More information on your calculation methodology MAY be provided, as a freetext comment, limited to 300 characters.
  - More information on your report MAY be provided, as a URL linking to an external document or software repository.


-->

### Data format for reporting
The format of your report MUST be machine readable, and SHOULD be in a commonly used format. Examples of commonly used formats include YAML and JSON.

Examples of valid machine-readable submissions can be found in Appendix A.

You MAY link to a human readable representation of your report in the further information field, for example, in HTML or PDF format, to provide additional context to your report, or the calculation behind your report.

This human-readable representation SHALL live outside the GSF, and MAY be referenced in the metadata for your report.

### Submitting a report
Reports can be made to the `GSF`  using a [Pull Request](https://guides.github.com/introduction/flow/).

Only one machine readable submission MUST exist per unique GUID. Each GUID MUST reference and relate to only one product name.

When a new SCI report is made, to replace an existing report for a unique product or entity, the pull request MUST update or replace the same file.

Each report must be placed into a unique folder, named after the GUID associated with the product or entity.

[Pull Requests](https://guides.github.com/introduction/flow/) should point at this repository:
``` NOTE - ADD GH REPO URL HERE ```