window.addEventListener("click", function (event) {
    console.log("Window : Capture Phase");
},
    true
);

window.addEventListener("click", function (event) {
    console.log("Window : Bubbling Phase");
},
    false
);

document.body.addEventListener("click", function(event){
    console.log("Body : Capture Phase");
},
true
);

document.body.addEventListener("click", function (event) {
    console.log("Body : Bubbling Phase");
},
    false
);

const btn = document.querySelector("#btn");
btn.addEventListener("click", function (event) {
    console.log("Button : Capture Phase");
},
    true
);

btn.addEventListener("click", function (event) {
    console.log("Body : Bubbling Phase");
},
    false
);