const div_letra = document.querySelector(".letra");
const btns = document.querySelectorAll(".btn");
const img = document.querySelector(".img");

const reset = document.querySelector("#reset");

let palavra_jogo = palavra();
let tentativa = 1;
let jogada = 0;

function palavra (){
const palavras = [
    "ABACAXI", "ELEFANTE", "PROGRAMADOR", "DESAFIO", "CANGURU", "BICICLETA", "AEROPORTO", "GIRASSOL", "NOTEBOOK", "PIRAMIDE",
    "ASTRONAUTA", "FUTEBOL", "MONTANHA", "RELAMPAGO", "CHOCOLATE", "TELEFONE", "JANELA", "PARALELO", "UNIVERSO", "LABIRINTO",
    "AMPULHETA", "AQUARIO", "ARQUITETO", "AVENTURA", "AZULEJO", "BACALHAU", "BALASTRADA", "BANDEIRA", "BANQUETE", "BARALHO",
    "BATERIA", "BELICHE", "BETERRABA", "BIBLIOTECA", "BILHETE", "BINOCULO", "BIOLOGIA", "BISCOITO", "BOIADEIRO", "BORBOLETA",
    "BOTANICA", "BRANQUIA", "BRAZEIRO", "BRILHANTE", "BRINQUEDO", "BROCOLO", "BUSSOLA", "CACHOEIRA", "CADERNO", "CALENDARIO",
    "CAMALEAO", "CAMINHOTE", "CAMPEONATO", "CAMPAINHA", "CANARIO", "CANDIDATO", "CANGACEIRO", "CANIVETE", "CAPOEIRA", "CARAMELO",
    "CARAVELA", "CARPINTERO", "CARRAPATO", "CARRUAGEM", "CARTOLA", "CARVALHO", "CASTELO", "CATAVENTO", "CATEDRAL", "CAVALARIA",
    "CEGONHA", "CELULAR", "CENTAURO", "CERAMICA", "CERVEJA", "CHAFARIZ", "CHALEIRA", "CHAMPANHE", "CHARRETE", "CHAVEIRO",
    "CHIMPANZE", "CHURRASCO", "CICLISTA", "CIGARRA", "CILINDRO", "CIMENTO", "CINEMA", "CINTURÃO", "CIRURGIAO", "CISTERNA",
    "CITADELA", "CLARINETE", "CLAUSTRO", "CLEPTOMANIA", "COBERTURA", "COBRANÇA", "COLEÇÃO", "COLMEIA", "COLONIA", "COLUNA",
    "COMETA", "COMISSARIO", "COMPANHIA", "COMPUTADOR", "COMUNIDADE", "CONCEITO", "CONDOMINIO", "CONFEITEIRO", "CONFIANÇA", "CONGELADOR",
    "CONQUISTA", "CONSELHO", "CONSERVA", "CONSTRUTOR", "CONTINENTE", "CONTRASTE", "CONVITE", "COPOZINHO", "CORAGEM", "CORAÇÃO",
    "CORDA", "CORRIMÃO", "CORRUPÇÃO", "CORTINA", "COSMONAUTA", "COZINHA", "CRATERA", "CRIATIVO", "CRISTAL", "CRONOMETRO",
    "CRUZEIRO", "CUIDADO", "CULINARIA", "CULTURA", "CUPUAÇU", "CURIOSIDADE", "CURRICULO", "DALMATA", "DAMASCO", "DEBATE",
    "DECOLAGEM", "DECORAÇÃO", "DEGRAU", "DELFINARIO", "DEMOCRACIA", "DENTISTA", "DEPOSITO", "DERIVADO", "DESENHO", "DESERTO",
    "DESFILE", "DESPENSA", "DESTINO", "DETETIVE", "DETALHE", "DIAMANTE", "DICIONARIO", "DINAMITE", "DINOSSAURO", "DIPLOMATA",
    "DIRETORIA", "DISCIPLINA", "DISFARCE", "DISTANCIA", "DIVINDADE", "DOCENTE", "DOCUMENTO", "DOMINIO", "DORMITORIO", "DRAGÃO",
    "DRENAGEM", "DROGARIA", "DUPLICATA", "ECLIPSE", "ECOLOGIA", "ECONOMIA", "EDIFICIO", "EDUCAÇÃO", "EFICIENTE", "EGOISMO",
    "ELETRONICO", "ELEVADOR", "ELOCUENCIA", "EMBAIXADA", "EMBLEMA", "EMERGENCIA", "EMISSORA", "EMOCIONANTE", "EMPADINHA", "EMPREGADO",
    "EMPRESA", "ENCADERNAR", "ENCANTO", "ENDEREÇO", "ENERGIA", "ENFERMEIRA", "ENGENHARIA", "ENGRENAGEM", "ENIGMA", "ENXAME",
    "EPIDEMIA", "EQUADOR", "EQUILIBRIO", "EQUIPAMENTO", "ERUPÇÃO", "ESCABADA", "ESCADARIA", "ESCALADA", "ESCANTEIO", "ESCARAVELHO",
    "ESCORPIÃO", "ESCRITORIO", "ESMERALDA", "ESPANHA", "ESPARADRAPO", "ESPATULA", "ESPETACULO", "ESPINAFRE", "ESPIRITO", "ESPONJA",
    "ESQUELETO", "ESQUILO", "ESTABULO", "ESTAÇÃO", "ESTADIO", "ESTALAGEM", "ESTATUETA", "ESTOQUE", "ESTRADA", "ESTRELA",
    "ESTRUTURA", "ESTUDANTE", "ETIQUETA", "EVOLUÇÃO", "EXERCITO", "EXPOSIÇÃO", "EXTRATO", "FABRICA", "FACULDADE", "FAISÃO",
    "FALCONETE", "FANTASIA", "FAROESTE", "FARROUPILHA", "FASCINIO", "FAZENDA", "FECHADURA", "FELICIDADE", "FENOMENO", "FERRAMENTA",
    "FERREIRO", "FERROVIA", "FESTIVAL", "FIGUEIRA", "FILOSOFIA", "FILMAGEM", "FINANÇAS", "FINGIMENTO", "FISCAL", "FLAMENGO",
    "FLAMINGO", "FLORESTA", "FLUTUAR", "FOGUETE", "FOLCLORE", "FONTE", "FORMIGUEIRO", "FORTALEZA", "FOTOGRAFIA", "FRAGMENTO",
    "FRAGRANCIA", "FRANQUEZA", "FREGUESIA", "FRONTEIRA", "FUMANTE", "FUNDAÇÃO", "FURACÃO", "FUTURISTA", "GAIOLA", "GALAXIA",
    "GALERIA", "GALINHEIRO", "GANGORRA", "GARAGEM", "GARRAFA", "GASOLINA", "GAVETA", "GELADEIRA", "GEOGRAFIA", "GERAÇÃO",
    "GERENTE", "GIGANTE", "GINASTICA", "GLADIADOR", "GLICERINA", "GLOBO", "GOLFINHO", "GOVERNADOR", "GRAVATA", "GRAVIDADE",
    "GRUDE", "GUARDA", "GUITARRA", "HABITAÇÃO", "HAMBURGUER", "HARMONIA", "HELICOPTERO", "HEMISFERIO", "HERANÇA", "HERANÇA",
    "HIDRANTE", "HIERARQUIA", "HIGIENE", "HIPISMO", "HIPOPOTAMO", "HISTORIA", "HOLANDA", "HORIZONTE", "HOSPITAL", "HOSTILIDADE",
    "HUMILDADE", "IATE", "ICEBERG", "IDENTIDADE", "IGREJA", "IGUANA", "ILUMINAÇÃO", "ILUSTRAÇÃO", "IMAGINAÇÃO", "IMPERADOR",
    "IMPOSTO", "IMPRESSORA", "INCÊNDIO", "INDEPENDENTE", "INDICADOR", "INDIVIDUO", "INDUSTRIA", "INFANCIA", "INFORMAÇÃO", "INGRESSO",
    "INIMIGO", "INJEÇÃO", "INOVAÇÃO", "INSETARIO", "INSTRUMENTO", "INSULINA", "INTEGRIDADE", "INTELIGENTE", "INTERNET", "INVASÃO",
    "INVENTOR", "INVERNO", "INVESTIMENTO", "IOGURTE", "IRLANDA", "IRRIGAÇÃO", "ISQUEIRO", "ITALIA", "JACARE", "JAGUAR",
    "JARDINEIRO", "JAQUETA", "JASMIM", "JAVALI", "JOALHEIRO", "JOELHO", "JOGADOR", "JORNALISTA", "JUDOCA", "JUIZADO",
    "JUVENTUDE", "LABORATORIO", "LAGARTIXA", "LAGOA", "LAMPADA", "LANTERNA", "LAPIS", "LARANJAL", "LATITUDE", "LAVANDERIA",
    "LEGENDA", "LEGISLAÇÃO", "LEGUME", "LEITURA", "LEOPARDO", "LIBERDADE", "LIDERANÇA", "LIMONADA", "LINGUAGEM", "LINHA",
    "LIQUIDADOR", "LIVRARIA", "LOCOMOTIVA", "LOGISTICA", "LONTRA", "LOUCURA", "LUMINARIA", "LUXUOSO", "MACACÃO", "MACHADO",
    "MADEIRA", "MADRUGADA", "MAESTRO", "MAGIA", "MAGNITUDE", "MALABARISTA", "MAMIFERO", "MANDARIM", "MANSÃO", "MANTEIGA",
    "MANUSCRITO", "MAQUINA", "MARATONA", "MARCENEIRO", "MAREMOTOS", "MARGARIDA", "MARINHEIRO", "MARMELADA", "MARQUÊS", "MARTELO",
    "MASSAGISTA", "MATEMATICA", "MATRIZ", "MECANICO", "MEDALHA", "MEDICINA", "MEDITERRANEO", "MELANCIA", "MELODIA", "MENSAGEM",
    "MERCADO", "MERGULHADOR", "METAMORFOSE", "METEORO", "METROPOLE", "MICROFONE", "MIGRAÇÃO", "MILAGRE", "MILIMETRO", "MINERIO",
    "MINISTERIO", "MINHOCA", "MIRANTE", "MISTERIO", "MITOLOGIA", "MOCHILA", "MODELAGEM", "MODERNISMO", "MOEDA", "MOINHO",
    "MONARQUIA", "MONITOR", "MORANGO", "MORCEGO", "MOSQUITO", "MOSTARDA", "MOVIMENTO", "MUDANÇA", "MUSEU", "MUSCULO",
    "MUSICA", "NATAÇÃO", "NATUREZA", "NAVEGAÇÃO", "NEBLINA", "NEGOCIO", "NERVOSO", "NEUTRO", "NEVADA", "NINHO",
    "NIVEL", "NOBREZA", "NOITE", "NOMEAÇÃO", "NORDESTE", "NOSTALGIA", "NOTICIA", "NOVELA", "NUVEM", "OBJETIVO",
    "OBRA", "OBSERVAÇÃO", "OBSTACULO", "OCEANO", "OCULOS", "ODONTOLOGIA", "OFICINA", "OLIMPICO", "OMELETE", "ONIBUS",
    "OPERAÇÃO", "ORQUESTRA", "ORVALHO", "OSTENTAÇÃO", "OTIMISMO", "OVELHA", "OXIGENIO", "PACIENTE", "PAGAMENTO", "PAISAGEM",
    "PALACIO", "PALESTRA", "PALHAÇO", "PALMEIRA", "PANTANO", "PANTERA", "PAPAGAIO", "PARAFUSO", "PARAGUAI", "PARALELO",
    "PARANORMAL", "PARCERIA", "PAREDE", "PARQUE", "PASSAGEM", "PASSAPORTE", "PASTAGEM", "PATRIMONIO", "PATUÁ", "PAVÃO",
    "PEDAGOGIA", "PEDESTRE", "PEDREIRO", "PELICANO", "PELICULA", "PENHASCO", "PENSAMENTO", "PENTEADO", "PEQUENO", "PERCURSO",
    "PERFUME", "PERGAMINHO", "PERIFERICO", "PERIODO", "PEROLA", "PERSONAGEM", "PERSPECTIVA", "PESCADOR", "PESQUISADOR", "PETROLEO",
    "PIANO", "PICARETA", "PICNIC", "PIGMENTO", "PILOTO", "PIMENTA", "PINCEL", "PINGUIM", "PINHEIRO", "PINTURA",
    "PIRATA", "PISCINA", "PLANETA", "PLANILHA", "PLANTAÇÃO", "PLATAFORMA", "PLATINA", "PLENITUDE", "PLUMA", "POESIA",
    "POLEGAR", "POLICIA", "POLIGONO", "POLTRONA", "POLUIÇÃO", "POMAR", "PONTUÇÃO", "PORCELANA", "PORTARIA", "PORTUGAL",
    "POSTURA", "POTENCIA", "POUSADA", "PRATELEIRA", "PREFEITURA", "PREGUEIRO", "PREHISTORIA", "PREMIAÇÃO", "PRESIDENTE", "PREVISÃO",
    "PRIMEIRO", "PRINCESA", "PRISIONEIRO", "PRIVILEGIO", "PROBLEMA", "PRODUÇÃO", "PROFESSOR", "PROJETO", "PROMESSA", "PRONUNCIA",
    "PROPAGANDA", "PROPOSTA", "PROSPERIDADE", "PROTETOR", "PROVINCIA", "PSICOLOGIA", "PULSEIRA", "QUADRADO", "QUADRILHA", "QUALIDADE",
    "QUARENTENA", "QUARTEL", "QUARTZO", "QUEBRA CABEÇA", "QUERUBIM", "QUILOMETRO", "QUIMICA", "QUINTAL", "QUITANDA", "RADIAÇÃO",
    "RASTREADOR", "RECEITA", "RECIPIENTE", "RECICLAGEM", "RECREIO", "RECURSO", "REDE", "REFORMA", "REFUGIO", "REGIONAL",
    "REGISTRO", "REGRA", "REITORIA", "RELEVO", "RELOGIO", "REMANSADO", "REMEDIO", "REMO", "RENASCENÇA", "RENDIMENTO",
    "REPORTE", "REPRESA", "REPUBLICA", "REQUISITO", "RESERVA", "RESIDENCIA", "RESPEITO", "RESTAURANTE", "RESUMO", "RETRATO",
    "REVELAÇÃO", "REVISTA", "REVOLUÇÃO", "RIQUEZA", "ROCHEDO", "RODOVIA", "ROMANCE", "ROSEIRA", "ROUPARIA", "SABONETE",
    "SACADA", "SACERDOTE", "SACRAMENTO", "SAGUÃO", "SALADA", "SALAMANDRA", "SALARIO", "SALTO", "SALVAMENTO", "SAMAMBAIA",
    "SANFONISTA", "SANTUARIO", "SAPATEIRO", "SAPATO", "SARANDI", "SARDINHA", "SATELITE", "SAUDE", "SAXOFONE", "SECRETARIO",
    "SEGURANÇA", "SELEÇÃO", "SEMANA", "SEMENTE", "SEMINARIO", "SENADOR", "SENTIMENTO", "SEQUENCIA", "SERENATA", "SERPENTE",
    "SERRARIA", "SERVIDÃO", "SILENCIO", "SILICONE", "SIMBOLO", "SIMPLICIDADE", "SINCERIDADE", "SINDICATO", "SINFONIA", "SISTEMA",
    "SOBERANIA", "SOBRADO", "SOBREMESA", "SOCIEDADE", "SOCIOLOGIA", "SOFISTICAÇÃO", "SOFTWARE", "SOLAR", "SOLDADO", "SOLIDÃO",
    "SOLUÇÃO", "SORRISO", "SORVETE", "SOTAQUE", "SUCESSO", "SUDOESTE", "SUGESTÃO", "SUPERMERCADO", "SUPORTE", "SURPRESA",
    "SUSTENTAVEL", "TABULEIRO", "TALENTO", "TAMANHO", "TAMBOR", "TAPETE", "TARTARUGA", "TECLADO", "TECNOLOGIA", "TELEVISÃO",
    "TEMPERO", "TEMPESTADE", "TEMPLO", "TENACIDADE", "TENENTE", "TENTATIVA", "TERAPEUTA", "TERREMOTO", "TERRITORIO", "TESOURO",
    "TESTEMUNHA", "TIGRE", "TIJOLO", "TIMIDEZ", "TIPOGRAFIA", "TIRANIA", "TITULO", "TOALHA", "TOLERANCIA", "TOMATE",
    "TONELADA", "TOPOGRAFIA", "TORNEIO", "TORNEIRA", "TORRADA", "TRABALHADOR", "TRADIÇÃO", "TRAFEGO", "TRAJETO", "TRANQUILO",
    "TRANSITO", "TRANSPARENTE", "TRANSPORTE", "TRATOR", "TRAVESSEIRO", "TREINAMENTO", "TREM", "TRIANGULO", "TRIBUNAL", "TRILHA",
    "TRINDADE", "TROFÉU", "TROMBONE", "TRONCO", "TROPA", "TUBARÃO", "TUCANO", "TUMULO", "TURISMO", "TURQUIA",
    "UBERDADE", "UMIDADE", "UNIDADE", "UNIFORME", "URGENCIA", "URSO", "URUTU", "USINA", "UTENSILIO", "VACINA",
    "VAGALUME", "VALENTIA", "VALOR", "VAMPIRO", "VARANDA", "VARIAÇÃO", "VASSOURA", "VEGETAL", "VEICULO", "VELOCIDADE",
    "VENDAVAL", "VENTILADOR", "VERDADE", "VEREADOR", "VERMELHO", "VERTICAL", "VESTIBULAR", "VIADUTO", "VIAGEM", "VIBRANTE",
    "VIDEOGAME", "VIDRAÇA", "VIGILANTE", "VINAGRE", "VINGANÇA", "VINHO", "VIOLÃO", "VIOLINO", "VISUAL", "VITAMINA",
    "VITORIA", "VIVENCIA", "VIZINHANÇA", "VOCABULARIO", "VOLANTE", "VOLTAGEM", "VONTADE", "XADREZ", "XAROPE", "XERIFE",
    "XILOFONE", "ZABUMBA", "ZEBRA", "ZELADOR", "ZEPELIM", "ZIGUEZAGUE", "ZODIACO", "ZOOLOGICO", "ZUMBI", "ZURRADO"
];

    return palavras[Math.floor(Math.random()*palavras.length)];

}


