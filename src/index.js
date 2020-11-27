const utils = require("./utils")
const config = require("../config.json")
const readline = require('readline');

let bot = utils.createBot(config.minehutServer, config.account);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function bindEvents() {
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

    bot.on("end", () => {
        console.log("Connection ended.")
        createNewBot()
    })

    bot.on("kicked", reason => {
        console.log(`Kicked for ${reason}`)
        createNewBot()
    })
}

function createNewBot() {
    bot = utils.createBot(config.minehutServer, config.account);
    bindEvents(bot)
}

rl.on('line', function(line){
    bot.chat(line)
})

createNewBot()
