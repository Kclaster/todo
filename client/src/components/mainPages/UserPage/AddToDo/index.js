import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import './style.css';
import { addToDo, addToMarket } from '../../../features/axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class AddToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      description: '',
      title: '',
      startingBid: 0,
      minStar: 1,
      expiredTime: ''
    };
    this.timeRef = React.createRef();
  }

  handleChange = event => {
    const target = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: target
    });
  };

  componentDidMount() {
    this.setState({
      expiredTime: moment().add(7, 'days')
    });
  }

  handleMarketSubmit = event => {
    event.preventDefault();
    let userid = this.props.userid;
    let { expiredTime, description, title, startingBid, minStar } = this.state;
    let post = {
      userid,
      description,
      title,
      startingBid,
      minStar,
      expiredTime
    };
    addToMarket(post);
  };

  handleSubmit = event => {
    event.preventDefault();
    let userid = this.props.userid;
    let { expiredTime, description, title, startingBid, minStar } = this.state;
    let post = {
      userid,
      description,
      title,
      startingBid,
      minStar,
      expiredTime
    };

    addToDo(post);
  };

  render() {
    console.log(this.state);
    const date = new Date();
    return (
      <div className="todo-container">
        <form >
      <div clasName ="form-container">
          <Moment ref={this.timeRef}>{date}</Moment>
          <div className="form-item">

            <Input placeholder="Title" onChange={this.handleChange} name="title" type="text" />
          </div>
          <div className="form-item">
            <Input
              placeholder="Description"
              onChange={this.handleChange}
              name="description"
              type="text"
            />
          </div>
          <div className="form-item">

        <TextField
          id="outlined-number"
          label="Starting Bid"
          value={this.state.age}
          onChange={this.handleChange}
          name="startingBid"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="outlined"
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
          <Button
            variant="contained"
            onClick={this.handleSubmit}
            className="submit-btn"
            type="submit"
            value="Add to My Todos"
          >
            Add to My Todos
          </Button>
          <Button
            variant="contained"
            onClick={this.handleMarketSubmit}
            className="submit-btn"
            type="submit"
            value="Add to MarketPlace"
          >
            Add to MarketPlace
          </Button>
        </div>
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
