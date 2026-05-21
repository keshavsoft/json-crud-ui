export default function parseInput() {
    const [action] = process.argv.slice(2);

    return {
        action: action || null,
        toPath: process.cwd()
    };
};