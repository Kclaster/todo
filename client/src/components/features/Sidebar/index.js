import React from 'react';
import MarketPlaceContainer from './MarketPlaceContainer';
import moment from 'moment';
import HideShowArrow from './MarketPlaceContainer/HideShowArrow';
import { connect } from 'react-redux';
import axios from 'axios';
import './style.css';

class SideBar extends React.Component {
  constructor() {
    super();
    this.state = {
      showSideBar: false,
      marketplace: [],
      currentUser: [],
      todaysDate: new Date()
    };
  }

  componentDidMount() {
    console.log(this.props.userId);
    axios
      .get(`/user/${this.props.userId}`)
      .then(response => {
        this.setState({
          currentUser: [...this.state.currentUser, ...response.data]
        });
      })
      .then(() => {
        console.log(this.state);
        axios
          .get(`/todos/minStar/${this.state.currentUser[0].star_review}`)
          .then(response => {
            this.setState({
              marketplace: [...this.state.marketplace, ...response.data]
            });
          })

          .then(() => {
            this.state.marketplace.forEach(cur => {
              if (moment(this.state.todaysDate).isAfter(cur.expiration_date)) {
                axios.put(`todos/expired/${cur.taskId}`);
              }
            });
          });
      });
  }

  toggleSidebar = () => {
    this.setState({
      showSideBar: !this.state.showSideBar
    });
  };

  render() {
    let { showSideBar } = this.state;
    console.log(this.state);

    return (
      <div className="overal-market">
        <HideShowArrow
          showSideBar={showSideBar}
          toggleSidebar={this.toggleSidebar}
        />
        <div className={`sidebar-container ${showSideBar ? 'show' : 'hide'}`}>
          <h1 id="market-header">Market Place</h1>
          <MarketPlaceContainer data={this.state.marketplace} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { userId: state.oAuth.userId };
};

export default connect(mapStateToProps)(SideBar);
