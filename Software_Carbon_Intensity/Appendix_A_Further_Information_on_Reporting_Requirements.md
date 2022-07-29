# Appendix A: Further information on Reporting Requirements
This appendix provides additional detail on validly formed machine-readable SCI reporting files, in YAML format.

## File Structure

To comply with this specification and implement carbon transparency, an entity MUST meet these reporting requirements. The hierachical structure of the YAML file is described below.

### Data elements to be reported
The following list contains the REQUIRED and OPTIONAL data elements to be reported.

| Name | Identifier | Optionality | Format | Notes |
| - | - | - | - | - |
| Supporting infrastructure and systems contained within the [Software Boundary](Software_Carbon_Intensity_Specification#software-boundary) | sci/software-boundary | MUST | Text | A description of the software boundary for the entity. |
| [Software Carbon Intensity](Software_Carbon_Intensity_Specification#reporting-the-sci-value) - `SCI`| sci/sci | MUST | Numeric | The [Software Carbon Intensity](Software_Carbon_Intensity_Specification#reporting-the-sci-value) of the entity itself.
| [Software Carbon Intensity](Software_Carbon_Intensity_Specification#reporting-the-sci-value) - `R` baseline value | sci/r | MUST | Numeric |
| [Software Carbon Intensity](Software_Carbon_Intensity_Specification#reporting-the-sci-value) - `R` baseline source| sci/r-source | MUST | Text | The text CAN refer to one of the identifiers in the [pre-set list](Software_Carbon_Intensity_Specification#preset-list-for-baselines), but it can also refer to a similar concept. |
| Product Name, entity name, or Software Product | metadata/name | MUST | Text | |
| Contact name | metadata/contact-name | MUST | Text | The point of contact responsible and accountable for the report. |
| Contact email | metadata/contact-email | MUST | Text | The point of contact responsible and accountable for the report. |
| Organization | metadata/organization | SHOULD | Text | This SHALL be populated where the report is not by an individual contributor, otherwise it is not required. |
| GUID | metadata/guid | MUST | GUID | Following a format in [RFC4122], provided to uniquely identify this particular product, resource, or service. |
| Software or Product Version | metadata/entity-version | MUST | Text | |
| SCI Specification Version | metadata/sci-version | MUST | Numeric | The version of the SCI specification against which this report is being made. |
| Date of Calculation | metadata/calculation-date | MUST | Date | Following a format described in [RFC3339], [a subset](https://ijmacd.github.io/rfc3339-iso8601/) of ISO 8601 |
| Start date of the workload | metadata/workload-start-time | MAY | Timestamp | Following a format described in [RFC3339], [a subset](https://ijmacd.github.io/rfc3339-iso8601/) of ISO 8601 |
| Processing period for calculation | metadata/calculation-period | MAY | Numeric | Time taken in milliseconds to complete the process defined by `R`.  |
| Further information on calculation | metadata/calculation-information | MAY | Text | More information on your calculation methodology can be provided as freetext, or as a URL to an external document or software repository. |
| Further information on report | metadata/report-information-url | MAY | URL | More information on your calculation methodology MAY be provided, and this MUST be a URL to an external document or software repository.  |

## YAML File Example

### 1. Generic Example without an additional report
File name: `25c78b6d-b049-424d-87c1-28f07e41bb23/report.yaml`

```yaml
sci:
  software-boundary: 'The software boundary of this report is limited to a single markdown file, as it is provided for example only.'
  sci: 0.5
  r: 1
  r-source: machine-learning-baseline
metadata:
  name: Example Report
  contact-name: Responsible Point of Contact
  contact-email: report-example@greensoftware.foundation
  organization: GSF
  guid: 25c78b6d-b049-424d-87c1-28f07e41bb23
  entity-version: '0.1'
  sci-version: 1.0
  calculation-date: '2021-10-20'
  calculation-information: 'https://github.com/Green-Software-Foundation/software_carbon_intensity'

```
### 2. Generic Example with an additional report
File name: `25c78b6d-b049-424d-87c1-28f07e41bb23/report.yaml`

```yaml
sci:
  software-boundary: 'The software boundary of this report is limited to a single markdown file, as it is provided for example only.'
  sci: 0.5
  r: 1
  r-source: machine-learning-baseline
metadata:
  name: Example Report
  contact-name: Responsible Point of Contact
  contact-email: report-example@greensoftware.foundation
  organization: GSF
  guid: 25c78b6d-b049-424d-87c1-28f07e41bb23
  entity-version: '0.1'
  sci-version: 1.0
  calculation-date: '2021-10-20'
  workload-start-time: '2021-10-20T01:23:45Z'
  calculation-period: 600
  calculation-information: 'https://github.com/Green-Software-Foundation/software_carbon_intensity'
  report-information-url: 'https://github.com/Green-Software-Foundation/software_carbon_intensity'

```

### 3. Generic Example by an individual contributor
File name: `25c78b6d-b049-424d-87c1-28f07e41bb23/report.yaml`

```yaml
sci:
  software-boundary: 'The software boundary of this report is limited to a single markdown file, as it is provided for example only.'
  sci: 0.5
  r: 1
  r-source: machine-learning-baseline
metadata:
  name: Example Report
  contact-name: Individual Point of Contact
  contact-email: report-example@greensoftware.foundation
  guid: 25c78b6d-b049-424d-87c1-28f07e41bb23
  entity-version: '0.1'
  sci-version: 1.0
  calculation-date: '2021-10-20'
  calculation-information: 'https://github.com/Green-Software-Foundation/software_carbon_intensity'

```
