module.exports = client => {
	client.on("guildMemberAdd", (member) => {
		const welcome_channel = "797506896499179560"; // Welcome Channel ID
		const rules_channel = "796529332562559016" // Rules Channel ID
		console.log(member);

		const message = `Bem-Vindo(a)! <@${member.id}> ao CESAR Students. Para que você possa utilizar o nosso servidor por favor leia as 
		${member.guild.channels.cache.get(rules_channel).toString()}`

		const channel = member.guild.channels.cache.get(welcome_channel);
		channel.send(message);
	})
}

