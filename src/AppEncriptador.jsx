import logo from './logo.svg';
import { encriptar } from "./logic/encriptador.js";
import { desencriptar } from "./logic/encriptador.js";

import React, { useState } from 'react';

import LogoAlura from "./assets/Logo.png";

import { IoAlertCircle } from "react-icons/io5";


function AppEncriptador() {

  const [texto, setTexto] = useState("");

  const [textoEncriptado, settextoEncriptado] = useState("");
  const [error, setError] = useState("");

  const [textoCopiado, setTextoCopiado] = useState(" ");
  /* handleError(" "); */

  const handleEncriptar = () => {
    // obtener usuario
    /* texto = "hola mundo en mayuscula";
    console.log('texto es:>> ', texto); */
    /* let setTexto = toUpper(texto); */
    /* setTexto(toUpper(texto)); */
    /* const msjRecibido = toUpper.toUpper(texto); */

    /* varTextoUsuario = document.getElementById('varTexto').value; */

    /* const nuevoTexto = {texto};  */// Crea una nueva variable
    const nuevoTexto = document.getElementById('varTexto').value;
    console.log('nuevoTexto es:>> ', nuevoTexto);
    const msjRecibido = encriptar(nuevoTexto);
    console.log('encriptado es :>> ', msjRecibido);
    if (msjRecibido != null) {
      setTexto(msjRecibido); // Utiliza setTexto para actualizar el estado
    }

  }

  const handleDesencriptar = () => {
    const nuevoTexto = document.getElementById('varTexto').value;
    console.log('nuevoTexto es:>> ', nuevoTexto);
    const msjRecibido = desencriptar(nuevoTexto);
    console.log('desencriptado es :>> ', msjRecibido);
    if (msjRecibido != null) {
      setTexto(msjRecibido); // Utiliza setTexto para actualizar el estado
    }
  }

  const handleValidate = () => {

    /* console.log('validandoo letra = ', key); */

    document.getElementById('varTexto').addEventListener('keypress', function (event) { //identifica input, identifica tecla, activa evento
      const regex = /[a-zñ\s]/; // expresión regular, todas las letras minúsculas y "espacio"
      const key = String.fromCharCode(event.keyCode); // captura caracter presionado
      console.log('validando letra = ', key);

      if (!regex.test(key)) { // NO pertenece a letras minúsculas
        event.preventDefault(); // evita que se ingrese el caracter
        /* msjAdvertencia("Solo se permiten letras minúsculas sin caracteres especiales."); */
        console.log('advertenciaa1 :>> ');
        /* setError("Error"); */
        handleError("Solo se permiten letras minúsculas sin caracteres especiales.");
        console.log('ERROR es :>> ', error);
      } else {
        /* document.getElementById('msjAdvertencia').textContent = ""; */
        console.log('advertenciaa2 :>> ');
        /* setError("Hola"); */
        handleError(""); // error es null
      }
    });


    /* const regex = /[a-z\s]/;
    const key = String.fromCharCode(event.keyCode);


    console.log('validando letra = ', key);

    if (regex.test(key)) {
      setTexto(event.target.value);
    } else {
      console.log('Solo se permiten letras minúsculas y espacios.');
    } */

  }



  const handleError = (msj) => {
    setError(msj);
  }

  const handleCopiar = () => {

    console.log('TEXTO :>> ', texto);
    /* const parrafo = document.getElementById(texto); */
    /* console.log('parrafoooo :>> ', parrafo); */

    /* const contenidoParrafo = texto.textContent(); */
    /* const contenidoParrafo = parrafo.textContent(); */
    /* const contenidoParrafo = parrafo.value(); */
    navigator.clipboard.writeText(texto);

    alert("Texto copiado al portapapeles!");
  }


  return (
    <div /* className="App" */>
      <header /* className="App-header" */>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hola
        </a> */}

        {/* <div class="grid grid-flow-col justify-items-center items-center max-w-fit min-w-fit px-3 py-1 rounded-full   bg-gradient-to-r from-slate-700  to-slate-600   font-semibold text-slate-200 hover:bg-white hover:text-slate-100 hover:ring-slate-100  ring-1 ring-teal-100 shadow-lg hover:shadow-slate-300/25 shadow-teal-300/15 ">
          <div class="text-2xl">
            Hola soy un texto en TailwindCSS
          </div>
        </div> */}

        {/* <div class="bg-purple-400 p-2"> 
          <button onClick={handleEncriptar} class=" rounded-4xl bg-amber-500" >
            to upper
          </button>
        </div> */}

        {/* <div>
          {texto}
        </div> */}

      </header>


      <body>

        <div class=" p-4 bg-neutral-200 h-screen">



          <div class="flex justify-between h-full    g-slate-300">

            <div class="w-2/3 rounded-xl">

              {/* cambiar a grid, pero con... grid cols */}
              <div class="flex justify-center gap-4     g-red-200 h-full "> {/* <!-- grid auto-rows-auto --> */}

                <div class="flex justify-start w-auto pr-6 g-purple-400">

                  <div class="w-7 g-black">
                    <img class=" w-full g-red-400" src={LogoAlura} alt="Logo Alura"/>
                  </div>

                </div>

                {/* <!-- <div class="flex justify-center   bg-purple-300">
                    <div>
                        space
                    </div>
                </div> --> */}

                <div class="  grid grid-rows-5 gap-4 w-4/5 pb-4 g-slate-500">

                  <div class=" text-3xl">
                    <h1 class="g-red-400 font-semibold text-sky-900">
                      Encriptador de Texto
                    </h1>
                  </div>

                  <div class=" row-span-4 g-purple-400">
                    {/* <!-- <input  class=" h-ful bg-transparent " type="text" id="varTexto" placeholder="Ingrese texto aquí..." > --> */}

                    <form class="w-full  h-full g-red-500">
                      {/* <!-- <textarea  style="width:100%; border: none; outline: none; padding: 10px; font-size: 16px; color: #333; background-color: #f0f0f0; " class=" bg-transparent border-none p-0 m-0 font-sans focus:border-none focus:p-0 focus:m-0 focus:font-sans focus:border-amber-500 " id="varTexto" name="mensaje" placeholder="Ingrese texto aquí..."></textarea> --> */}
                      <textarea style={{ height: "100%", width: "100%", outline: "none", resize: "none" }} class=" bg-transparent text-sky-900 " id="varTexto" name="mensaje" placeholder="Ingrese texto aquí..." /* value={texto} */ onChange={handleValidate}></textarea>
                    </form>
                  </div>

                  {/* <!-- <div class=" bg-red-800"> -->

                    <!-- </div> --> */}



                  <div class="ow-span-2 flex flex-col gap-4  justify-center ">

                    <div class="flex sm:items-end  g-amber-400 h-10 ">
                      <div class="flex content-center items-center">
                        {error && <IoAlertCircle class="w-5 h-5" color="#cc0000" />}
                        <p class="text-xs pl-2 text-red-600 g-red-500 " id="msjAdvertencia" /* value={"error"} */>
                          {/* {error && <IoAlertCircle /> } */}
                          {error}
                        </p>
                      </div>
                      
                    </div>

                    <div class="grid grid-cols-2 gap-4 "> {/* flex flex-row justify-center gap-4 */}

                      <div class="flex justify-center g-yellow-300" >
                        <button class=" text-white bg-sky-900 w-full h-14 rounded-2xl ring-1 ring-sky-900 "
                          onClick={handleEncriptar}>
                          Encriptar
                        </button>
                      </div>

                      <div class="flex justify-center g-yellow-300" >
                        <button class=" text-sky-900 bg-white w-full h-14 rounded-2xl ring-1 ring-sky-900 "
                          onClick={handleDesencriptar}>
                          Desencriptar
                        </button>
                      </div>

                    </div>





                  </div>
                </div>


              </div>
            </div>



            <div class=" w-1/3 bg-white rounded-2xl ">
              {/* <div class="grid grid-rows-6  h-full py-6 gap-7 p-20 bg-red-700 rounded-md bg-transparent" style="background-color: blue;">  */}
              <div class="grid grid-rows-8  h-full py-6 px-5 gap-4  g-red-400 rounded-md bg-transparent"> {/* <!-- grid grid-rows-5    gap-4 p-20 m-4 --> */}

                {/* <!-- <div class="flex align-top row-span-5 h-full bg-lime-300">
                    <p id="varTexto3"> </p>
                </div> --> */}

                {/* style="background-color: aqua;" */}
                <div class=" row-span-7 g-lime-300 pb-4 "> {/* style="height: 100%; width:100%;  outline: none; resize: none;"  */}
                  <textarea id="TextareaRead" readonly style={{ height: "100%", width: "100%", outline: "none", resize: "none" }} class=" bg-transparent text-zinc-600" value={texto}></textarea>
                </div>

                <div class="row-span-1 flex justify-center items-center  px-6 g-red-700" >
                  <button class=" text-sky-900 bg-white w-full h-14 rounded-2xl ring-1 ring-sky-900 "
                    onClick={handleCopiar}>
                    Copiar
                  </button>
                </div>



              </div>



            </div>

          </div>


        </div>



        <script src="./logic/encriptador.js"> </script>
        <script src=""> </script>

      </body>


    </div>
  );
}




export default AppEncriptador;



