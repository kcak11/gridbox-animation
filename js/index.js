/*--eTag:adtvtm76id10kpokj682d3--*/
(function() {
    var pImage = document.createElement("img");
    pImage.style.display = "none";
    pImage.setAttribute("id", "preloadedImage");

    var pImageI = document.createElement("img");
    pImageI.style.display = "none";
    pImageI.setAttribute("id", "preloadedImageI");

    var cssText = ""
      , cssTextI = "";
    if (window.location.protocol.indexOf("http") !== -1) {
        pImage.src = "//cdn.kcak11.com/gridbox-animation/assets/images/the-k-circle.png";
        pImageI.src = "//cdn.kcak11.com/gridbox-animation/assets/images/the-k-circle-i.png";
        cssText = '\n.tile{background-image:url("//cdn.kcak11.com/gridbox-animation/assets/images/the-k-circle.png");}';
        cssTextI = '\n.tile{background-image:url("//cdn.kcak11.com/gridbox-animation/assets/images/the-k-circle-i.png");}';
    } else {
        pImage.src = "assets/images/the-k-circle.png";
        pImageI.src = "assets/images/the-k-circle-i.png";
        cssText = '\n.tile{background-image:url("assets/images/the-k-circle.png");}';
        cssTextI = '\n.tile{background-image:url("assets/images/the-k-circle-i.png");}';
    }
    var writeCSSDef = function(cssDef, id) {
        var cssStyleElem = document.createElement("style");
        if (id) {
            cssStyleElem.id = id;
        }
        cssStyleElem.type = "text/css";
        if (cssStyleElem.styleSheet) {
            cssStyleElem.styleSheet.cssText = cssDef;
        } else {
            cssStyleElem.appendChild(document.createTextNode(cssDef));
        }
        document.getElementsByTagName("head")[0].appendChild(cssStyleElem);
    };
    function applyCSSRule(cssText) {
        writeCSSDef(cssText, "_dyn_StyleGBOX");
    }
    applyCSSRule(cssText);
    document.querySelector("body").appendChild(pImage);
    document.querySelector("body").appendChild(pImageI);

    var _r = [], _ctr = 0, effects = ["bg1", "bg1 bg2", "bg1 bg2 bg3", "bg1 bg2", "bg1", ""], effectsCtr = 0, tileElem, gridBoxContainer = document.querySelector(".gridBoxContainer"), gridBoxSpinner = document.querySelector("._gboxS"), frag = document.createDocumentFragment(), cFrag = document.createDocumentFragment(), animCtr = 0;

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
        var css_i, css_default;
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
                                        css_i = cFrag.querySelector("#css_i");
                                        css_i && document.querySelector("head").appendChild(css_i);
                                        document.querySelector("#css_default") && cFrag.appendChild(document.querySelector("#css_default"));
                                        effectsCtr = 0;
                                    } else if (animCtr % 4 === 0) {
                                        applyCSSRule(cssText);
                                        css_default = cFrag.querySelector("#css_default");
                                        css_default && document.querySelector("head").appendChild(css_default);
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
            }
            )(allTiles[_r[i]], allTiles.length, i, i * 22);
        }
        animCtr++;
    }
    var kv, pageQueryParams = {};
    (function() {
        if (window.location.search) {
            var keyValues = window.location.search.split("?").join("").split("&");
            for (var i = 0; i < keyValues.length; i++) {
                kv = keyValues[i].split("=");
                pageQueryParams[kv[0]] = decodeURIComponent(kv[1]);
            }
        }
    }
    )();
    var showLoadingAnimation = true;
    if (pageQueryParams["noanim"]) {
        showLoadingAnimation = false;
    }
    var showLoadingMsg = function(container, msg) {
        if (!container || !msg || typeof msg !== "string") {
            return;
        }
        if (!container.layoutDone) {
            var t = document.createDocumentFragment();
            for (var i = 0; i < msg.length; i++) {
                var s = document.createElement("span");
                s.innerHTML = msg.charAt(i);
                t.appendChild(s);
            }
            container && container.appendChild(t);
        }
        container.layoutDone = "yes";
        var elems = container.querySelectorAll("span");
        for (var i = 0; i < elems.length; i++) {
            (function(elem, len, index) {
                setTimeout(function() {
                    if (elem) {
                        elem.classList.contains("anim") ? elem.classList.remove("anim") : elem.classList.add("anim");
                    }
                    if (index === len - 1) {
                        setTimeout(function() {
                            showLoadingMsg(container, msg);
                        }, 200);
                    }
                }, index * 56);
            }
            )(elems[i], elems.length, i);
        }
    };
    if (showLoadingAnimation) {
        showLoadingMsg(document.querySelector(".load_msg"), "Please wait, Loading . . .");
    }
    var init = function() {
        if (window.location.protocol.indexOf("http") === -1 || (pImage.complete && pImageI.complete)) {
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
    var adjustZoom = function() {
        var zoomVal, containEr;
        zoomVal = pageQueryParams["zoom"];
        if (zoomVal) {
            var scaleCSS = ".mainContainer{\n-webkit-transform:scale(#W,#H);\n-moz-transform:scale(#W,#H);\n-ms-transform:scale(#W,#H);\ntransform:scale(#W,#H);\n}";
            scaleCSS = scaleCSS.split("#W").join(zoomVal).split("#H").join(zoomVal);
            writeCSSDef(scaleCSS);
        }
    };
    adjustZoom();
    var applyOverlay = function() {
        var overlayColor = pageQueryParams["overlaycolor"];
        var overlayOpacity = pageQueryParams["overlayopacity"] || 0.5;
        if (overlayColor) {
            var overlayCSSDef = "body:after{content:' ';position:absolute;top:0;right:0;bottom:0;left:0;background-color:" + overlayColor + ";opacity:" + overlayOpacity + ";}";
            writeCSSDef(overlayCSSDef);
        }
    };
    applyOverlay();
    if (!showLoadingAnimation) {
        init();
    } else {
        setTimeout(function() {
            init();
        }, 4000);
    }
    document.oncontextmenu = function(e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        return false;
    };
}
)();
