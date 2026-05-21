// bin/v11/commands/loadCommand.js

import endPointsJs from "../tasks/actions/EndPointsJs/index.js"

export default async function loadCommand(name) {
    await endPointsJs({ action: name });
};
