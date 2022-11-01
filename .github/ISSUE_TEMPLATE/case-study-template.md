---
name: Case-study template
about: This is a template to use for case studies that are submitted to apply the
  SCI.
title: Test case submission
labels: Case-study submission
assignees: atg-abhishek, Henry-WattTime

---

# Case Study Template

*This is a template to use for case studies that are submitted to apply the SCI. *

*Please delete the text in italics and replace it with the appropriate information.*

*For more information on any of the items, the final reference is the [SCI Specification](https://github.com/Green-Software-Foundation/software_carbon_intensity/blob/main/Software_Carbon_Intensity/Software_Carbon_Intensity_Specification.md)*

*If you find errors, or have further questions, please feel free to engage with us in the [discussions](https://github.com/Green-Software-Foundation/software_carbon_intensity/discussions) section.*

## Overview

_Please provide information describing the use case in a few bullet points_

## Architecture for the system under consideration

_An architecture diagram of the system described in this use case_

### Technical details of the components in the architecture

_Textual description with technical details of each component provided in the architecture diagram_

## Sites for Software Sustainability Actions

_For each of the following sub-sections, indicate **where** and **how** actions can be taken in the following categories_:

### Energy Efficiency 

1. _site of action_
2. _description of the action_

### Hardware Efficiency

1. _site of action_
2. _description of the action_

### Carbon Awareness

1. _site of action_
2. _description of the action_

## Procedure

### (What) Software boundary

_Describe the components that are included in the software systems, if any major components are not included then please provide **reasons for exclusion**_.

For example:
- Front end mobile application
- Network traffic between client mobile applications and servers
- Network traffic between servers and database
- Back-end servers.
- Databases
- Test infrastructure

### (Scale) Functional unit 

_Describe the [functional unit](https://github.com/Green-Software-Foundation/software_carbon_intensity/blob/main/Software_Carbon_Intensity/Software_Carbon_Intensity_Specification.md#functional-unit-r) that best controls the scaling of the software system.
 
The choice of functional unit applies to all components in your software boundary. 

For example:
- per API Call
- per User
_

### (How) Quantification method

_For each software component in your software boundary, decide whether you are going to **measure** using real-world data or **calculate** an estimate via models, provide a reason and any useful details for each choice.

For example:
- Front-end mobile application. 
 - Calculate an estimate using a model that represents a single user using the application. 
 - We do not have the right to export real-world measurements from individuals mobiles.

- Back-end servers
 - Calculate an estimate of the energy consumption using models which take as input the CPU utilization of servers.
 - Calculate an estimate of the embodied carbon using the Treads low-resolution models based on AWS data.

_Also, describe the reason for your choice_

### (Quantify) SCI Value Calculation

_Show your work! For each of the component of your software system, show how you arrived at the SCI value._

_Guidance for this is available in the [Methodology summary](https://github.com/Green-Software-Foundation/software_carbon_intensity/blob/main/Software_Carbon_Intensity/Software_Carbon_Intensity_Specification.md#methodology-summary) section._

### (Report) 

_Disclose the software boundary and your calculation methodology, including items that you might not have included in the previous sections_
