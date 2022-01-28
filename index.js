// Atribui os intents (permissões do Bot)
const Discord = require("discord.js"); 
const intents = ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_PRESENCES"];
const client = new Discord.Client({
    intents: intents,
    ws: { intents: intents },
}); 

const WOKCommands = require('wokcommands')
const path = require('path')

// Chama as funções necessárias dos arquivos para rodar as mesmas
const config = require("./config.json");
const welcome = require("./welcome.js");
const commands = require("./commands.js")
const role_claim = require("./role_claim.js")
const rule_claim = require("./rule_claim.js")
const private_message = require("./private_message.js")

// quando o client estiver pronto ele vai rodar o codigo;
// usado para testes no servidor, porem usa seu PC como servidor local
client.on('ready', () => {
	console.log('Ready!')

	new WOKCommands(client, {
		commandsDir: path.join(__dirname, "commands"),
		testServers: ["796454602723426325"]
	})

	welcome(client);
	private_message(client)
	commands(client);
	role_claim(client);
	rule_claim(client);
});

// Da login no discord usando o token do bot
client.login(config.token);