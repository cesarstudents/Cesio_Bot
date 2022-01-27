module.exports = client => {
	
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

			case "mucalol": 
			const messages = ["https://pm1.narvii.com/7639/5804f9d44393dc2f37888c9b410cf2a8113dc469r1-487-630v2_hq.jpg", "https://electron.scrolller.com/atto/why-so-serius-e35wgoodei-540x405.jpg", "https://pm1.narvii.com/7639/ec89f3aabb05ac8519dfa6f566c11da49f6f1e72r1-1200-602v2_hq.jpg", "https://pm1.narvii.com/7639/f3a77c6d030b6b17f28086c83b144a5928fa9d9br1-554-554v2_hq.jpg"]
			const randomMessage = messages[Math.floor(Math.random() * messages.length)];
			message.channel.send(randomMessage)
			break;

			default: message.channel.send("Comando não reconhecido")
			break;
		}
	});
}