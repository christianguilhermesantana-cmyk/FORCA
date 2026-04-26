const div_letra = document.querySelector(".letra");
const btns = document.querySelectorAll(".btn");
const img = document.querySelector(".img");

const reset = document.querySelector("#reset");

let palavra_jogo = palavra();
let tentativa = 1;
let jogada = 0;

function palavra (){
function palavra() {
    const palavras = [
        // FÁCEIS (50 palavras - Curtas e comuns)
        "BOLA", "CASA", "DADO", "FOGO", "GATO", "LEAO", "MESA", "PATO", "ROSA", "SOL",
        "AGUA", "BOLO", "COPO", "DOCE", "FADA", "GELO", "ILHA", "JOGO", "LAMA", "MAO",
        "NAVE", "OLHO", "PAO", "RATO", "SUCO", "TELA", "UVA", "VACA", "ZEBRA", "AZUL",
        "CAFE", "DEDO", "FACA", "GOLA", "HOJE", "LAGO", "MATO", "NETO", "OVOS", "PIPA",
        "REI", "SOPA", "TREM", "URSO", "VASO", "XALE", "YOGA", "ZERO", "ARPA", "BALA",

        // MÉDIAS (30 palavras - Comprimento médio)
        "ABACAXI", "BANANA", "CIDADE", "DENTISTA", "ESCOLA", "FLECHA", "GIRAFFA", "HOTEL", "IGREJA", "JARDIM",
        "LIVRO", "MOEDA", "NUVEM", "ONIBUS", "PARQUE", "QUEIJO", "ROUPA", "SAPATO", "TIJOLO", "URANO",
        "VIAGEM", "XADREZ", "ALUNO", "BOTAO", "CHAVE", "DRAGAO", "ESMERALDA", "FESTA", "GRITAR", "HUMANO",

        // DIFÍCEIS (20 palavras - Longas ou complexas)
        "ASTRONAUTA", "BIBLIOTECA", "CONSTITUIÇÃO", "DESENVOLVIMENTO", "ESPECTRO", "FILOSOFIA", "GUILHOTINA", "HEMISFERIO", "INCONSTITUCIONAL", "JURISPRUDENCIA",
        "LABIRINTO", "METAMORFOSE", "NASCIMENTO", "ORNITORRINCO", "PSICOLOGIA", "QUILOMETRO", "REESTRUTURAR", "SINTETIZADOR", "TRANSCENDENTAL", "UNIVERSIDADE"
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
