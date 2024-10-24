const url = 'https://raw.githubusercontent.com/polli2203/Ci-ncia-da-Computa-o/refs/heads/main/esportes/esportes-dados-globais(1).json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const praticamRegularmente = (dados.praticam_regularmente_esportes/ 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio_semana_praticando_esportes)
    const porcentagemEsportes = ((praticamRegularmente / pessoasNoMundo ) * 100).toFixed(2)
    const pessoasAssitem = (dados.total_pessoas_que_assistem_esportes/ 1e9)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `No mundo dos esportes, à nível global onde temos <span>${pessoasNoMundo} bilhões</span> de pessoas, das quais <span>${praticamRegularmente} bilhões</span> de pessoas praticam esportes regularmente, onde despendem aproximadamente <span>${horas} horas</span> semanais para praticar esportes.<br>Isso significa que aproximadamente <span>${porcentagemEsportes}%</span> das pessoas praticam algum esporte. Já as pessoas que assistem esportes, gira em média de <span>${pessoasAssitem} bilhões</span> de pessoas`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()
