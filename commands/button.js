const {MessageActionRow, MessageButton,} = require("discord.js");

module.exports = {
	category: "testing",
	description: "testing",

	slash: true,
	testOnly: true,

	callback: async ({ interaction, channel}) => {
		const row = new MessageActionRow()
		.addComponents(

			new MessageButton()
			.setCustomId("ban_yes")
			.setEmoji("🔨")
			.setLabel("Confirm")
			.setStyle("SUCCESS"),
		
			new MessageButton()
			.setCustomId("ban_no")
			.setLabel("Cancel")
			.setStyle("DANGER")
		)
		
		const linkRow = new MessageActionRow()
		.addComponents(
			new MessageButton()
			.setURL("https://discord.com/channels/796454602723426325/877923775742640138/877924281865080832")
			.setLabel("📖 Estudos")
			.setStyle("LINK")
		)

		await interaction.reply({
			content: "are you sure?",
			components: [row, linkRow],
			ephemeral: true,
		})

		const collector = channel.createMessageComponentCollector({
			max: 1,
			time: 1000 * 15 // 15sec
		})

		// Mostra o Id do usuario e o botao clicado no terminal
		// Apenas para testes não é necessario
		collector.on("end", async collection =>{
			collection.forEach((click) => {
				console.log(`${click.user.tag}`, click.customId)
			});
		})

		await interaction.editReply({
			content: "done",
			components: [row, linkRow],
			ephemeral: true
		})
	}
}