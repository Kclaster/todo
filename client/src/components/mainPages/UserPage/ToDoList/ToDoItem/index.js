import React from 'react';
import './style.css';

class ToDoItem extends React.Component {
  render(props) {
    return (
      <div>
        <h3 class="fto-do-item-chore">mow lawn</h3>
      </div>
    );
  }
}

export default ToDoItem;
