export default function parseInput() {
    const [cmd, action] = process.argv.slice(2);

    return {
        cmd: cmd || null,
        action: action || null,
        toPath: process.cwd()
    };
};