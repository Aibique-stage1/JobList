
// Funcion que nos trae los datos



let arrayDeIds=[];

let arrayDeClicks=[];
let arrayDeObjetos=[];
let arrayDeLonguitudLanguages=[];
let arrayDeLonguitudTools=[];

const variable1= new XMLHttpRequest();
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
/*Entonces:
  if(SI EXISTE UN ARRAY ANTERIORMENTE (objeto donde guardamos la posicion y la visibilidad){
    if si este es el ultimo{
      quiero que quites ese quites los hide // lo sacas del array
    }else if si se repite el elemento{
      agarrar las posiciones de valor 1 del elemento anterior
      y colocarle no hide
      saca el elemento del array
    }else es un elemento nuevo{
      agarre la posicion del elemento anterior con valor 1
      compare ahi si son iguales  poner 1, no lo son 0
      crear ese elemento con id:1||0
      meterlo en el array.
    }
  }else{
    compara uno a uno y si no son iguales los vas a esconder
    a la vez  vas a indicar la posicion id y  si son iguales 1
    EX:Fronted{id1:1,id2:0,id3:1,idn:0 ||1 }
    Este objeto lo metes en el ARRAY
  }*/
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/







function elEventoRole(id,name){
    let labelrole=document.getElementById(`label${id}role`).innerText;

//Si Array de Objetos no esta vacio
    if(arrayDeClicks!=0){
      let elementoNombre=arrayDeClicks[0].nombre
      if(arrayDeClicks.length==1 && elementoNombre===labelrole){
        for(let u=1;u<=arrayDeIds.length;u++){
          let jobContainer=document.getElementById(`job${u}`);
          let labelEachJob=document.getElementById(`label${u}role`).innerText;
    //Pero si son iguales no haga nada
          if(labelrole===labelEachJob){
    //Pero si son diferentes quita la clase hide
          }else{
            jobContainer.classList.remove('hide')
          }
        }
      arrayDeClicks.pop(name)

      let superContainer=document.getElementById('labels-container')
      let theBody=document.getElementById('the-body')

      superContainer.classList.remove('extra-container')
      superContainer.innerHTML=``;
      theBody.classList.remove('the-changed')

    }else if(arrayDeClicks[arrayDeClicks.length-1].nombre===labelrole){
      let ultimoElemento=arrayDeClicks.length-2;
  
      for(let u=1;u<=arrayDeIds.length;u++){
        let jobContainer=document.getElementById(`job${u}`);
        let labelEachJob=document.getElementById(`label${u}role`).innerText;
  
        //aqui hacer un for con todos los objetos
        if(arrayDeClicks[ultimoElemento].ids.includes(`${u}`)){
        //si uno de esos id se encuentra en este ultimo array
        if(labelEachJob===labelrole){
          //Si este se encuentra, compara con el level en esa posicion, no hacer nada
        }else{
          jobContainer.classList.remove('hide')
        }
      }
    }
    let superContainer=document.getElementsByClassName('parrafo')[arrayDeClicks.length-1]
    superContainer.remove()
    arrayDeClicks.pop(name)


    // superContainer.innerHTML-=`
    // <p><span class="jam jam-plus-circle"></span><span class="el-label">${labelrole}</span></p>
    // `;
    }
  
    else {
      let existeEnArray = arrayDeClicks.find(element=> element.nombre === labelrole)
      //COMPROBAR QUE NO ESTE EN EL ARRAY CON FIND SI NO LA FUNCION DE ABAJO
      if(existeEnArray){
        console.log('Ya me diste click antes mani')
      }else{

        console.log('mi nombre no es igual al nombre del ultimo elemento')
        let ultimoElemento=arrayDeClicks.length-1;
        console.log(arrayDeClicks[ultimoElemento].ids)
    
        name.ids=[];
        for(let u=1;u<=arrayDeIds.length;u++){
          let jobContainer=document.getElementById(`job${u}`);
          let labelEachJob=document.getElementById(`label${u}role`).innerText;
          //aqui hacer un for con todos los objetos
          if(arrayDeClicks[ultimoElemento].ids.includes(`${u}`)){
          //si uno de esos id se encuentra en este ultimo array
          if(labelEachJob===labelrole){
            //Si este se encuentra, compara con el level en esa posicion, no hacer nada
            name.ids.push(`${u}`)
            name.nombre=`${labelrole}`
          }else{
            jobContainer.classList.add('hide')
          }
          //No se encuentra ignorar
        }
      }
      arrayDeClicks.push(name);
      let superContainer=document.getElementById('labels-container')

      superContainer.innerHTML+=`
      <p class="parrafo"><span class="jam jam-plus-circle"></span><span class="el-label">${labelrole}</span></p>
      `;
      
      }
    }


//Si Array de Objetos esta vacio
    }else{
//Vas a comprobar cada container del DOM
    name.ids=[];
    for(let u=1;u<=arrayDeIds.length;u++){
      let jobContainer=document.getElementById(`job${u}`);
      let labelEachJob=document.getElementById(`label${u}role`).innerText;
//Pero si son iguales quiero que crear un elemento/objeto con posicion y si es noHide
      if(labelrole===labelEachJob){
        name.ids.push(`${u}`)
        name.nombre=`${labelrole}`
//Pero si son diferentes aniade la clase hide a esos elementos
      }else{
        jobContainer.classList.add('hide')
      }
    }
//Por ultimo mete ese objeto en el Array con la posicion de los nohide
    arrayDeClicks.push(name);


    let superContainer=document.getElementById('labels-container')
    let theBody=document.getElementById('the-body')

    theBody.classList.add('the-changed')
    superContainer.innerHTML=`
    <p class="parrafo"><span class="jam jam-plus-circle"></span><span>${labelrole}</span></p> <a href="./index.html">clear</a>
    `;
    superContainer.classList.add('extra-container')
    }

}






