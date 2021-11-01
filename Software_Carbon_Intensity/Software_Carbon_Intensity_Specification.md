## Scope

This document, the Software Carbon Intensity technical specification, describes how to calculate the carbon intensity of a software application. It describes the methodology of calculating the total carbon emissions and the selection criteria to turn the total into a rate that can be used to achieve real-world, physical emissions reductions, also known as abatement.

## Versions

### Version Alpha

The goal of the Alpha release of the Software Carbon Intensity (SCI) Specification is to agree on a baseline understanding of how to calculate an SCI score. The core characteristics, exclusions, software boundaries, and the methodology associated with the calculation. The intention is to gather feedback through the application of the SCI to various case studies and use cases.

Alpha signals that we are ready for early feedback, that this is not the final version and that this will change based on the feedback. It’s a milestone on the journey to 1.0.

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

> "If you can't measure it, you can't improve it." - Peter Drucker

The Software Carbon Intensity (SCI) Specification defines a methodology for calculating the rate of carbon emissions for a software system. The purpose is to help users and developers make informed choices about which tools, approaches, architectures, and services they use in the future. It is a score rather than a total; lower numbers are better than higher numbers, and reaching 0 is impossible.

The SCI is for everyone. It is possible to calculate an SCI score for any software application, from a large distributed cloud system to a small monolithic open source library, any on-premise application or even a serverless function. The product or service may be running in any environment, whether a personal computer, private data center or a hyperscale cloud. 

