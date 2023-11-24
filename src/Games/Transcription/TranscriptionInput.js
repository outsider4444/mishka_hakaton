import React, { useState } from 'react';

const TranscriptionInput = () => {
  const [items, setItems] = useState([
    { id: 1, image: 'item1.jpg', name: 'apple' },
    { id: 2, image: 'item2.jpg', name: 'carrot' },
    { id: 3, image: 'item3.jpg', name: 'bicycle' },
    // ... добавьте другие предметы
  ]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const checkAnswer = () => {
    if (userInput.toLowerCase() === items[currentItemIndex].name) {
      setScore(score + 1);
      if (currentItemIndex < items.length - 1) {
        setCurrentItemIndex(currentItemIndex + 1);
        setUserInput('');
      } else {
        setShowResult(true);
      }
    } else {
      // показать подсказку
    }
  };

  const resetGame = () => {
    setCurrentItemIndex(0);
    setUserInput('');
    setScore(0);
    setShowResult(false);
  };

  return (
    <div>
      {showResult ? (
        <div>
          <h2>Поздравляем! Ваш результат: {score} из {items.length}</h2>
          <button onClick={resetGame}>Начать заново</button>
        </div>
      ) : (
        <div>
          <img src={items[currentItemIndex].image} alt="item" />
          <input type="text" value={userInput} onChange={handleInputChange} />
          <button onClick={checkAnswer}>Проверить</button>
        </div>
      )}
    </div>
  );
};

export default TranscriptionInput;