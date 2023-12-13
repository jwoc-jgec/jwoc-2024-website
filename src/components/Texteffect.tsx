import React, { useState, useEffect } from 'react';
import "../css/font.css"

const TextReveal = ({ text, dataValue } : any) => {
  const [iteration, setIteration] = useState(0);
  const [revealedText, setRevealedText] = useState('');

//   useEffect(() => {
    const interval = setInterval(() => {
      const updatedText = text.split('').map((letter : any, index : number) => {
        if (index < 3 * iteration) {
          return dataValue[index] ?? '';
        }

        return letter[Math.floor(6)];
      }).join('');

      setRevealedText(updatedText);

      if (revealedText === dataValue) {
        clearInterval(interval);
      }

      setIteration(iteration + 0.6 );
    }, 100);

//     return () => clearInterval(interval);
//   }, []);

  return <span>{revealedText}</span>;
};

export default TextReveal;
