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
  
  
  document.getElementById("form").addEventListener("submit",(e)=>{
   
    console.log("firebase cargado ")
    e.preventDefault();
    var tel=getId("telefono");
    var pass=getId("contraseña");
    var conpass = getId("confirmarcontraseña");
    
    var starCountRef = firebase.database().ref('Usuarios/'+tel);
  starCountRef.once('value', (snapshot) => {
  
    if (snapshot.exists()) {
      console.log(snapshot.val());
      const id = snapshot.val().telefono;
      if(id==tel){
        alert("no se ha podido registrar el numero que ingresaste ya existe");
      
      }else{
        
        if(pass==conpass){
          register();
          location.replace('index.html');
        }else{
          alert("las contraseñas no concuerdan")
        }
        
      }
     
    } else {
      if(pass==conpass){
        register();
        location.replace('index.html');
      }else{
        alert("las contraseñas no concuerdan")
      }
    }
  
    
  
  });
    
  
  
    
    
    });
    
  
  
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
  
    
  function register(){
    var tel=getId("telefono")
    firebase.database().ref("Usuarios/"+tel).set({
      nombre: encrypt(getId("nombre"),2),
      contrase\u00F1a: encrypt(getId("contraseña"), 2),
      telefono: encrypt(getId("telefono"),2),
      usuario: encrypt("cliente",2),
      email: encrypt(getId("email"),2)
    });
  
  
  
  
    alert("registrado");
    console.log(getId("telefono"));
    document.getElementById("form").reset();
  
  }
  
    function getId(id){
      return document.getElementById(id).value;
    }
      
  
  
    $(document).ready(function () {
      $('#contraseña').keyup(function () {
          $('#strengthMessage').html(checkStrength($('#contraseña').val()))
      })
      function checkStrength(password) {
          var strength = 0
          if (password.length < 6) {
              $('#strengthMessage').removeClass()
              $('#strengthMessage').addClass('Short')
              return 'Too short'
          }
          if (password.length > 7) strength += 1
          // If password contains both lower and uppercase characters, increase strength value.
          if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1
          // If it has numbers and characters, increase strength value.
          if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1
          // If it has one special character, increase strength value.
          if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
          // If it has two special characters, increase strength value.
          if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
          // Calculated strength value, we can return messages
          // If value is less than 2
          if (strength < 2) {
              $('#strengthMessage').removeClass()
              $('#strengthMessage').addClass('Weak')
              return 'Weak'
          } else if (strength == 2) {
              $('#strengthMessage').removeClass()
              $('#strengthMessage').addClass('Good')
              return 'Good'
          } else {
              $('#strengthMessage').removeClass()
              $('#strengthMessage').addClass('Strong')
              return 'Strong'
          }
      }
  });