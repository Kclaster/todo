import React from 'react';
import ToDoItem from './ToDoItem';
import './style.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { Divider } from '@material-ui/core';

class ToDoList extends React.Component {
  constructor() {
    super();
    this.state = {
      showSideBar: false,
      todos: []
    };
  }

  componentDidMount() {
    console.log(this.props);
    axios.get(`/todos/123/${this.props.userId}`).then(response => {
      console.log(response);
      this.setState(
        {
          todos: [...this.state.todos, ...response.data]
        },
        () => console.log(this.state.todos)
      );
    });
  }

  render() {
    return (
      <div className="list-container">
        <h1>Your mom</h1>
        {this.state.todos.length !== 0 &&
          this.state.todos.map(cur => {
            return (
              <ToDoItem
                title={cur.title}
                description={cur.description}
                taskId={cur.id}
              />
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.oAuth.userId
  };
};

export default connect(mapStateToProps)(ToDoList);
