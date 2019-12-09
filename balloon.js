var tempoId = null;

function playgame() {
	var url = window.location.search;
	var nivel  = url.replace("?", "");
	var tempo_seg = 0;

 //tempo nível 1 -> fácil
 if (nivel  ==1) {
 	tempo_seg = 160;
 } 
//tempo nível 2 -> médio
if (nivel == 2)  {
	tempo_seg = 80;
}

//tempo nível 3 -> difícil
if (nivel == 3) {
	tempo_seg == 40;
}


document.getElementByid('cronometro').innertHTML = tempo_seg;

//quantidade de balloon
var quantidade_balloon = 80;

criar_baloes(quantidade_balloon);

//quantidade de balloon inteiro
document.getElementByid('balloon_int').innerHTML = quantidade_balloon;

//imprimir balloon estourados
document.getElementByid('balloon_est').innerHTML = 0;

contagem_tempo(tempo_seg + 1);

}

function contagem_tempo(segundos){
	segundos = segundos -1;

	if(segundos == -1){
		clearTimeout(tempoId);
   		game_over();
   		return false;
 document.getElementByid('cronometro').innerHTML = segundos;
 tempoId = setTimeOut("contagem_tempo("+segundos")", 1000);
}

function game_over(){
	remove_balloon();
	alert('TEMPO ESGOTADO, VOCÊ PERDEU!');
}
situacao_game:

function criar_balloon(quantidade_balloon){
	for(var i = 1; i <= quantidade_balloon; i++){
		var balloon = document.createElement("img");
  balloon.src = 'imagem/balloon_blue.png';
  balloon.stilo.margin = '10px';
  balloon.id = 'b'+i;
   balloon.onclick = function() { estourar(this); }

	document.getElementByid('game').appendChild(balloon);
	}

	function estourar(e){
		var id_ballon = e.id;
		document.getElementByid(id_balloon).setAttribute("onclick", "");
		document.getElementByid(id_balloon).src = 'imagem/pow.png';
  		pontuacao(-1);
	}

	function pontuacao(acao){
		var balloon_int = document.getElementByid('balloon_int').innerHTML;
		var balloon_est = document.getElementByid('balloon_est').innerHTML;

balloon_int = parseInt(balloon_int);
balloon_est = parseInt(balloon_est);

 balloon_int = balloon_int + acao;
 balloon_est = balloon_est - acao;
 document.getElementById('balloon_int').innerHTML = balloon_int;
 document.getElementById('balloon_est').innerHTML = balloon_est;

    situacao_game(balloon_int);
 
	}

	function situacao_game(balloon_int){
    if(balloon_int == 0){
        alert('PARABÉNS! VOCÊ CONSEGUIU ESTOURAR TODOS OS BALLOONS A TEMPO. UFAA');
        stop_game();
    }

    function stop_game()
    	clearIntervalo(tempoId);
    }

    function remove_balloon_events(){
    	var i = 1;

    	while(document.getElementByid('b+i')){

    		document.getElementByid('b'+).onclick = '';
    		1++;
    	}
    }

