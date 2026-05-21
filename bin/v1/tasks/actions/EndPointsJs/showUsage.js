/*
KSchema CLI – Entry Flow

1. Read user input from terminal (parseInput)
2. If no command → show usage (first-time user safety)
3. If help flags → show usage (quick guidance)
4. Resolve command dynamically (no hardcoding logic)
5. If command not found → inform + guide back to usage
6. Execute command with parsed input

Goal:
- Zero confusion for user
- Single source of truth (showUsage)
- Easy to extend (just add commands, no core changes)
*/

export default function showUsage() {
    const g = "\x1b[32m";
    const y = "\x1b[33m";
    const c = "\x1b[36m";
    const gray = "\x1b[90m";
    const r = "\x1b[0m";

    console.log(`
${y}Usage:${r}
  ${g}npx kschema-api-gen endPointsJs${r} [options]

${y}options:${r}
  ${g}ShowAll${r}     the action for get
  ${g}Insert${r}      the action for post
  ${g}Distinct${r}    the action for get and request param columnName

${y}Examples:${r}
  ${gray}npx kschema-api-gen endPointsJs ShowAll${r}
  ${gray}npx kschema-api-gen endPointsJs Insert${r}
  ${gray}npx kschema-api-gen endPointsJs Distinct${r}
`);
}