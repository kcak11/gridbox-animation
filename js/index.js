(function() {
	var _r = [],
		_ctr = 0,
		tileElem,
		gridBoxContainer = document.querySelector(".gridBoxContainer"),
		preloadedImage = document.querySelector("#preloadedImage"),
		frag = document.createDocumentFragment();
	for (var y = 0; y < 522; y += 29) {
		for (var x = 0; x < 522; x += 29) {
			tileElem = document.createElement("div");
			tileElem.classList.add("tile");
			tileElem.style.top = y + "px";
			tileElem.style.left = x + "px";
			tileElem.style.backgroundPosition = "-" + x + "px -" + y + "px";
			frag.appendChild(tileElem);
			_r.push(_ctr);
			_ctr++;
		}
	}
	gridBoxContainer.appendChild(frag);

	function play() {
		var allTiles = document.querySelectorAll(".tile");
		_r.sort(function() {
			return Math.random() < 0.5 ? -1 : 1;
		});
		for (var i = 0; i < allTiles.length; i++) {
			(function(e, len, idx, i) {
				setTimeout(function() {
					e.classList.contains("visible")
						? e.classList.remove("visible")
						: e.classList.add("visible");
					if (idx === len - 1) {
						setTimeout(function() {
							play();
						}, 968);
					}
				}, i);
			})(allTiles[_r[i]], allTiles.length, i, i * 10);
		}
	}
	var init = function() {
		if (window.location.protocol.indexOf("http") === -1 || preloadedImage.complete) {
			play();
		} else {
			setTimeout(function() {
				init();
			}, 25);
		}
	};
	init();
})();
