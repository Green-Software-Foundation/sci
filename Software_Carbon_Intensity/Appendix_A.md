

**What is SLI and SLO?**
Reliability is the concept of a system having the quality of being trustworthy or of performing consistently well. Today most applications have a Service level objective (SLO) to facilitate monitoring. SLOs typically have 3 constraints:
1)	Service level indicator (SLI)
2)	The target metric or Objective in percentile 
3)	The observation window
Hence "Service Level Indicator" coupled with  "Objective in percentile" and  "Observation window" is "Service Level Objective" 
SLIs have an event, a success criterion, and specify where and how you record success or failure. It is specified as the proportion of events that were good. 

Example: Percentage of query requests that return an error code other than 5XX or a timeout measured on the Query Gateway Frontend. A Query gateway frontend is a load balancer that helps to distribute and/or throttle requests to a server

SLIs exist to help engineering teams make better decisions. Your SLO performance is critical information to have when you’re making decisions about how hard and fast you can push your systems. SLOs are also important data points for other engineers when they’re making assumptions about their dependencies on your service or system. Lastly, your  organization at large should use your SLIs and SLOs to make informed decisions about investment levels and about balancing reliability work against engineering velocity.
Availability SLO example
•	90% of HTTP requests as reported by the load balancer succeeded in the last 30 day window ( _Here 90% HTTP requests succeeded is the SLI , Return error code other than 5xx or timeout is the Objective and 30 days is the observation window_)

Latency SLO examples:
•	100% of requests in the last 5 minutes as measured at load balancer are served in less than 900ms
•	99.99% of requests in the last 5 minutes as measured at load balancer are served in less than 500ms
•	90% of requests in the last 5 minutes as measured at load balancer are served in less than 200ms

**How organizations can re-define SRE considering SCI.**
Software carbon intensity is a relative score between applications to be more carbon efficient, carbon aware and hardware efficient.

SCI for applications (CI)= (Energy used by the application * Located based marginal carbon emissions) + Embodied Carbon per baseline

Here the baseline is per API call, per additional user, per additional ML job etc.

From an SRE principle and alignment then, organizations would like to track carbon emissions from their applications using the SCI score and raise alerts on breach, i.e. if it increases beyond a certain percentage . If an application has a SCI score of x, organizations would then track variance from this value and configure monitoring thresholds.

**How would you then correctly define the metric as per SRE principles?**

In the above formula for SCI, baseline is a key aspect. We will explain with an example  where we are considering the baseline as "one instance of a batch job".  The batch job is a piece of component within a larger "software" or "application" which could potentially be a web application workload with a batch job doing a long running business process that does not need user interactions

Let us assume that the SCI value of an batch job running in West Europe has a CI value of 100 kgCO2 per instance of Azure webjob. By an initial assumption, let us assume that the SLO for SCI has been defined as not more than 20% variance. If during the operating window of the job, the service cranks up and the carbon intensity increases to 121 KgCo2 , then an alert has to be signaled. However this is theoretical.  We have to look at this increase in the context of so many factors like interplay of SCI increases with other SLOs like latency, performance etc; how the west Europe datacenter was powered (% of coal/renewables) during the time of heightened operation of this web job; inefficient threading and garbage collection practices that would have been in the code that surfaced during the peak operation etc.  

When this incident (as per SRE principles, this is an incident that should be monitored and alerted like a Sev 1,2,3 incident) happens, there could be multiple tuning techniques. One tuning technique that comes to mind for this incident is to try moving the workload to a different datacenter that is better powered by renewables ( by calling Watt Time API) or shifting the workload to a different time of the day. These are techniques that need detailed and vetted data upfront for the "orchestration algorithm" to make dynamic decisions regarding moving the workload. However we can tell today that we do not have defined and foolproof information to tell how much do each of these tuning techniques will contribute to managing the increased carbon intensity . This data has to be collated and cross verified over a longer period of time going forward to come up with authentic deductions. 

Hence for the initial version of the specification, I propose that we raise the level of abstraction for monitoring of SCI at an application level rather than the individual component. i.e We will keep the baseline for software carbon intensity at the "application level" rather than a batch job, ML job, API call etc. 

Thus we can consider that the metric we will use for the site reliability engineer will be the Total carbon emissions (C) value. The formula for this metric is :C= O+ M where O= E*I

**Scope of Metric**
For this metric, the definition of scope around which SCI will operate is very important. Scope is the boundary area where we will apply the monitoring. Since we are talking about software, the boundary here is the software boundary as defined in the SCI specification. 
However, we may not be able to apply this uniformly for all software. Software varies by architecture , environment, hosting type (dedicated infrastructure vs shared infrastructure vs serverless ) and the implementation of SRE monitoring for SCI varies by these factors .We will discuss these factors below:

