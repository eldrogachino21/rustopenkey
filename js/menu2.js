var count = 0;
var counter = 0;
let puerta = JSON.parse(localStorage.getItem("puerta"));

function bodyrender(){ 


    document.getElementById("generatecode").innerHTML=""
    document.getElementById("nombrepuerta").innerHTML=""

    document.getElementById("nombrepuerta").innerHTML=puerta[0].nombre 

    var seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    console.log(seq);
    document.getElementById("generatecode").innerHTML=seq;
} 
let persona = JSON.parse(localStorage.getItem("datos"));

function generate(){ 

    var task1 = firebase.database().ref("contador/"+persona[0].telefono);
      
    task1.on("child_added", function(data1) {
        
    data1.forEach(element1 => {
          
        
    var taskV = element1.val();
    console.log(taskV.Contador)
    
    });
  });

    document.getElementById("generatecode").innerHTML=""
    var seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    console.log(seq);
    document.getElementById("generatecode").innerHTML=seq;
    count=counter;
    count++;
    var contador = document.getElementById("contador")
    var input = document.getElementById("rango");
    input.value = count
    contador.innerHTML=count

    var task = firebase.database().ref("combinaciones/"+persona[0].telefono+"/"+count);
      
    task.on("child_added", function(data) {
        
    data.forEach(element => {
        
      
    var taskV = element.val();
    if(taskV.Combinacion==seq){
        generate();
    }
    
    });
  });
    let db = firebase.database().ref("combinaciones/"+persona[0].telefono+"/"+count);
    let itemdb= {
        Combinacion:seq,
    }
    db.set(itemdb);

    let db2 = firebase.database().ref("contador/"+persona[0].telefono);
    let itemdb2= {
        Contador:count,
    }
    db2.set(itemdb2);
    setTimeout(function(){
        document.getElementById("Buttongenerate").disabled=false;
      }, 3000);

      document.getElementById("Buttongenerate").disabled=true;

     

}



