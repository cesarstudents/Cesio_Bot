const Discord = require("discord.js"); 
const intents = ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_PRESENCES"];
const client = new Discord.Client({
    intents: intents,
    ws: { intents: intents },
}); 

const config = require("./config.json");
const welcome = require("./welcome.js");
const commands = require("./commands.js")

// When the client is ready, run this code (only once)
// Used for testing on the server but only runs on your PC
client.on('ready', () => {
	console.log('Ready!')

	welcome(client);
});

commands(client);

// Login to Discord with your client's token
client.login(config.token);