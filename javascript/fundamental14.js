// // console.dir(document);
// // console.dir(document.head);
// function doSomething() {
//     // console.log("Doing Something... .... .... ");
//     // alert("Button Clicked")
//     let pobj = document.createElement("p");
//     pobj.textContent = "This pairagraph is dynamicaly created";
//     let container = document.querySelector(".container");
//     container.appendChild(pobj);
// }

// // function againDoSomething(){
// //     console.log("Started Doing Something Else agian ........");
// // }

// let btnObj = document.querySelector("#clickMe");
// console.dir(btnObj);
// // onclick = doSomething;
// btnObj.addEventListener("click", doSomething);
// // btnObj.addEventListener("click", againDoSomething);


function doSomething() {
    let pobj = document.createElement("p");
    pobj.textContent = "hello this is dynamicaly typed thankyou !"
    pobj.style.color = "red"
    pobj.style.fontSize = "1.2rem"
    pobj.style.backgroundColor = "yellow"
    pobj.style.padding = "16px"
    let container = document.querySelector(".container");
    container.appendChild(pobj);
}
//                                        btn id
// let btnobj = document.querySelector("#clickMe");
// console.dir(btnobj);


//btn id                  event    action
clickMe.addEventListener("click", doSomething);
// console.log(btnobj);