	var vencedor;
	var pontosDoJogador = 0;
	var pontosDoComputador = 0;

function Jogo(escolhaDoJogador) {
	var escolhaDoJogador;
	var escolhaDoComputador = Math.floor(Math.random()* 3);
	switch(escolhaDoComputador){
		case 0:
			escolhaDoComputador = '<img src=pedra_computador.png class=escolha-mao>';
		break;
		case 1:
			escolhaDoComputador = '<img src=papel_computador.png class=escolha-mao>';
		break;
		case 2:
			escolhaDoComputador = '<img src=tesoura_computador.png class=escolha-mao>';
		break;
	}
	if (escolhaDoJogador === '<img src=pedra_jogador.png class=escolha-mao>') {
		if (escolhaDoComputador === '<img src=tesoura_computador.png class=escolha-mao>') {
			vencedor = 'Jogador';
		}
		else if (escolhaDoComputador === '<img src=papel_computador.png class=escolha-mao>') {
			vencedor = 'Computador';
		} 
		else if (escolhaDoComputador === '<img src=pedra_computador.png class=escolha-mao>') {
			vencedor = 'Empatou';
		}
	} 
	else if (escolhaDoJogador === '<img src=papel_jogador.png class=escolha-mao>') {
		if (escolhaDoComputador === '<img src=pedra_computador.png class=escolha-mao>') {
			vencedor = 'Jogador';
		} 
		else if (escolhaDoComputador === '<img src=tesoura_computador.png class=escolha-mao>') {
			vencedor = 'Computador';
		} 
		else if (escolhaDoComputador === '<img src=papel_computador.png class=escolha-mao>') {
			vencedor = 'Empatou';
		}
	} 
	else if (escolhaDoJogador === '<img src=tesoura_jogador.png class=escolha-mao>') {
		if (escolhaDoComputador === '<img src=papel_computador.png class=escolha-mao>') {
			vencedor = 'Jogador';
		} 
		else if (escolhaDoComputador === '<img src=pedra_computador.png class=escolha-mao>') {
			vencedor = 'Computador';
		} 
		else if (escolhaDoComputador === '<img src=tesoura_computador.png class=escolha-mao>') {
			vencedor = 'Empatou';
		}
	}
	
	if (vencedor === 'Computador'){
		pontosDoComputador = pontosDoComputador + 1;
	}else if(vencedor === 'Jogador') {
		pontosDoJogador = pontosDoJogador + 1;
	}
	
	document.getElementById("escolha-do-jogador").innerHTML = escolhaDoJogador;
	document.getElementById("placar-jogador").innerHTML = pontosDoJogador;
	document.getElementById("escolha-do-computador").innerHTML = escolhaDoComputador;
	document.getElementById("placar-computador").innerHTML = pontosDoComputador;
	document.getElementById("resultado").innerHTML = vencedor;
}

function MelhorDeTres() {
	if (pontosDoJogador === 2) {
		setTimeout(function(){
		alert("Você Venceu!!!");
		location.reload();
		}, 100);
	}
	else if (pontosDoComputador == 2) {
		setTimeout(function(){
		alert("Você Perdeu");
		location.reload();
		}, 100);
	}
}
function MelhorDeCinco() {
	if (pontosDoJogador === 3) {
		setTimeout(function(){
		alert("Você Venceu!!!");
		location.reload();
		}, 100);
	}
	else if (pontosDoComputador == 3) {
		setTimeout(function(){
		alert("Você Perdeu");
		location.reload();
		}, 100);
	}
}
function MelhorDeSete() {
	if (pontosDoJogador === 4) {
		setTimeout(function(){
		alert("Você Venceu!!!");
		location.reload();
		}, 100);
	}
	else if (pontosDoComputador == 4) {
		setTimeout(function(){
		alert("Você Perdeu");
		location.reload();
		}, 100);
	}
}
function MelhorDeNove() {
	if (pontosDoJogador === 5) {
		setTimeout(function(){
		alert("Você Venceu!!!");
		location.reload();
		}, 100);
	}
	else if (pontosDoComputador == 5) {
		setTimeout(function(){
		alert("Você Perdeu");
		location.reload();
		}, 100);
	}
}