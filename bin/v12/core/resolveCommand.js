// import endPointsJs from "../tasks/actions/EndPointsJs/ShowAll/index.js";
import appJs from "../tasks/actions/appJs.js";
import endPointsJs from "../tasks/actions/EndPointsJs/index.js";

// resolveCommand.js
const map = {
    endPointsJs,
    appJs
};

export default function resolveCommand(cmd) {
    return map[cmd] || null;
};