
function myFunction() {
    var x = document.getElementById("myItems");
    
        x.style.display = "none";
    
  }
    
        function myFunction1() {
          var x = document.getElementById("myItems");
          
              x.style.display = "block";
          
      }
      var products=[];
      var info=[];
  function pagar(contador,tokens,pagado){
    let persona = JSON.parse(localStorage.getItem("datos"));
   
    let db = firebase.database().ref("pagados/"+persona[0].telefono+"/"+contador);
    let itemdb= {
        Contador:contador,
        precio:pagado,
        pagado:"pagado"
    
    }
    db.set(itemdb);

    var item={
      puerta: contador,
     nombre:pagado
    }

    products.push(item);
    localStorage.setItem("puerta",JSON.stringify(products));

  location.replace('menu2.html');

    }
  
  function perfil2(){
    let persona = JSON.parse(localStorage.getItem("datos"));
    file2=document.getElementById("file2")
    file3=document.getElementById("file3")
    nombre=document.getElementById("nombre")
    
    let db = firebase.database().ref("imagen-perfil/"+persona[0].telefono+"/");
    let itemdb= {
        imagen1:file2,
        imagen2:file3,
        nombre:nombre
    
    }
  alert("cambiado con exito");
    db.set(itemdb);
  }
  
  function perfil(){
    myFunction()
    document.getElementById("progreso").innerHTML=""
    document.getElementById("hola").innerHTML=""
    document.getElementById("miitem").innerHTML=""
    document.getElementById("content").innerHTML=""
    var task = firebase.database().ref("imagen-perfil");
    task.on("child_added", function(data) {
          
      
        
      
      var taskV = data.val();
    document.getElementById("perfil").innerHTML= ` <div class="w-full bg-center bg-cover h-96" style="background-image: url(${taskV.imagen2});">
    <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
        <div class="text-center">
            <h1 class="text-2xl font-semibold text-white uppercase lg:text-3xl">${taskV.nombre}  <span class="text-blue-400 underline"></span></h1>
            <input type="file" id="file2" class="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500" required>
        </div>
        <img class="w-28 h-28 p-1 bg-white rounded-full" src="${taskV.imagen1}" alt=""/>
      <input type="file" id="file3">
       
      </div>
      <input id="nombre" type="text" placeholder="nombre" class="block mb-2 bg-gray-100 p-2 rounded-lg border-2 border-indigo-500 shadow-md focus:outline-none focus:border-indigo-600" /> 
      <button onclick="perfil2()" data-modal-toggle="example2" data-modal-action="open" class="bg-purple-600 font-semibold text-white p-2 w-32 rounded-full hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2">Publicar</button>
      
  </div>
  
  `;
  
    });
  }
  
  function nuevapubli(){
   
  
  document.getElementById("miitem").innerHTML='<button data-modal-toggle="example2" onclick="publicar()" data-modal-action="open" class="bg-purple-600 font-semibold text-white p-2 w-32 rounded-full hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2" style="      margin-left: 163px;      align-items: margin;      width: 187px;      float: right;  ">publicar </button>'
  document.getElementById("content").innerHTML=""
  
  }
  
  function inicio(){
    myFunction1()
     document.getElementById("descripcion").innerHTML.value="";
    document.getElementById("progreso").innerHTML=""
    document.getElementById("hola").innerHTML=""
    document.getElementById("miitem").innerHTML=""
    document.getElementById("content").innerHTML=""
    document.getElementById("content").innerHTML+='<h1>Inicio</h1><div class="row" id="jarabeDiv"></div><h2 id="pastillas">Publicaciones</h2><hr><div class="row" id="pastillasDiv"></div><h2 style="color: rgb(226, 241, 255);" id="comprimidos">Capsulas</h2>      <hr><div class="row" id="comprimidosDiv"></div>      <h2 style="color: rgb(226, 241, 255);" id="polvos">Polvos</h2>      <hr>      <div class="row" id="polvosDiv"></div><h2 style="color: rgb(226, 241, 255);" id="polvos"></h2><hr class="featurette-divider"></hr>'
  render()
  }
  
  function mostrar(){
   
    document.getElementById("content").innerHTML=""
            document.getElementById('progreso').innerHTML = ' <progress id="progress_bar" value="0" max="100"></progress>';
            document.getElementById('hola').innerHTML = ' <img width="100px" height="100px" src="" alt="" id="image">';
          }
  
          
          document.getElementById('file').addEventListener('change', (event) => {
            nuevapubli()
            const file = event.target.files[0];
            const storageRef = firebase.storage().ref('images/' + file.name);
        
            storageRef.put(file).on('state_changed', (snapshot) => {
              mostrar()
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(progress);
        
                const progressBar = document.getElementById('progress_bar');
                progressBar.value = progress;
            });
            storageRef.put(file).on('state_changed', (snapshot) => {
            storageRef.getDownloadURL().then(function(url){
                
                const image = document.getElementById('image');
                console.log(url);
                image.src = url
                      a= url;
            });
          });
        });
  
  function publicar (){
    var precio = document.getElementById("precio").value;
    var descripcio = document.getElementById("descripcion").value;
    var d = new Date();
    var t = d.getTime();
    var counter= t;
   
    if(precio==""){
      categoria = "costo"
    }else{
      var categoria = "costo"
    }
  
  
    counter+=1;
    let persona = JSON.parse(localStorage.getItem("datos"));
    var pt=persona[0].telefono
    let db = firebase.database().ref("publicaciones/"+persona[0].telefono+"/"+counter);
    let itemdb= {
        
        id:counter,
        user:pt,
        imagen: a,
        categoria: categoria,
        precio, precio,
        descripcion: descripcio, 
        fecha: d,
        hora : t
    }
  alert("publicado con exito");
    db.set(itemdb);
  }
          
  function actualizar(){
    let persona = JSON.parse(localStorage.getItem("datos"));
    var task = firebase.database().ref("pagados/"+persona[0].telefono);
      
    task.on("child_added", function(data) {
        
      
        
      
      var taskV = data.val();
      
  
    var item={
     user:taskV,
     pagado:taskV.pagado
  
    }
    info.push(item);
    let storage = JSON.parse(localStorage.getItem("tokens"));
    if (storage==null) {
      products.push(item);
      localStorage.setItem("tokens",JSON.stringify(products));
    }
  });
  
  }
  
  function render(){
    HTMLjarabe();
    console.log("hola")
  
    cards()
    actualizar()
  }
  function cards(){
    var task = firebase.database().ref("imagen-perfil");
    task.on("child_added", function(data) {
          
      data.forEach(element => {
        
      
      var taskV = element.val();
  
     
        
  
        
  
        
        let URL = `${taskV.imagen}`;
        let btn = `btnjarabe${con}`;
        document.getElementById('sidebar').innerHTML += `
        <div class="card border w-96 hover:shadow-none relative flex flex-col mx-auto shadow-lg m-5">
        <img class="max-h-20 w-full opacity-80 absolute top-0" style="z-index:-1" src="${taskV.imagen1}}" alt="" />
        <div class="profile w-full flex m-3 ml-4 text-white">
          <img class="w-28 h-28 p-1 bg-white rounded-full" src="${taskV.imagen2}" alt=""/>
          <div class="title mt-11 ml-3 font-bold flex flex-col">
            <div class="name break-words">${taskV.nombre}}</div>
            <div class="add font-semibold text-sm italic dark">Designer</div>
          </div>
        </div>
        <div class="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
          <div class="add border rounded-l-2xl rounded-r-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">Contact</div>
           <div class="add border rounded-r-2xl rounded-l-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">Bio</div> -->
        </div>
      </div>
      `;
        
    });
  
  });
  }
  
  var imagenpagada=1;
  var persona = JSON.parse(localStorage.getItem("datos"));
  
  function pagados(con){
  
    var pagado = firebase.database().ref("pagados/");
      
      pagado.on("child_added", function(data) {
          
      data.forEach(element => {
          
        
  
      if(element.val().pagado==""){
    console.log("no pagado")
  
        return;
      }
      if(element.val().pagado=="pagado"){
    console.log("pagado")
  
        imagenpagada=1;
      }
  
      })
    })
  }
  
    function HTMLjarabe() {
  
      var counter = 0;
      var task = firebase.database().ref("publicaciones/");
      
      task.on("child_added", function(data) {
          
      data.forEach(element => {
          
        
      var taskV = element.val();
  
      con = counter += 1;
          
      pagados(con);
      if(taskV.categoria=="costo"){
   
  
        
        
        let URL = `${taskV.imagen}`;
                   let btn = `btnjarabe${con}`;
                   document.getElementById('jarabeDiv').innerHTML += `
            <div id="data${taskV.id}" class="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl "><div class="card"><div class="card mb-4 shadow-sm">
                   <img onclick="mostrar(','','','${URL}','${con}','${btn}')" class="card-img-top" style=" height:28rem; width:23rem;" src="${URL}"
             alt ="Card image cap">
              <div class="card-body" >
          
                  <div align="center">
            
                  </div>
          
                   <h5 align="center" class="card-title"</h5>
                  <h6   align="center" class="card-subtitle mb-2 text-muted">${taskV.descripcion} </h6>
                  <h5 style="display:block;>${taskV.descripcion}</h5>
                <span style="text-align: center;" align="center" class="inline-flex bg-pink-600 text-white rounded-full h-6 px-20 justify-center items-center"  onclick="pagar('${con}','${taskV.user}','${taskV.precio}')" href="pagar.html">${taskV.precio}</span>
            
                  </div>
                  </div>
                  <div class=" align-item-center">
                                <div class="btn-group">
                                                     </div>
      
                        </div> 
                   </div>
                    </div>`;
  
          } else{
            let URL = `${taskV.imagen}`;
            let btn = `btnjarabe${con}`;
            document.getElementById('jarabeDiv').innerHTML += `
          <div id="data${taskV.id}" class="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl "><div class="card"><div class="card mb-4 shadow-sm">
          <img onclick="mostrar(','','','${URL}','${con}','${btn}')" class="card-img-top" style=" height:28rem; width:23rem;" src="${URL}"
          alt ="Card image cap">
          <div class="card-body" >
        
           <div align="center">
          
           </div>
        
          <h5 align="center" class="card-title"</h5>
          <h6   align="center" class="card-subtitle mb-2 text-muted">${taskV.descripcion} </h6>
          <h5 style="display:block;>${taskV.descripcion}</h5>
          </div>
          </div>
          <div class=" align-item-center">
          <div class="btn-group">
          </div>
          </div> 
          </div>
          </div>`;
          }
          imagenpagada = 0 ;
      });
  
    });
  
  
  
    
      // task.on("child_changed", function(data) {
  
      //   data.forEach(element => {
          
        
      //     var taskV = element.val();
  
          
      //     if(taskV.categoria=="costo"){
          
  
      //     document.getElementById("data"+taskV.id).remove()
      //     let URL = `${taskV.imagen}`;
      //     let btn = `btnjarabe${con}`;
      //     document.getElementById('jarabeDiv').innerHTML += `
      //     <div id="data${taskV.id}" class="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl "><div class="card"><div class="card mb-4 shadow-sm">
      //            <img onclick="mostrar(','','','${URL}','${con}','${btn}')" class="card-img-top" style=" height:28rem; width:23rem;" src="${URL}"
      //      alt ="Card image cap">
      //       <div class="card-body" >
             
      //           <div align="center">
               
      //           </div>
             
      //            <h5 align="center" class="card-title"</h5>
      //           <h6   align="center" class="card-subtitle mb-2 text-muted">${taskV.descripcion} </h6>
      //           <h5 style="display:block;>${taskV.descripcion}</h5>
      //           </div>
      //           </div>
      //           <div class=" align-item-center">
      //                         <div class="btn-group">
      //                           </div>
         
      //                 </div> 
      //            </div>
      //             </div>`;
      //      }else{
      //       let URL = `${taskV.imagen}`;
      //       let btn = `btnjarabe${con}`;
      //       document.getElementById('jarabeDiv').innerHTML += `
      //     <div id="data${taskV.id}" class="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl "><div class="card"><div class="card mb-4 shadow-sm">
      //     <img onclick="mostrar(','','','${URL}','${con}','${btn}')" class="card-img-top" style=" height:28rem; width:23rem;" src="${URL}"
      //     alt ="Card image cap">
      //     <div class="card-body" >
        
      //      <div align="center">
          
      //      </div>
        
      //     <h5 align="center" class="card-title"</h5>
      //     <h6   align="center" class="card-subtitle mb-2 text-muted">${taskV.descripcion} </h6>
      //     <h5 style="display:block;>${taskV.descripcion}</h5>
      //     </div>
      //     </div>
      //     <div class=" align-item-center">
      //     <div class="btn-group">
      //     </div>
      //     </div> 
      //     </div>
      //     </div>`;
      //     }
      //     });
      
      // });
    
      var task = firebase.database().ref("publicaciones/");
      task.on("child_removed", function(data) {
          var taskV = data.val();
          document.getElementById("data"+taskV.id).remove()
  
      });
  
  //     var tokens = JSON.parse(localStorage.getItem('tokens'));
  //     var counter = 0;
  //     var task = firebase.database().ref("publicaciones/");
      
  //     task.on("child_added", function(data) {
        
  //       data.forEach(element => {
          
        
  //       var taskV = element.val();
  
          
          
  
  //         if(taskV.categoria=="costo"){
          
          
  //         let URL = `${taskV.imagen}`;
  //         let btn = `btnjarabe${con}`;
  //         document.getElementById('jarabeDiv').innerHTML += `
  //  <div id="data${taskV.id}" class="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl "><div class="card"><div class="card mb-4 shadow-sm">
  //         <img onclick="mostrar(','','','${URL}','${con}','${btn}')" class="card-img-top" style=" height:28rem; width:23rem;" src="https://media0.giphy.com/media/3eCMwCa0GYEFmvmI55/giphy.gif?cid=ecf05e47ytbnijtckifrqju4944tka75ms2sus4gem74y7dv&rid=giphy.gif&ct=g"
  //   alt ="Card image cap">
  //    <div class="card-body" >
      
  //        <div align="center">
        
  //        </div>
      
  //         <h5 align="center" class="card-title"</h5>
  //        <h6   align="center" class="card-subtitle mb-2 text-muted">${taskV.descripcion} </h6>
  //        <h5 style="display:block;>${taskV.descripcion}</h5>
  //        <span style="text-align: center;" align="center" class="inline-flex bg-pink-600 text-white rounded-full h-6 px-20 justify-center items-center"  onclick="pagar('${con}','${taskV.user}','${taskV.precio}')" href="pagar.html">${taskV.precio}</span>
  
  //        </div>
  //        </div>
  //        <div class=" align-item-center">
  //                      <div class="btn-group">
  //                                           </div>
  
  //              </div> 
  //         </div>
  //          </div>`;
           
    
  //       }
  //       con = counter += 1;
  //     });
  
  //   });
  //     task.on("child_changed", function(data) {
       
  //       data.forEach(element => {
          
        
  //         var taskV = element.val();
  
          
          
  //         if(taskV.categoria=="costo"){
          
          
  //           let URL = `${taskV.imagen}`;
  //           let btn = `btnjarabe${con}`;
  //           document.getElementById('jarabeDiv').innerHTML += `
  //    <div id="data${taskV.id}" class="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl "><div class="card"><div class="card mb-4 shadow-sm">
  //           <img onclick="mostrar(','','','${URL}','${con}','${btn}')" class="card-img-top" style=" height:28rem; width:23rem;" src="https://media0.giphy.com/media/3eCMwCa0GYEFmvmI55/giphy.gif?cid=ecf05e47ytbnijtckifrqju4944tka75ms2sus4gem74y7dv&rid=giphy.gif&ct=g"
  //     alt ="Card image cap">
  //      <div class="card-body" >
        
  //          <div align="center">
          
  //          </div>
        
  //           <h5 align="center" class="card-title"</h5>
  //          <h6   align="center" class="card-subtitle mb-2 text-muted">${taskV.descripcion} </h6>
  //          <h5 style="display:block;>${taskV.descripcion}</h5>
  //        <span style="text-align: center;" align="center" class="inline-flex bg-pink-600 text-white rounded-full h-6 px-20 justify-center items-center"  onclick="pagar('${con}','${taskV.user}','${taskV.precio}')" href="pagar.html">${taskV.precio}</span>
          
  //          </div>
  //          </div>
  //          <div class=" align-item-center">
  //                        <div class="btn-group">
  //                                             </div>
    
  //                </div> 
  //           </div>
  //            </div>`;
             
  //          if(tokens[0].user==taskV.user){
  //           document.getElementById("data"+taskV.id).remove()
  //             document.getElementById('jarabeDiv').innerHTML += `
  //             <div id="data${taskV.id}" class="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl "><div class="card"><div class="card mb-4 shadow-sm">
  //                    <img onclick="mostrar(','','','${URL}','${con}','${btn}')" class="card-img-top" style=" height:28rem; width:23rem;" src="${URL}"
  //              alt ="Card image cap">
  //               <div class="card-body" >
                 
  //                   <div align="center">
                   
  //                   </div>
                 
  //                    <h5 align="center" class="card-title"</h5>
  //                   <h6   align="center" class="card-subtitle mb-2 text-muted">${taskV.descripcion} </h6>
  //                   <h5 style="display:block;>${taskV.descripcion}</h5>
  //                   </div>
  //                   </div>
  //                   <div class=" align-item-center">
  //                                 <div class="btn-group">
  //                                                      </div>
             
  //                         </div> 
  //                    </div>
  //                     </div>`;
  //           }
  //         }
  //         con = counter += 1;
  //         });
      
  //     });
    
  //     var task = firebase.database().ref("publicaciones/");
  //     task.on("child_removed", function(data) {
  //         var taskV = data.val();
  //         document.getElementById("data"+taskV.id).remove()
  
  //     });
  
  
  
  
      
    }
  
  
  
  
  
  