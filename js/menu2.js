var count = 0 ;

function bodyrender(){ 
    document.getElementById("generatecode").innerHTML=""

    var seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    console.log(seq);
    document.getElementById("generatecode").innerHTML=seq;
} function generate(){ 
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

    let db = firebase.database().ref("combinaciones/");
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



