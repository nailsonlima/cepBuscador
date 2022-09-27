import { useState } from 'react';
import './styles.css'
import {FiSearch} from 'react-icons/fi'


function App() {

  const [input, setInput] = useState('')

  function handleSearch(){
    alert(input)
  }

  return (
    <div className="container">
        <h1 className="title">Buscador de CEP</h1>
        <div className="containerInput">
          <input
          type="text"
          placeholder="Digite seu cep..."
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          />

          <button className='buttonSearch' onClick={handleSearch}>
            <FiSearch size={25} color="#fff"/>
          </button>
        </div>
        <main className='main'>
          <h2>CEP: 5618515-450</h2>

          <span>Rua: Teste testada testezinho</span>
          <span>Complemento: perto de algum lugar</span>
          <span>Vila Rosa</span>
          <span>Baturité - CE</span>
        </main>
    </div>
  );
}

export default App;
