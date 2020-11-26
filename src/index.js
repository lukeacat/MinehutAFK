const utils = require("./utils")
const config = require("../config.json")

let bot = utils.createBot(config.minehutServer, config.account);

bot.once("spawn", () => {
    if(config.annouce)
        bot.chat(`MinehutAFK loaded! Use !help or mention me in Chat!`)
})

bot.on("spawn", () => {
    bot.chat(config.goToHome)
    bot.chat(`/join ${config.minehutServer}`)

    console.log(`MinehutAFK is running! You've conneced to ${config.minehutServer}`)
})

bot.on("message", rawMessage => {
    message = rawMessage.toString().split(config.delimiter);

    if(message.length < 2) return;

    console.log(rawMessage.toString())

    if(message[1].includes(bot.username)) {
        bot.chat(`I'm a bot afking for ${bot.username}!`)
    } else if(message[1] == "!help") {
        bot.chat(`MinehutAFK v${utils.getVersion}`)
    }

})