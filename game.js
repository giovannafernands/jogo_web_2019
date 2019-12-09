function playgame() {
	var nivel = document.getElementByid('nivel').value;
	window.location.href = 'balloon.html?' + nivel;
}