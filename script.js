let availableKeywords = [
    'HTMl',
    "CSS",
    'Easy Tutorials',
    'web design Tutorials',
    'javaScript'
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.querySelector(".input-box");

inputBox.onkeyup = function () {
    let resul = [];
    let input = inputBox.value;

    if (input.length) {
        resul = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase())
        });
        console.log(resul)
    }
    display(resul)
    if (!resul.length) {
        resultBox.innerHTML = ''
    }
}

function display(resul) {
    const content = resul.map((list) => {
        return "<li onclick=selectInput(this)>" + list + "</li>"
    })

    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>"
}

function selectInput(list) {
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = ' ';
}