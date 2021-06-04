
import { useRef, useState } from 'react';
import './App.css';
import Mensagem from './componentes/Mensagem';
import Moeda from "./componentes/Moeda";


function App() {

  const [indice, setIndice] = useState(0);

  const [mensagem,setMensagem] = useState("");
  const carainputRef = useRef();

  function lancarMoeda(){
     const i = Math.trunc(Math.random() * 10);
    const par = i % 2 ===0;
    const impar = i % 2 !==0;



    if (par) setIndice(0);
    else setIndice(1);

    const palpite = carainputRef.current.checked;

    if (par && palpite === true){
      setMensagem("Voce acertou!!!")
    }else if (impar && palpite === false){
      setMensagem(" Voce acertou!!!");
    } else{setMensagem("Voce Errou!!!");}

  }

  function reiniciar(){
    setMensagem("");
    setIndice(-1);

  }


  return (
    <div>
      <div className="bg-red-500 p-8 text-white font-bold text-3x1 text-center">
      <h1>CARA OU COROA</h1>
      </div>
      <div className="text-2x1 p-4 text-center">
        <p>escolha o lado da sua moeda e pressione o botao</p>
      </div>
      
      <div className="text-2x1 mx-96">
        <div>
          <input ref={carainputRef} type="radio" value="cara" name="moeda" className="mr-2" onClick={reiniciar}/>
          Cara
        </div>
        <div>
          <input type="radio" value="coroa" name="moeda" className="mr-2" onClick={reiniciar}/>
          Coroa
        </div>
      </div>
      <div className="flex flex-col justify-center itens-center mt-8">
          <div className="text-center">
            <button
            onClick={lancarMoeda}
            className="bg-red-500 text-white p-4 rounded-lg">
             Lançar Moeda
            </button>
         </div>
       <Mensagem  texto={mensagem}/>

       <Moeda indice={indice}/>


      </div>

    </div>
  );
}

export default App;