function carregar_jogo() {
    const palavra_aleatoria = palavra_jogo;

    //gerar as _ _ _
    for(let i = 0; i < palavra_aleatoria.length; i++){
        const span = document.createElement("span");
        span.classList.add('span-palavra');
        span.textContent = '_ ';
        span.dataset.qual = `${i}` ;
        div_letra.append(span);
    }

}

function verifica_e_avisa (){
    if(tentativa>6){
        btns.forEach((botao) => {
            botao.disabled = true;
        });
        alert(`A palavra era = ${palavra_jogo} \n GAME OVER! Clique em começar de novo para jogar outra vez`);
        reset.disabled = false;
    } else if(verifica_vitoria()){
        btns.forEach((botao) => {
            botao.disabled = true;
            img.src = `img/8.png`;
        });
        alert("Parabéns você ganhou! Clique em começar de novo para jogar outra vez");
        reset.disabled = false;
    }
}

function verifica_vitoria () {
    const allSpans = document.querySelectorAll("span");
    
    //assumimos que o player ganhou
    let prova = true;

    for(let i = 0; i<allSpans.length; i++){
        if(allSpans[i].textContent != palavra_jogo[i]){
            prova = false;
        }
    }
    return prova;
}

function continua_jogo(qual_botao){

    if(tentativa>=7 || verifica_vitoria()){
        console.log("Jogo encerrado!");
    } else {
    let encontrou = false;
    const allSpans = document.querySelectorAll("span");

    for(let i = 0; i<palavra_jogo.length; i++){
        if(qual_botao === palavra_jogo[i]){
            allSpans[i].textContent = palavra_jogo[i];
            encontrou = true;

            jogada++;

            const desativa = document.querySelector(`[data-jogo="${qual_botao}"]`);
            desativa.disabled = true;
        }
    }
    
    if(!encontrou){
        tentativa++;
        img.src = `img/${tentativa}.png`;
        
        const div = document.querySelector(".ja-foi");
        const novo_p = document.createElement("p");
        novo_p.classList.add("p");
        novo_p.textContent = qual_botao;
        div.append(novo_p);

        const desativa = document.querySelector(`[data-jogo="${qual_botao}"]`);
        desativa.disabled = true;
    }
    }

    verifica_e_avisa();
}

btns.forEach((botao) => {
    botao.addEventListener("click", (event) => {
        const data = event.currentTarget.dataset.jogo;
        continua_jogo(data);
    });
});

carregar_jogo();

reset.addEventListener("click", (evento) => {
    btns.forEach((botao) =>{
        botao.disabled = false;
    });

    const apagar_span = document.querySelectorAll(".span-palavra");

    apagar_span.forEach((spanzinho) => {
        spanzinho.remove();
    });

    const apagar_p = document.querySelectorAll(".p");

    apagar_p.forEach((pezinho) => {
        pezinho.remove();
    });

    img.src = `img/1.png`;

    tentativa = 1;
    jogada = 0;


    palavra_jogo = palavra();
    carregar_jogo();
    
    reset.disabled = true;
    
});

reset.disabled = true;