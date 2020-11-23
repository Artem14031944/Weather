import React from 'react';
import './Card.css';

class Card extends React.Component {

  render() {    
    const ms = this.props.day.dt * 1000;
    const weekdayName = new Date(ms).toLocaleString('ru', {weekday: 'long'});

    const imgURL = "owf owf-"+ this.props.day.weather[0].id +" owf-5x icon-style"

    return (
      <div className="col-auto">
        <div className="card bg-light">
          <h3 className="card-title">{weekdayName}</h3>
          <i className={imgURL}></i>
          <h2>{Math.round(this.props.day.main.temp)} °C</h2>
          <div className="card-body">
            <p className="card-text">{this.props.day.weather[0].description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Card
