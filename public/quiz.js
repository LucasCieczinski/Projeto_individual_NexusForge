    const listaPerguntas = [
    {
        pergunta: "Qual estilo de jogo você prefere?",
        alternativas: {
            alternativaA: { texto: "Gosto de fazer as coisas sozinho, sem depender do meu time", lane: "top" },
            alternativaB: { texto: "Um estilo de jogo estratégico, gosto de estar em todos os lugares", lane: "jungle" },
            alternativaC: { texto: "Prefiro estar no centro de tudo, isso me dá muitas opções de como posso jogar", lane: "mid" },
            alternativaD: { texto: "Gosto de causar dano e ser o protagonista do jogo", lane: "adc" },
            alternativaE: { texto: "Meu estilo de jogo é ajudar meus aliados", lane: "sup" }
        }
    },

    {
        pergunta: "Como você reage sob pressão?",
        alternativas: {
            alternativaA: { texto: "Sou seguro e resistente, nunca desisto", lane: "top" },
            alternativaB: { texto: "Abraço a criatividade e a inteligência, sempre tento identificar oportunidades", lane: "jungle" },
            alternativaC: { texto: "Foco no meu jogo tenho que me garantir no que sei fazer", lane: "mid" },
            alternativaD: { texto: "Jogo com cautela e consciência", lane: "adc" },
            alternativaE: { texto: "Mantenho a calma para ajudar a equipe", lane: "sup" }
        }
    },

    {
        pergunta: "Qual é o seu papel natural em um grupo?",
        alternativas: {
            alternativaA: { texto: "O membro proativo e individualista; sempre faço as coisas sozinho", lane: "top" },
            alternativaB: { texto: "O estrategista e pensador avalio todas as possibilidades", lane: "jungle" },
            alternativaC: { texto: "O centro de tudo; estou presente em todos os momentos", lane: "mid" },
            alternativaD: { texto: "O protagonista minha participação é sempre certeira", lane: "adc" },
            alternativaE: { texto: "A ‘mãe’ do grupo, sempre disposto a ajudar todos", lane: "sup" }
        }
    },

    {
        pergunta: "Qual dessas qualidades combina mais com você?",
        alternativas: {
            alternativaA: { texto: "Resistência", lane: "top" },
            alternativaB: { texto: "Adaptação", lane: "jungle" },
            alternativaC: { texto: "Habilidade individual", lane: "mid" },
            alternativaD: { texto: "Paciência", lane: "adc" },
            alternativaE: { texto: "Empatia", lane: "sup" }
        }
    },

    {
        pergunta: "Como você lida com erros?",
        alternativas: {
            alternativaA: { texto: "Aguento as consequências e sigo em frente enquanto espero uma nova oportunidade", lane: "top" },
            alternativaB: { texto: "Aprendo rápido com o erro e mudo minhas ações para alcançar meus objetivos", lane: "jungle" },
            alternativaC: { texto: "Entendo meus erros e busco evoluir individualmente", lane: "mid" },
            alternativaD: { texto: "Evito me arriscar novamente tão cedo", lane: "adc" },
            alternativaE: { texto: "Apoio meus aliados para compensar minhas falhas", lane: "sup" }
        }
    },

    {
        pergunta: "O que é mais importante para você em uma partida?",
        alternativas: {
            alternativaA: { texto: "Ser durável, dando tempo para meu time jogar", lane: "top" },
            alternativaB: { texto: "Ter o controle do mapa, pensando sempre um passo à frente", lane: "jungle" },
            alternativaC: { texto: "Dominar meus inimigos em duelos", lane: "mid" },
            alternativaD: { texto: "Estar em constante crescimento, sendo uma bomba-relógio", lane: "adc" },
            alternativaE: { texto: "Buscar oportunidades para auxiliar e fortalecer meu time", lane: "sup" }
        }
    },

    {
        pergunta: "Qual tipo de campeão você mais gosta?",
        alternativas: {
            alternativaA: { texto: "Lutadores e tanques gosto da sensação de ser imparável", lane: "top" },
            alternativaB: { texto: "Gosto de tudo um pouco jogo com o que for melhor para o time", lane: "jungle" },
            alternativaC: { texto: "Magos e assassinos de dano bruto, conseguindo a liderança do jogo facilmente", lane: "mid" },
            alternativaD: { texto: "Atiradores e magos gosto de causar muito dano", lane: "adc" },
            alternativaE: { texto: "Encantadores e iniciadores, pois consigo ajudar meu time", lane: "sup" }
        }
    },

    {
        pergunta: "O que te motiva na partida?",
        alternativas: {
            alternativaA: { texto: "Mostrar que sou impossível de derrubar", lane: "top" },
            alternativaB: { texto: "Fazer jogadas criativas e impactantes no mapa", lane: "jungle" },
            alternativaC: { texto: "Carregar o jogo com minhas habilidades individuais", lane: "mid" },
            alternativaD: { texto: "Ser a principal fonte de dano do time", lane: "adc" },
            alternativaE: { texto: "Garantir que ninguém do time caia", lane: "sup" }
        }
    },

    {
        pergunta: "Qual é a sua maior força?",
        alternativas: {
            alternativaA: { texto: "Constância", lane: "top" },
            alternativaB: { texto: "Criatividade", lane: "jungle" },
            alternativaC: { texto: "Precisão", lane: "mid" },
            alternativaD: { texto: "Foco", lane: "adc" },
            alternativaE: { texto: "Generosidade", lane: "sup" }
        }
    },

    {
        pergunta: "Como você vê a vitória?",
        alternativas: {
            alternativaA: { texto: "Vencer com resistência e força de vontade", lane: "top" },
            alternativaB: { texto: "Tudo planejado, considerando os mínimos detalhes", lane: "jungle" },
            alternativaC: { texto: "Superar todos com minhas habilidades individuais", lane: "mid" },
            alternativaD: { texto: "Ser o destaque e carregar meu time para a vitória", lane: "adc" },
            alternativaE: { texto: "Ver meu time brilhar graças à minha participação", lane: "sup" }
        }
    }
];

    
    let quantidadeDeQuestoes = listaPerguntas.length;
    let numeroDaQuestaoAtual = 0;
    var pontos = { top: 0, jungle: 0, mid: 0, adc: 0, sup: 0 };


    function iniciar(){
        jogo.style.display = "flex";
        start.style.display = "none";

        preencherHTMLcomQuestaoAtual(0)
        btnSubmeter.disabled = false
        btnProx.disabled = true
        // btnConcluir.disabled = true
        btnTentarNovamente.disabled = true
    }

    function preencherHTMLcomQuestaoAtual(index) {
        habilitarAlternativas(true)
        const questaoAtual = listaPerguntas[index]
        numeroDaQuestaoAtual = index
        console.log("questaoAtual")
        console.log(questaoAtual)
        document.getElementById("spanNumeroDaQuestaoAtual").innerHTML = Number(index) + 1 // ajustando porque o index começa em 0
        document.getElementById("spanQuestaoExibida").innerHTML = questaoAtual.pergunta;
        document.getElementById("labelOpcaoUm").innerHTML = questaoAtual.alternativas.alternativaA.texto;
        document.getElementById("labelOpcaoDois").innerHTML = questaoAtual.alternativas.alternativaB.texto;
        document.getElementById("labelOpcaoTres").innerHTML = questaoAtual.alternativas.alternativaC.texto;
        document.getElementById("labelOpcaoQuatro").innerHTML = questaoAtual.alternativas.alternativaD.texto;
        document.getElementById("labelOpcaoCinco").innerHTML = questaoAtual.alternativas.alternativaE.texto;
    }

    function habilitarAlternativas(trueOrFalse) {
        let opcaoEscolhida = trueOrFalse ? false : true

        primeiraOpcao.disabled = opcaoEscolhida
        segundaOpcao.disabled = opcaoEscolhida
        terceiraOpcao.disabled = opcaoEscolhida
        quartaOpcao.disabled = opcaoEscolhida
        quintaOpcao.disabled = opcaoEscolhida

    }

    function submeter() {
    const selecionado = document.querySelector("input[name='option']:checked");

    if (!selecionado) {
        alert("Selecione uma alternativa!");
        return;
    }

    // soma pontos
    const alternativa = selecionado.value;
    const lane = listaPerguntas[numeroDaQuestaoAtual].alternativas[alternativa].lane;

    pontos[lane]++;

    btnSubmeter.disabled = true;
    btnProx.disabled = false;

    habilitarAlternativas(false);
}

    function avancar() {
    numeroDaQuestaoAtual++;

    if (numeroDaQuestaoAtual >= quantidadeDeQuestoes) {
        finalizarQuiz();
        return;
    }

    preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual);

    btnSubmeter.disabled = false;
    btnProx.disabled = true;
}

