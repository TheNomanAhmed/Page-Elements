window.addEventListener('load', function () {

	function parallax() {
		window.addEventListener('scroll', function () {
			var topPosition = this.pageYOffset; 
			var prlxLayers = document.querySelectorAll('.prlx__item');
			var layer, scrollSpeed, positionY;
			for(var i = 0; i < prlxLayers.length; i++) {
				layer = prlxLayers[i];
				scrollSpeed = layer.getAttribute('data-speed');
				var positionY = -(topPosition * scrollSpeed / 100);
				layer.style.transform = `translate3d(0px, ${positionY}px, 0px)`;
			}
		})
	}

	document.body.onload = parallax();
 //======================================
})