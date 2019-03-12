import React from 'react';
import AddToDo from './AddToDo';
import ReviewContainer from './ReviewContainer';
import ToDoList from './ToDoList';
import Navbar from '../../features/Navbar';
import Sidebar from '../../features/Sidebar';
import './style.css';

class UserPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
        <AddToDo />
        <ReviewContainer />
        <ToDoList />
      </div>
    );
  }
}

export default UserPage;
