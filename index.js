const Discord = require("discord.js"); 
const intents = ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_PRESENCES"];
const client = new Discord.Client({
    intents: intents,
    ws: { intents: intents },
}); 

const config = require("./config.json");
const welcome = require("./welcome.js");
const commands = require("./commands.js")
const role_claim = require("./role_claim.js")
const rule_claim = require("./rule_claim.js")


// quando o client estiver pronto ele vai rodar o codigo;
// usado para testes no servidor, porem usa seu PC como servidor local
client.on('ready', () => {
	console.log('Ready!')

	welcome(client);
	commands(client);
	role_claim(client);
	rule_claim(client);
});

// Da login no discord usando o token do bot
client.login(config.token);