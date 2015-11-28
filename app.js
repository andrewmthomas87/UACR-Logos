
function resize() {
	document.body.style.fontSize = (window.innerHeight / 61.25) + 'px';
}

window.addEventListener('resize', resize)

window.addEventListener('load', function() {
	resize()
	setTimeout(function() {
		document.body.classList.remove('hidden')
	}, 500)
})
