# eShoppen - SCI Case Study

## Overview

* The eShop Web application is a web application built on Asp.Net .It is built with monolithic architecture and follows MVC Design pattern
* The application uses a relational database for storing data 
* The business use cases built demonstrates a simplified eCommerce site.
* The case study focuses on calculating the Software Carbon Intensity (SCI) value of the application using the [formula](https://github.com/Green-Software-Foundation/software_carbon_intensity/blob/main/Software_Carbon_Intensity/Software_Carbon_Intensity_Specification.md#methodology-summary) as defined in the latest version of the [specification](https://github.com/Green-Software-Foundation/software_carbon_intensity/blob/main/Software_Carbon_Intensity/Software_Carbon_Intensity_Specification.md)

The Software Carbon Intensity (SCI) is a rate, carbon emissions per one unit of R. The equation used to calculate the SCI value of a software system is:

`SCI = ((E * I) + M) per R`

Where:

- E = Energy consumed by a software system
- I = Location-based marginal carbon emissions
- M = Embodied emissions of a software system
- R = Functional unit (e.g. carbon per additional user, API-call, ML job, etc) 

All the elements in the SCI equation scale by the same functional unit of “R”

## Architecture

The architecture consists of the following components.
* App Service plan: An App Service plan provides the managed virtual machines (VMs) that host your app. All apps associated with a plan run on the same VM instances.

* App Service app: Azure App Service is a fully managed platform for creating and deploying cloud applications.

* Azure SQL Database: SQL Database is a relational database-as-a-service in the cloud. SQL Database shares its code base with the Microsoft SQL Server database engine. Depending on your application requirements, you can also use Azure Database for MySQL or Azure Database for PostgreSQL. These are fully managed database services based on the open-source MySQL Server and Postgres database engines.


![image](https://user-images.githubusercontent.com/10396742/162613391-f27ed693-84df-4c70-a17a-479d7288a57a.png)

We did Load Test runs with Azure App service Premium configuration with 2 core – 7 GB RAM and database server of Gen 5 Processor and  calculated the power consumed in these runs. The tests are meant to be a model only and can be extended to more infrastructure configurations. 

## (What) Software boundary

*Describe the components that are included in the software systems, if any major components are not included then please provide **reasons for exclusion**.*

### Included

* App server for the Web application
* Database server
* Front end browser  .This is the browser client on the device that is displaying the application to the end users on their desktop/mobile/laptop etc
### Excluded

The following components and their carbon emissions have been excluded from the SCI calculation.
 

* Network traffic between browser client  and application server ._We have the numbers in terms of the byte size that travelled across the network but don’t have the reference multiplication factor in terms of carbon emissions associated per byte. We have requested this info from SCI open data project_
* Network traffic between application servers and databases. _We have the numbers in terms of the byte size that travelled across the network but don’t have the reference multiplication factor in terms of carbon emissions associated per byte. We have requested this info from SCI open data project_
* Test infrastructure:  These include the load test resources that were used to simulate virtual users and http requests to the web server._Since the infrastructure and the associated energy usage do not fit into the same functional unit scale as defined in the SCI formula, these components will be excluded from the software’s SCI calculation._


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

* CPU Utilization doesn’t scale linearly with power consumption, we will use the power curve as described in the [SCI Data Project “[E] Energy Estimation from Utilization Model” model](https://docs.google.com/spreadsheets/d/1Viv94rMKH-fJrfD9Nn9_qkiAg1PDfIfJUAHRX9slG7A/edit#gid=526989613)
* TDP of server used in Azure App server Premium configuration (P2v2 ) -2nd Generation Intel® Xeon® Platinum 8272CL (Cascade Lake)= 205 W ( [https://ark.intel.com/content/www/us/en/ark/products/192482/intel-xeon-platinum-8270-processor-35-75m-cache-2-70-ghz.html](https://ark.intel.com/content/www/us/en/ark/products/192482/intel-xeon-platinum-8270-processor-35-75m-cache-2-70-ghz.html))
* From specs, we found that Power consumed by 4GB memory is close to 1.45 W and that by 8 GB memory is approximately 2.45 W. Also from this [article](https://medium.com/teads-engineering/estimating-aws-ec2-instances-power-consumption-c9745e347959) we can consider power consumed is approx 0.38 W/GB or close to 2.6 Watts.Since the energy values for memory are much lower than the calculated energy values for processors or CPUs, we consider these values negligible. Pr ~0
* No GPU was used hence Pg ~0


### Carbon Intensity (`I`)

* We will use regional yearly averages.
* The region the application was run in was India.
* We will source the Carbon Intensity from the SCI Data project and the [[I] Regional Yearly Marginal Carbon Intensity](https://docs.google.com/spreadsheets/d/1Viv94rMKH-fJrfD9Nn9_qkiAg1PDfIfJUAHRX9slG7A/edit#gid=1582216595) data set.

### Embodied Carbon (`M`)

The equation to calculate `M = TE * (TR/EL) * (RR/TR)`

Where:

* TE = Total Embodied Emissions, the sum of LCA emissions for all hardware components associated with the application server.
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

### Database server for Web application

The database server used for the load test is Standard Gen 5 2 vCore 10 GB RAM machine from Azure SQL 


### Energy (`E`)

The Quantification method used for calculating energy value is **Calculate**. We are measuring CPU utilization of the database servers and then using a model based on the Thermal Design Power (TDP) of the processors, number of cores etc to **estimate** the power consumption.

The equation used to model the energy consumption is:

P[kwH] = (Power consumed by CPU or Pc Number of cores + Power consumed by Memory or Pr + Power consumed by GPU or Pg Number of GPUs)/1000

* CPU Utilization doesn’t scale linearly with power consumption, we will use the power curve as described in the [SCI Data Project “[E] Energy Estimation from Utilization Model” model](https://docs.google.com/spreadsheets/d/1Viv94rMKH-fJrfD9Nn9_qkiAg1PDfIfJUAHRX9slG7A/edit#gid=526989613)
* TDP of server used in Azure SQL server [Gen 5](https://azure.microsoft.com/en-us/pricing/details/azure-sql-database/single/#pricing) configuration - Intel SP8160 (Skylake)= 150 W ( [https://ark.intel.com/content/www/us/en/ark/products/192482/intel-xeon-platinum-8270-processor-35-75m-cache-2-70-ghz.html](https://www.intel.com/content/www/us/en/products/sku/120501/intel-xeon-platinum-8160-processor-33m-cache-2-10-ghz/specifications.html))
* From specs, we found that Power consumed by 4GB memory is close to 1.45 W and that by 10 GB memory is approximately 4 W. Also from this [article](https://medium.com/teads-engineering/estimating-aws-ec2-instances-power-consumption-c9745e347959) we can consider power consumed is approx 0.38 W/GB or close to 2.6 Watts.Since the energy values for memory are much lower than the calculated energy values for processors or CPUs, we consider these values negligible. Pr ~0
* No GPU was used hence Pg ~0


### Carbon Intensity (`I`)

* We will use regional yearly averages.
* The region the application was run in was India.
* We will source the Carbon Intensity from the SCI Data project and the [[I] Regional Yearly Marginal Carbon Intensity](https://docs.google.com/spreadsheets/d/1Viv94rMKH-fJrfD9Nn9_qkiAg1PDfIfJUAHRX9slG7A/edit#gid=1582216595) data set.

### Embodied Carbon (`M`)

The equation to calculate `M = TE * (TR/EL) * (RR/TR)`

Where:

* TE = Total Embodied Emissions, the sum of LCA emissions for all hardware components associated with the database server.
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


### Front End Browser for Web application

### Energy (`E`)

The Quantification method used for calculating energy value is **Calculate**. We are measuring CPU utilization of the laptop client device and then using a model based on the Thermal Design Power (TDP) of the processors, number of cores etc to **estimate** the power consumption.

The equation used to model the energy consumption is:

P[kwH] = (Power consumed by CPU or Pc Number of cores + Power consumed by Memory or Pr + Power consumed by GPU or Pg Number of GPUs)/1000

* CPU Utilization doesn’t scale linearly with power consumption, we will use the power curve as described in the [SCI Data Project “[E] Energy Estimation from Utilization Model” model](https://docs.google.com/spreadsheets/d/1Viv94rMKH-fJrfD9Nn9_qkiAg1PDfIfJUAHRX9slG7A/edit#gid=526989613)
* TDP of laptop used (Laptop- 11th Generation Intel Core i7-1185G7 vPro /32 GB RAM) = 28 W 
* From specs, we found that Power consumed by 4GB memory is close to 1.45 W and that by 8 GB memory is approximately 2.45 W. Also from this [article](https://medium.com/teads-engineering/estimating-aws-ec2-instances-power-consumption-c9745e347959) we can consider power consumed is approx 0.38 W/GB and for this scenario it is  close to 12.16 Watts.
* No GPU was used hence Pg ~0


### Carbon Intensity (`I`)

* We will use regional yearly averages.
* The region the application was run in was India.
* We will source the Carbon Intensity from the SCI Data project and the [[I] Regional Yearly Marginal Carbon Intensity](https://docs.google.com/spreadsheets/d/1Viv94rMKH-fJrfD9Nn9_qkiAg1PDfIfJUAHRX9slG7A/edit#gid=1582216595) data set.

### Embodied Carbon (`M`)

The equation to calculate `M = TE * (TR/EL) * (RR/TR)`

Where:

* TE = Total Embodied Emissions, the sum of LCA emissions for all hardware components associated with the application server.
* TR = Time Reserved, the length of time the hardware is reserved for use by the software.
* EL = Expected Lifespan, the anticipated time that the equipment will be installed.
* RR = Resources Reserved, the number of resources reserved for use by the software.
* TR = Total Resources, the total number of resources available.

For this component:

* TE: We will source the embodied carbon estimates for the Dell laptop  from the [Dell site](https://i.dell.com/sites/content/corporate/corp-comm/en/Documents/dell-laptop-carbon-footprint-whitepaper.pdf) Data Set.
* TR: 1 hr.
* EL: We will assume a 4 year lifespan or 35,040 hrs.
* RR: A dell laptop was used, and all resources are available for use of this application.
* TR: A dell laptop was used, and all resources are available for use of this application.


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
E =  Number of hours * Number of chips * TDP * TDP co-efficient (for the server utilization)
  = ( 1 hour * 1 * 205 TDP * 0.32 TDP co-efficient)/1000
  = 0.0656 kwH
```

E =  **0.0656 KwH** for a 1 hour period

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

_The sum of the SCI calculation for app server._

SCI =  (E * I) + M = (0.0656 KwH * 951 gCO2e/kwH) + 4.305 gCO2e = **66.6906 gCO2e**

### Database server for Web application

#### Energy (`E`)

_The workings of E, include raw numbers and calculations._

- Server utilization = 10%
- Number of hours = 1
- Number of cores = 2 
- TDP = 150W
- TDP Coefficient = 0.32

```
E =  Number of hours * Number of chip * TDP * TDP co-efficient (Server utilization)
  = (0.10 * 1 hour * 1 chip * 150 TDP * 0.32 TDP co-efficient)/1000
  = 0.048
```

E =  **0.048 KwH** for a 1 hour period

### Carbon Intensity (`I`)

I = **951 gCO2e/kWh**

### Embodied Carbon (`M`)

`M = TE * (TR/EL) * (RR/TR)`

- TE = 1433.12 kgCo2e
- TR = 1 hour
- EL = 35040
- RR = 2
- TR = 16

M = 1433.12 * (1/35040) * (2/16) = 0.005112 KG =~ **5.112 gCO2e**



### SCI

_The sum of the SCI calculation for database server._

SCI =  (E * I) + M = (0.048 KwH * 951 gCO2e/kwH) + 5.112 gCO2e = **50.76 gCO2e**

### Front end browser for the Web application

#### Energy (`E`) for CPU

_The workings of E, include raw numbers and calculations._

- Server utilization = 0%
- Number of hours = 1
- Number of cores = 2
- TDP = 28W
- TDP Coefficient = 0.12

```
E =  Number of hours * Number of chip * TDP * TDP co-efficient (Server utilization)
  = (1 hour * 1 chip * 28W TDP * 0.12 TDP co-efficient)/1000
  = 0.00336
```

E =  **0.00336 KwH** for a 1 hour period

#### Energy (`E`) for Memory

_The workings of E, include raw numbers and calculations._

- Server utilization = 0.1%
- Number of hours = 1
- Number of cores = 2
- TDP = 12.16
- TDP Coefficient = 0.12

```
E =  Number of hours * Number of chip * TDP * TDP co-efficient (Server utilization)
  = (1 hour * 1 chip * 12.16 TDP * 0.12 TDP co-efficient)/1000
  = 0.01216
```

E =  **0.01216 KwH** for a 1 hour period

### Carbon Intensity (`I`)

I = **951 gCO2e/kWh**

### Embodied Carbon (`M`)

`M = TE * (TR/EL) * (RR/TR)`

- TE = 350 kgCo2e
- TR = 1 hour
- EL = 35040
- RR = 1
- TR = 1

M = 350 * (1/35040) * (1/1) = 0.009988 KG =~ **9.98 gCO2e**



### SCI

_The sum of the SCI calculation for client device._

SCI =  (E * I) + M = ((0.0036+0.01216 * 951 gCO2e/kwH) + 9.98 gCO2e = **24.96 gCO2e**

## SCI Total

_The total SCI for the whole application._

SCI = SCI(App server for Web application) +  SCI for database server +SCI for the client device =  **142.4186 gCO2e** per R (500 users in 1 hour period)
