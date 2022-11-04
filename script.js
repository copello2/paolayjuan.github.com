const $Dias = document.getElementById('diasres'),
$Horas = document.getElementById('horasres'),
$Minutos = document.getElementById('minutosres'),
$Segundos = document.getElementById('segundosres');

const contadordias = new Date('Jan 05,2023 20:00:00').getTime();

let intervalo = setInterval(function(){
	const ahora = new Date().getTime();

	let distancia = contadordias-ahora;

	let diasres = Math.floor(distancia / (1000 * 60 *60 * 24));
	let horasres = Math.floor((distancia % (1000 * 60 *60 * 24)) / (1000 * 60 *60));
	let minutosres = Math.floor((distancia % (1000 * 60 *60)) / (1000 * 60 ));
	let segundosres = Math.floor((distancia % (1000 * 60 )) / (1000));


	$Dias.innerHTML = diasres;
	$Horas.innerHTML = horasres;
	$Minutos.innerHTML= minutosres;
	$Segundos.innerHTML=('0' + segundosres).slice(-2);
}, 1000);