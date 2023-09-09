// Write your code here

import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      secondInnings,
      umpires,
      venue,
      result,
    } = latestMatch

    return (
      <div className="container">
        <h1 className="heading"> Latest Match</h1>
        <div className="match-card">
          <div className="logo-container">
            <div className="match-details-main">
              <p className="team-name"> {competingTeam} </p>
              <p className="team-date"> {date} </p>
              <p className="team-venue"> {venue} </p>
              <p className="team-result"> {result} </p>
            </div>
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className="match-logo"
            />
          </div>
          <div className="details-info">
            <div className="info-item">
              <p className="label"> First Innings</p>
              <p className="value"> {firstInnings} </p>
            </div>
            <div className="info-item">
              <p className="label"> Second Innings</p>
              <p className="value"> {secondInnings}</p>
            </div>
            <div className="info-item">
              <p className="label"> Man Of The Match</p>
              <p className="value"> {manOfTheMatch}</p>
            </div>
            <div className="info-item">
              <p className="label"> Umpires</p>
              <p className="value"> {umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
