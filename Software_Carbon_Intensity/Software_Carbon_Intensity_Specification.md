# Software Carbon Intensity (SCI) Specification (v.Alpha)

## Scope

This document, the Software Carbon Intensity technical specification, describes a methodology for calculating the rate of carbon emissions for a software system. The purpose is to help users and developers make informed choices about which tools, approaches, architectures, and services they can use to minimize carbon emissions.

## Versions

### Version Alpha

The goal of the Alpha release of the Software Carbon Intensity (SCI) Specification is to agree on a baseline understanding of how to calculate an SCI score. The core characteristics, exclusions, software boundaries, and the methodology associated with the calculation. The intention is to gather feedback through the application of the SCI to various case studies and use cases.

Alpha signals that we are ready for early feedback, that this is not the final version and that this will change based on the feedback. It’s a milestone on the journey to 1.0.

## Introduction

> "If you can't measure it, you can't improve it." - Peter Drucker

Software systems cause emissions through the hardware that it operates on, both through the energy the hardware consumes and the emissions associated with manufacturing the hardware. The Software Carbon Intensity (SCI) Specification defines a methodology for calculating the rate of carbon emissions for a software system. The purpose is to help users and developers make informed choices about which tools, approaches, architectures, and services they use in the future. It is a score rather than a total; lower numbers are better than higher numbers, and reaching 0 is impossible. This specification is focused on helping users and developers understand how to improve software to avoid the creation of emissions.

