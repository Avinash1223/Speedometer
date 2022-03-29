// Write your code here
import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  Accelerate = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => {
        console.log(`PrevState Value is ${prevState.speed}`)
        return {speed: prevState.speed + 10}
      })
    }
  }

  ApplyBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => {
        console.log(`PrevState Value is ${prevState.speed}`)
        return {speed: prevState.speed - 10}
      })
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="Bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <div className="speedMeterContainer">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
              alt="Speedometer"
              className="logo"
            />
            <div className="card">
              <h1 className="speed">Speed is {speed}mph</h1>
              <p className="limit">Min Limit is 0mph, Max Limit is 200mph</p>
            </div>
            <div className="button-container">
              <button
                className="AccelerateButton"
                type="button"
                onClick={this.Accelerate}
              >
                Accelerate
              </button>
              <button
                className="breakButton"
                type="button"
                onClick={this.ApplyBreak}
              >
                Apply Brake
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
