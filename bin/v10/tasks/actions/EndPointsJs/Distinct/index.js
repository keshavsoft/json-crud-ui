import SourceEditor from "../../../common/SourceEditor.js";

import insertImport from "./insertImport.js";
import insertUsage from "./insertUsage.js";

export default ({ action = "", toPath }) => {
    const funcName = "getFunc";

    const path = `${toPath}/end-points.js`;

    const editor = new SourceEditor(path);

    const importLine =
        `import { ${funcName} } from "./${action}/controller.js";`;

    const usageLine =
        `router.get('/${action}/:columnName', (req, res) => ${funcName}({ req, res, inTableName: tableName }));`

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