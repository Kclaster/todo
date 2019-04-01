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

  handleClick = (e, taskId) => {
    e.preventDefault();
    console.log(taskId);
    console.log(this.state.todos);
    this.setState({
      todos: this.state.todos.filter(cur => {
        return cur.id !== taskId;
      })
    });
    axios.delete(`/todos/delete/${taskId}`).then(response => {
      console.log(response);
    });
  };

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
    // if (this.props.todos)
    const list = [...this.state.todos, ...this.props.todo];
    return (
      <div className="list-container">
      <h2>Task</h2>
        {list !== 0 &&
          list.map(cur => {
            return (
              <ToDoItem
                handleClick={this.handleClick}
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
    userId: state.oAuth.userId,
    todo: state.todo
  };
};

export default connect(mapStateToProps)(ToDoList);
