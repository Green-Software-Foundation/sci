# Appendix A: Further information on Reporting Requirements
This appendix provides additional detail on validly formed machine-readable SCI reporting files, in YAML format.

## File Structure

To comply with this specification and implement carbon transparency, an entity MUST meet these reporting requirements. The hierachical structure of the YAML file is described below.

### Data elements to be reported
The following list contains the REQUIRED and OPTIONAL data elements to be reported.

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
| Software or Product Version | metadata/entity-version | MAY | Text | |
| SCI Specification Version | metadata/sci-version | MUST | Numeric | The version of the SCI specification against which this report is being made. |
| Date of Calculation | metadata/calculation-date | MUST | Date | Following a format described in [RFC3339], [a subset](https://ijmacd.github.io/rfc3339-iso8601/) of ISO 8601 |
| Further information on calculation | metadata/calculation-information | MAY | Text | More information on your calculation methodology can be provided as freetext, or as a URL to an external document or software repository. |
| Further information on report | metadata/report-information-url | MAY | URL | More information on your calculation methodology may be provided, and this SHALL be a URL to an external document or software repository.  |

## YAML File Examples

### 1. Generic Example where baseline was selected
File name: `25c78b6d-b049-424d-87c1-28f07e41bb23/report.yaml`

```yaml
sci:
  software-boundary:
    - software-package-name
  ci: 0.5
  c: 5
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
### 2. Where C is missing
File name: `25c78b6d-b049-424d-87c1-28f07e41bb23/report.yaml`

```yaml
sci:
  software-boundary:
    - software-package-name
  ci: 0.5
  c-missing-comment: A compelling and descriptive reason for why C is missing.
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
### 3. Where a pre-provided baseline was not selected
File name: `25c78b6d-b049-424d-87c1-28f07e41bb23/report.yaml`
```yaml
sci:
  software-boundary:
    - software-package-name
  ci: 0.5
  c: 5
  r: 1
  r-source: another-source
  r-source-comment: 'A baseline was not selected, for the purpose of example.'
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