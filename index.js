// Require the necessary discord.js classes
const { Client, Intents } = require("discord.js")
const config = require("./config.json")


// Add the Intents that the Bot will use
// Discord API for the Intents: https://discord.com/developers/docs/topics/gateway#list-of-intents
const myIntents = new Intents()
myIntents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES)


// Create a new client instance
const client = new Client({ intents: myIntents})


// When the client is ready, run this code (only once)
client.on('ready', () => {
	console.log('Ready!')
})

client.on("message", (message) =>{
	// Evita que o Bot responda outro Bot e que responda DM
	if (message.author.bot == true) return
	if (message.channel.type == "dm") return


	if (message.content == "//oi"){
		message.channel.send("comi o cu de quem ta lendo")
	}
	
	if (message.content == "//69"){
		message.channel.send("Eta bixo secso kkkkk")
	}

	if (message.content == "//help"){
		message.channel.send("Comandos Disponiveis:\n//oi\n//69\n//gay\n//windows")
	}

	if (message.content == "//gay"){
		message.channel.send("https://pics.me.me/ur-the-biggest-gay-36954314.png")
	}

	if (message.content == "//windows"){
		message.channel.send("O cara usa windows mano mt troxa pqp kkkkkk")
	}
	
})

// Login to Discord with your client's token
client.login(config.token)