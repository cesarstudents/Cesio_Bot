module.exports = client => {
	client.on("guildMemberAdd", member => {
		const welcome_channel = "797506896499179560"; // Welcome Channel 
		const rules_channel = "796529332562559016" // Canal de Regras
		const roles_channel = "797506749153673266" // Canal de Curso
		console.log(member);

		const message = `Bem-Vindo(a) ao CESAR Students! <@${member.id}> Para que você possa utilizar o nosso servidor por favor leia as ${member.guild.channels.cache.get(rules_channel).toString()} e não se esqueça de selecionar o seu curso no aqui ${member.guild.channels.cache.get(roles_channel).toString()} para que tenha acesso ao material do mesmo`;

		const channel = member.guild.channels.cache.get(welcome_channel);
		channel.send(message);
	})
}

