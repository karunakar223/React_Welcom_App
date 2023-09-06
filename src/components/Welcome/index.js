// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  getState = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getBtnText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const getState = this.getBtnText()
    return (
      <div className="bg-container">
        <h1 className="main-heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <div>
          <button type="button" onClick={this.getState} className="btn">
            {getState}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
