# Appendix A: Reporting Requirement Examples
This appendix provides information of valid machine readable reporting files.

## YAML Examples

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
  version: '0.1'
  calculation-date: '2021-10-20'
  calculation-information: 'https://github.com/Green-Software-Foundation/software_carbon_intensity'

```
### 2. Where C is missing
File name: `25c78b6d-b049-424d-87c1-28f07e41bb23/report.yaml`

### 3. Where a pre-provided baseline was not selected
File name: `25c78b6d-b049-424d-87c1-28f07e41bb23/report.yaml`

## Json Examples
### 1. Generic Example where baseline was selected

File name: `25c78b6d-b049-424d-87c1-28f07e41bb23/report.json`

```json
{
  "sci": {
    "software-boundary":["software-package-name"],
    "ci":0.5,
    "c":5,
    "r":1,
    "r-source":"machine-learning-baseline"
  },
  "metadata": {
    "name":"Example Report",
    "contact-name":"Responsible Point of Contact",
    "contact-email":"report-example@greensoftware.foundation",
    "organization":"GSF",
    "guid":"25c78b6d-b049-424d-87c1-28f07e41bb23",
    "version":"0.1",
    "calculation-date":"2021-10-20",
    "calculation-information":"https://github.com/Green-Software-Foundation/software_carbon_intensity"
  }
}
```

### 2. Where C is missing
File name: `25c78b6d-b049-424d-87c1-28f07e41bb23/report.json`

### 3. Where a pre-provided baseline was not selected
File name: `25c78b6d-b049-424d-87c1-28f07e41bb23/report.json`