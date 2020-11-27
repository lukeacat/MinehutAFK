const mineflayer = require("mineflayer")
const getVersion = "2"

function createBot(minehutServer, account) {

    return mineflayer.createBot({
        host: `${minehutServer}.minehut.gg`,
        username: account.username, 
        password: account.password,
        version: "1.16.4"
    })
}

module.exports.createBot = createBot;
module.exports.getVersion = getVersion; 