/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/






function elEventoLevel(id,name){
    let labelLevel=document.getElementById(`label${id}level`).innerText;

//Si Array de Objetos no esta vacio
if(arrayDeClicks!=0){
  let elementoNombre=arrayDeClicks[0].nombre
  if(arrayDeClicks.length==1 && elementoNombre===labelLevel){
    for(let u=1;u<=arrayDeIds.length;u++){
      let jobContainer=document.getElementById(`job${u}`);
      let labelEachJob=document.getElementById(`label${u}level`).innerText;
//Pero si son iguales no haga nada
      if(labelLevel===labelEachJob){
//Pero si son diferentes quita la clase hide
      }else{
        jobContainer.classList.remove('hide')
      }
    }
  arrayDeClicks.pop(name)

  let superContainer=document.getElementById('labels-container')
  let theBody=document.getElementById('the-body')

  superContainer.classList.remove('extra-container')
  superContainer.innerHTML=``;
  theBody.classList.remove('the-changed')
  


}else if(arrayDeClicks[arrayDeClicks.length-1].nombre===labelLevel){
  let ultimoElemento=arrayDeClicks.length-2;

  for(let u=1;u<=arrayDeIds.length;u++){
    let jobContainer=document.getElementById(`job${u}`);
    let labelEachJob=document.getElementById(`label${u}level`).innerText;

    //aqui hacer un for con todos los objetos
    if(arrayDeClicks[ultimoElemento].ids.includes(`${u}`)){
    //si uno de esos id se encuentra en este ultimo array
    if(labelEachJob===labelLevel){
      //Si este se encuentra, compara con el level en esa posicion, no hacer nada
    }else{
      jobContainer.classList.remove('hide')
    }
  }
}
let superContainer=document.getElementsByClassName('parrafo')[arrayDeClicks.length-1]
superContainer.remove()
arrayDeClicks.pop(name)
}

else {
  let existeEnArray = arrayDeClicks.find(element=> element.nombre === labelLevel)
  //COMPROBAR QUE NO ESTE EN EL ARRAY CON FIND SI NO LA FUNCION DE ABAJO
  if(existeEnArray){
    console.log('Ya me diste click antes mani')
  }else{

    console.log('mi nombre no es igual al nombre del ultimo elemento')
    let ultimoElemento=arrayDeClicks.length-1;
    console.log(arrayDeClicks[ultimoElemento].ids)

    name.ids=[];
    for(let u=1;u<=arrayDeIds.length;u++){
      let jobContainer=document.getElementById(`job${u}`);
      let labelEachJob=document.getElementById(`label${u}level`).innerText;
      //aqui hacer un for con todos los objetos
      if(arrayDeClicks[ultimoElemento].ids.includes(`${u}`)){
      //si uno de esos id se encuentra en este ultimo array
      if(labelEachJob===labelLevel){
        //Si este se encuentra, compara con el level en esa posicion, no hacer nada
        name.ids.push(`${u}`)
        name.nombre=`${labelLevel}`
      }else{
        jobContainer.classList.add('hide')
      }
      //No se encuentra ignorar
    }
  }
  arrayDeClicks.push(name);
  let superContainer=document.getElementById('labels-container')

  superContainer.innerHTML+=`
  <p class="parrafo"><span class="jam jam-plus-circle"></span><span class="el-label">${labelLevel}</span></p>
  `;
  }
}



//Si Array de Objetos esta vacio
}else{
//Vas a comprobar cada container del DOM
name.ids=[];
for(let u=1;u<=arrayDeIds.length;u++){
  let jobContainer=document.getElementById(`job${u}`);
  let labelEachJob=document.getElementById(`label${u}level`).innerText;
//Pero si son iguales quiero que crear un elemento/objeto con posicion y si es noHide
  if(labelLevel===labelEachJob){
    name.ids.push(`${u}`)
    name.nombre=`${labelLevel}`
//Pero si son diferentes aniade la clase hide a esos elementos
  }else{
    jobContainer.classList.add('hide')
  }
}
//Por ultimo mete ese objeto en el Array con la posicion de los nohide
arrayDeClicks.push(name);
let superContainer=document.getElementById('labels-container')
let theBody=document.getElementById('the-body')

theBody.classList.add('the-changed')
superContainer.innerHTML=`
<p class="parrafo"><span class="jam jam-plus-circle"></span><span class="el-label">${labelLevel}</span></p> <a href="./index.html">clear</a>
`;
superContainer.classList.add('extra-container')
}
}






