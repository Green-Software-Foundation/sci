# Appendix A: Reporting Requirement Examples
This appendix provides information of valid machine readable reporting files in JSON, and YAML. Other machine readable file formats are acceptable, so long as they can be parsed in a way that allows for the same identifiers to be extracted.

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
  version: '0.1'
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
  version: '0.1'
  calculation-date: '2021-10-20'
  calculation-information: 'https://github.com/Green-Software-Foundation/software_carbon_intensity'

```
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

```json
{
  "sci": {
    "software-boundary":["software-package-name"],
    "ci":0.5,
    "c-missing-comment":"A compelling and descriptive reason for why C is missing.",
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

### 3. Where a pre-provided baseline was not selected
File name: `25c78b6d-b049-424d-87c1-28f07e41bb23/report.json`

```json
{
  "sci": {
    "software-boundary":["software-package-name"],
    "ci":0.5,
    "c":5,
    "r":1,
    "r-source":"another-source",
    "r-source-comment":"A baseline was not selected, for the purpose of example."
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