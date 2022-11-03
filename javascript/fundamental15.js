// bind all the code in function now variables are not public now you can not call them from outside of prticular file.

function init() {

    let nameText = document.querySelector("#name");
    let addressText = document.querySelector("#address");
    let saveBtn = document.querySelector("#saveBtn");
    // console.dir(nameText);
    // console.dir(addressText);
    // console.dir(saveBtn);

    saveBtn.addEventListener("click", save);

    // creating ul as a parent that it can not create ul again and again
    
    let ulParent = document.createElement("ul");
    document.body.appendChild(ulParent);
    function save() {
        let name = nameText.value;
        let address = addressText.value;

        console.log(name);
        console.log(address);


        let liChild = document.createElement("li");
        liChild.textContent = name + " | " + address;

        //creating remove btn
        let btn = document.createElement('button');
        btn.textContent = "remove";
        btn.addEventListener("click", remove);
        liChild.appendChild(btn);

        ulParent.appendChild(liChild);

    }

    function remove() {
        console.log("remove called...");
        // console.dir(this);

        let parentLi = this.parentNode;
        let ul = parentLi.parentNode;
        ul.removeChild(parentLi);
        // console.dir(this.parentNode);

    }
}
init();