let myNodelist = document.getElementsByTagName("li");
for (let i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

let list = document.querySelector("ul");
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function addElemento() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("tarefa").value;
    let t = document.createTextNode(getDataAtual() + inputValue.toUpperCase());

    

    let dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.className = "prazo";
    li.appendChild(dateInput);
    li.appendChild(t);

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    if (inputValue === '') {
        alert("Você precisa descrever a tarefa");
    } else {
        document.getElementById("itemLista").appendChild(li);
    }

    document.getElementById("tarefa").value = "";

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function getDataAtual() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    return dd + '/' + mm + '/' + yyyy + " ";
}

function limparLista() {
    var tarefas = document.querySelectorAll("li");
    tarefas.forEach(function(tarefa) {
        tarefa.remove();
    });
}