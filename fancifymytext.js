function alertMe() {
    alert("Hello, world!");
    var textarea = document.getElementById('text-area');
    textarea.style.fontSize = "24pt";
}

function fancy() {
    regualarAlert();
    var option1 = document.getElementById('text-area');
    option1.style.fontWeight = 'bold';
    option1.style.textDecoration = "underline";
    option1.style.color = "blue";
}
function regualarAlert() {
    alert("Button changed");
}

function boring() {
    regualarAlert();
    var option2 = document.getElementById('text-area');
    option2.style.fontSize = "initial";
    option2.style.fontWeight = "normal";
    option2.style.textDecoration = "none";
    option2.style.color = "black";
}

function moo() {
    regualarAlert();
    var textarea = document.getElementById('text-area');
    text = textarea.value;
    var sentence = text.split('.');

    var changedText = sentence.map(function (sentences){
        var words = sentences.trim().split(' ');
        words[words.length - 1] += '-Moo';
        return words.join(' ');
    });

    textarea.value = changedText.join('.');
    
}