import React, { useState, useEffect } from 'react';
import generalDataFetch from '../../utilities/generalFetch';

function Picker() {
  const [selectedRound, setSelectedRound] = useState(1);
  const [roundEvents, setRoundEvents] = useState([]);

  const rounds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  useEffect(async () => {
    const fetchedEvents = await generalDataFetch(`/roundEvents/${selectedRound}`);
    setRoundEvents(fetchedEvents);
  }, [selectedRound]);

  function roundPickHandler(event) {
    event.preventDefault();
    setSelectedRound(event.target.value);
  }

  return (
    <div className="picker-main-container">
      <header>Make your picks</header>
      <label htmlFor="round-selector">
        Selected round:&nbsp;
        <select
          id="round-selector"
          className="round-numbers"
          name="rounds"
          onChange={roundPickHandler}
        >
          {rounds.map((round) => (
            <option className="round" value={round} key={round}>
              {round}
            </option>
          ))}
        </select>
      </label>
      <div className="events-main-container">
        {roundEvents.length > 0
          ? roundEvents.map((event) => (
            <div className="event-container" key={event.idEvent}>
              <div className="team away-team">
                <img className="team-logo away-team-logo" src={`../../../assets/images/teamLogos/${event.strAwayTeam.split(' ').join('_')}_Logos.gif`} alt="logo" />
                <span className="team-name away-team-name">{event.strAwayTeam}</span>
              </div>
              @
              <div className="team home-team">
                <img className="team-logo home-team-logo" src={`../../../assets/images/teamLogos/${event.strHomeTeam.split(' ').join('_')}_Logos.gif`} alt="logo" />
                <span className="team-name home-team-name">{event.strHomeTeam}</span>
              </div>
            </div>
          ))
          : 'Loading'}
      </div>
    </div>
  );
}

export default Picker;
