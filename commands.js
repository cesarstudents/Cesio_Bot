
// encontrar alguma maneira de deixar esse código mais clean com os comandos que se ramificam
// como os de matemática por exemplo, talvez importar uma função um arquivo separado?
module.exports = client => {
	
	const prefix = "//"
	client.on("messageCreate", (message) =>{
		// Evita que o Bot responda outro Bot, responda um DM ou que ele responda sem ser chamado o prefixo
		if (message.author.bot == true) return
		if (message.channel.type == "dm") return
		if (!message.content.startsWith(prefix)) return

		// Corta o prefixo da mensagem e pega apenas o comando em si
		const argument = message.content.slice(prefix.length)
		const studies_id = "877923617755762738" // Canal de Estudos

		switch(argument) {
			case "help": message.channel.send ("Olá você precisa de ajuda com qual matéria?\n\n//math => Matemática\n\n//prog => Programação\n\n//sd => Sistemas Digitais")
			break;

			case "math": message.channel.send("//tv => Tabela Verdade\n\n//ga => Geometria Analítica\n\n//lim => Limites\n\n//dv => Derivada\n\n//int => Integral")
			break;

			// Tabela Verdade
			case "tv":
			message.channel.send(`Caso você prefira material por escrito nós temos o Manual de Sobrevivência Escolar do Teemo (Capítulo 3) no canal de ${message.guild.channels.cache.get(studies_id).toString()}
\nCaso você prefira material em vídeo, nós recomendamos essa playlist: https://www.youtube.com/playlist?list=PLqIjEAO7h65-fxPjuFg2k70i0z-pwQYG3`)
			break;

			// Geometria Analítica
			case "ga":message.channel.send(`Caso você prefira material por escrito nós temos o Manual de Sobrevivência Escolar do Teemo (Capítulo 3) no canal de ${message.guild.channels.cache.get(studies_id).toString()}
\nCaso você prefira material em vídeo, nós recomendamos essas playlists: https://www.youtube.com/playlist?list=PLEfwqyY2ox858XssXB_f-Jx42fgTb0Vsn`)
			break;

			// Limites
			case "lim": message.channel.send(`Caso você prefira material por escrito nós temos o Manual de Sobrevivência Escolar do Teemo (Capítulo 3) no canal de ${message.guild.channels.cache.get(studies_id).toString()}
\nCaso você prefira material em vídeo, nós recomendamos essas playlists:\n\nAprendo melhor por exercícios e direto pondo a mão na massa: https://www.youtube.com/playlist?list=PLqIjEAO7h659dJ1T2fyx-af2j88m3Cuzx
			\n\nAprendo melhor com alguém explicando o passo a passo devagar: https://www.youtube.com/playlist?list=PLqIjEAO7h658dPptzuxubquxkYgI3Nr8s`)
			break;

			// Derivada
			case "dv": message.channel.send(`Caso você prefira material por escrito nós temos o Manual de Sobrevivência Escolar do Teemo (Capítulo 3) no canal de ${message.guild.channels.cache.get(studies_id).toString()}
\nCaso você prefira material em vídeo, nós recomendamos essas playlists:\n\nAprendo melhor por exercícios e direto pondo a mão na massa: https://www.youtube.com/playlist?list=PLqIjEAO7h658IrRBpT6hpYw3x37tEBQwt
			\n\nAprendo melhor com alguém explicando o passo a passo devagar: https://www.youtube.com/playlist?list=PLqIjEAO7h65_lvjJLocbaUVSJDIX1h-WP`)
			break;

			// Integral
			case "int":message.channel.send(`Caso você prefira material por escrito nós temos o Manual de Sobrevivência Escolar do Teemo (Capítulo 3) no canal de ${message.guild.channels.cache.get(studies_id).toString()}
\nCaso você prefira material em vídeo, nós recomendamos essa playlist: https://www.youtube.com/playlist?list=PLqIjEAO7h659hBa76f9061cRcK3AplLjh`)
			break;

			case "comandos": message.channel.send("Comandos Disponiveis:\n//oi\n//69\n//gay\n//windows")

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

			/*case "msg":
						// ID Matheus 673223426831417384
						// ID Borges 208677439071715329
						// ID Rennan 351103168265977856
			client.users.fetch('397564412539568128', false).then((user) => {
				user.send("Olá arthur como vai? Eu sou um bot criado pelo meu mestre supremo para manusear o servidor da faculdade CESAR School, vim aqui lhe perguntar, como está sendo sua jogatina de Wizard101?");
			});
			break;*/

			default: message.channel.send("Comando não reconhecido")
			break;
		}
	});
}