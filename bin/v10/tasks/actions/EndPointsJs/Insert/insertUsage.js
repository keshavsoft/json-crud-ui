// insertUsage.js
export default ({ editor, usageLine }) => {

    if (!editor.hasLine(usageLine)) {

        const exportLine =
            editor.findLastLine("const router = ");
        console.log("exportLine : ", exportLine);

        editor.insertAfter({
            line: exportLine,
            content: usageLine
        });
    };
};