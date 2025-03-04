import React from 'react';
import './card.css';

class Card extends React.Component {
  render() {
    const { Title, Paragraph } = this.props;
    return (
      <div className='card'>
        <h3>{Title}</h3>
        <p>{Paragraph}</p>
      </div>
    );
  }
}

export default Card;


// import React from 'react';
// import './card.css';

// class Card extends React.Component {
//   render() {
//     const { Title, Paragraph, isTransformed } = this.props;
//     return (
//       <div className='card'>
//         <h3>{Title}</h3>
//         <p className={isTransformed ? 'transformed' : ''}>{Paragraph}</p>
//       </div>
//     );
//   }
// }

// export default Card;