Reducing an SCI score is only possible through changes to a software system to use less physical hardware, less energy, or consume lower-carbon energy sources. Neutralisations such as carbon offsets do not reduce an SCI score ([see exclusions section](#exclusions)).

The SCI encourages calculation using granular real-world data, which is challenging to obtain in some of these environments, particularly the public cloud. The Green Software Foundation is committed to ensuring everyone has free and open access to the data sources required to calculate the SCI at lower resolutions and will provide tools and guidance for getting this information wherever systems are hosted. Access to the data needed for higher resolution calculations, however, may not always be available. Where this is the case, we strongly advise speaking to your suppliers (be they hardware, hosting or other) and requesting it.

Suppose, there is a lack of access, capability, or rights to the necessary real-world data. In that case, the SCI allows for data generated through modeling using best estimates instead.

The steps required to calculate and report an SCI score are:

1. **What**: Decide on the software boundary, i.e. the components of a software system to include.
1. **Scale**: The SCI is a rate, carbon emissions per one functional unit. The next step is to pick the functional unit which best describes how the application scales. 
1. **How**: For each software component listed in the software boundary, decide on the measurement method, real-world measurements based on telemetry, or lab-based measurements based on models.
1. **Measure**: Calculate a rate, an SCI value, for every software component. The SCI value of the whole application is the sum of the SCI values for every software component in the system.
1. **Report**. The SCI has standards for reporting that must be met, including a disclosure of the software boundary and the calculation methodology.

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

## Methodology Summary 

The Software Carbon Intensity (SCI) is a rate, carbon emissions per one unit of `R`. The equation used to calculate the SCI value of a software system is:

`SCI = ((E * I) + M) per R`

Where:

- `E` = Energy consumed by a software system

- `I`= Location-based marginal carbon emissions

- `M` = Embodied emissions of a software system

- `R` = Functional unit (e.g. carbon per additional user, API-call, ML job, etc) 

The equation can be further refined to 

`SCI = (O + M) per R`

Where:

- `O = E * I` = Operational emissions based on energy consumption (E) and location-based carbon intensity measurement (I)

And once more this can be further refined into:

`SCI = C per R`

Where:

- `C = O + M` = Amount of carbon the software is emitting.

### Operational Emissions  (`O`) 
To calculate the operational emissions associate with software, multiply the electricity consumption of the hardware the software is running on by the regional, granular marginal emissions rate. Because this standard uses a consequential approach, marginal emissions rates SHOULD be used for electricity consumption. The marginal emissions rate reflects the change in emissions associcated with a change in demand. 

#### Energy Measurement (`E`) 
This is a measurement of the energy consumed by a given piece of software for a given task. This MUST be a measurement of energy consumption in kilowatt hours (kWh) of all supporting infrastructure and systems. This could be applied to several taxonomies:  
- Datacenter
- Individual machine (e.g. VM/Node)
- Individual service (e.g. API call, ML training job)
- Execution of code 

#### Location-Based Marginal Carbon Intensity Measurement (`I`)
The carbon intensity of electricity is a measure of how much carbon (CO2eq) emissions are produced per kilowatt-hour (kWh) of electricity consumed, for a standard unit of gCO2eq/kWh. This requires 'Marginal' carbon (defined above), and this is the emissions intensity of the marginal power plant which will be turned up if you schedule some compute (e.g. increase electricity demand from the grid) at that moment.

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

### Preset List for Functional Units (R)
Your choice of functional unit describes how your application scales. For instance if your application scales by User then pick a functional unit of User.
	
	A suggested list of functional units includes:
- API call/request 
- Benchmark 
- User
- Machine
- Minute/time unit
- Device
- Physical site
- Data volume
- Batch/Scheduled Job 
- Transaction
- Database read/write


### Lab-based alternatives to Real-world measurements
The goal is to calculate how much `C` is emitted per **one unit** of `R`. This is the carbon intensity of your software with respect to `R`.

First, you decide on your functional unit, your choice of `R`. Then you calculate how much `C` is emitted per unit of `R`. 

You MAY achieve this by measuring the total real-world carbon emissions of your component `C` over a time period and dividing by the number of `R` units in the same time period to get `C` per `R`. For instance, you may measure data regarding the real-world usage of your application "in the wild" and then divide by the number of users serviced in the same time period to get `C` per `User`.

Or, you MAY model what one unit of `R` looks like and measure the total `C` for executing one unit of `R` in a controlled lab environment. For instance, you may create a benchmark application that models a `User` interacting with your application and then measure the `C` emitted per run of that benchmark. The result is still a `C` per `User`.

You MAY need to use a mixture of both for some components in your application using real-world measurements and for others using a lab-based model of `R`. However, you MUST use a consistent choice of `R` across all your components.

## Core Characteristics

As the SCI specification matures and develops, these core characteristics MUST remain true.

### The SCI is sensitive to carbon awareness, energy efficiency, or hardware efficiency

- The purpose of the SCI is to encourage actions that reduce the carbon emissions of software. Therefore, the SCI MUST be sensitive to those actions described in this document under **Software Sustainability Actions**, precisely carbon awareness, energy efficiency, or hardware efficiency.
- If an application's SCI is X, and then actions are taken to make the application more carbon aware, more energy efficient, or more hardware efficient, the value of X MUST go down.

### The SCI takes a systems-impact view

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


## Exclusions

Because this standard lays out a consequential methodology for calculating the emissions associated with a piece of software, the following MUST NOT be included in the calculation: 

### Market-based Measures 
**“Market-based measures"** are achieved through renewables matching (e.g. PPA for solar near a datacenter) that helps lower the grid carbon intensity for everyone in the area. From a carbon accounting perspective PPAs, RECs etc can allow datacenters to get to “100% renewable”, even if the grid is not 100% renewable 24x7 from a grid perspective. Market-based measures includes, but is not limited to the following: 
- Carbon offsets 
- Electricity Attribute Certificates (EACs) 
- Power Purchase Agreements (PPAs)
- Renewable Energy Credits (RECs)

### Infrastructure Measures 
**“Infrastructure measures”** including any infrastructure that integrate renewables via a "direct wire connection" (e.g. a datacenter with solar panels on the roof and a battery storage located onsite). This is conceptually closer to a Microgrid, where there is a higher % of renewable energy usage than the local grid carbon intensity.
