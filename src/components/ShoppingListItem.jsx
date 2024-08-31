import classes from './ShoppingListItem.module.css';

export const ShoppingListItem = ({ item, onCheck, onRemove }) => {
  return (
    <div className='flex items-center p-2'>
      <input
        type='checkbox'
        className='mr-2'
        checked={item.checked}
        onChange={onCheck}
      />
      <h3 className={`flex-1 ${item.checked ? 'line-through ' : ''}`}>
        {item.name}
      </h3>
      <button className={classes.removeButton} onClick={onRemove}>
        x
      </button>
    </div>
  );
};
