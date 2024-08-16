/*const btnes = document.getElementById('es');
const btnen = document.getElementById('en');

btnes.addEventListener("click", (e)=>{
    changeToSpanish();
});
btnen.addEventListener("click", (e)=>{
    changeToEnglish();
});

*/

window.addEventListener("load", function () {

    let esp = document.querySelector(".animacion");
    let esp2 = bodymovin.loadAnimation({
        container: esp,
        path: "https://lottie.host/a3b8eac3-ee42-4936-8cd5-cbbd74f3f411/eANseJE95b.json",
        renderer: "svg",
        loop: true,
        autoplay: false,
        name: "esp",
    });
    esp2.playSegments([0, 30], true);
    esp.addEventListener("click", function () {
        changeToSpanish();
    });

    let eng = document.querySelector(".animacion2");
    let eng2 = bodymovin.loadAnimation({
        container: eng,
        path: "https://lottie.host/0b134aab-1235-4598-ab24-61d32d78df7b/74TtISyS0e.json",
        renderer: "svg",
        loop: true,
        autoplay: false,
        name: "eng",
    });
    eng2.playSegments([0, 30], true);
    eng.addEventListener("click", function () {
        changeToEnglish();
    });

});

var language = 2;



function changeLanguage() {
    if (language % 2 === 0) {
        changeToEnglish();
    } else {
        changeToSpanish();
    }
};
const changeToSpanish = async () => {
    const requestJson = await fetch('./languages/es.json');
    const texts = await requestJson.json();
    const textsToChange = document.querySelectorAll('[data-section]');

    textsToChange.forEach(textToChange => {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        textToChange.innerHTML = texts[section][value];
    });
    language++;
}

const changeToEnglish = async () => {
    const requestJson = await fetch('./languages/en.json');
    const texts = await requestJson.json();
    const textsToChange = document.querySelectorAll('[data-section][data-value]');

    textsToChange.forEach(textToChange => {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        textToChange.innerHTML = texts[section][value];
    });
    language++;
}
