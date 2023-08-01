import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MyOrg from './components/MyOrg';

function App() {

  const [showForm, updateShow] = useState(true)

  //Ternario --> condicion? SeMuestra o noSemuestra

  const toggleShow = () =>{
    updateShow(!showForm)
  }
  return (
    <div>
      <Header />
      {showForm && <Form />}
      <MyOrg toggleShow ={toggleShow} />
    </div>
  );
}

export default App;
