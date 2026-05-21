// insertImport.js

export default ({ editor, importLine }) => {

    if (!editor.hasLine(importLine)) {

        const lastImportLine =
            editor.findLastLine("import ");

        editor.insertAfter({
            line: lastImportLine,
            content: importLine
        });
    };
};