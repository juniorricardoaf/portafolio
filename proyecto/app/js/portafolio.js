var delay = 0;
window.addEventListener("load", function () {
  setTimeout(function () {
    observeElements();
    type();
    type2();
  }, 750);
});

window.addEventListener("load", function () {
  setTimeout(function () {
    var whoarewe = document.getElementById('top-message');
    whoarewe.classList.add('fade-out-up');

    // Opcional: Ocultar el elemento después de la animación
    setTimeout(function () {
      whoarewe.style.display = 'none';
    }, 2000); // Debe ser igual o mayor que la duración de la animación
  }, 3000);

  let anima3 = document.querySelector(".animacion3");
  let animation3 = bodymovin.loadAnimation({
    container: anima3,
    path: "https://lottie.host/3faa7332-7c0c-4f86-b64c-9c3eaf530b76/lrUonC1x9X.json",
    renderer: "svg",
    loop: true,
    autoplay: false,
    name: "animacion3",
  });
  animation3.playSegments([0, 181], true);

  let anima4 = document.querySelector(".animacion4");
  let animation4 = bodymovin.loadAnimation({
    container: anima4,
    path: "https://lottie.host/77898b67-c734-4203-9283-20b28dd870b1/wGRTaIqubs.json",
    renderer: "svg",
    loop: true,
    autoplay: false,
    name: "animacion4",
  });
  animation4.playSegments([0, 600], true);

  let anima5 = document.querySelector(".animacion5");
  let animation5 = bodymovin.loadAnimation({
    container: anima5,
    path: "https://lottie.host/64a33442-8c2b-45e5-aa1e-7c3c53d294fa/zv2uDx3Yui.json",
    renderer: "svg",
    loop: true,
    autoplay: false,
    name: "animacion5",
  });
  animation5.playSegments([0, 118], true);


  /*
  https://lottie.host/64a33442-8c2b-45e5-aa1e-7c3c53d294fa/zv2uDx3Yui.json
  118
  https://lottie.host/5c7bf63a-0923-494f-89a8-d265c30198b1/gwx99yb9uR.json
  300
  */

});


/*Mision */
const title = document.getElementById("title");
var textToType = "Misión".split("");
function type() {
  const char = document.createElement("span");
  char.innerText = textToType.splice(0, 1)[0];
  if (textToType.length > 0) {
    setTimeout(function () {
      type();
    }, 50);
  }
  title.appendChild(char);
}


/*Vision */
const title2 = document.getElementById("title2");
var textToType2 = "Visión".split("");
function type2() {
  const char2 = document.createElement("span");
  char2.innerText = textToType2.splice(0, 1)[0];
  if (textToType2.length > 0) {
    setTimeout(function () {
      type2();
    }, 50);
  }
  title2.appendChild(char2);
}



function observeElements() {
  let options = {
    rootMargin: "0px",
    threshold: 0.75
  };
  console.log("options: ", options);
  let observer = new IntersectionObserver(callback, options);
  console.log("observer: ", observer);
  const elementsObserved = document.getElementsByClassName("observed");
  for (var i = 0; i < elementsObserved.length; i++) {
    console.log("Observe: ", elementsObserved[i]);
    observer.observe(elementsObserved[i]);
  }
}
let callback = (entries, observer) => {
  entries.forEach((entry) => {
    console.log("enter here?", entry);
    if (entry.isIntersecting) {
      console.log("entry", entry)
      entry.target.classList.add("visible");
    }
  });
};
