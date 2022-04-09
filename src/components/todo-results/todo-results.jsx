import * as React from 'react';
import './todo-results.scss';
import { TodosContext } from '../../todo-context';

export const TodoResults = () => {
  const { todos } = React.useContext(TodosContext);
  const calculateChecked = () => todos.filter((el) => el.checked).length;
    // Fix an ability to calculate completed tasks

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
