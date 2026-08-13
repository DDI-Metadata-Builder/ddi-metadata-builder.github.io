# DDI Metadata Generator

## Overview

The [**DDI Metadata Generator**](https://xyhdiw.github.io/DDI-Metadata-Builder/) is an interactive web-based interface for creating structured metadata based on the [**Data Documentation Initiative (DDI)**](https://ddialliance.org/) standard. The interface supports the creation of metadata that is more structured, consistent, and standardized than free-text documentation.

It is designed for researchers, research data managers, data stewards, students, and other users who need to describe research data in a standardized format but may not have extensive experience with DDI, XML, or metadata engineering.

Instead of manually studying a large number of DDI elements and writing XML documents from scratch, users can describe their datasets through an intuitive interface. The application maps the information entered by the user to the corresponding DDI elements and generates a structured, standards-compliant metadata document.

The tool is particularly suitable for:

- lightweight metadata creation;
- small and medium-sized research datasets;
- training and educational use;
- preparing metadata for repository submission;
- learning how concrete data descriptions are represented in DDI;
- entry point for batch processing
- validating and further editing existing metadata files.

---


## Main Features

### Standards-Based Metadata Structure

The interface is currently based on the DDI metadata schema [Codebook 2.6](https://ddialliance.org/ddi-codebook_v2.6) and its [hierarchical structure](https://docs.ddialliance.org/DDI-Codebook/2.6/xmlschema/).

The generated document follows the supported DDI model so that metadata is represented in a consistent and machine-readable way.


### Intuitive Data Description

Users describe their data through understandable forms and guided questions. The application maps these descriptions to the corresponding DDI elements.

This allows users to focus on the meaning of their metadata rather than on XML syntax.

### Two Metadata Modes

The application provides two versions to support different levels of need.

#### Simple Mode

The simple mode contains a minimum set of commonly required metadata elements. It focuses on the most important information needed to describe a dataset in a clear and standardized way. 

#### Extended Mode

The extended mode supports a more comprehensive metadata description.

Depending on the implemented DDI profile, it plan to include information about:

- study and dataset identification;
- creators, contributors, and distributors;
- data collection methods;
- geographic and temporal coverage;
- universe and sampling;
- access conditions;
- files and records;
- variables;
- value labels and categories;
- missing values;
- coding schemes;
- related publications and external resources.

The extended mode is intended for users who need a richer description of their data, including metadata commonly imported from statistical formats such as Stata, SPSS, or SAS.

### Schema-based DDI validation

Users can upload an existing XML file and validate against DDI codebook schema. And continue processing it in the interface.

This supports iterative metadata creation instead of requiring users to start from the beginning each time.

### Download in Machine-Readable Formats

Generated metadata can be downloaded for further use, archiving, validation, repository submission, or transformation.


### Metadata Preview

The interface can present the generated metadata before download, allowing users to review the structure and content.

This helps users understand how their input is represented in DDI.

---
## Purpose of this tool

### Support FAIR Data Practices

Structured DDI metadata can contribute to the FAIR principles by improving the:

- **Findability** of research data through richer and more consistent descriptions;
- **Accessibility** of metadata in machine-readable formats;
- **Interoperability** between repositories, catalogues, libraries, and research data infrastructures;
- **Reusability** of data through clearer documentation of datasets, variables, concepts, categories, and related resources.

The tool does not make a dataset FAIR by itself, but it helps users create metadata that can support FAIR-oriented data publication and preservation workflows.

### Lower the Entry Barrier to DDI

DDI is a comprehensive metadata standard with many elements, attributes, relationships, and possible levels of description. For users who only need to document a small dataset, learning the full specification and the technical process of generating valid XML may require disproportionate effort.

This interface reduces that barrier by:

- presenting DDI elements in a user-friendly form;
- explaining fields in the context of concrete research data;
- mapping user input to the relevant DDI structure;
- generating the metadata document automatically;
- reducing the need to write XML manually.

### Connect Abstract DDI Elements to Concrete Use Cases

Metadata standards are often documented at a technical or abstract level. Beginners may understand an element definition but still be unsure when and how to use it in practice.

The interface connects DDI elements to concrete metadata questions, such as:

- What is the title of the dataset?
- Who created or distributed it?
- What population does it cover?
- Which methods were used to collect the data?
- What does a variable measure?
- Which values and categories can a variable contain?

This makes the tool useful not only for metadata generation, but also for learning and training.

### Support Lightweight Metadata Creation

Not every project requires a complete and highly detailed DDI document. In many cases, users need a practical way to create a minimum but meaningful metadata record for a repository submission, a small research project, a teaching dataset, or an internal data catalogue.

The application therefore supports both lightweight and more detailed metadata creation.

### Reduce Technical Setup

Users can generate metadata directly in the browser without installing additional software, configuring a local development environment, or learning a programming language.

This is especially useful for users who only need to create or edit metadata occasionally.

### Provide a Basis for Metadata Validation

Existing DDI XML or JSON files can be uploaded and processed in the interface. This creates a foundation for:

- reviewing existing metadata;
- identifying missing or incomplete fields;
- checking whether metadata follows the expected structure;
- editing previously generated documents;
- validating metadata against the supported DDI model.

---

## Future development

Possible future developments include:

- support for additional DDI versions DDI lifecycle and DDI-CDI;
- reusable metadata templates;
- multilingual metadata entry;
- controlled vocabularies;
- integration with repository APIs;
- direct metadata submission to supported repositories;
- comparison of uploaded metadata with the generated DDI structure.

---

## Feedback and Contributions

Feedback on the interface, supported DDI elements, usability, validation rules, and future features is welcome.

Useful contributions may include:

- reporting bugs;
- suggesting additional DDI elements and use cases;
- proposing improvements to field descriptions;
- testing generated metadata;
- contributing mappings from statistical formats;
- improving documentation;
- suggesting repository integration scenarios.

Please use GitHub issue tracker can be used to report problems or propose new features.

---

