import React from 'react';
import Card from '../card/card';
import './Weather.css'

const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=Minsk&lang=ru&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27";

class Weather extends React.Component {
  state = {
    days: []
  }
  componentDidMount = () => {
    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("21:00:00"))
      this.setState({days: dailyData})
    })
  }

  formatCards = () => {
    return this.state.days.map((day, index) => <Card day={day} key={index}/>)
  }

  render() {
    return (
      <div className="container">
      <h1 className="display-1 jumbotron">5-Day Forecast.</h1>
      <h5 className="display-5 text-muted">Minsk</h5>
       <div className="weather">
       <div className="weather-item">
          {this.formatCards()}
        </div>
       </div>
        
      </div>
    )
  }
}

export default Weather;
