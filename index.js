const Discord = require("discord.js"); 
const intents = ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_PRESENCES"];
const client = new Discord.Client({
    intents: intents,
    ws: { intents: intents },
}); 

const config = require("./config.json");
const welcome = require("./welcome.js");

// When the client is ready, run this code (only once)
// Used for testing on the server but only runs on your PC
client.on('ready', () => {
	console.log('Ready!')

	welcome(client)
});

// prefixo é o comando necessário para chamar o bot
const prefix = "//"
client.on("messageCreate", (message) =>{
	// Evita que o Bot responda outro Bot, responda um DM ou que ele responda sem ser chamado o prefixo
	if (message.author.bot == true) return
	if (message.channel.type == "dm") return
	if (!message.content.startsWith(prefix)) return

	// Corta o prefixo da mensagem e pega apenas o comando em si
	const argument = message.content.slice(prefix.length)

	switch(argument) {
		case "help": message.channel.send ("Comandos Disponiveis:\n//oi\n//69\n//gay\n//windows")
		break;

		case "oi": message.channel.send ("Olá :wave:")
		break;

		case "69": message.channel.send ("Eta bixo secso kkkkk")
		break;

		case "gay": message.channel.send ("https://pics.me.me/ur-the-biggest-gay-36954314.png")
		break;
		
		case "windows": message.channel.send ("O cara usa windows mano, mt troxa pqp kkkkkk")
		break;

		default: message.channel.send("Comando não reconhecido")
		break;
	}
});

// Login to Discord with your client's token
client.login(config.token);