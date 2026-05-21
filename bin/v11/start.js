import parseInput from "./core/parseInput.js";
// import resolveCommand from "./core/resolveCommand.js";
import showUsage from './core/showUsage.js';

import resolveCommand from "./tasks/actions/EndPointsJs/index.js";

import pkg from '../../package.json' with { type: 'json' };

const version = pkg.version;

const run = async () => {
  const input = parseInput();
  console.log("bbbb : ", input);

  // if (!input.cmd) return showUsage(version);

  if (input.action === "--help" || input.action === "-h" || input.action === "help") return showUsage(version);

  await resolveCommand({
    action: input.action,
    toPath: input.toPath
  });

  // if (!command) return (console.log(`Unknown command: ${input.cmd}\n`), showUsage(version));

  // await command(input);
};

export default run;