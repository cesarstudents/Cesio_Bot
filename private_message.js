// Envia uma mensagem no privado da pessoa que entrou no servidor
module.exports = client => {
	client.on("guildMemberAdd", member => {
		member.send(`Olá, meu nome é Césio eu sou um bot criado por alunos da CESAR School.
Seja muito Bem-Vindo a nossa faculdade e espero que sua jornada aqui seja o mais agradável possível.\n
eu irei lhe ajudar com alguns primeiros passos sobre o servidor, aqui vai uma lição de história:\n
O servidor foi criado pelo nosso deus Matheus Desjardins que deu vida a todo o ecossistema que nós temos hoje, no início quase ninguem utilizava o servidor, porém, tinha um aluno com um parafuso a menos entre os estudantes, o meu criador, Borges, com toda sua loucura nós conseguimos dar vida ao servidor e fazer com que as pessoas passasem a usá-lo.\n
Hoje, nosso server tem como intenção ser uma ponte entre tantos os veteranos quanto os calouros para ajudar uns aos outros com seus estudos, ou apenas pra se reunir no nosso webuteco e jogar conversa fora.\n
Aqui você vai encontrar desde materiais de estudos até pessoas dispostas a lhe ajudar com suas dificuldades e dúvidas.`);
		member.send(`Como funciona o servidor? Simples, nós temos 3 cargos importantes\n
@Fundadores: As pessoas que participaram do nascimento do servidor e ajudaram ele a crescer tornando o que ele é hoje, atualmente trabalhamos como arquitetos do servidor e gerenciamento interno do mesmo.\n
@Equipe de Moderação: São os representantes de classe que possuem permissões para adequar o servidor a gosto e a pedido dos alunos de sua sala, eles podem criar canais de acordo com o feedback para ajudar nossos alunos. Junto de moderar as mensagens e atribuir bans temporarios caso necessário.\n
@SUS (Super Usuário de Suporte): São as pessoas que se disponibilizaram a ajudar os alunos nas matérias. Está com dúvida? Precisa de ajuda numa questão? Ficou Empacado com alguma coisa e não sabe como resolver? Quer fazer perguntas sobre a área de Computação ou Design?\nSIMPLES! Chama um SUS :wink:\n
E claro não poderia esquecer de mim, o nosso mascote, Césio! atualmente eu ainda me encontro em fase de desenvolvimento mas ja possuo algumas funcinalidades que foram criadas para ajudar você com suas necessides. qualquer coisa, digita um //help que eu venho ao seu socorro.\n`);
	});
}