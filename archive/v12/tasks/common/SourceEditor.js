// SourceEditor.js

import fs from "fs";

class SourceEditor {

    constructor(path) {

        this.path = path;

        this.content = fs.readFileSync(path, "utf-8");

        this.lines = this.content.split("\n");
    };

    findLine(searchText) {

        const index = this.lines.findIndex(line =>
            line.includes(searchText)
        );

        return index === -1
            ? null
            : index + 1;
    };

    findLastLine(searchText) {

        let found = null;

        this.lines.forEach((line, index) => {

            if (line.includes(searchText)) {

                found = index + 1;
            };
        });

        return found;
    };

    hasLine(searchText) {

        return this.findLine(searchText) !== null;
    };

    insertAfter({ line, content }) {

        this.lines.splice(line, 0, content);
    };

    insertBefore({ line, content }) {

        this.lines.splice(line - 1, 0, content);
    };

    save() {

        fs.writeFileSync(
            this.path,
            this.lines.join("\n")
        );
    };
};

export default SourceEditor;