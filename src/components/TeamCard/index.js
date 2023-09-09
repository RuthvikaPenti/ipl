// Write your code here

import './index.css'
import {Link} from 'react-router-dom'
import {Component} from 'react'

class TeamCard extends Component {
  render() {
    const {teamsData} = this.props
    const {name, imageUrl, id} = teamsData

    return (
      <Link to={`/team-matches/${id}`} className="link-item">
        <li className="card">
          <img src={imageUrl} alt={`${name}`} className="image" />
          <p className="name"> {name} </p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