/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
/*Entonces:
  if(SI EXISTE UN ARRAY ANTERIORMENTE (objeto donde guardamos la posicion y la visibilidad){
    if si este es el ultimo{
      quiero que quites ese quites los hide // lo sacas del array
    }else if si se repite el elemento{
      agarrar las posiciones de valor 1 del elemento anterior
      y colocarle no hide
      saca el elemento del array
    }else es un elemento nuevo{
      agarre la posicion del elemento anterior con valor 1
      compare ahi si son iguales  poner 1, no lo son 0
      crear ese elemento con id:1||0
      meterlo en el array.
    }
  }else{
    compara uno a uno y si no son iguales los vas a esconder
    a la vez  vas a indicar la posicion id y  si son iguales 1
    EX:Fronted{id1:1,id2:0,id3:1,idn:0 ||1 }
    Este objeto lo metes en el ARRAY
  }*/
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/






function elEventoLang(id,i,name){
    let labelLang=document.getElementById(`label${id}${i}lang`).innerText;
    // console.log(id)
    // console.log(i)
    // console.log(name)

    //Si Array de Objetos no esta vacio
if(arrayDeClicks!=0){
  let elementoNombre=arrayDeClicks[0].nombre
  if(arrayDeClicks.length==1 && elementoNombre===labelLang){
//Vas a comprobar cada container del DOM
for(let u=1;u<=arrayDeIds.length;u++){
  let jobContainer=document.getElementById(`job${u}`);
  const longitud=arrayDeLonguitudLanguages[u-1].length

  if(longitud===0){
    jobContainer.classList.remove('hide')
  }else{
    for(let v=0;v<longitud;v++){
      let labelEachJob=document.getElementById(`label${u}${v}lang`).innerText;
      //Pero si son iguales quiero que crear un elemento/objeto con posicion y si es noHide
        if(labelLang===labelEachJob){
          break
      //Pero si son diferentes aniade la clase hide a esos elementos
        }else{
          jobContainer.classList.remove('hide')
        }
    }
  }
}
//Por ultimo mete ese objeto en el Array con la posicion de los nohide
arrayDeClicks.pop(name);
  
let superContainer=document.getElementById('labels-container')
let theBody=document.getElementById('the-body')

superContainer.classList.remove('extra-container')
superContainer.innerHTML=``;
theBody.classList.remove('the-changed')

}

  else if(arrayDeClicks[arrayDeClicks.length-1].nombre===labelLang){
    let ultimoElemento=arrayDeClicks.length-2;
    // agarrar los ids en los que el anterior objeto existe
    //hacer que todos los conteiners restantes sean hide

    for(let u=1;u<=arrayDeIds.length;u++){
      let jobContainer=document.getElementById(`job${u}`);
      //aqui hacer un for con todos los objetos
      if(arrayDeClicks[ultimoElemento].ids.includes(`${u}`)){
        jobContainer.classList.remove('hide')
    }else{
      jobContainer.classList.add('hide')
    }
  }
  let superContainer=document.getElementsByClassName('parrafo')[arrayDeClicks.length-1]
  superContainer.remove()
  arrayDeClicks.pop(name)
  }

  else{
    let existeEnArray = arrayDeClicks.find(element=> element.nombre === labelLang)
    if(existeEnArray){
      console.log('me diste click otra vez mani')
    }else{
      console.log('mi nombre no es igual al nombre del ultimo elemento y mi nombre no existe en array')
      //agarres los ids del anterior objeto ++
      //haces un for de ese array           
      //los que concidan haces comparacion //id otro ciclo de etiqutas
      //si no coinciden hide
      let ultimoElemento=arrayDeClicks.length-1;

      name.ids=[];
      for(let u=1;u<=arrayDeIds.length;u++){
        let jobContainer=document.getElementById(`job${u}`);
        //aqui hacer un for con todos los objetos
        if(arrayDeClicks[ultimoElemento].ids.includes(`${u}`)){
        //si uno de esos id se encuentra en este ultimo array

        const longitud=arrayDeLonguitudLanguages[u-1].length
        if(longitud===0){
          jobContainer.classList.add('hide')
        }else{
          for(v=0;v<longitud;v++){
            let labelEachJob=document.getElementById(`label${u}${v}lang`).innerText;
            if(labelEachJob===labelLang){
              //Si este se encuentra, compara con el level en esa posicion, no hacer nada
              name.ids.push(`${u}`)
              name.nombre=`${labelLang}`
              jobContainer.classList.remove('hide')
              break
            }else{
              jobContainer.classList.add('hide')
            }
            //No se encuentra ignorar
          }
        }
      }
    }
    arrayDeClicks.push(name);
    let superContainer=document.getElementById('labels-container')

    superContainer.innerHTML+=`
    <p class="parrafo"><span class="jam jam-plus-circle"></span><span class="el-label">${labelLang}</span></p>
    `;
    }
  }



//Si Array de Objetos esta vacio
}else{
//Vas a comprobar cada container del DOM
name.ids=[];
for(let u=1;u<=arrayDeIds.length;u++){
  let jobContainer=document.getElementById(`job${u}`);
  const longitud=arrayDeLonguitudLanguages[u-1].length

if(longitud===0){
  jobContainer.classList.add('hide')
}else{
  for(let v=0;v<longitud;v++){
    let labelEachJob=document.getElementById(`label${u}${v}lang`).innerText;
    //Pero si son iguales quiero que crear un elemento/objeto con posicion y si es noHide
      if(labelLang===labelEachJob){
        name.ids.push(`${u}`)
        name.nombre=`${labelLang}`
        jobContainer.classList.remove('hide')
        break
    //Pero si son diferentes aniade la clase hide a esos elementos
      }else{
        jobContainer.classList.add('hide')
      }
  }
}
}
//Por ultimo mete ese objeto en el Array con la posicion de los nohide
arrayDeClicks.push(name);
let superContainer=document.getElementById('labels-container')
let theBody=document.getElementById('the-body')

theBody.classList.add('the-changed')
superContainer.innerHTML=`
<p class="parrafo"><span class="jam jam-plus-circle"></span><span class="el-label">${labelLang}</span></p> <a href="./index.html">clear</a>
`;
superContainer.classList.add('extra-container')
}
}






