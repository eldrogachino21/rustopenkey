var count = 0 ;

function bodyrender(){ 
    document.getElementById("generatecode").innerHTML=""

    var seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    console.log(seq);
    document.getElementById("generatecode").innerHTML=seq;
} 
let persona = JSON.parse(localStorage.getItem("datos"));

function generate(){ 

    var task = firebase.database().ref("combinaciones/"+persona[0].telefono+"/"+count);
      
    task.on("child_added", function(data) {
        
    data.forEach(element => {
        
      
    var taskV = element.val();
    taskV.id=count

    
    });
  });

    document.getElementById("generatecode").innerHTML=""
    var seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    console.log(seq);
    document.getElementById("generatecode").innerHTML=seq;

    count++;
    console.log(count)
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
        id:count,
        Combinacion:seq,
    }
    db.set(itemdb);

    setTimeout(function(){
        document.getElementById("Buttongenerate").disabled=false;
      }, 3000);

      document.getElementById("Buttongenerate").disabled=true;

     

}



