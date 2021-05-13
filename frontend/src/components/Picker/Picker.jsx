import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import generalDataFetch from '../../utilities/generalFetch';
import SportEvents from './SportEvents';

function Picker(props) {
  // eslint-disable-next-line react/destructuring-assignment
  const { leagueName } = props.location;
  const [selectedRound, setSelectedRound] = useState(1);
  const [roundEvents, setRoundEvents] = useState([]);
  const userId = useSelector((state) => state.user.userid);

  const rounds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  useEffect(async () => {
    const fetchedEvents = await generalDataFetch(
      `/roundEvents/${selectedRound}`,
    );
    setRoundEvents(fetchedEvents);
  }, [selectedRound]);

  function roundPickHandler(event) {
    event.preventDefault();
    setSelectedRound(event.target.value);
  }

  return (
    <div className="picker-main-container">
      <h2 className="selected-league-header">
        Selected league:&nbsp;
        {leagueName}
      </h2>
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
          ? roundEvents.map((sportEvent) => (
            <SportEvents eventData={sportEvent} key={sportEvent.idEvent} />))
          : 'Loading'}
      </div>
    </div>
  );
}

export default Picker;
