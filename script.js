let button = document.querySelector(".row button");
let input = document.querySelector("#input-box")
let join = document.querySelector("#list-container")
let checked = document.querySelector(".checked");
button.addEventListener("click", () => {
    if (input.value == "") {
        alert("Please enter some text!");
    }
    else {
        let newElement = document.createElement("li");
        newElement.innerHTML = input.value;
        join.appendChild(newElement);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        newElement.appendChild(span);
    }
    input.value = "";
    saveData();
})
join.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
            saveData();
    }
    else if (e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", join.innerHTML);
}
function showTask(){
    join.innerHTML = localStorage.getItem("data");
}
showTask();

