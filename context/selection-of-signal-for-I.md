
# Selection of signal for I 

**Status**: Draft

_The purpose of this context document is not to argue for or against a particular topic, but rather to ensure that a proper discussion can be had by ensuring all participants in the discussion have the information they need to make informed opinions. It will also cover motivations, intentions, lore - things that have been discussed at length in the standards working group calls but never writen down. Do not treat this document as a specification, it's language is less formal, less accdemic, and the goal is shared understanding. Explain it like i'm 5 should be a good mantra here._

## Abstract

* The Software Carbon Intensity Specification is a way of scoring a software application for sustainability. [https://grnsft.org/sci](https://grnsft.org/sci)
* Lower numbers are better than higher numbers, and reaching zero is impossible.
* The equation is **SCI = (E * I + M) per R**
* The **I** in the equation is the carbon intensity of electricity.
* A discussion has arisen regarding the choice of emissions factor for **I** in the SCI equation. 
* The choice of what to use for I acts as a signal.
* The specification currently insists on marginal emission factors for **I**, and there is interest in understanding that original choice and exploring other emissions factors options.

## Vocabulary

* **LRMER**: Long-run marginal emission rates
* **SRMER**: Short-run marginal emission rates
* **AER**: Average emission rates
* **Green Software**: Software which is more energy efficient, more carbon aware and/or more hardware efficient see [https://greensoftware.foundation/articles/what-is-green-software](https://greensoftware.foundation/articles/what-is-green-software).


## Relevant Discussions/Issues/Pull Requests
_Link here any releated discussion topics/issues/pull requests_

* **PR**: [Avoid restricting the SCI by prescribing a specific metric.](https://github.com/Green-Software-Foundation/sci/pull/353)
* **PR**: [Long and Short Run Marginal](https://github.com/Green-Software-Foundation/sci/pull/352)
* **DIS**: [Is it risky to consider marginal emissions only?](https://github.com/Green-Software-Foundation/sci/discussions/351)
* **DIS**: [Question re: location-based marginal emissions](https://github.com/Green-Software-Foundation/sci/discussions/259)


## Motivations and Intention

_Speak to the original motivation intention of the current/proposed aspect of the SCI. What is missing in the spec that was discussed in the calls. Things that are perhaps not mentioned in the spec but are unspoken rules or now just established lore that newer people to the standard might not be aware of._

### Action vs Reporting
* The **primary purpose** of the SCI is to incentivise software teams to invest in the [3 green software actions](https://greensoftware.foundation/articles/what-is-green-software), energy efficiency, carbon awareness and hardware efficiency.
* The SCI is focussed around action, the intention from the start was to design a score which rewards users for implementing one of the 3 green software actions (energy efficiency, carbon awareness and hardware efficiency).
* SCI is a measure for action vs. a measure for reporting.

### Behaviour

* The SCI is not designed to be accurate in an absolute sense but accurate in a directional sense. 
    * The SCI score will likely not reflect the absolute carbon emissions of the software product since so much of the calculation is based on estimated models.
    * The intention is to give directionality, so if you do something and the SCI score goes down, you can be confident that the action you took has a positive effect, and to do more of that action.
* The SCI score should change if a software project does things that we know have an impact on carbon emissions and are within the realm of influence of a software practitioner.
* The SCI is intended to measure a single software application. Multiple software applications would have separate SCI scores. Its intention is not to score an entire data centre or a fleet of laptops. It’s a single score a software team can use to measure one of their software applications.


### Alternatives

* It is not a competitor to the [GHG protocol](https://ghgprotocol.org/), both are metrics to measure sustainability, they have different purposes, different audiences and different actions they tend to encourage.
* You can do many things with software that objectively reduces carbon emissions however the way the GHG protocol is calculated means the score doesn’t change.


#### Drawbacks of the GHG Protocol when applied to software

* The way a cloud provider might attribute energy to a customer via the GHG protocol is to divide energy bought by a Data Center by the number of servers in the Data Center. So every server, regardless of how much it's being used, would report that same energy consumption. 
* There is little effort made to try to attribute energy consumption per server never mind per actual process/application. 
* Therefore if a customer made some of their processes more energy efficient, it wouldn't be reflected in the final calcs, every server is said to consume the same energy, we call that the **top down approach** and it's one of the only approaches auditors accept for verifying the reported GHG number for a cloud provider. 
* The alternative way which is more useful if your intention is action vs reporting is to calculate **bottom up**, so measure the actual energy consumption of each of your processes individually and sum them all up to get your total energy consumption of your software application. That approach isn't accurate, often has to use estimated models, has double counting effects, but does give you a relative figure for energy which will go down if you make your application more energy efficient.
* The same is said from carbon awareness. The way energy consumption is typically calculated (in scope 2 and scope 3) for orgs means it's incredibly hard to prioritise any carbon aware work. Yearly averages mean that if you build in  time shifting in your app it won't reduce the reported scope 2/3 figures for your org which is one of the reasons it's been so challenging to get carbon aware computing onto the agenda for most companies.
* The GHGP Scope 2 Guidance includes two accounting methods: location-based method and market-based method.
    * Location-based Accounting: A location-based method reflects the average emissions intensity of grids on which energy consumption occurs. This allows organisations to report their physical account of their carbon emissions as a result of their electricity consumption. 
    * Market-based Accounting: 
        * This allows organisations to report lower _gross_ carbon emissions by purchase of energy efforts (market measures) like RECs and GOs.
            * Before market based reporting organisations had to report carbon emissions from energy consumption as say 10 KT and then separately they could _choose _to neutralise those 10 KT with the purchase of renewable energy certificates (which are financial instruments you can purchase that act like offset to neutralise your energy consumption).
            * After market based reporting organisations can report carbon emissions from energy consumption as 0 KT (They can report one figure which already takes into account the energy certificates)
        * Market based reporting has the impact of **deprioritising actions to make software more energy efficient** and **prioritising the purchase of energy certificates**.
        * With market based reporting organisations now have two ways to report a lower scope 2 emissions figure to the public.(1) Consume less energy by making your processes more efficient. (2) Consume the same energy and purchase certificates. (2) is the easier solution for an organisation to prioritise than (1) which takes significant investment and effort. 
        * Renewable energy purchasing is often managed by a different team than the teams that develop software, which means organisations can reduce their emissions through market based measures without engaging in any efficiency improvement activity in the software products.
        * In addition if an organisation is already reporting 0 KT in terms of Scope 2 because of their purchase of energy certificates, and did more work to make their processes more energy efficient, they would still report 0 KT, a metric that stays at 0 regardless of what you do, does not encourage action..
        * Market based reporting doesn’t incentivize making applications more energy efficient.


## References

_List here any references to external sources, plus any specific insight from the reference which would aid in this discussion topic._

* SRMER are very good at assessing the short-term impact of an intervention
    * Source: [How Well Do Emission Factors Approximate Emission Changes from Electricity System Models?](https://pubs.acs.org/doi/abs/10.1021/acs.est.2c02344)
    * Twitter Discussion about it: [Twitter Thread from Eric Hittinger](https://twitter.com/ElephantEating/status/1590741977880211458)
    * Twitter Discussion providing a contrary view: [Twitter Thread from AukeHoekstra responding to the Twitter Thread by Eric Hittinger](https://twitter.com/AukeHoekstra/status/1620525739803291648) With clarification for load shifting: [https://twitter.com/Helmut_Lehmeyer/status/1620766545793404928](https://twitter.com/Helmut_Lehmeyer/status/1620766545793404928)
* LRMER are very strong predictors of long-term impacts of interventions. AER are a strong proxy for LRMER, while SRMER does not capture long-term impacts of interventions
    * [Planning for the evolution of the electric grid with a long-run marginal emission rate](https://www.cell.com/iscience/fulltext/S2589-0042(22)00185-7?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS2589004222001857%3Fshowall%3Dtrue)
    * [Short-run marginal emission rates omit important impacts of electric-sector interventions](https://www.pnas.org/doi/10.1073/pnas.2211624119)
* Marginal emission factors are based on estimation models and their value cannot be verified. This is because there is no “ground truth” on the true value as the specific marginal generator cannot be verified. But there is good academic research showing that marginal emissions can be calculated and are a meaningful signal.
    * [The US RTO PJM states that “marginal units – and the marginal emissions rates based on them –, cannot provide any prediction of the results of an action. ](https://pjm.com/-/media/etools/data-miner-2/marginal-emissions-primer.ashx)
    * [“All marginal emissions rate estimation methodologies are imperfect for one](https://media.rff.org/documents/Report_22-08.pdf)
    * [reason or another”](https://media.rff.org/documents/Report_22-08.pdf)
    * [“There is tremendous variation in the way that MEFs can be estimated. Depending on the specific methodology, data sources, and assumptions used, no one estimate is likely to match another. Even two approaches using the same methodology could use different input data or assumptions to estimate marginal emissions impact, leading to two different and sometimes inconsistent estimates.This means that there is no single source of “truth” for marginal emissions impact.”](https://cebi.org/wp-content/uploads/2022/11/Guide-to-Sourcing-Marginal-Emissions-Factor-Data.pdf)



## Questions

_What are the important questions to ask? Make a note of the answers and link it back to the person making the point._

### What are short run marginal, long run marginal and average emissions factors for electricity?

* These are 3 different ways of calculating the carbon intensity of electricity per kWh of electricity.
    * AER: represents the carbon intensity of the electricity mix currently on the grid. It is measured as gCO2 per kWh of electricity. 
    * SRMER: represents the short-term change of system-level carbon emissions for a change in load. It is measured as gCO2 per each **_additional_** kWh of electricity.
    * LRMER: represents the change of system-level carbon emissions for a change in load in consideration both the operational and structural implication of changes in electricity demand.It is measured as gCO2 per each **_additional_** kWh of electricity.
* They each might signal a different time to consume electricity.
* So the choice of which signal to use has a significant impact on an SCI score as well as the impact of the action taken based on the SCI.Since the SCI is an action oriented spec the choice of one over the other can impact the actions that people take.
* Short run marginal is the best signal to use if people want to make decisions to optimise the short term.  
* Long run marginal is a better signal if you want actions people take to have an impact on a longer time horizon, for example to encourage more renewable plants to be built. It has far fewer benefits when viewed in the shorter term. According to NREL, it is impossible to calculate LRMER on an hourly basis in real-time and thus, proxies are needed.
* **[Average is considered to be a proxy for long run marginal](https://github.com/Green-Software-Foundation/sci/pull/353#issuecomment-1432307783)**, it’s easier to calculate and is correlated with long run marginal. Furthermore, AER strongly correlates with curtailment of renewables. Average emission factors perform poorly for estimating the short-term impact of interventions. 


### How do we define _better _in terms of which signal is the _better _choice?

**Andrew Woosnam**: Better could be defined as:
* Avoiding emissions right now.
* Working toward the “ideal grid of the future” (e.g. easily served by new solar)


### What’s the scientific consensus regarding which has better impact in terms of grid decarbonisation?

There is scientific consensus ([source](https://www.cell.com/iscience/fulltext/S2589-0042(22)00185-7?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS2589004222001857%3Fshowall%3Dtrue)) that LRMER are the best signal to decarbonise the grid on a longer term. AER are strong proxies for LRMER, while SRMER omits long-term impacts of interventions. There can be other signals, such as renewable power potential curves, residual load curves, etc. that should be investigated. 


### Are there other signals other than short run marginal, long run marginal and average?

* **Asim Hussain**: There was mention in the past of “deaths per kWh”, which although won’t align with the rest of the SCI is an interesting view on the idea of signals.
* **Ciril Wakounig:** Renewable potential profiles, Henry mentioned net/residual load signals


### Independent of the question of SMER, LMER or AER, does the value of I need to be hourly?

* If you are implementing time-shifting of compute hourly data is important.
* If you are implementing some form of regional shifting, or making a decision where to place your compute long term if shifting real-time isn’t an option, then yearly averages for I might be reasonable..


### Will there be global standards for these signals?

**Ciril Wakounig**: Overall, out of the three emission factors, average is very trivial to calculate, as it is a weighted average of generation and related emission factors. Most policy/regulatory/governmental communication and regulation is based on average emission factors, without a general standard (I guess because it is implied). 

For marginal (short- and long-term) it is very difficult to develop standards, since they are both based on assumptions and statistical models that approximate reality. Contrary to the average, it is not possible to compare marginals to what happened in reality and thus it is quite difficult (I assume not impossible) to develop a standard. For instance, the average can easily be verified based on the hourly power mix that is published by TSOs.

## Comments / Perspectives

_Capture comments from people that don’t sit in any of the other sections above. These are lightly edited for spelling/grammatical corrections but as mostly accepted as is._

**Pindy Bhullar**: For each of the three signals (short run marginal, long run marginal and average) we need clear guidance of where to use them and what types of decisions can be made. We have to also distinguish who the decision makers are, in each of the results from the signal based calculations. Trying to answer the “so what” once a calculation has been presented.

What I am missing is the baseline of energy / carbon intensity from applications? I envisage organisations having use case applications operating across an energy / carbon spectrum (high, medium, low SCI) and this “catalogue” would help the decision makers know what “good” looks like.

**Henry Richardson**: It seems like we are having a discussion about the time range effect of a decision and whether that is a short run or long run action. Working group members have raised the option of creating a guide to assessing different.

**Andrew Woosnam**: It feels to me like Is there any room for splitting the spec up to distinguish between reporting and decision making?

1. _A model to *report* on emissions (both avg and marginal)_
    1. _Marginal signals would be used for I (carbon intensity) in the calc: SCI_1 = (E * I + M) per R_
    2. _This would be "reactionary" in the sense that it purely follows whatever the state of the grid is, and does its best to report marginal emissions without any special consideration for the "unideal" consumption behaviours that could arise if someone were to look at marginal signals only (e.g. EV charging at night)._
2. _A model to help make decisions based on grid composition / dynamics_
    3. _*Some alternative* to marginal-only would be used to calculate I (carbon intensity) in the calc: SCI_2 = (E * I + M) per R_
        1. _I don’t personally have a nomination for what that “alternative” should be – I think it may be akin to the “long term” ideas discussed above._
    4. _This could help give a broader context to the metrics, considering long term effects, and try its best to steer folks away from interpretations of the emissions data that might result in "unideal" consumption behaviours._

**Ciril Wakounig**: To my knowledge, there is currently no research consensus on whether SRMER stops curtailment. FYI curtailment occurs in 3-5% of the cases in CAISO, this argument therefore seems to not be valid for the other 95% of the cases.
