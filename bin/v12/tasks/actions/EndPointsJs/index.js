// bin/v11/tasks/actions/EndPointsJs/index.js

import showUsage from "./showUsage.js";
import actions from "../../../config/actions.json" with { type: "json" };
import alterJsFile from "./AlterJsFile/index.js";

export default async ({ action, toPath }) => {
    const matchedAction = actions.find(
        ({ cmd }) => cmd === action
    );

    if (matchedAction) {
        alterJsFile({
            inImportLine: matchedAction.endPointsJs.importLine,
            inUsageLine: matchedAction.endPointsJs.usageLine,
            toPath
        });
    };
};