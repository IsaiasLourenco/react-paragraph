import './App.css';
import Card from './components/card/card';
import Button from './components/button/button';

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <Card Title='Trocando cor e dando Uppercase no parágrafo' Paragraph='Ao clicar no botão vermelho abaixo, esse parágrafo se tornará vermelho, e ficará todo em Uppercase.' />
        </div>
        <Button Text='Colorir e Uppercase' />
        <Button Text='Voltar ao Normal' />
      </div>
    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import './App.css';
// import Card from './components/card/card';
// import Button from './components/button/button';

// function App() {
//   const [isTransformed, setIsTransformed] = useState(false);

//   const handleTransform = () => {
//     setIsTransformed(true);
//   };

//   const handleReset = () => {
//     setIsTransformed(false);
//   };

//   return (
//     <div className="App">
//       <div>
//         <div>
//           <Card 
//             Title='Trocando cor e dando Uppercase no parágrafo' 
//             Paragraph='Ao clicar no botão vermelho abaixo, esse parágrafo se tornará vermelho, e ficará todo em Uppercase.' 
//             isTransformed={isTransformed}
//           />
//         </div>
//         <Button Text='Colorir e Uppercase' onClick={handleTransform} />
//         <Button Text='Voltar ao Normal' onClick={handleReset} />
//       </div>
//     </div>
//   );
// }

// export default App;
