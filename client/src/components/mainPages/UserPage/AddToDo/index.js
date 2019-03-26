import React from 'react';
import materialize from 'materialize-css';
import './style.css';
import { addToDo } from '../../../features/axios';
import { connect } from 'react-redux';

class AddToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      description: '',
      title: '',
      startingBid: 0,
      minStar: 0
    };
  }

  handleChange = event => {
    const target = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: target
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('akuna', this.props);
    let userid = this.props.userid;
    let { description, title, startingBid, minStar } = this.state;
    console.log('first', userid);
    let post = {
      userid,
      description,
      title,
      startingBid,
      minStar
    };

    addToDo(post);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-item">
            <label>Title</label>
            <input onChange={this.handleChange} name="title" type="text" />
          </div>

          <div className="form-item">
            <label>Description</label>
            <input
              onChange={this.handleChange}
              name="description"
              type="text"
            />
          </div>

          <div className="form-item">
            <label>Starting Bid</label>
            <input
              onChange={this.handleChange}
              name="startingBid"
              type="number"
            />
          </div>

          <div className="form-item">
            <label>Minimum Stars to Bid</label>
            <select onChange={this.handleChange} name="minStar">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <button className="submit-btn" type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userid: state.oAuth.userId
  };
};

export default connect(mapStateToProps)(AddToDo);
