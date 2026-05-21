import init from "../commands/init.js";

// resolveCommand.js
const map = {
    init
};

export default function resolveCommand(cmd) {
    return map[cmd] || null;
};