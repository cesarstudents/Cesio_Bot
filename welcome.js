module.exports = client => {
	client.on("guildMemberAdd", member => {
		const welcome_channel = "797506896499179560"; // Welcome Channel 
		const rules_channel = "796529332562559016" // Canal de Regras
		console.log(member);

		const message = `Bem-Vindo(a) ao CESAR Students! <@${member.id}> Para que você possa utilizar o nosso servidor por favor leia as ${member.guild.channels.cache.get(rules_channel).toString()}`;

		const channel = member.guild.channels.cache.get(welcome_channel);
		channel.send(message);
	})
}

