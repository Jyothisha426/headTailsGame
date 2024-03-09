import {Component} from 'react'

import './index.css'

const headsImgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResultImgUrl: headsImgUrl, headsCount: 0, tailsCount: 0}

  onTossingCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (toss === 0) {
      tossImage = headsImgUrl
      latestHeadsCount += 1
    } else {
      tossImage = tailsImgUrl
      latestTailsCount += 1
    }

    this.setState({
      tossResultImgUrl: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossResultImgUrl, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="main-container">
        <div className="second-container">
          <h1 className="heading1">Coin Toss Game</h1>
          <p className="heading2">Heads (or) Tails</p>
          <img
            src={tossResultImgUrl}
            alt="toss result"
            className="toss-result-image"
          />
          <div className="btn-container">
            <button
              type="button"
              className="toss-btn"
              onClick={this.onTossingCoin}
            >
              Toss Coin
            </button>
          </div>
          <div className="results-container">
            <p>Total: {totalCount}</p>
            <p>Heads: {headsCount}</p>
            <p>Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
