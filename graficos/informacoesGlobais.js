const url = 'https://raw.githubusercontent.com/polli2203/Ci-ncia-da-Computa-o/refs/heads/main/esportes/esportes-dados-globais(1).json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const praticamRegularmente = (dados.praticam_regularmente_esportes/ 1e9)
    const assistemEsportes = (dados.total_pessoas_que_assistem_esportes/ 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio_semana_praticando_esporte - horas) * 100)
    const porcentagemConectada = ((praticamRegularmente / pessoasNoMundo ) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${praticam_regularmente_esportes} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${horas} horas</span> e <span>${minutos} minutos</span> conectadas.<br>Isso significa que aproximadamente <span>${porcentagemConectada}%</span> de pessoas estão conectadas em alguma rede social.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()