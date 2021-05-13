
import './game.css';
import React from 'react';
import PartyForm from '../party-form/PartyForm';

const Game = (props) => {
  const { players, party } = props;

  const [ showForm, setShowForm ] = React.useState(false);

  return (
    <div className="game">
      {
        showForm &&
        <PartyForm
          setShow={setShowForm}
          setPartyGame={props.setPartyGame}
          players={props.players}
        />
      }

      <div className="game__head">
        {
          players.map(item => {
            return (
              <div className="game__player game-player"  key={item.id}>
                <span className="game-player__name">{item.name}</span>
                <span className="game-player__cash">{item.cash} руб.</span>
              </div>
            )
          })
        }
      </div>

      {
        party.map((item, index) => {
          return (
            <div className="part-game" key={index}>
              <h2 className="part-game__title">партия {index + 1}</h2>

              <div className="part-game__inner">
                {
                  item.players.map(item => {
                    return (
                      <div className="part-game__item" key={item.id}>{item.score}</div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }

      { (players.length > 0) && <button onClick={() => {

        setShowForm(true);
        //setPartyGame(players[1].id, 3);
        //setPlayerScore(players[0].id, 7);
      }}>партия</button> }
    </div>
  )
}

export default Game;
