const add_reactions = (message, reactions) => {
	message.react(reactions[0])
	reactions.shift()
	if (reactions.length > 0) {
		setTimeout(() => add_reactions(message, reactions), 750)
	}
}

module.exports = async (client, id, text, reactions = []) => {
	const channel = await client.channels.fetch(id)

	channel.messages.fetch().then((messages) => {
		if (messages.size === 0) {
			
			// Envia uma nova mensagem
			channel.send(text).then((message) => {
				add_reactions(message, reactions)
			})
		}

		else {
			
			// Edita uma mensagem existente
			for (const message of messages) {
				message[1].edit(text)
				add_reactions(message[1], reactions)
			}
		}
	})
}