function finalizarQuiz() {
    const resultado = calcularResultado();
    var idUsuario = sessionStorage.ID_USUARIO;
    var idTentativa = sessionStorage.TENTATIVAS;
    var tentativa = 0;
    var quiz = 1;

    if (idTentativa == "null" || idTentativa == undefined || idTentativa == NaN){
        tentativa++;
    }else{
        tentativa = Number(idTentativa) + 1;
    }
    console.log(tentativa, quiz, idTentativa, idUsuario, resultado)

        fetch("/rotaQuiz/registrarTentativa", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                resultadoLane: resultado,
                tentativa: tentativa,
                idUsuario: idUsuario,
                idQuiz: quiz
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if(resposta.ok) {
                    alert("Quiz realizado com sucesso");
                }else {
                    throw "Houve um erro ao realizar o quiz"
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            })

        window.location = "/quiz.html";

    btnProx.disabled = true;
    btnSubmeter.disabled = true;
}

function calcularResultado() {
    const lanes = ["top", "jungle", "mid", "adc", "sup"];
    let maior = -1;
    let lane = "";

    for (let i = 0; i < lanes.length; i++) {
        let laneAtual = lanes[i];
        let pontosDaLane = pontos[laneAtual];

        if (pontosDaLane > maior) {
            maior = pontosDaLane;
            lane = laneAtual;
        }
    }

    return lane;
}


function tentarNovamente(){
     document.getElementById("quizMain").style.display = "block";
     document.getElementById("dashMain").style.display = "none";
}


