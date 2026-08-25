# JavaScript in Hindi — Practice Repository

Examples and browser projects from a JavaScript learning series, organized by topic.

## Contents

- `01_basics` — variables, data types, conversions, and strings
- `02_basics` — arrays, objects, functions, and scope
- `03_basics` — modern JavaScript patterns
- `04_controlflow` — conditions and branching
- `05_iterations` — loops and array iteration
- `dom` — DOM selection and manipulation
- `07_projects` — browser-based practice projects
- `08_events` — browser events
- `09_advance_one` — asynchronous JavaScript and advanced topics

## Run

Most examples can be executed directly:

```bash
node 01_basics/01_variables.js
```

For HTML examples, run a local static server:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Validation

```bash
git ls-files '*.js' | xargs -n1 node --check
```

Use a current Node.js LTS release. Browser-only examples depend on `window` or `document` and should be run through their matching HTML page.