Reducing an SCI score is only possible through the elimination of emissions through changes to a software system to use less physical hardware, less energy, or consume lower-carbon energy sources. Neutralization or avoidance offsets do not reduce an SCI score ([see exclusions section](#exclusions)). This makes the SCI an ideal strategy organizations can adopt to meet climate targets focussed on eliminating emissions, such as a [Net-zero target](https://sciencebasedtargets.org/net-zero).

The SCI is for everyone. It is possible to calculate an SCI score for any software application, from a large distributed cloud system to a small monolithic open source library, any on-premise application or even a serverless function. The product or service may be running in any environment, whether a personal computer, private data center or a hyperscale cloud.

As software practitioners, we all have a significant role to play in collectively reducing the SCI Score during the design, development and delivery of software applications. The following list provides some strategies that can be used to reduce the SCI score across software roles. 
- For a software programmer, this would imply writing energy efficient code.
- For a AL/ML developer it would imply model optimization, using pre-trained models or leveraging optimized hardwares for training
- For database engineer, this would comprise of choices like schema design, choice of storage, query optimizations.
- For DevOps, this would require creating a carbon-aware pipeline, when to schedule builds and leverage clean energy.
- For QA engineers, it would be about creating energy efficient test automation and performance testing scripts across browsers and devices.
- For an architect, this would imply choices like serverless or event driven architectures, infrastructure optimization, and design for carbon-aware systems.

The SCI encourages calculation using granular real-world data, which is challenging to obtain in some of these environments, particularly the public cloud. The Green Software Foundation is committed to ensuring everyone has free and open access to the data sources needed to calculate the SCI at lower resolutions and will provide tools and guidance for getting this information wherever systems are hosted. Access to the data needed for higher resolution calculations, however, may not always be available. Where this is the case, we strongly advise speaking to your suppliers (be they hardware, hosting or other) and requesting it.

In situations where there is a lack of access, capability, or rights to the necessary real-world data the SCI allows for data generated through modeling using best estimates instead.

## Software Sustainability Actions

All actions that can reduce the carbon emissions of a piece of software fall into one of three categories. The SCI specification intends to encourage more of these actions to be taken in developing software applications.

- **Energy Efficiency**: Actions taken to make software use less electricity to perform the same function.
- **Hardware Efficiency**: Actions taken to make software use less physical resources to perform the same function.
- **Carbon Awareness**: Actions taken to time or region-shift software computation to take advantage of clean, renewable or low carbon sources of electricity.

## Procedure

The steps required to calculate and report an SCI score are:


1. **Bound**: Decide on the [software boundary](#software-boundary), i.e. the components of a software system to include.
1. **Scale**: The SCI is a rate, carbon emissions per one [functional unit](#functional-unit-r). The next step is to pick the functional unit which best describes how the application scales.
1. **Define**: For each software component listed in the software boundary, decide on the [quantification method](#quantification-method), real-world measurements based on telemetry, or lab-based measurements based on models.
1. **Quantify**: Calculate a rate, an SCI value, for every software component. The SCI value of the whole application is the sum of the SCI values for every software component in the system.
1. **Report**. The SCI has standards for reporting that must be met, including a disclosure of the software boundary and the calculation methodology.

## Methodology Summary

The Software Carbon Intensity (SCI) is a rate, carbon emissions per one unit of `R`. The equation used to calculate the SCI value of a software system is:

`SCI = C per R`

Where:

- The total amount of carbon `C` the software is causing to be emitted.
- All the elements in the SCI equation scale by the same Functional unit of `R` (e.g. carbon per additional user, API-call, ML job, etc).

This can be expanded to:

`SCI = (O + M) per R`

Where:
- `O` = Operational emissions based on energy consumption (E) and location-based carbon intensity measurement (I)
- `M` = Embodied emissions of a software system

### Operational Emissions  (`O`)
To calculate the operational emissions associate with software, multiply the electricity consumption of the hardware the software is running on by the regional, granular marginal emissions rate. The marginal emissions rate reflects the change in emissions associated with a change in demand.

To calculate the operational emissions `O` for a software application, we use:

`O = (E * I)`

Where:
- `E` = Energy consumed by a software system
- `I` = Location-based marginal carbon emissions

#### Energy (`E`)

This is the energy consumed by a software system for a functional unit of work. This could be applied to several taxonomies:  

- Datacenter
- Individual machine (e.g. VM/Node)
- Individual service (e.g. API call, ML training job)
- Execution of code

Units: this MUST be in kilowatt hours (kWh).

#### Location-Based Marginal Carbon Intensity (`I`)

The carbon intensity of electricity is a measure of how much carbon (CO2eq) emissions are produced per kilowatt-hour (kWh) of electricity consumed. Because this standard uses a impact-based approach, marginal emissions rates MUST be used for electricity consumption. 

Location-based marginal emissions factors measures the grid carbon intensity of a grid region. If your electricity consumption is connected to a grid, then you MUST use the marginal emissions rate of that grid, which excludes any [market-based measures](#market-based-measures). If your electricity consumption is not connected to a larger regional grid, you MUST use an approriate emissions factor for that system. From a developer perspective, only the location-based info is important for having an impact on eliminating carbon emissions. This excludes [market-based measures](#market-based-measures), and is distinct from 100% renewable energy claims.

The only figure that matters if you’re trying to optimize the scheduling of your compute in real-time is the marginal emissions intensity. This is the emissions intensity of the marginal power plant which will be turned up if you schedule some compute (e.g. increase electricity demand from the grid) at that moment.

Units: this MUST be in grams of carbon per kilowatt hours (gCO2eq/kWh).

### Embodied Emissions (`M`)

Embodied carbon (otherwise referred to as “Embedded Carbon”) is the amount of carbon emitted during the creation and disposal of a hardware device. 

When software runs on a device, a fraction of the total embodied emissions of the device is allocated to the software. This is the value of `M` that you need to calculate in the SCI equation.

This fraction consists of both a time-share and a resource-share. The length of time your software runs on the device determines the time-share. The percentage of the device reserved just for your application during the time-share determines your resource-share.

To calculate the time-share, amortize the total embodied carbon over the expected life span of your device and then extrapolate based on the time reserved for your usage. For example, if the device’s embodied carbon was 1000kg with an expected lifespan of 4 years and you reserved use for 1hr, the time-share embodied emissions would be 1000 * 1/(4\*365\*24) or around 28g of the total.

To calculate resource-share, we look at the share of total available resources reserved for use by your software. For instance, the percentage of total virtual CPUs reserved for your software is a good choice for the resource-share metric in the virtualized cloud space.

To calculate the share of `M` for a software application, we use:

`M = TE * (TR/EL) * (RR/TR)`

Where:

- `TE` = Total Embodied Emissions, the sum of Life Cycle Assessment (LCA) emissions for all hardware components.
- `TR` = Time Reserved, the length of time the hardware is reserved for use by the software.
- `EL` = Expected Lifespan, the anticipated time that the equipment will be installed.
- `RR` = Resources Reserved, the number of resources reserved for use by the software.
- `TR` = Total Resources, the total number of resources available.

We can further refine the equation to

`M = TE * TS * RS`

Where:

- `TE` = Total Embodied Emissions, the sum of LCA emissions for all hardware components.
- `TS = TR/EL` = Time-share, the share of the total life span of the hardware reserved for use by the software.
- `RS = RR/TR` = Resource-share, the share of the total available resources of the hardware reserved for use by the software.

You MUST include an estimate of all the embodied emissions for the hardware used within your software boundary.

You MAY use simple models to estimate embodied emissions; however, you SHOULD use the most granular data possible and ideally emissions data from a devices life cycle analysis when calculating your embodied carbon.

Since the purpose of the SCI is the elimination of emissions `M` MUST NOT include any any [market-based measures](#market-based-measures).

Units: this MUST be in grams of carbon (gCO2eq).

### Functional Unit Conversion

An aggregate SCI score can be composed of multiple component SCI scores.

Then as long as the Functional Unit of R is the same across all the component SCI scores, you can sum them up to calculate the aggregate SCI. To sum multiple component SCI scores into one aggregate score, the Functional Unit R MUST be the same across all components.

If the Functional Unit of a software component is not the same as the aggregate Functional Unit, then the component SCI score needs to be converted to match that of the aggregate SCI Functional Unit. You MUST disclose details of any unit conversion factors used in calculating your SCI score."

## Software Boundary

The first step in generating your SCI score is deciding what the boundaries of your software system are? What software components to include or exclude in the calculation of the SCI score.

The calculation of software carbon intensity MUST include all supporting infrastructure and systems that significantly contribute to the software operation.

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

If your boundary includes on-premise and/or cloud data center operations, E should take into account the efficiency of the data center, including cooling and other energy consumption necessary to operate a data center. The data center's energy efficiency is usually available as a PUE (Power Usage Effectiveness) value.

## Functional Unit (`R`)

The second step in generating your SCI score is deciding your functional unit. Your choice of functional unit describes how your application scales. First, you decide on your functional unit, your choice of `R`. Then you calculate how much `C` is emitted per unit of `R`.

For instance, if your application scales by User then pick a functional unit of User.

You MUST use a consistent choice of `R` across all the components in your software boundary.

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

## Quantification Method

The third step in generating your SCI score is deciding the approach to take when quantifying the carbon emissions for *each component* in your software boundary.

The goal of the SCI is to **quantify** how much `C` (carbon) is emitted per **one unit** of `R`.

There are two main approaches to quantifying carbon emissions (`C`), [measurement](#measurement) via real-world data or [calculation](#calculation) via models.

Each component in your software boundary MAY use either measurement or calculation to quantify the carbon emissions.

We strongly advise speaking to your suppliers (be they hardware, hosting, or other) and requesting the data you need in the resolution you require for quantifying your SCI score.

### Measurement

You MAY quantify carbon emissions by measuring the total real-world carbon emissions of your component (`C`) over a time period and dividing by the number of functional units (`R`) in the same time period to get `C` per `R`. For instance, you may measure data regarding the real-world usage of your application "in the wild" and then divide by the number of users serviced in the same time period to get `C` per `User`.

### Calculation

You MAY model what one unit of `R` looks like and calculate the total carbon (`C`) for executing one functional unit of work (`R`) in a controlled lab environment. For instance, you may create a benchmark application that models a `User` interacting with your application and then measure the `C` emitted per run of that benchmark. The result is still a `C` per `User`.

## Comparing a SCI Score to a Baseline

When taking an action to reduce the carbon intensity of a piece of software, the intensity SHOULD be compared to a baseline. The baseline MUST be calculated using an identical methodology to how the proposed SCI was calculated, except excluding the proposed action(s). The measurements, assumptions, models, functional unit, etc. MUST remain the same between the baseline and proposed SCI.

## Core Characteristics

As the SCI specification matures and develops, these core characteristics MUST remain true.

### The SCI is sensitive to carbon awareness, energy efficiency, or hardware efficiency

- The purpose of the SCI is to encourage actions that reduce the carbon emissions of software. Therefore, the SCI MUST be sensitive to those actions described in this document under **Software Sustainability Actions**, precisely carbon awareness, energy efficiency, or hardware efficiency.
- If an application's SCI is X, and then actions are taken to make the application more carbon aware, more energy efficient, or more hardware efficient, the value of X MUST go down.

### The SCI takes a systems-impact view

- The purpose of the SCI is to encourage actions that reduce carbon emissions of software in a way that create reductions at a system-wide level rather than just at a local level. Local level optimizations MAY lead to micro-improvements but MAY have negative downstream impacts at a macro-level that negate the impact of those actions.
- Such a systems view MUST be adopted by articulating the [boundaries](#software-boundary) of the software and its associated infrastructure, keeping in mind the [exclusions](#exclusions) mentioned in this specification.

### The SCI is easy to implement

To achieve impact at scale, the SCI needs to encourage adoption through ease of implementation.

- Anyone without much experience or training MUST be able to follow the SCI specification instructions.
- Calculation of the SCI MUST be possible without incurring any cost, for instance, for data or services or tooling.
- Where possible, teams SHOULD consider investing more time or money in calculating their SCI number to increase its accuracy.

### The SCI encourages the use of granular data

In calculating the SCI value, you SHOULD use the highest granularity data available to you to compute each of `O`, `E`, `I`, and `M`. In cases where temporal granular data is not available, annual values SHALL be used which are the lowest acceptable level of granularity.

## Exclusions

Our focus is elimination, not offsetting. One tonne of carbon eliminated, that means not emitted into our atmosphere, is not the same as one tonne of carbon that has been offset. By far the more preferable goal is never to have emitted the carbon in the first place.

Only actions that eliminate emissions reduce an SCI score. As such, you cannot reduce an SCI score through carbon offsets, such as [market-based measures](#market-based-measures).

### Market-based Measures

Market-based measures are financial instruments designed to neutralize, offset carbon emissions. Market-based measures include, but is not limited to the following:

- Carbon Offsets or Credits
- A Removal Unit (RMU)
- An Emission Reduction Unit (ERU)
- A Certified Emission Reduction (CER)
- Electricity Attribute Certificates (EACs)
- Power Purchase Agreements (PPAs)
- Renewable Energy Credits (RECs)

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

|                                              |                                                         |
| -------------------------------------------- | ------------------------------------------------------- |
| **[GSFDICT]**                                | https://github.com/Green-Software-Foundation/Dictionary |
| **Principles of Green Software Engineering** | https://principles.green                                |

## Terminology and Conventions
### Conventions

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC2119].

All sections and appendixes, except "Scope" and "Introduction", are normative unless they are explicitly indicated to be informative.
