# eShoppen - SCI Case Study

## Overview

* The eShop Web application is a web application built on Asp.Net .It is built with monolithic architecture and follows MVC Design pattern
* The application uses a relational database for storing data 
* The business use cases built demonstrates a simplified eCommerce site.
* The case study focuses on calculating the Software Carbon Intensity (SCI) value of the application **_at the app server level_** using the [formula](https://github.com/Green-Software-Foundation/software_carbon_intensity/blob/main/Software_Carbon_Intensity/Software_Carbon_Intensity_Specification.md#methodology-summary) as defined in the latest version of the [specification](https://github.com/Green-Software-Foundation/software_carbon_intensity/blob/main/Software_Carbon_Intensity/Software_Carbon_Intensity_Specification.md)

The Software Carbon Intensity (SCI) is a rate, carbon emissions per one unit of R. The equation used to calculate the SCI value of a software system is:

`SCI = ((E * I) + M) per R`

Where:

- E = Energy consumed by a software system
- I = Location-based marginal carbon emissions
- M = Embodied emissions of a software system
- R = Functional unit (e.g. carbon per additional user, API-call, ML job, etc) 

All the elements in the SCI equation scale by the same functional unit of “R”

## Architecture

* An architecture diagram of the system described in this use case
* Technical details of the components in the architecture
* Textual description with technical details of each component provided in the architecture diagram

**TODO: Add arch diagram**

We did Load Test runs with Azure App service Premium configuration with 2 core – 7 GB RAM and calculated the power consumed in these runs. The tests are meant to be a model only and can be extended to more infrastructure configurations. Database power and embodied emissions values of the database were not included in calculations .

## (What) Software boundary

*Describe the components that are included in the software systems, if any major components are not included then please provide **reasons for exclusion**.*

### Included

* App server for the Web application

### Excluded

This case study is focused on hardware efficiency at the app server alone and hence the following components and their carbon emissions have been excluded from the SCI calculation.

* Front end web application .This is the browser  client that is displaying the application to the end users on their desktop/mobile/laptop etc.
* Network traffic between browser client  and application server
* Network traffic between application servers and databases 
* Database server
* Test infrastructure:  These include the load test resources that were used to simulate virtual users and http requests to the web server.Since the infrastructure and the associated energy usage do not fit into the same functional unit scale as defined in the SCI formula, these components are excluded from the software’s SCI calculation.

## (Scale) Functional Unit

*Describe the [functional unit](https://github.com/Green-Software-Foundation/software_carbon_intensity/blob/main/Software_Carbon_Intensity/Software_Carbon_Intensity_Specification.md#functional-unit-r) that best controls the scaling of the software system.*

The choice of functional unit applies to all components in your software boundary. 

R is 500 Users over a 1 hour period with 50 concurrent users

## (How) Quantification method

*For each software component in your software boundary, decide whether you are going to **measure** using real-world data or **calculate** an estimate via models, provide a reason and any useful details for each choice.
*

### App server for Web application

### Energy (`E`)

The Quantification method used for calculating energy value is **Calculate**. We are measuring CPU utilization of the app servers and then using a model based on the Thermal Design Power (TDP) of the processors, number of cores etc to **estimate** the power consumption.

The equation used to model the energy consumption is:

P[kwH] = (Power consumed by CPU or Pc Number of cores + Power consumed by Memory or Pr + Power consumed by GPU or Pg Number of GPUs)/1000

* Utilization doesn’t scale linearly with power consumption, we will use the power curve as described in the [SCI Data Project “[E] Energy Estimation from Utilization Model” model](https://docs.google.com/spreadsheets/d/1Viv94rMKH-fJrfD9Nn9_qkiAg1PDfIfJUAHRX9slG7A/edit#gid=526989613)
* From specs, we found that Power consumed by 4GB memory is close to 1.45 W and that by 8 GB memory is approximately 2.45 W. Since the energy values for memory are much lower than the calculated energy values for processors or CPUs, we consider these values negligible. Pr ~0
* No GPU was used hence Pg ~0
* TDP of server used in Azure App server Premium configuration (P2v2 ) -2nd Generation Intel® Xeon® Platinum 8272CL (Cascade Lake)= 205 W ( [https://ark.intel.com/content/www/us/en/ark/products/192482/intel-xeon-platinum-8270-processor-35-75m-cache-2-70-ghz.html](https://ark.intel.com/content/www/us/en/ark/products/192482/intel-xeon-platinum-8270-processor-35-75m-cache-2-70-ghz.html) )

### Carbon Intensity (`I`)

* We will use regional yearly averages.
* The region the application was run in was India.
* We will source the Carbon Intensity from the SCI Data project and the [[I] Regional Yearly Marginal Carbon Intensity](https://docs.google.com/spreadsheets/d/1Viv94rMKH-fJrfD9Nn9_qkiAg1PDfIfJUAHRX9slG7A/edit#gid=1582216595) data set.

### Embodied Carbon (`M`)

The equation to calculate `M = TE * (TR/EL) * (RR/TR)`

Where:

* TE = Total Embodied Emissions, the sum of LCA emissions for all hardware components.
* TR = Time Reserved, the length of time the hardware is reserved for use by the software.
* EL = Expected Lifespan, the anticipated time that the equipment will be installed.
* RR = Resources Reserved, the number of resources reserved for use by the software.
* TR = Total Resources, the total number of resources available.

For this component:

* TE: We will source the embodied carbon estimates for the servers from the [Cloud Carbon Footprint Coefficient](https://github.com/cloud-carbon-footprint/cloud-carbon-coefficients/blob/main/output/coefficients-azure-embodied.csv) Data Set.
* TR: 1 hr.
* EL: We will assume a 4 year lifespan or 35,040 hrs.
* RR: A virtual machine with 2 vCPUs was used, this data was sourced from [Cloud Carbon Footprint Azure Instances Coefficients](https://github.com/cloud-carbon-footprint/cloud-carbon-coefficients/blob/main/data/azure-instances.csv).
* TR: The bare metal host is split up into 16 vCPUs in total. This data was sourced from the [Cloud Carbon Footprint Azure Instances Coefficients](https://github.com/cloud-carbon-footprint/cloud-carbon-coefficients/blob/main/data/azure-instances.csv).

## (Quantify) SCI Value Calculation

*Show your work! For each of the components of your software system, show how you arrived at the SCI value. Guidance for this is available in the [Methodology summary](https://github.com/Green-Software-Foundation/software_carbon_intensity/blob/main/Software_Carbon_Intensity/Software_Carbon_Intensity_Specification.md#methodology-summary) section.
*

### App server for Web application

#### Energy (`E`)

_The workings of E, include raw numbers and calculations._

- Server utilization = 18.3922%
- Number of hours = 1
- Number of cores = 2 
- TDP = 205W
- TDP Coefficient = 0.32

```
E = Server utilization * Number of hours * Number of cores * TDP * TDP co-efficient
  = (0.18 * 1 hour * 2 cores * 205 TDP * 0.32 TDP co-efficient)/1000
  = 0.023
```

E =  **0.023 KwH**

### Carbon Intensity (`I`)

I = **951 gCO2e/kWh**

### Embodied Carbon (`M`)

`M = TE * (TR/EL) * (RR/TR)`

- TE = 1205.52 kgCo2e
- TR = 1 hour
- EL = 35040
- RR = 2
- TR = 16

M = 1205.52 * (1/35040) * (2/16) = 0.004305 KG =~ **4.305 gCO2e**

### SCI

_The sum of the SCI calculation._

SCI =  (E * I) + M = (0.02394 KwH * 951 gCO2e/kwH) + 4.305 gCO2e = **26.178 gCO2e**

## SCI Total

_The total SCI for the whole application._

SCI = SCI(App server for Web application) = **26.178 gCO2e**
