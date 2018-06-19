import React from "react"
import "./counter.scss";
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  climb() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div className="counter_container" onClick={this.climb.bind(this)}>
      <h4>Click the counter to increase it</h4>
        <h1 style={{ color: "blue" }}>
          {this.state.count}
        </h1>
      </div>
    )
  }
}
