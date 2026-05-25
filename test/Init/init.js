import getLatestVersion from "../../bin/core/getLatestVersion.js";

const commandToSend = "init";

const load = async (cmd) => {
    const v = getLatestVersion();

    return (await import(`../bin/${v}/commands/${cmd}.js`)).default;
};

const startFunc = async () => {
    const func = await load(commandToSend);

    // console.log(typeof func);

    func({});
};

startFunc().then();