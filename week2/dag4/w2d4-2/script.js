const bfButton = document.querySelectorAll("button");
for (let i = 0; i < bfButton.length; i++) {
    bfButton[i].addEventListener("click", function (event) {
        console.log(event.target.innerText);
    });
}