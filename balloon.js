var timerId = null; 

function iniciaJogo(){
    var url = window.location.search;
    var nivel_jogo = url.replace("?", "");
    var tempo_segundos = 0;

    //1 fácil 
    if(nivel_jogo == 1){
        tempo_segundos = 120;
    }
    //2 médio
    if(nivel_jogo == 2){
        tempo_segundos = 60;
    }

    //3 difícil
    if(nivel_jogo == 3){
        tempo_segundos = 30;
    }

    // inserindo segundos
    document.getElementById('cronometro').innerHTML = tempo_segundos;

    // quantidade de balões
    var qtde_baloes = 84;

    cria_baloes(qtde_baloes);

    //imprimir quantidade de balões inteiros
    document.getElementById('balloon_inteiros').innerHTML = qtde_baloes;

    //imprimir quantidade de balões estourados
    document.getElementById('balloon_estourados').innerHTML = 0;

    contagem_tempo(tempo_segundos + 1);

}

function contagem_tempo(segundos){
    segundos = segundos - 1;

    if(segundos == -1){
        clearTimeout(timerId); 
        game_over();
        return false;
    }

    document.getElementById('cronometro').innerHTML = segundos;
    timerId = setTimeout("contagem_tempo("+segundos+")", 1000);
}

function game_over(){
    remove_eventos_baloes();
    alert('Fim de jogo, você não conseguiu estourar todos os balões a tempo');
}situacao_jogo:

function cria_baloes(qtde_baloes){
    for(var i = 1; i <= qtde_baloes; i++){
        var balloon = document.createElement("img");
        balloon.src = 'imagens/bp.png';
        balloon.style.margin = '10px';
        balloon.id = 'b'+i;
        balloon.onclick = function() { estourar(this); }

        document.getElementById('jogo').appendChild(balloon);

    }
}

function estourar(e){
    var id_balao = e.id;
    document.getElementById(id_balao).setAttribute("onclick", "");
    document.getElementById(id_balao).src = 'imagens/blp.png';
    pontuacao(-1);
}

function pontuacao(acao){
    var balloon_inteiros = document.getElementById('balloon_inteiros').innerHTML;
    var balloon_estourados = document.getElementById('balloon_estourados').innerHTML;
    
    balloon_inteiros = parseInt(balloon_inteiros);
    balloon_estourados = parseInt(balloon_estourados);

    balloon_inteiros = balloon_inteiros + acao;
    balloon_estourados = balloon_estourados - acao;

    document.getElementById('balloon_inteiros').innerHTML = balloon_inteiros;
    document.getElementById('balloon_estourados').innerHTML = balloon_estourados;

    situacao_jogo(balloon_inteiros);
}

function situacao_jogo(balloon_inteiros){
    if(balloon_inteiros == 0){
        alert('Parabéns, você conseguiu estourar todos os balões e tempo');
        parar_jogo();
    }
}

function parar_jogo(){
    clearInterval(timerId);
}

function remove_eventos_baloes() {
    var i = 1; //contado para recuperar balões por id
    
    //percorre o lementos de acordo com o id e só irá sair do laço quando não houver correspondência com elemento
    while(document.getElementById('b'+i)) {
        //retira o evento onclick do elemnto
        document.getElementById('b'+i).onclick = '';
        i++; 
    }
}

