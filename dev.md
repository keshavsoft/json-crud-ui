# Development Guide

This document explains the internal development workflow and architecture of `json-crud-ui`.

---

# Purpose

`json-crud-ui` is a modular CLI scaffolding tool designed to generate structured CRUD UI applications using reusable conventions and lifecycle-driven architecture.

The goal is to standardize frontend project setup and reduce repetitive boilerplate creation.

---

# Local Development

Clone repository:

```bash
git clone https://github.com/keshavsoft/json-crud-ui.git
```

Move into project:

```bash
cd json-crud-ui
```

Install dependencies:

```bash
npm install
```

---

# Folder Structure

```txt
bin/
 ├── core/
 │    ├── getLatestVersion.js
 │    └── loadRunner.js
 │
 └── v3/
      ├── commands/
      ├── core/
      ├── start.js
      └── cli.js

docs/
test/
```

---

# Architecture Overview

The project is divided into layered responsibilities.

```txt
cli.js
   ↓
loadRunner.js
   ↓
v3/start.js
   ↓
resolveCommand.js
   ↓
commands/
```

This creates a scalable CLI execution pipeline.

---

# Entry Point

Main executable:

```txt
bin/cli.js
```

Responsibilities:

* load latest runtime version
* dynamically import runtime
* execute runtime startup

Example:

```js
const version = getLatestVersion();

const runner = await loadRunner(version);

await runner();
```

---

# Dynamic Runtime Loading

The CLI supports runtime versioning.

Example:

```js
const mod = await import(`../${version}/start.js`);
```

Benefits:

* version isolation
* safer upgrades
* backward compatibility
* experimental runtime support

---

# Runtime Layer

Located at:

```txt
bin/v3/start.js
```

Responsibilities:

* parse CLI input
* validate commands
* resolve command handlers
* execute commands

---

# Core Layer

Located at:

```txt
bin/v3/core/
```

Handles:

* command parsing
* command resolution
* usage/help system
* startup orchestration

Example files:

```txt
parseInput.js
resolveCommand.js
showUsage.js
```

---

# Command Resolver

Command routing is centralized.

Example:

```js
const map = {
    init,
    addListeners,
    htmlIdClick
};

return map[cmd] || null;
```

Benefits:

* predictable command mapping
* scalable command registration
* isolated command execution

---

# Commands Layer

Located at:

```txt
bin/v3/commands/
```

Responsibilities:

* generate folders
* generate files
* scaffold architecture
* attach reusable conventions

Example commands:

```txt
init.js
addListeners.js
htmlIdClick.js
```

---

# Development Workflow

Recommended workflow:

1. Create command
2. Register in resolver
3. Test locally
4. Validate generated structure
5. Refactor reusable logic
6. Publish new version

---

# Testing Strategy

The `test` folder is used for isolated development testing.

Example:

```txt
test/
```

Typical testing:

```bash
node test/sample.js
```

This allows rapid debugging without publishing to npm.

---

# Design Principles

The architecture encourages:

* modularity
* reusable conventions
* lifecycle separation
* scalable folder structures
* isolated responsibilities
* convention-driven development

---

# Philosophy

```txt
Developers should focus on business logic,
not repetitive project setup.
```

---

# Future Direction

Possible future additions:

* component generators
* route generators
* form generators
* table generators
* plugin system
* configuration-driven scaffolding
* theme support
* UI template presets

---

# Notes

* Uses ES Modules
* Runtime is version-driven
* Commands remain isolated
* Core layer should stay lightweight
* Scaffolding should remain reusable

---

# Conclusion

`json-crud-ui` is designed as a scalable frontend scaffolding ecosystem focused on reusable architecture, predictable structure, and faster CRUD UI development.
