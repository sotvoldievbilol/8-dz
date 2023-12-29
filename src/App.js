import React, { useState, useEffect } from 'react';
import "./style.css"





function App() {
  const [inputText, setInputText] = useState('');
  const [texts, setTexts] = useState([]);

  const handleClick = () => {
    setTexts([...texts, inputText]);
    setInputText('');
    localStorage.setItem('list', JSON.stringify(navigator))

  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleClick}>add name</button>
      {texts.map((text, index) => (
        <h1 key={index}>{text}</h1>



      ))}
    </div>
  );
}

export default App