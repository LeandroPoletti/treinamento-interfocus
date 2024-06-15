import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './layout/Layout';
import { BrowserRouter } from 'simple-react-routing';
import Home from './Home';
import ListaAlunos from './alunos/ListaAlunos';
import FormAluno from './alunos/FormAluno';

function App() {
  // var numero = 0;
  // var setNumero = (novoNumero) => {
  //   numero = novoNumero;
  // }

  // var [x, y] = [0, "teste"];
  // var array = [0, "teste"];
  // x = array[0]
  // y = array[1]

  const stateCount = useState(0); // state - hook -> retorna [valor, setValor]

  const count = stateCount[0];
  const setCount = stateCount[1];

  console.log("RENDERIZANDO APP:::", count);

  useEffect(() => {
    console.log("1) Efeito componente")
  },[])

  useEffect(() => {
    console.log("2) Efeito componente")
  },[count])

  return (
    <BrowserRouter routes={[
      {
        path: "",
        component: <Home></Home>
      },
      {
        path: "alunos",
        component: <ListaAlunos></ListaAlunos>
      },
      {
        path: "alunos/criar",
        component: <FormAluno></FormAluno>
      }, 
      {
        path: "alunos/editar/:codigo",
        component: <FormAluno></FormAluno>
      }
    ]}>
    <Layout></Layout>
    <button onClick={() => setCount(count + 1)}>
      count {count}
    </button>
    </BrowserRouter>
  )
}

export default App
