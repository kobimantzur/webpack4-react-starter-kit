import "./index.scss";

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { postRequest } from '../../reducers/Home/actions';
class Home extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

  render() {
    return (
      <div>
        Home
        <div>
        <button onClick={() => this.props.postRequest()}>
        Navigate!</button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({}) => {

}
const mapDispatchToProps = {
  postRequest
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
