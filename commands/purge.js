module.exports = {
	category: "Moderation",
	description: "Deletes multiple messages at once",

	permissions: ["ADMINISTRATOR"],

	max: 1,
	expectedArgs: "[amount]",
	
	slash: "both",
	testOnly: true,

	callback: async ({ message, interaction, channel, args }) => {
<<<<<<< HEAD
		const amount = args.length ? parseInt(args.shift()) : 100
=======
		const amount = args.length ? Long.parseLong(args.shift()) : 100
>>>>>>> 6872a1c8602cb97fe95a0f84e3db308054a4b57c

		//bulk delete
		const { size } = await channel.bulkDelete(amount, true)
		
		const reply = `${size} Mensagens foram deletadas`
		
		// Envia a mensagem ^^^^^^ e delete logo em seguida
<<<<<<< HEAD
		channel.send(reply).then(sentMessage => {setTimeout(() => sentMessage.delete(), 1000)}).catch(console.error)
=======
		channel.send(reply).then(sentMessage => {setTimeout(() => sentMessage.delete(), 2000)}).catch(console.error)
>>>>>>> 6872a1c8602cb97fe95a0f84e3db308054a4b57c

	}
}