// Chama a função role_message do arquivo
const role_message = require('./role_message')

module.exports = (client) => {
  const role_id = '797506749153673266' // Canal de cargos

	// Pega o emoji baseado no nome, funciona apenas com emojis customizados (próprios do servidor) e não Globais
	const get_emoji = (emojiName) => client.emojis.cache.find((emoji) => emoji.name === emojiName)

	// Atribui o nome do emoji para o cargo ao lado
	const emojis = {
		coffeePanda: 'Ciência da Computação',
		almitghyloaf: 'Design',
	}

	const reactions = []

	// mensagem enviada pelo bot
	let emoji_text = 'Clique no ícone respectivo ao seu curso para ter acesso aos conteúdos do servidor :D\n\n'
	
	// procura o emoji pedido e insere ele no emoji_text
	for (const key in emojis) {
		const emoji = get_emoji(key)
		reactions.push(emoji)

		const role = emojis[key]
		emoji_text += `${emoji} = ${role}\n`
	}

	role_message(client, role_id, emoji_text, reactions)

	// Impede que a reação do bot de a si mesmo o cargo
	const handle_reaction = (reaction, user, add) => {
		if (user.id === '935595775860293632') {
		return
		}

		const emoji = reaction._emoji.name

		const { guild } = reaction.message

		const role_name = emojis[emoji]
		if (!role_name) {
		return
		}

		// Procura o cargo no servidor e atribui a variavel role
		const role = guild.roles.cache.find((role) => role.name === role_name)
		// Procura o o ID do usuario no servidor
		const member = guild.members.cache.find((member) => member.id === user.id)

		if (add) {
		member.roles.add(role)
		}

		else {
		member.roles.remove(role)
		}
	}

	// Adiciona o cargo quando clica no emoji
	client.on('messageReactionAdd', (reaction, user) => {
		if (reaction.message.channel.id === role_id) {
		handle_reaction(reaction, user, true)
		}
	})

	// Remove o cargo quando clica no emoji novamente
	client.on('messageReactionRemove', (reaction, user) => {
		if (reaction.message.channel.id === role_id) {
		handle_reaction(reaction, user, false)
		}
	})
}