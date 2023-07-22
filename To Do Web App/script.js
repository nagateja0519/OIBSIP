let inputs = document.getElementById("inp");
let desc = document.getElementById("des");
let text = document.querySelector(".text");

function Add() {
    if (inputs.value == "") {
        alert("Please Enter Task")
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value}<br> desc : ${desc.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value = "";
        desc.value = "";
        newEle.querySelector("i").addEventListener("click", remove);

        function remove() {
            newEle.remove()
        }
    }
}