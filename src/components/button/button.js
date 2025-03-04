// import React from 'react';
// import './button.css';

// const Button = ({ Text, onClick }) => {
//   return (
//     <button className="btn" onClick={onClick}>
//       {Text}
//     </button>
//   );
// };

// export default Button;

import React from 'react';
import './button.css';

const handleClick = (text) => {
  const paragraph = document.querySelector('.card p');
  if (text === 'Colorir e Uppercase') {
    paragraph.style.color = 'red';
    paragraph.style.textTransform = 'uppercase';
    paragraph.style.fontWeight = 'bold';
  } else if (text === 'Voltar ao Normal') {
    paragraph.style.color = '';
    paragraph.style.textTransform = '';
    paragraph.style.fontWeight = '';
  }
};

class Button extends React.Component {
  render() {
    return (
      <button className="btn" onClick={() => handleClick(this.props.Text)}>
        {this.props.Text}
      </button>
    );
  }
}

export default Button;
