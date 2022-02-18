module.exports = {
	category: "Moderation",
	description: "Deletes multiple messages at once",

	permissions: ["ADMINISTRATOR"],

	max: 1,
	expectedArgs: "[amount]",
	
	slash: "both",
	testOnly: true,

	callback: async ({ message, interaction, channel, args }) => {
		const amount = args.length ? parseInt(args.shift()) : 30

		//bulk delete
		const { size } = await channel.bulkDelete(amount, true)
		
		const reply = `${size} Mensagens foram deletadas`
		
		// Envia a mensagem ^^^^^^ e delete logo em seguida
		channel.send(reply).then(sentMessage => {setTimeout(() => sentMessage.delete(), 1000)}).catch(console.error)

	}
}