/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/






function elEventoTool(id,i,name){
    let labelTool=document.getElementById(`label${id}${i}tool`).innerText;
    // console.log(labelTool)
    //Si Array de Objetos no esta vacio

if(arrayDeClicks!=0){
  let elementoNombre=arrayDeClicks[0].nombre
  if(arrayDeClicks.length==1 && elementoNombre===labelTool){
//Vas a comprobar cada container del DOM
for(let u=1;u<=arrayDeIds.length;u++){
  let jobContainer=document.getElementById(`job${u}`);
  const longitud=arrayDeLonguitudTools[u-1].length

  if(longitud===0){
    jobContainer.classList.remove('hide')
  }else{
    for(let v=0;v<longitud;v++){
      let labelEachJob=document.getElementById(`label${u}${v}tool`).innerText;
      //Pero si son iguales quiero que crear un elemento/objeto con posicion y si es noHide
        if(labelTool===labelEachJob){
          break
      //Pero si son diferentes aniade la clase hide a esos elementos
        }else{
          jobContainer.classList.remove('hide')
        }
    }
  }
}
//Por ultimo mete ese objeto en el Array con la posicion de los nohide
arrayDeClicks.pop(name);
  
let superContainer=document.getElementById('labels-container')
let theBody=document.getElementById('the-body')

superContainer.classList.remove('extra-container')
superContainer.innerHTML=``;
theBody.classList.remove('the-changed')

}

  else if(arrayDeClicks[arrayDeClicks.length-1].nombre===labelTool){
    let ultimoElemento=arrayDeClicks.length-2;
    // agarrar los ids en los que el anterior objeto existe
    //hacer que todos los conteiners restantes sean hide

    for(let u=1;u<=arrayDeIds.length;u++){
      let jobContainer=document.getElementById(`job${u}`);
      //aqui hacer un for con todos los objetos
      if(arrayDeClicks[ultimoElemento].ids.includes(`${u}`)){
        jobContainer.classList.remove('hide')
    }else{
      jobContainer.classList.add('hide')
    }
  }
  let superContainer=document.getElementsByClassName('parrafo')[arrayDeClicks.length-1]
  superContainer.remove()
  arrayDeClicks.pop(name)
  }

  else{
    let existeEnArray = arrayDeClicks.find(element=> element.nombre === labelTool)
    if(existeEnArray){
      console.log('me diste click otra vez mani')
    }else{
      console.log('mi nombre no es igual al nombre del ultimo elemento y mi nombre no existe en array')
      //agarres los ids del anterior objeto ++
      //haces un for de ese array           
      //los que concidan haces comparacion //id otro ciclo de etiqutas
      //si no coinciden hide
      let ultimoElemento=arrayDeClicks.length-1;

      name.ids=[];
      for(let u=1;u<=arrayDeIds.length;u++){
        let jobContainer=document.getElementById(`job${u}`);
        //aqui hacer un for con todos los objetos
        if(arrayDeClicks[ultimoElemento].ids.includes(`${u}`)){
        //si uno de esos id se encuentra en este ultimo array
        const longitud=arrayDeLonguitudTools[u-1].length

        if(longitud===0){
          jobContainer.classList.add('hide')
        }else{
          for(v=0;v<longitud;v++){
            let labelEachJob=document.getElementById(`label${u}${v}tool`).innerText;
            if(labelEachJob===labelTool){
              //Si este se encuentra, compara con el level en esa posicion, no hacer nada
              name.ids.push(`${u}`)
              name.nombre=`${labelTool}`
              jobContainer.classList.remove('hide')
              break
            }else{
              jobContainer.classList.add('hide')
            }
            //No se encuentra ignorar
          }
        }
      }
    }
    arrayDeClicks.push(name);
    let superContainer=document.getElementById('labels-container')

    superContainer.innerHTML+=`
    <p class="parrafo"><span class="jam jam-plus-circle"></span><span class="el-label">${labelTool}</span></p>
    `;
    }
  }



//Si Array de Objetos esta vacio
}else{
//Vas a comprobar cada container del DOM
name.ids=[];
console.log(arrayDeLonguitudTools)
// debugger
for(let u=1;u<=arrayDeIds.length;u++){
  let jobContainer=document.getElementById(`job${u}`);
  const longitud=arrayDeLonguitudTools[u-1].length

  if(longitud===0){
    jobContainer.classList.add('hide')
  }else{
    for(let v=0;v<longitud;v++){
      let labelEachJob=document.getElementById(`label${u}${v}tool`).innerText;
      //Pero si son iguales quiero que crear un elemento/objeto con posicion y si es noHide
      if(labelTool===labelEachJob){
        name.ids.push(`${u}`)
        name.nombre=`${labelTool}`
        jobContainer.classList.remove('hide')
        break
    //Pero si son diferentes aniade la clase hide a esos elementos
      }else{
          jobContainer.classList.add('hide')
        }
    }

  }
}
//Por ultimo mete ese objeto en el Array con la posicion de los nohide
arrayDeClicks.push(name);
let superContainer=document.getElementById('labels-container')
let theBody=document.getElementById('the-body')

theBody.classList.add('the-changed')
superContainer.innerHTML=`
<p class="parrafo"><span class="jam jam-plus-circle"></span><span class="el-label">${labelTool}</span></p> <a href="./index.html">clear</a>
`;
superContainer.classList.add('extra-container')
}
}






