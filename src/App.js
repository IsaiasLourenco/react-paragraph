import './App.css';
import Card from './components/card/card';
import { Button, Button1 } from './components/button/button';

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <Card Title='Trocando cor e dando Uppercase no parágrafo' Paragraph='Ao clicar no botão vermelho abaixo, esse parágrafo se tornará vermelho, e ficará todo em Uppercase.' />
        </div>
        <Button Text='Colorir e Maiuscula' />
        <Button Text='Voltar ao Normal' /><br></br>
        <Button1 label='A label desse botão é → ' /> 
      </div>
    </div>
  );
}

export default App;