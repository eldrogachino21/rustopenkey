var count = 0;
var counter = 0;
var contar = 0;
let puerta = JSON.parse(localStorage.getItem("puerta"));

function bodyrender(){ 


    document.getElementById("generatecode").innerHTML=""
    document.getElementById("nombrepuerta").innerHTML=""

    document.getElementById("nombrepuerta").innerHTML=puerta[0].nombre 

    var seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    console.log(seq);
    document.getElementById("generatecode").innerHTML=seq;

    let db = firebase.database().ref("combinaciones/"+persona[0].telefono+"/"+0001);
    let itemdb= {
        Combinacion:seq,
    }
    db.set(itemdb);
} 
let persona = JSON.parse(localStorage.getItem("datos"));
var  cuenta=0

function generate(){ 
  var task = firebase.database().ref("contador/");
      
  task.on("child_added", function(data) {
      
  data.forEach(element => {
      
    
  var taskV = element.val();
  console.log("contador ="+taskV.Contador)
  
  });
});

    document.getElementById("generatecode").innerHTML=""
    var seq = (Math.floor(Math.random() * 10) + 10).toString().substring(1);
    console.log(seq);
    document.getElementById("generatecode").innerHTML=seq;
    count++;
    var contador = document.getElementById("contador")
    var input = document.getElementById("rango");
    input.value = count
    contador.innerHTML=count

      
    var starCountRef = firebase.database().ref('combinaciones/'+persona[0].telefono+'/');
    starCountRef.once('value', (snapshot) => {
    
      if (snapshot.exists()) {
 
       


        snapshot.forEach(element => {
      
    
          const valor = snapshot.Combinacion.val();
          console.log("contador ="+valor)
          

        if(valor==seq){
          cuenta=1;
          alert("generado uno nuevo")
            generate();
        }else{
          cuenta=0;
    
        }
      });

      }
    });
  

if(cuenta==0){
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

     
cuenta=0
}
}



