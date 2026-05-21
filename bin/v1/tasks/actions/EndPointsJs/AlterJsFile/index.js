// bin/v9/tasks/actions/EndPointsJs/index.js

import SourceEditor from "../../../common/SourceEditor.js";

import insertImport from "./insertImport.js";
import insertUsage from "./insertUsage.js";

export default ({ inImportLine, inUsageLine, toPath }) => {

    const path = `${toPath}/end-points.js`;

    const editor = new SourceEditor(path);

    const importLine = inImportLine;

    const usageLine = inUsageLine;

    insertImport({
        editor,
        importLine
    });

    editor.save();

    insertUsage({
        editor,
        usageLine
    });

    editor.save();
};