# json-crud-ui

A modular UI scaffolding tool for building structured JSON CRUD applications using reusable conventions and generated architecture.

---

# Why This Project Exists

Most frontend CRUD projects start the same way:

- create folders manually
- wire DOM manually
- organize startup logic differently
- repeat boilerplate setup
- invent project structure repeatedly

Over time this creates inconsistent codebases that become difficult to maintain.

`json-crud-ui` was created to solve that problem by providing a standardized project structure and startup lifecycle.

The goal is to help developers start with a predictable architecture instead of rebuilding the same foundation repeatedly.

---

# Philosophy

This project is built around one simple idea:

```text
Developers should focus on business logic,
not repetitive project setup.
```

Instead of writing setup code again and again, developers can generate a working structure with predefined conventions.

---

# Features

- modular folder generation
- reusable UI startup lifecycle
- DOMContentLoaded workflow separation
- scalable folder structure
- CLI-based scaffolding
- convention-driven architecture
- reusable startup patterns
- lightweight structure
- ES module based

---

# Installation

```bash
npm install json-crud-ui
```

For local development:

```bash
npm link
```

---

# Usage

## Initialize a Project

```bash
npx json-crud-ui init
```

This generates a structured UI project.

Example generated structure:

```text
Index/
    FormLoad/
        DomContentLoaded/
            buildHeader.js
            buildMenuItem.js
            runAfterDomLoad.js
```

---

# Architecture Idea

The generated structure separates responsibilities clearly.

Example:

```text
FormLoad/
    ↓
DOMContentLoaded/
    ↓
UI builders
```

This makes the project easier to:

- understand
- maintain
- scale
- debug
- extend

---

# Design Goals

The project encourages:

- predictable project layouts
- reusable module boundaries
- lifecycle-driven UI initialization
- scalable frontend organization
- cleaner onboarding for developers

A developer opening one generated project should immediately understand where things belong.

---

# Example Lifecycle

```text
Application Start
    ↓
DOMContentLoaded
    ↓
runAfterDomLoad.js
    ↓
build UI modules
    ↓
attach behaviors
```

This creates a consistent startup model across projects.

---

# Target Direction

`json-crud-ui` is not intended to be a monolithic frontend framework.

Instead, it aims to become:

- a frontend scaffolding ecosystem
- a reusable architecture generator
- a convention-driven UI starter
- a modular CRUD UI foundation

---

# Benefits

## Faster Project Setup

Developers can start immediately with working structure.

---

## Consistent Architecture

Projects follow shared conventions.

---

## Easier Maintenance

Separated modules simplify debugging and scaling.

---

## Better Team Collaboration

Predictable structure improves onboarding.

---

# Example Workflow

```bash
mkdir my-project

cd my-project

npx json-crud-ui init
```

Generated project becomes immediately ready for extension.

---

# Future Vision

Possible future additions:

- component generators
- routing generators
- table builders
- form builders
- configuration-driven UI generation
- plugin support
- theme systems

The current architecture is intentionally designed to support future expansion.

---

# Conclusion

`json-crud-ui` is an attempt to standardize frontend CRUD project structure using reusable conventions and modular architecture principles.

The focus is not only generating files, but also generating clarity, consistency, and scalability for developers.