var config = {
  apiKey: "AIzaSyAmxHeJ3eFT4VgbD9RJnw4_i-a4mfw-1Nc",
  authDomain: "rustopenkey.firebaseapp.com",
  projectId: "rustopenkey",
  databaseURL: "https://rustopenkey-default-rtdb.firebaseio.com",
  storageBucket: "rustopenkey.appspot.com",
  messagingSenderId: "342681849359",
  appId: "1:342681849359:web:d74145020adc74cece9d7a",
  measurementId: "G-WLYPZZ84H2"
};
  firebase.initializeApp(config);
  
  
  
  
  
  
  
  function render1(){


    var datos = JSON.parse(localStorage.getItem('datos'));
      if(datos==null){
          
      }else{
        //location.replace('index.html');
      }
  }
  
  
  
  const str = 'thisIsAString';
      const getMap = (legend, shift) => {
         return legend.reduce((charsMap, currentChar, charIndex) => {
            const copy = { ...charsMap };
            let ind = (charIndex + shift) % legend.length;
            if (ind < 0) {
               ind += legend.length;
            };
            copy[currentChar] = legend[ind];
            console.log( copy[currentChar])
            return copy;
         }, {});
      };
      const getMap2 = (legend2, shift) => {
          return legend2.reduce((charsMap, currentChar, charIndex) => {
             const copy = { ...charsMap };
             let ind = (charIndex + shift) % legend2.length;
             if (ind < 0) {
                ind += legend2.length;
             };
             copy[currentChar] = legend2[ind];
             console.log( copy[currentChar])
             return copy;
          }, {});
       };
      const encrypt = (str, shift = 0) => {
          
          
          const legend = 'abcdefghijklmnopqrstuvwxyz'.split('');
          const legend2= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
          const map = getMap(legend, shift);
          const map2 = getMap2(legend2,shift);
  
          
          return str
          .split('')
          .map(char => map[char] || map2[char] || char)
          .join('');
       };
  console.log();
  
  
  
  var database = firebase.database();
  
  document.getElementById("form").addEventListener("submit",(e)=>{
    console.log("firebase cargado ");
    e.preventDefault();
    var tel=getId("telefono");
    var pass = getId("password");
    var starCountRef = firebase.database().ref("Usuarios"+'/'+tel);
  starCountRef.once('value', (snapshot) => {
    const id = snapshot.val().telefono;
    const id2 = snapshot.val().contrase\u00F1a;
    const id3 = snapshot.val().nombre;
    const id4 = snapshot.val().usuario;
    const id5 = snapshot.val().email;
  
    var pr2=encrypt(id,-2);
    var pr=encrypt(id2,-2);
    var pr3=encrypt(id3,-2);
    var pr4=encrypt(id4,-2);
    var pr5=encrypt(id5,-2);
  
    if(pr2==tel && pr == pass){
      datos(pr2,pr3,pr4);
     
    alert("ingresaste");
    //Redireccionamiento tras 5 segundos
    
  
    location.href="menu.html";
   
  }else{
   alert("los datos no coinciden con los de la cuenta registrada");
  }
  });
  
    
    
  });
  var products=[];
  var info=[];
  
  
  
  function datos(telefono,nombre,usuario){
    
    var item={
      nombre: nombre,
     telefono:telefono,
     usuario:usuario
    }
    info.push(item);
    let storage = JSON.parse(localStorage.getItem("datos"));
    if (storage==null) {
      products.push(item);
      localStorage.setItem("datos",JSON.stringify(products));
    }else{
      products= JSON.parse(localStorage.clear("datos"));
      products.push(item);
      localStorage.setItem("datos",JSON.stringify(products));
    }
     
  
    
      
  
    
    
    }
   
  
  function getId(id){
    return document.getElementById(id).value;
    
  }
  
  
  