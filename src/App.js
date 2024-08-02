import logo from './logo.svg';
/* import './App.css'; */

import {encriptarTexto} from "./logic/encriptador"; 

import React, { useState } from 'react';





function App() {
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

        <div class="grid grid-flow-col justify-items-center items-center max-w-fit min-w-fit px-3 py-1 rounded-full   bg-gradient-to-r from-slate-700  to-slate-600   font-semibold text-slate-200 hover:bg-white hover:text-slate-100 hover:ring-slate-100  ring-1 ring-teal-100 shadow-lg hover:shadow-slate-300/25 shadow-teal-300/15 ">
          <div class="text-2xl">
            Hola soy un texto en TailwindCSS
          </div>
        </div>

      </header>
      
      
<body>

<div class=" p-7 g-slate-500 h-screen">

    

    <div class="flex justify-between h-full    g-slate-300">

        <div class="w-2/3 rounded-xl">

            <div class="flex justify-center gap-4     bg-red-600 h-full "> {/* <!-- grid auto-rows-auto --> */}

                <div class="flex justify-center w-auto bg-purple-400">

                    <div class="w-9 bg-black">
                        {/* <img class=" w-full bg-red-400" src="./assets/Logo.png" alt="Logo Alura"> */}
                    </div>

                </div>

                {/* <!-- <div class="flex justify-center   bg-purple-300">
                    <div>
                        space
                    </div>
                </div> --> */}

                <div class="  grid grid-rows-5 gap-4 w-4/5 pb-4 bg-slate-500">
                    
                    <div class=" text-3xl">
                        <h1 class="bg-red-400">
                            Encriptador de Texto
                        </h1>
                    </div>

                    <div class=" row-span-4 bg-purple-400">
                        {/* <!-- <input  class=" h-ful bg-transparent " type="text" id="varTexto" placeholder="Ingrese texto aquí..." > --> */}

                        <form class="w-full  h-full bg-red-500">
                            {/* <!-- <textarea  style="width:100%; border: none; outline: none; padding: 10px; font-size: 16px; color: #333; background-color: #f0f0f0; " class=" bg-transparent border-none p-0 m-0 font-sans focus:border-none focus:p-0 focus:m-0 focus:font-sans focus:border-amber-500 " id="varTexto" name="mensaje" placeholder="Ingrese texto aquí..."></textarea> --> */}
                            <textarea  style={{height: "100%" , width: "100%" ,  outline: "none", resize:"none"}} class=" bg-transparent " id="varTexto" name="mensaje" placeholder="Ingrese texto aquí..."></textarea>
                        </form>
                    </div>

                    {/* <!-- <div class=" bg-red-800"> -->

                    <!-- </div> --> */}



                    <div class="row-span-2  ">

                        <p class="   text-xs bg-red-500 " id="msjAdvertencia"> </p>

                        <div class="flex justify-center gap-4 ">
                            
                            <div class="basis-1/4 w-auto bg-yellow-300" >
                                <button onclick="encriptar();">
                                    encriptar
                                </button>
                            </div>
                            
                            <div class="basis-1/4 w-auto  bg-yellow-300" >
                                <button onclick="desencriptar();">
                                    desencriptar
                                </button>
                            </div>


                        </div>


                    </div>
                </div>


            </div>
        </div>



        <div class=" w-1/3 bg-cyan-600">
        {/* <div class="grid grid-rows-6  h-full py-6 gap-7 p-20 bg-red-700 rounded-md bg-transparent" style="background-color: blue;">  */}
            <div class="grid grid-rows-6  h-full py-6 gap-7 p-20 bg-red-700 rounded-md bg-transparent" style={{background: "blue"}}> {/* <!-- grid grid-rows-5    gap-4 p-20 m-4 --> */}
                
                {/* <!-- <div class="flex align-top row-span-5 h-full bg-lime-300">
                    <p id="varTexto3"> </p>
                </div> --> */}
                {/* style="background-color: aqua;" */}
                <div class=" row-span-5 bg-lime-400"> {/* style="height: 100%; width:100%;  outline: none; resize: none;"  */}
                    <textarea id="TextareaRead" readonly style={{height: "100%", width:"100%", outline: "none", resize: "none"}} class=" bg-transparent"></textarea>
                </div>
                
                {/* style="background-color: aquamarine;" */}
                <div class="row-span-1 bg-purple-400x"> {/* <!-- row-span- flex  align-bottom row-span-1   justify-center --> */}
                    <button  class=" rounded-4xl bg-amber-500" onclick="copiar();">
                        copiar
                    </button>
                </div>

                <div class="grid grid-flow-col justify-items-center items-center max-w-fit min-w-fit px-3 py-1 rounded-full   bg-gradient-to-r from-slate-700  to-slate-600   font-semibold text-slate-200 hover:bg-white hover:text-slate-100 hover:ring-slate-100  ring-1 ring-teal-100 shadow-lg hover:shadow-slate-300/25 shadow-teal-300/15 ">
                    <div class="text-base"> 
                        Hola 
                    </div>
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

export default App;
