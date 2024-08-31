const Child = ({ setCount }) => {
  const handleMinusClick = () => {
    setCount(prev => prev - 1);
  };

  const handlePlusClick = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <button type='button' className='btn' onClick={handleMinusClick}>
        -
      </button>
      <button type='button' className='btn' onClick={handlePlusClick}>
        +
      </button>
    </div>
  );
};

export default Child;
