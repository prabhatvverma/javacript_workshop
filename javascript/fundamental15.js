let nameText = document.querySelector("#name");
let addressText = document.querySelector("#address");
let saveBtn = document.querySelector("#saveBtn");
// console.dir(nameText);
// console.dir(addressText);
// console.dir(saveBtn);

saveBtn.addEventListener("click", save);

let ulParent = document.createElement("ul");
document.body.appendChild(ulParent);
function save() {
    let name = nameText.value;
    let address = addressText.value;

    console.log(name);
    console.log(address);


    let liChild = document.createElement("li");
    liChild.textContent = name + " | " + address;
    ulParent.appendChild(liChild);
    
}