// Chama a função second_message do arquivo
const second_message = require('./second_message.js')

module.exports = (client) => {
  const rule_id = '796529332562559016' // Canal de Regras

  // Pega o emoji baseado no nome, funciona apenas com emojis customizados (próprios do servidor) e não Globais
  const get_emoji = (emojiName) => client.emojis.cache.find((emoji) => emoji.name === emojiName)

  // Atribui o nome do emoji para o cargo ao lado
  const emojis = {
    hmyes: 'Leu as Regras',
  }

  const reactions = []

  // mensagem enviada pelo bot
  let emoji_text = `@everyonePor favor, leia atentamente as regras listadas abaixo:\nPara que tenhamos um ambiente saudável estabelecemos regras. Dessa maneira, recomendamos fortemente que você leia este conteúdo para ficar ciente que ao quebrar as regras do servidor você estará suscetível a receber as devidas punições.\n\n1. Seja educado\nRespeito é bom e de graça, então respeite aos outros.\n\n2. Canais e categorias no servidor;\nPor favor trate os assuntos de forma coerente com seu devido canal ou categoria para ser usado.\nO canal #geral deverá ser utilizado para mensagens fora do contexto programação, tecnologia e design, porém sempre respeitando as demais regras.\n\n3. Evite spam e  Evite o uso excessivo do CAPS LOCK; Mensagens com essas características atrapalham o chat.\n\n4. A divulgação de link externo;\nÉ permitido no categoria de Estudos/ Projetos.\nÉ permitido nos canais de links-materiais e vagas.\nÉ estritamente proibido enviar links de conteúdos inapropriados;\n\n5. Proibições;\nÉ proibido estritamente qualquer forma de Assédio.\nInformações Adicionais: As regras podem ser alteradas a qualquer momento, é importante estar sempre atento a qualquer atualização.\n\nLinks e materiais aceitos:\n- Lives\n- Vídeos\n- Canais\n- Clipes\n- Oportunidades de emprego\n\nPublicações e links proibidos:\n- Pornografia\n- Difamatórias\n- Desrespeitosas\n- Racistas\n- Sexistas\n- Homofóbicas\n- Partidárias\n- Pirataria\n\nDenúncias: Faça denúncias diretamente com alguém da equipe de moderação.\n\nAtenção: A quebra de uma ou várias regras acima citadas poderá implicar em uma punição.\nNós estamos em uma comunidade e precisamos respeitar uns aos outros para podermos conviver aqui dentro.\nEsperamos que ninguém precise ser banido.\nQualquer dúvida, procure um <@&${"796521501288300544"}>, <@&${"796500797809885265"}> ou <@&${"796521283293544498"}>.\n\nA partir do momento que você clicar no ícone abaixo o acesso ao servidor será liberado e você sera considerado como alguém que leu as regras\n\n`
  
  // procura o emoji pedido e insere ele no emoji_text
  for (const key in emojis) {
    const emoji = get_emoji(key)
    reactions.push(emoji)

    const role = emojis[key]
    emoji_text += `${emoji} = ${role}\n`
  }

  second_message(client, rule_id, emoji_text, reactions)

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

    const role = guild.roles.cache.find((role) => role.name === role_name)
    const member = guild.members.cache.find((member) => member.id === user.id)

    if (add) {
      member.roles.add(role)
    } else {
      member.roles.remove(role)
    }
  }

  // Adiciona o cargo quando clica no emoji
  client.on('messageReactionAdd', (reaction, user) => {
    if (reaction.message.channel.id === rule_id) {
      handle_reaction(reaction, user, true)
    }
  })

  // Remove o cargo quando clica no emoji novamente
  client.on('messageReactionRemove', (reaction, user) => {
    if (reaction.message.channel.id === rule_id) {
      handle_reaction(reaction, user, false)
    }
  })
}