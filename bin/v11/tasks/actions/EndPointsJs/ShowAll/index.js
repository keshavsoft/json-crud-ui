// bin/v9/tasks/actions/EndPointsJs/index.js

import SourceEditor from "../../../common/SourceEditor.js";

import insertImport from "./insertImport.js";
import insertUsage from "./insertUsage.js";

export default ({ action = "", toPath }) => {

    const path = `${toPath}/end-points.js`;

    const editor = new SourceEditor(path);

    const importLine =
        `import { getFunc } from "./${action}/controller.js";`;

    const usageLine =
        `router.get('/${action}', (req, res) => getFunc({ res, inTableName : tableName}));`;

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