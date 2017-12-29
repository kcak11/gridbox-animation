(function() {
	var _r = [], _ctr = 0, effects = [ "bg1", "bg1 bg2", "bg1 bg2 bg3", "bg1 bg2", "bg1", "" ], effectsCtr = 0, tileElem, gridBoxContainer = document.querySelector(".gridBoxContainer"), gridBoxSpinner = document.querySelector("._gboxS"), preloadedImage = document.querySelector("#preloadedImage"), frag = document.createDocumentFragment(), cFrag = document.createDocumentFragment(), animCtr = 0;

	cFrag.appendChild(document.querySelector("#css_i"));
	function createLayout() {
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
		gridBoxContainer.innerHTML = "";
		gridBoxContainer.appendChild(frag);
	}

	function play() {
		var allTiles = document.querySelectorAll(".tile");
		_r.sort(function() {
			return Math.random() < 0.5 ? -1 : 1;
		});
		for (var i = 0; i < allTiles.length; i++) {
			(function(e, len, idx, i) {
				setTimeout(function() {
					e.classList.contains("visible") ? e.classList.remove("visible") : e.classList.add("visible");
					if (idx === len - 1) {
						setTimeout(function() {
							gridBoxContainer.classList.contains("animate") ? gridBoxContainer.classList.remove("animate") : gridBoxContainer.classList.add("animate");
							if (animCtr > 0 && (animCtr % 4 === 2 || animCtr % 4 === 0)) {
								document.querySelector("body").className = "inTransition";
								setTimeout(function() {
									if (animCtr % 4 === 2) {
										applyCSSRule(cssTextI);
										cFrag.querySelector("#css_i") && document.querySelector("head").appendChild(cFrag.querySelector("#css_i"));
										document.querySelector("#css_default") && cFrag.appendChild(document.querySelector("#css_default"));
										effectsCtr = 0;
									} else if (animCtr % 4 === 0) {
										applyCSSRule(cssText);
										cFrag.querySelector("#css_default") && document.querySelector("head").appendChild(cFrag.querySelector("#css_default"));
										document.querySelector("#css_i") && cFrag.appendChild(document.querySelector("#css_i"));
										effectsCtr = 0;
									}
									document.querySelector("body").className = "";
								}, 2000);
							}
							setTimeout(function() {
								play();
							}, 2000);
						}, 605);
					}
					if (idx % 46 === 45) {
						document.querySelector("body").className = effects[effectsCtr % 6];
						effectsCtr++;
					}
				}, i);
			})(allTiles[_r[i]], allTiles.length, i, i * 22);
		}
		animCtr++;
	}
	var init = function() {
		if (window.location.protocol.indexOf("http") === -1 || preloadedImage.complete) {
			gridBoxSpinner.classList.add("gridBoxSpinner");
			gridBoxSpinner.classList.add("rotateMe");
			createLayout();
			play();
		} else {
			setTimeout(function() {
				init();
			}, 25);
		}
	};
	init();
	document.oncontextmenu = function(e) {
		if (e && e.preventDefault) {
			e.preventDefault();
		}
		return false;
	}
})();
