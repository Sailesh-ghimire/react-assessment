import { useState } from 'react';
import './App.css';
import { ShoppingListItem } from './components/ShoppingListItem';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [error, setError] = useState('');

  const addItem = () => {
    if (!newItem.trim()) {
      setError('Item can not be empty');
      setTimeout(() => setError(''), 500);
      return;
    }
    if (
      items.some(
        item => item.name.toLowerCase() === newItem.trim().toLowerCase()
      )
    ) {
      setError('Duplicate items');
      setTimeout(() => setError(''), 500);
      return;
    }

    setItems([...items, { name: newItem.trim(), checked: false }]);
    setNewItem('');
    setError('');
  };

  const checkItem = index => {
    const updatedItems = [...items];
    updatedItems[index].checked = !updatedItems[index].checked;
    setItems(updatedItems);
  };

  const removeItem = index => {
    setItems(items.filter((_, i) => i !== index));
  };
  return (
    <div className='container'>
      <h1 className='mb-4'>My Shopping List</h1>

      <div className='flex gap-4 pb-3 border-b-2 border-gray-700'>
        <input
          type='text'
          placeholder='E.g. Carrots'
          className='v__input flex-1'
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
        />
        <button
          className='v__button'
          onClick={addItem}
          // disabled={!newItem}
        >
          Add
        </button>
      </div>

      {error && <p className='text-red-500'>{error}</p>}

      <div className='v__list-container overflow-y-scroll'>
        {items.map((item, index) => (
          <ShoppingListItem
            key={index}
            item={item}
            onCheck={() => checkItem(index)}
            onRemove={() => removeItem(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
