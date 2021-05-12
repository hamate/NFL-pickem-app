import React, { useState } from 'react';

function SportEvents(params) {
  const [selected, setSelected] = useState('');
  const sportEvent = params.eventData;

  function handleTeamSelection(selectedTeam) {
    // const team = document.querySelector(`[id="${selectedTeam}"]`);
    // const oldClass = team.getAttribute('class');
    setSelected(selectedTeam);
    // if (!oldClass) {
    //   team.setAttribute('style', 'opacity: 100%;');
    // } else {
    //   team.setAttribute('style', 'opacity: 20%;');
    // }

    // team.setAttribute('style', 'opacity: 100%;');
  }

  return (
    <div>
      <form>
        <div className="picker-event-container" key={sportEvent.idEvent}>
          <div
            className="picker-team picker-away-team"
            id={sportEvent.idAwayTeam}
          >
            <input
              type="radio"
              name={sportEvent.idEvent}
              id={`${sportEvent.idEvent}-away`}
              className="picker-input"
              value={sportEvent.idAwayTeam}
              onChange={(e) => handleTeamSelection(e.target.value)}
            />
            <label
              htmlFor={`${sportEvent.idEvent}-away`}
              className="team-label"
            >
              <img
                src={`../../../assets/images/teamLogos/${sportEvent.strAwayTeam
                  .split(' ')
                  .join('_')}_Logos.gif`}
                alt="Away team"
                className="picker-team-logo"
              />
              <span className="picker-team-name picker-away-team-name">
                {sportEvent.strAwayTeam}
              </span>
            </label>
          </div>
          @
          <div
            className="picker-team picker-home-team"
            id={sportEvent.idHomeTeam}
          >
            <input
              type="radio"
              name={sportEvent.idEvent}
              value={sportEvent.idHomeTeam}
              id={`${sportEvent.idEvent}-home`}
              className="picker-input"
              onChange={(e) => setSelected(e.target.value)}
            />
            <label
              htmlFor={`${sportEvent.idEvent}-home`}
              className="team-label"
            >
              <img
                src={`../../../assets/images/teamLogos/${sportEvent.strHomeTeam
                  .split(' ')
                  .join('_')}_Logos.gif`}
                alt="Home team"
                className="picker-team-logo"
              />
              <span className="picker-team-name picker-home-team-name">
                {sportEvent.strHomeTeam}
              </span>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SportEvents;
