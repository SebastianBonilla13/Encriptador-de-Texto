import logo from './logo.svg';
import { encriptar } from "./logic/encriptador.js";
import { desencriptar } from "./logic/encriptador.js";

import React, { useState } from 'react';

import LogoAlura from "./assets/Logo.png";

import { IoAlertCircle } from "react-icons/io5";
import { MdSearchOff } from "react-icons/md";

import { useEffect, useRef } from 'react';


function AppEncriptador() {

  const [texto, setTexto] = useState("");
  const [error, setError] = useState("");

  const [change, setChange] = useState(true);

  const buttonChange = () => {
    setChange(!change);
    console.log('CHANGE 2 :>> ', change);
    console.log('VALUE screenSmMd:>> ', screenSmMd);
  }


  const handleEncriptar = () => {

    
    // obtener usuario
    const nuevoTexto = document.getElementById('varTexto').value;
    console.log('LO QUE LEO Y DEBO VALIDAR PRIMERO CREO :>> ', nuevoTexto);
    
    if(handleValidateCopy(nuevoTexto)){
      console.log('nuevoTexto es:>> ', nuevoTexto);
      const msjRecibido = encriptar(nuevoTexto);
      console.log('encriptado es :>> ', msjRecibido);
      if (msjRecibido != null) {
        setTexto(msjRecibido); // setTexto para actualizar el estado
      }
    }else{
      handleError("Solo se permiten letras minúsculas sin caracteres especiales.");
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


  useEffect(() => { /* activar antes de validar el primer caracter */
    handleValidate();
    handlescreenSmMd();
    
    /* handlescreenSmMd(); */ // para conocer si es sm o md la pantalla
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

  /* let varTextoArray = texto.split(""); */

  const handleValidateCopy = (varTexto) => {

    console.log('TEXTO USUARIO ESSSS :>> ', varTexto);
    const regex = /[a-zñ\s]/; // si

    

    const regexMayusculas = /[A-Z]/; // Expresión regular para mayúsculas
    const regexCaracteresEspeciales = /[^a-zA-Z0-9\s]/; // Expresión regular para caracteres especiales

    if ((regexMayusculas.test(varTexto)) || (regexCaracteresEspeciales.test(varTexto))) {
      console.log('NO VALIDO :>> ');
      return false;
    }

    console.log('VALIDOOO!!! :>> ');
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

  //------------------------------------------------------------
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
  const [screenSmMd, setscreenSmMd] = useState(false); 

  /* useEffect(() => { */
    const handlescreenSmMd = () => {
      if (window.innerWidth < 768) {
        setscreenSmMd(true);
      } else {
        setscreenSmMd(false);
      }
    };
  /* }, []); */


  return (
    <div>
      <header>
        {/* <div class="{{ change ? 'text-red-600' : 'text-green-600' }}">  */}
        {/* <div class=" ${ change ? text-red-600 : text-blue-600 } "> 
          Hola puess
        </div> */}

        {/* <div class={` bg-green-400 ${change ? 'text-red-600' : 'text-blue-600'}`} >
          Hello
        </div> */}

      </header>

      <body class="g-neutral-700  ">
        <div class={` p-4 bg-neutral-200 ${screenSmMd ? 'h-fit' : 'h-screen '}` } >
        {/* <div class="  h-fit h-scree   stat"> */}

          {/*  */} {/* grid  grid-rows-6 grid-cols-6 */}  {/* flex flex-wrap | w-full | w-full   */}
          <div class=" flex flex-wrap content-star content-around sm:justify-cente ap-4  h-full w-ful    g-neutral-600"> {/*grid-col-3   flex justify-between */}

            {/* Screen Izq. */} {/* row-span-5 col-span-6 lg:row-span-6 lg:col-span-4 */}
            <div class=" h-4/5 md:h-auto lg:h-auto  w-full md:w-2/3 lg:w-2/3 static h-ful bg-neutral-200"> {/*col-span-2  w-2/3  */}

              {/* LOGO + TEXTO container */}
              <div class="grid grid-cols-8 gap-3 g-red-200 flex-auto  "> {/* <!--grid grid-cols-8   grid auto-rows-auto --> */} {/* flex justify-center */}

                {/* LOGO container */}
                <div class=" flex justify-start   md:justify-center lg:justify-center  h-fit bg-purple-400  col-span-8 md:col-span-1 lg:col-span-1 ">
                  <div class="g-neutral-500 h-fit">
                    <img class="w-5 md:w-10 lg:w-10 m-0  g-red-400" src={LogoAlura} alt="Logo Alura" />
                  </div>
                </div>

                {/* Der. container */} {/* grid grid-rows-9 */}
                <div class="content-center gap-4 pb-4 bg-slate-800 h-f   col-span-8 md:col-span-7 lg:col-span-7">

                  {/* TITULO container */} {/* row-span-1 */}
                  <div class=" text-2xl md:text-3xl g-red-400 pb-12 pt-6">
                    <h1 class="font-semibold text-sky-900">
                      Encriptador de Texto
                    </h1>
                  </div>

                  {/* TEXTO container */} {/* row-span-6  */}
                  {/* <div class="  g-purple-400">
                    <form class="flex h-auto w-full g-red-500">
                      <textarea  class="flex flex-auto   w-full outline-none resize-none bg-transparent text-sky-900" id="varTexto" placeholder="Ingrese texto aquí..." onChange={handleValidate}></textarea>
                    </form>
                  </div> */}

                  {/* TEXTO container */} {/* active:outline-none focus:outline-none rounded */}
                  <div class="max-h-full px-1 min-h-32 md:min-h-96 lg:min-h-96  g-purple-400">
                    <textarea className='p-1 w-full  outline-none resize-none bg-neutral-200 text-sky-900' placeholder="Ingrese texto aquí..." id="varTexto" onChange={handleChangesTextarea} rows="1" ref={textAreaRef}></textarea>
                  </div>

                  {/* <div className='w-screen min-h-screen bg-neutral-950 grid place-items-center'> */}
                  {/* <div className='text-neutral-200 bg-neutral-800 p-2 w-[30rem] rounded flex flex-col space-y-2'>
                      <span>Input text</span>  */}
                  {/* <textarea className='p-1 bg-neutral-700 active:outline-none focus:outline-none rounded' placeholder='type something here' value={val} onChange={handleChange} rows="2" ref={textAreaRef}></textarea> */}
                  {/* </div> */}
                  {/* </div> */}




                  {/* Adv + botones */} {/* row-span-2 */}
                  <div class="">
                    <div class="grid row-auto g-green-300  "> {/* flex flex-col justify-center */}

                      {/* ADVERTENCIA container */}
                      <div class="flex   g-amber-400 h-10 pb-2">
                        <div class="flex content-center items-center g-black">
                          {error && <IoAlertCircle class="w-5 h-5 ml-2" color="#cc0000" />}
                          <p class="text-xs pl-2 text-red-600 g-red-500 " id="msjAdvertencia">
                            {error}
                          </p>
                        </div>

                      </div>

                      {/* BOTONES container */}
                      <div class="grid grid-cols-2 gap-4 px-1 g-red-400 "> {/* flex flex-row justify-center gap-4 */}

                        <button class="col-span-2 sm:col-span-1 md:col-span-1 text-white bg-sky-900 w-full h-14 rounded-2xl ring-1 ring-sky-900 "
                          onClick={handleEncriptar}>
                          Encriptar
                        </button>

                        <button class="col-span-2 sm:col-span-1 md:col-span-1 text-sky-900 bg-white w-full h-14 rounded-2xl ring-1 ring-sky-900 "
                          /* onClick={handleDesencriptar}> */
                          onClick={buttonChange}>
                          Desencriptar
                        </button>

                      </div>

                    </div>
                  </div>


                </div>


              </div>
            </div>
            
            {/* w-fit md:h-full lg:h-full  */}


            {/* Screen Der. */} 
            {/* <div class=" "> */} {/*col-span-1  w-1/3 */}
            <div class={`h-ful h-1/     w-full md:w-1/3 lg:w-1/3  static   mt-10 md:mt-0 lg:mt-0   g-neutral-600 ${texto ? 'bg-red-600 h-full md:h-auto lg:h-auto' : 'bg-blue-600 h-auto '}` } >
              
              <div class={` py-4 px-5 gap-4 mx-4 bg-red-300 rounded-2xl ${screenSmMd ? 'h-auto' : 'h-full'}` } >
              {/* <div class=" h-fulnoo   py-4 px-5 gap-4 mx-4 bg-red-300 rounded-2xl"> */} {/*  */}

                {/* <div class="h h-full row-span-11 g-lime-300"> */}
                  {/* <form class=" h-full w-full"> */}
                    {/* <textarea class="h-full w-full outline-none resize-none bg-transparent text-zinc-600" id="TextareaRead" value={texto}></textarea> */}


                    {/* <div class="h-full w-full ">
                        <textarea class="h-full w-full outline-none resize-none bg-transparent text-zinc-600" id="TextareaRead" value={texto}></textarea>
                      </div> */}
                    {/* <div class="px-1  w-full h-full  bg-purple-400">
                        <textarea className='p-1 w-full  outline-none resize-none bg-neutral-500 text-sky-900' placeholder="Ingrese texto aquí..." id="TextareaRead" value={texto}  ></textarea>
                      </div>  */}

                    {/* {(texto) &&
                      <div class="h-full w-full bg-slate-500">
                        <textarea class="h-full w-full outline-none resize-none bg-transparent text-zinc-600" id="TextareaRead" value={texto}></textarea>
                      </div>
                    } */}

                    {(!texto) &&
                      <div class=" h-full flex justify-center items-center g-red-300  "> {/* grid grid-rows-3 */}
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
                      <div class=" h-full border-b-gray-950"> {/* grid grid-rows-12  */}
                        
                        {/* screenSmMd */}
                        {/* <div class={`h-ful       ${texto ? 'bg-red-600 h-full md:h-auto lg:h-auto' : 'bg-blue-600 h-auto '}` } > */}

                        {(!screenSmMd) &&
                          <div class=" h-ful w-ful h-5/6 bg-green-400 ">
                            <textarea class="h-full w-full outline-none resize-none bg-transparent text-zinc-600" id="TextareaRead" value={texto}></textarea>
                          </div>
                        }

                        {(screenSmMd) &&
                        <div class=" w-ful -5/6 bg-green-400 ">
                          <div class="  text-zinc-600" id="TextareaRead" /* value={texto} */>
                            {texto}
                          </div>
                        </div>
                        }

                        

                        
                        
                        

                        <div class="flex items-center h-1/6 bg-green-300 ">
                          <button class=" text-sky-900 bg-white w-full h-14 rounded-2xl ring-1 ring-sky-900 "
                            onClick={handleCopiar}>
                            Copiar
                          </button>
                        </div>

                      </div>
                    }

                  {/* </form> */}
                {/* </div> */}



                {/* {(texto) &&
                  <div class="row-span-1 flex items-center ">
                    <button class=" text-sky-900 bg-white w-full h-14 rounded-2xl ring-1 ring-sky-900 "
                      onClick={handleCopiar}>
                      Copiar
                    </button>
                  </div>
                } */}


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