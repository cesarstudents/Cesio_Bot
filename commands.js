
// encontrar alguma maneira de deixar esse código mais clean com os comandos que se ramificam
// como os de matemática por exemplo, talvez importar uma função um arquivo separado?
// Algum dia fazer um upgrade nisso, mucho texto, ruim para o usuário, talvez traduzir isso para botões?
// Criar uma instância própria onde apenas o usuário tem acesso a, evitando poluição.
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
			case "help": message.channel.send ("Olá como posso te ajudar?\n\n//study => Estudo das Matérias\n\n//projeto => Estudo e Materiais de Projetos")
			break;

			case "study": message.channel.send ("Qual seu curso?\n\n//cc => Ciência da Computação\n\n//design")
			break;

			case "projeto": message.channel.send (`Caso tu queiras um material de estudo por escrito nós temos o Manual de Sobrevivência Escolar do Teemo (Capítulo 1) no canal de ${message.guild.channels.cache.get(studies_id).toString()}`)
			break;

			case "cc":message.channel.send ("Você precisa de ajuda com qual matéria?\n\n//math => Matemática\n\n//prog => Programação\n\n//sd => Sistemas Digitais")
			break;

			case "design": message.channel.send ("Me desculpe nós ainda estamos arranjando material para finalizar a parte de design ;-;\nCaso você queira colaborar com o material e vídeos do youtube por favor contate no servidor ou no privado meu criador @Borges[@SUS]")
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

			case "prog":message.channel.send("Para programação em python nós recomendamos essa playlist do nosso deus guanabara: https://www.youtube.com/playlist?list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0")
			break;

			case "sd":message.channel.send(`Case você prefira um guia escrito nós temos o Manual de Sobrevivência escolar do Teemo (Capítulo 2): ${message.guild.channels.cache.get(studies_id).toString()}`)
			break;
			
			case "windows": message.channel.send ("O cara usa windows mano, mt troxa pqp kkkkkk")
			break;

			/*case "msg":
						// ID Matheus 673223426831417384
						// ID Borges 208677439071715329
						// ID Rennan 351103168265977856
			client.users.fetch('397564412539568128', false).then((user) => {
				user.send("Olá arthur como vai? Eu sou um bot criado pelo meu mestre supremo para manusear o servidor da faculdade CESAR School, vim aqui lhe perguntar, como está sendo sua jogatina de Wizard101?");
			});
			break;*/
		}
	});
}