const Btn = document.getElementById("btn");
const Input = document.getElementById("input");
const Container = document.getElementById("container");
Btn.addEventListener("click",() => {
    const Div = document.createElement("div");
    Div.className = "air";
    Div.innerText = Input.value;
    Container.appendChild(Div);
});