// Aqui empieza el template:
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
variable1.open('GET','../jason/data.json',true);
variable1.send();
variable1.onreadystatechange = function (){

/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
    if(this.readyState==4 && this.status==200){
        // console.log(this.responseText)
        let datos =JSON.parse(this.responseText);
        let res = document.querySelector('#main-container')
        res.innerHTML="";

/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
          for (let dato of datos) {
          // switch: new&&featured, new and normal
            /*I structure the job-container{
              job-header
              job-main
            }*/
            arrayDeIds.push(dato.id);
            let losDatos=new Object;
            losDatos.length=dato.languages.length
            arrayDeLonguitudLanguages.push(losDatos)
            let otrosDatos=new Object;
            otrosDatos.length=dato.tools.length
            arrayDeLonguitudTools.push(otrosDatos)


/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
            if(dato.featured==true && dato.new==true){
              // console.log('soy featured')
              res.innerHTML+=`
              <div id="job${dato.id}" class="job-container feature" >
              <div class="job-header">
                <figure class="logo-company a1"><img src="${dato.logo}"></img></figure> 
                <p><span class="name-company">${dato.company}</span><span class="label-new">new!</span><span class="label-featured">featured</span></p>
                <p>${dato.position}</p>
                <p><span class="when">${dato.postedAt}</span><span class="what">${dato.contract}</span><span class="where">${dato.location}</span></p>
              </div>
              <div class="job-main">
              <p id="job-main-container${dato.id}"></p>
              </div>
              </div>
              `

/*Here I put inside the job-main-container: role and level*/
              // Lets put role and level, now add each one an even listener.
              let languages=document.querySelector(`#job-main-container${dato.id}`);
              languages.innerHTML=`
              <span id="label${dato.id}role" class="role" onclick="elEventoRole(${dato.id},${dato.role}=new Object)">${dato.role}</span><span id="label${dato.id}level" onclick="elEventoLevel(${dato.id},${dato.level}=new Object)" class="level">${dato.level}</span>
              `;

/*Here I put inside the job-main-container: Languages one by one*/
              // if there are languages ==>
              const languagesArray=dato.languages;
              for (let i= 0; i < languagesArray.length; i++) {
                languages.innerHTML+=`
                <span id="label${dato.id}${i}lang" onclick="elEventoLang(${dato.id},${i},${dato.languages[i]}=new Object)" class="languages">${languagesArray[i]}</span>
                `
              }

/*Here I put inside the job-main-container: Tools one by one*/
              // if there are tools ==>
              const toolsArray=dato.tools;
              for (let i= 0; i < toolsArray.length; i++) {
                languages.innerHTML+=`
                <span id="label${dato.id}${i}tool" onclick="elEventoTool(${dato.id},${i},${dato.tools[i]}=new Object)" class="tools">${toolsArray[i]}</span>
                `
              }





            }else if(dato.new==true){
              // console.log('soy new')
              res.innerHTML+=`
              <div id="job${dato.id}" class="job-container" >
              <div class="job-header">
                <figure class="logo-company a1"><img src="${dato.logo}"></img></figure> 
                <p><span class="name-company">${dato.company}</span><span class="label-new">new!</span></p>
                <p>${dato.position}</p>
                <p><span class="when">${dato.postedAt}</span><span class="what">${dato.contract}</span><span class="where">${dato.location}</span></p>
              </div>
              <div class="job-main">
              <p id="job-main-container${dato.id}"></p>
              </div>
              </div>
              `

/*Here I put inside the job-main-container: role and level*/
              // if there are languages ==>
              let languages=document.querySelector(`#job-main-container${dato.id}`);
              languages.innerHTML=`
              <span id="label${dato.id}role" class="role" onclick="elEventoRole(${dato.id},${dato.role}=new Object)">${dato.role}</span><span id="label${dato.id}level" onclick="elEventoLevel(${dato.id},${dato.level}=new Object)" class="level">${dato.level}</span>
              `;

/*Here I put inside the job-main-container: Languages one by one*/
              const languagesArray=dato.languages;
              for (let i= 0; i < languagesArray.length; i++) {
                languages.innerHTML+=`
                <span id="label${dato.id}${i}lang" onclick="elEventoLang(${dato.id},${i},${dato.languages[i]}=new Object)" class="languages">${languagesArray[i]}</span>
                `
              }

/*Here I put inside the job-main-container: Tools one by one*/
              // if there are tools ==>
              const toolsArray=dato.tools;
              for (let i= 0; i < toolsArray.length; i++) {
                languages.innerHTML+=`
                <span id="label${dato.id}${i}tool" onclick="elEventoTool(${dato.id},${i},${dato.tools[i]}=new Object)" class="tools">${toolsArray[i]}</span>
                `
              }





            }else{
              // console.log('no soy new y featured')
              res.innerHTML+=`
              <div id="job${dato.id}" class="job-container" >
              <div class="job-header">
                <figure class="logo-company a1"><img src="${dato.logo}"></img></figure> 
                <p><span class="name-company">${dato.company}</span>
                <p>${dato.position}</p>
                <p><span class="when">${dato.postedAt}</span><span class="what">${dato.contract}</span><span class="where">${dato.location}</span></p>
              </div>
              <div class="job-main">
              <p id="job-main-container${dato.id}"></p>
              </div>
              </div>
              `

/*Here I put inside the job-main-container: role and level*/
              // if there are languages ==>
              let languages=document.querySelector(`#job-main-container${dato.id}`);
              languages.innerHTML=`
              <span id="label${dato.id}role" class="role" onclick="elEventoRole(${dato.id},${dato.role}=new Object)">${dato.role}</span><span id="label${dato.id}level" onclick="elEventoLevel(${dato.id},${dato.level}=new Object)" class="level">${dato.level}</span>
              `;

/*Here I put inside the job-main-container: Languages one by one*/
              const languagesArray=dato.languages;
              for (let i= 0; i < languagesArray.length; i++) {
                languages.innerHTML+=`
                <span id="label${dato.id}${i}lang" onclick="elEventoLang(${dato.id},${i},${dato.languages[i]}=new Object)" class="languages">${languagesArray[i]}</span>
                `
              }

/*Here I put inside the job-main-container: Tools one by one*/
              // if there are tools ==>
              const toolsArray=dato.tools;
              for (let i= 0; i < toolsArray.length; i++) {
                languages.innerHTML+=`
                <span id="label${dato.id}${i}tool" onclick="elEventoTool(${dato.id},${i},${dato.tools[i]}=new Object)" class="tools">${toolsArray[i]}</span>
                `





              //3 Tools for is Done
              }
            //3 If is Done
            }
          // the For is Done, now all is perfect as it should, now add event listeners to each button.
          }
    //If is Done
    }
//Function is Done
}







// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&







/*Entonces:
  if(SI EXISTE UN ARRAY ANTERIORMENTE (objeto donde guardamos la posicion y la visibilidad){
    if si este es el ultimo{
      quiero que quites ese quites los hide // lo sacas del array
    }else if si se repite el elemento{
      agarrar las posiciones de valor 1 del elemento anterior
      y colocarle no hide
      saca el elemento del array
    }else es un elemento nuevo{
      agarre la posicion del elemento anterior con valor 1
      compare ahi si son iguales  poner 1, no lo son 0
      crear ese elemento con id:1||0
      meterlo en el array.
    }
  }else{
    compara uno a uno y si no son iguales los vas a esconder
    a la vez  vas a indicar la posicion id y  si son iguales 1
    EX:Fronted{id1:1,id2:0,id3:1,idn:0 ||1 }
    Este objeto lo metes en el ARRAY
  }*/
  