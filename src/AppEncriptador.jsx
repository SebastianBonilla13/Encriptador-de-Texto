import React, { useState } from 'react';
import { useEffect, useRef } from 'react';

import { encriptar } from "./logic/encriptador.js";
import { desencriptar } from "./logic/encriptador.js";

import { IoAlertCircle } from "react-icons/io5";
import { MdSearchOff } from "react-icons/md";

import LogoAlura from "./assets/Logo.png";


function AppEncriptador() {

  const [texto, setTexto] = useState("");
  const [error, setError] = useState("");
  const [screenSmMd, setscreenSmMd] = useState(false);



  const buttonChange = () => {
    /* console.log('CHANGE 2 :>> ', change); */
    console.log('VALUE screenSmMd:>> ', screenSmMd);
  }

  const handleEncriptar = () => {

    const nuevoTexto = document.getElementById('varTexto').value; // obtener texto usuario

    if (handleValidateCopy(nuevoTexto)) {
      const msjRecibido = encriptar(nuevoTexto);
      if (msjRecibido != null) {
        setTexto(msjRecibido); // setTexto para actualizar el estado
      }
    } else {
      handleError("Solo se permiten letras minúsculas sin caracteres especiales.");
    }
  }

  const handleDesencriptar = () => {

    const nuevoTexto = document.getElementById('varTexto').value; // obtener texto usuario

    if (handleValidateCopy(nuevoTexto)) {
      const msjRecibido = desencriptar(nuevoTexto);
      if (msjRecibido != null) {
        setTexto(msjRecibido); // setTexto para actualizar el estado
      }
    } else {
      handleError("Solo se permiten letras minúsculas sin caracteres especiales.");
    }
  }

  useEffect(() => {
    handleValidate(); /* activar antes de validar el primer caracter */
    handlescreenSmMd();
  }, []);

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

  const handleValidateCopy = (varTexto) => {

    const regexMayusculas = /[A-Z]/; // Expresión regular para mayúsculas
    const regexCaracteresEspeciales = /[^a-zA-Z0-9\s]/; // Expresión regular para caracteres especiales

    if ((regexMayusculas.test(varTexto)) || (regexCaracteresEspeciales.test(varTexto))) {
      return false;
    }
    return true; // NO contiene
  }

  const handleError = (msjError) => {
    setError(msjError);
  }

  const handleCopiar = () => {
    console.log('TEXTO :>> ', texto);
    navigator.clipboard.writeText(texto);
    alert("Texto copiado al portapapeles!");
  }

  //----------------------------------- Lógica para el textarea dinámico
  const textAreaRef = useRef(null);
  const [val, setVal] = useState("");
  const handleChange = (e) => {
    setVal(e.target.value);
  }

  useEffect(() => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  }, [val])

  //------------------------------------------------------------

  const handleChangesTextarea = (event) => {
    handleValidate(event);
    handleChange(event);
  };

  //------------------------------------------------------------------

  /* useEffect(() => { */
  const handlescreenSmMd = () => {
    if (window.innerWidth < 768) {
      setscreenSmMd(true);
    } else {
      setscreenSmMd(false);
    }
  };

  //----------------------------------- Lógica para identificar el ajuste de pantalla
  useEffect(() => {
    const handleResize = () => {
      console.log('estoy moviendo la pantalla :>> ');
      handlescreenSmMd();
    };
  
    window.addEventListener('resize', handleResize);
    
    // Cleanup function to remove the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  //------------------------------------------------------------

  return (
    <div>
      <header>

      </header>

      <body>

        <div class={` p-4 bg-neutral-200 ${screenSmMd ? 'h-fit' : 'h-screen '}`} >

          <div class=" flex flex-wrap content-around sm:justify-cente  h-full ">

            {/* Screen Izq. */}
            <div class=" h-4/5 md:h-auto lg:h-auto w-full md:w-2/3 lg:w-2/3 static ">

              {/* LOGO + TEXTO container */}
              <div class="grid grid-cols-8 gap-3 ">

                {/* LOGO container */}
                <div class="col-span-8 md:col-span-1 lg:col-span-1 flex justify-start  md:justify-center lg:justify-center h-fit ">
                  <div class="h-fit">
                    <img class="w-5 md:w-10 lg:w-10 m-0  g-red-400" src={LogoAlura} alt="Logo Alura" />
                  </div>
                </div>

                {/* Der. container */}
                <div class="col-span-8 md:col-span-7 lg:col-span-7 content-center gap-4 pb-4 ">

                  {/* TITULO container */}
                  <div class=" text-2xl md:text-3xl g-red-400 pb-12 pt-6">
                    <h1 class="font-semibold text-sky-900">
                      Encriptador de Texto
                    </h1>
                  </div>

                  {/* TEXTO container */}
                  <div class="max-h-full px-1 min-h-60 md:min-h-96 lg:min-h-96 ">
                    <textarea className=' w-full p-1 outline-none resize-none bg-neutral-200 text-sky-900' placeholder="Ingrese texto aquí..." id="varTexto" onChange={handleChangesTextarea} rows="1" ref={textAreaRef}></textarea>
                  </div>

                  {/* Adv + botones */}
                  <div class="grid row-auto ">

                    {/* ADVERTENCIA container */}
                    <div class="flex h-10 pb-2">
                      <div class="flex content-center items-center">
                        {error && <IoAlertCircle class="w-5 h-5 ml-2" color="#cc0000" />}
                        <p class="text-xs pl-2 text-red-600 " id="msjAdvertencia">
                          {error}
                        </p>
                      </div>

                    </div>

                    {/* BOTONES container */}
                    <div class="grid grid-cols-2 gap-4 px-1 ">

                      <button class="col-span-2 sm:col-span-1 md:col-span-1 text-white bg-sky-900 w-full h-14 rounded-2xl ring-1 ring-sky-900 "
                        onClick={handleEncriptar}>
                        Encriptar
                      </button>

                      <button class="col-span-2 sm:col-span-1 md:col-span-1 text-sky-900 bg-white w-full h-14 rounded-2xl ring-1 ring-sky-900 "
                        onClick={handleDesencriptar}>
                        Desencriptar
                      </button>

                    </div>

                  </div>

                </div>
              </div>
            </div>

            {/* Screen Der. */}
            <div class={` w-full md:w-1/3 lg:w-1/3 static mt-10 md:mt-0 lg:mt-0 bg-neutral-200 ${texto ? ' h-full md:h-auto lg:h-auto' : ' h-auto '}`} >

              <div class={` py-4 px-5 gap-4 mx-4 bg-red-30 rounded-2xl bg-white ${screenSmMd ? 'h-auto' : 'h-full'}`} >
                {(!texto) &&
                  <div class=" h-full flex justify-center items-center ">
                    <div>
                      <div class="flex justify-center">
                        <MdSearchOff class=" w-10 h-10  lg:w-20 lg:h-20" color="#858585" />
                      </div>

                      <p class=" text-sm lg:text-2xl font-bold text-zinc-500 text-center">
                        Ningún mensaje fue encontrado
                      </p>
                      <p class=" text-sm lg:text-base text-zinc-500 text-center">
                        Ingresa el texto que desees encriptar o desencriptar.
                      </p>
                    </div>
                  </div>
                }

                {(texto) &&
                  <div class=" h-full ">

                    {(!screenSmMd) &&
                      <div class=" h-5/6 ">
                        <textarea class="h-full w-full outline-none resize-none bg-transparent text-zinc-600" id="TextareaRead" value={texto}></textarea>
                      </div>
                    }

                    {(screenSmMd) &&
                      <div class=" h-5/6 ">
                        <div class="  text-zinc-600" id="TextareaRead" >
                          {texto}
                        </div>
                      </div>
                    }

                    <div class="flex items-center h-1/6  pt-6 md:pt-0 lg:pt-0 ">
                      <button class=" text-sky-900 bg-white w-full h-14 rounded-2xl ring-1 ring-sky-900 "
                        onClick={handleCopiar}>
                        Copiar
                      </button>
                    </div>

                  </div>
                }

              </div>
            </div>
          </div>
        </div>

      </body>

    </div>
  );
}

export default AppEncriptador;