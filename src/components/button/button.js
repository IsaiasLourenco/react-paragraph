import React from 'react';
import './button.css';

// Função para manipular mudança de cor e estilo do parágrafo
const handleClick = (text) => {
  const paragraph = document.querySelector('.card p');
  if (paragraph) {
    if (text === 'Colorir e Maiuscula') {
      paragraph.style.color = 'red';
      paragraph.style.textTransform = 'uppercase';
      paragraph.style.fontWeight = 'bold';
    } else if (text === 'Voltar ao Normal') {
      paragraph.style.color = '';
      paragraph.style.textTransform = '';
      paragraph.style.fontWeight = '';
    }
  }
};

// Componente de botão funcional
class Button extends React.Component {
  render() {
    return (
      <button className="btn" onClick={() => handleClick(this.props.Text)}>
        {this.props.Text}
      </button>
    );
  }
}

// Função para exibir o alerta com a label do botão
const showLabelAlert = (label) => {
  alert(`${label} Baixar CV`);
};

// Componente Button1
const Button1 = ({ label = 'A label desse botão é →' }) => {
  return (
    <button className="btn" onClick={() => showLabelAlert(label)}>
      {label}
    </button>
  );
};

  export { Button, Button1 };

