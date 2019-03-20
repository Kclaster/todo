import React from 'react';
import AddToDo from './AddToDo';
import ReviewContainer from './ReviewContainer';
import ToDoList from './ToDoList';
import Header from '../../features/Header';
import Sidebar from '../../features/Sidebar';
import './style.css';

class UserPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="body">
          <Sidebar />
          <AddToDo />
          <ReviewContainer />
          <ToDoList />
        </div>
      </div>
    );
  }
}

export default UserPage;
