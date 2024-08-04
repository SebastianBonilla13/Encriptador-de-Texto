import logo from './logo.svg';
import { encriptar } from "./logic/encriptador.js";
import { desencriptar } from "./logic/encriptador.js";

import React, { useState } from 'react';

import LogoAlura from "./assets/Logo.png";

import { IoAlertCircle } from "react-icons/io5";


function AppEncriptador() {

  const [texto, setTexto] = useState("");
  const [error, setError] = useState("");


  const handleEncriptar = () => {
    // obtener usuario
    const nuevoTexto = document.getElementById('varTexto').value;
    console.log('nuevoTexto es:>> ', nuevoTexto);
    const msjRecibido = encriptar(nuevoTexto);
    console.log('encriptado es :>> ', msjRecibido);
    if (msjRecibido != null) {
      setTexto(msjRecibido); // setTexto para actualizar el estado
    }
  }

  const handleDesencriptar = () => {
    // obtener usuario
    const nuevoTexto = document.getElementById('varTexto').value;
    console.log('nuevoTexto es:>> ', nuevoTexto);
    const msjRecibido = desencriptar(nuevoTexto);
    console.log('desencriptado es :>> ', msjRecibido);
    if (msjRecibido != null) {
      setTexto(msjRecibido); // setTexto para actualizar el estado
    }
  }

  const handleValidate = () => {
    //identifica input, identifica tecla, activa evento
    document.getElementById('varTexto').addEventListener('keypress', function (event) { 
      const regex = /[a-zñ\s]/; // expresión regular, todas las letras minúsculas y "espacio"
      const key = String.fromCharCode(event.keyCode); // captura caracter presionado
      console.log('validando letra = ', key);

      if (!regex.test(key)) { // NO pertenece a letras minúsculas
        event.preventDefault(); // evita que se ingrese el caracter
        handleError("Solo se permiten letras minúsculas sin caracteres especiales.");
      } else {
        handleError(""); // error es null
      }
    });
  }

  const handleError = (msjError) => {
    setError(msjError);
  }

  const handleCopiar = () => {
    console.log('TEXTO :>> ', texto);
    navigator.clipboard.writeText(texto);
    alert("Texto copiado al portapapeles!");
  }


  return (
    <div>
      <header>

      </header>

      <body>

        <div class=" p-4 bg-neutral-200 h-screen">

          {/*  */}
          <div class=" grid grid-cols-3 gap-4 h-full w-full    g-neutral-700"> {/* flex justify-between */}

            {/* Screen Izq. */}
            <div class="col-span-2 bg-neutral-500"> {/* w-2/3  */}

              {/* LOGO + TEXTO container */}
              <div class="grid grid-cols-8 gap-3 bg-red-200 h-full "> {/* <!-- grid auto-rows-auto --> */} {/* flex justify-center */}

                {/* LOGO container */}
                <div class="col-span-1 flex justify-center bg-purple-400">
                  <div class="bg-neutral-200">
                    <img class="w-10 g-red-400" src={LogoAlura} alt="Logo Alura" />
                  </div>
                </div>

                {/* Der. container */}
                <div class=" col-span-7 grid grid-rows-8 gap-4 pb-4 bg-slate-800">

                  {/* TITULO container */}
                  <div class="row-span-1 text-2xl md:text-3xl bg-red-400">
                    <h1 class="font-semibold text-sky-900">
                      Encriptador de Texto
                    </h1>
                  </div>

                  {/* TEXTO container */}
                  <div class=" row-span-5 bg-purple-400">
                    <form class="w-full  h-full bg-red-500">
                      <textarea class="h-full w-full outline-none resize-none bg-transparent text-sky-900" id="varTexto" placeholder="Ingrese texto aquí..." onChange={handleValidate}></textarea>
                    </form>
                  </div>

                  <div class="row-span-2 grid grid-rows-2 bg-green-300  "> {/* flex flex-col justify-center */}

                    {/* ADVERTENCIA container */}
                    <div class="flex sm:items-end  bg-amber-400 h-10 ">
                      <div class="flex content-center items-center">
                        {error && <IoAlertCircle class="w-5 h-5" color="#cc0000" />}
                        <p class="text-xs pl-2 text-red-600 g-red-500 " id="msjAdvertencia">
                          {error}
                        </p>
                      </div>

                    </div>

                    {/* BOTONES container */}
                    <div class="grid grid-cols-2 gap-4 px-1 g-red-400 "> {/* flex flex-row justify-center gap-4 */}

                      <button class=" text-white bg-sky-900 w-full h-14 rounded-2xl ring-1 ring-sky-900 "
                        onClick={handleEncriptar}>
                        Encriptar
                      </button>

                      <button class=" text-sky-900 bg-white w-full h-14 rounded-2xl ring-1 ring-sky-900 "
                        onClick={handleDesencriptar}>
                        Desencriptar
                      </button>

                    </div>

                  </div>
                </div>


              </div>
            </div>

            {/* Screen Der. */}
            <div class="col-span-1 rounded-2xl bg-white "> {/* w-1/3 */}
              
              <div class="grid grid-rows-8 h-full py-4 px-5 gap-4">

                <div class=" row-span-7 bg-lime-300">
                  <form class="w-full h-full">
                    <textarea class="h-full w-full outline-none resize-none bg-transparent text-zinc-600" id="TextareaRead" value={texto} /* placeholder="Ingrese texto aquí..." onChange={handleValidate} */></textarea>
                  </form>
                </div>

                {/* <div class="row-span-1 flex justify-center items-center  px-6 g-red-700" >
                  <button class=" text-sky-900 bg-white w-full h-14 rounded-2xl ring-1 ring-sky-900 "
                    onClick={handleCopiar}>
                    Copiar
                  </button>
                </div> */}

                <div class="row-span-1">
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

      </body>


    </div>
  );
}

export default AppEncriptador;