function growTomatoes(){
    console.log("1. first step .......");
    console.log("2. second step ......");
    console.log("3. thiered step .....");
    console.log("4. fourth step ......");
    console.log("5. fifth step .......");
    console.log("6. sixth step .......");
}

let person={
    name: "rakesh",
    address : "lucknow",
    doTask : function (task){
        console.log("Analyse task...");
        console.log("gethering requierd resoures ...");
        task();
        console.log("task complted..");
    }

}

person.doTask(growTomatoes);

let person2 ={
    name : "shushil",
    address : "lucknow",
    doTask: function(task){
        console.log("analyse .............");
        console.log("Resorce identifying..");
        console.log("planning.............");
        task();
        console.log("Progress Monitering..");
        console.log("task completed.......");
    }
};

person2.doTask(growTomatoes);