1) Architecture of Software
Different application architectures need monitoring differently. Consider for example the following workloads:

	1) Web based multi-tier application or Long running process deployed on either cloud or on-premise
	2) Mobile app connecting to backend APIs on cloud or on-premise
	3) Desktop app connecting to backend APIs on cloud or on-premise
	4) AI based machine learning model experiments
	5) Open Source or Closed Source Framework SDKs
	6) Server less applications

From a pure monitoring perspective of the SRE metric , doing it on server based workloads in the above list may be the first step . For e.g Web based multi-tier applications have either Virtual machines or EC2s connecting to APIs and databases and hence we can monitor the Operational emissions of these server components.  Similarly we can calculate the metric for backend server APIs and serverless components of the Mobile and desktop apps.

There would be challenges however in doing the same for desktop devices and mobile platforms as the emissions calculations would need to know at a rough level the total number of  mobile devices or desktops , their types etc to calculate roughly the value for the desktop apps.   Hence for the first release of specifications, we can propose that monitoring will be for a subset of the above workloads i.e for workloads which have majorly server components.


2) Hosting Infrastructure - Dedicated Vs Shared

Monitoring techniques will also vary based on the hosting mode for the software. For those with dedicated infrastructure, SCI will just be the sum total of Operational Emission values across the different layers. In the equation for SCI ( SCI per unit of baseline = (E*I) + M , the value of M does not make an impact when calculating delta carbon intensity = Current CI- Original CI since the hardware is exclusively reserved for the purpose of the said software. Hence the monitoring technique can potentially look for variances in the Operational Emissions value and variances of it to raise alert for the Site Reliability Engineer.

The situation is different when we consider Shared infrastructure servers, multi-tenant databases, SaaS software shared by multiple customers. Here multiple micro-services could share the same PaaS compute platforms and storage services which by design is carbon friendly. In these cases, the percentage of allocation of infrastructure  is necessary information to be able to calculate the carbon intensity value for the specific customer software. Hence we need to include the Embodied Emissions (M) value in the monitoring metric . 


3) Application Environment Types
The usage of the above SRE metric also changes by environment. This statement is tied to the Application architecture factor somewhat but broadly, the concept is that for the purpose of carbon tracking and monitoring, measurement should be done for all environments like development, testing, QA, Performance and Production. This is because the carbon emission of the software increases manifold for lower environments like development and QA for workloads like machine learning models. 

Multiple iterations of running AI experiments in lower environments should be tracked for carbon emissions and hence the scope of the metric should be monitored at the environment level. 

Similarly for the other common workload scenarios like web or desktop applications, multiple performance tests are executed to achieve the SLO targets for throughput and /or latency. Through the process of trying to achieve these targets, the compute and storage resources are used more intensively than it would be on a production environment. Hence tracking of the metric is recommended at Environment scope as well.

**<to be added>**


**Conclusion**
Some of the deductions we have made at the end of this article:

1) Total carbon emissions (C) is the metric we will monitor at an SRE level .
2) The application of this metric can be done at multiple scope levels - Environment , Hosting infrastructure type and Application architecture
3) In future iterations of the specification, work to be done to understand the SRE impact of the C metric for other SLO attributes like latency, availability. A brief write up below:

Availability SLOs: Availability SLOs can be met either by software changes and redundant application design patterns or hardware redundancy. However, in the most common of scenarios, it is met by having hot standby and/or warm/cold standby infrastructure configurations. This directly impacts the “Embodied carbon” co-efficient in the above equation and hence tradeoffs have to be defined between meeting Availability SLO and allowed variance in SCI. 

Latency SLOs:
Meeting latency SLOs involves either increasing the compute power allocated to the workload, spending developer cycles to fix performance issues, allocating the workload to synchronous services rather than async services that can run in energy efficient time sand also scaling the hardware required. Hence attempting to meet aggressive latency SLOs involves impacting all the co-efficient of the above equation:  carbon efficiency, carbon aware and hardware efficiency.

Hence from a specification point of view, the SCI score can be integrated into the SLO examples as follows 

Availability SLO example with SCI
•	90% of HTTP requests as reported by the load balancer succeeded in the last 30 day window and ensuring that the overall SCI variance does not go higher than x%

Latency SLO example with SCI
•	100% of requests in the last 5 minutes as measured at load balancer are served in less than 900ms and ensuring that the overall SCI variance does not go higher than x%

**How can we monitor SCI impact?**
Performance tests are great ways to measure SCI impact on SRE. Today they are used primarily to see if the application meets Service level objectives. We can add a couple of addition of performance tests (not a lot as that would mean transferring the SCI from prod environment to performance environments and cycles) to monitor for performance and adjusting the performance goal downwards (mostly!) to ensure SCI variances are not breached. 

