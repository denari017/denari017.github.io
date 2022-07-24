var inputBarId = document.getElementById("inputBarId");
var addButtonId = document.getElementById("ButtonId");
var RemoveButtonId = document.getElementById("ButtonId2");
var toDos = document.getElementById("toDos");

inputBarId.addEventListener('keypress', function (e) {  // add todo by !enter!
        if (e.key === 'Enter') {
            var x = document.createElement("p");
            x.innerText = inputBarId.value;
            toDos.appendChild(x);
            inputBarId.value = "";
        }

    x.addEventListener("click", function(){ //vičiarknúť vec z todo - pre add todo by !enter!
        x.style.textDecoration = "line-through";
    });
    
    x.addEventListener("dblclick", function(){ // remove todo - pre add todo by !enter!
        toDos.removeChild(x);
    });

    RemoveButtonId.addEventListener("click", function(){ // remove všetky todos buttnom 
        toDos.removeChild(x);                            // pre add todo by !enter!
    });

});

addButtonId.addEventListener("click", function(){  // add todo by !click!
    var x = document.createElement("p");
    x.innerText = inputBarId.value;
    toDos.appendChild(x);
    inputBarId.value = "";

    x.addEventListener("click", function(){ //vičiarknúť vec z todo - pre add todo by !click!
        x.style.textDecoration = "line-through";
    });
    
    x.addEventListener("dblclick", function(){ // remove todo - pre add todo by !click!
        toDos.removeChild(x);
    });

    RemoveButtonId.addEventListener("click", function(){// remove všetky todos buttnom 
        toDos.removeChild(x);                           // pre add todo by !click!  
    });

});

exports.build = series(scssTask, jsTask);