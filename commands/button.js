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
			time: 15
		})

		collector.on("collect", interaction =>{
			interaction.reply({
				content: "You clicked a button",
				ephemeral: true
			})
		})

		collector.on("end", async collection =>{
			console.log(`Collected ${collection.size} interactions.`)
		})

		await interaction.editReply({
			content: "An action has been taken",
			components: [],
		})
	}

}