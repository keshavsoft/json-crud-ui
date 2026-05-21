import init from "../commands/init.js";
import addListeners from "../commands/addListeners.js";

// resolveCommand.js
const map = {
    init,
    addListeners
};

export default function resolveCommand(cmd) {
    return map[cmd] || null;
};