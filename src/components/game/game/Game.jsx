
import './game.css';
import React from 'react';
import PartyForm from '../party-form/PartyForm';

const Game = (props) => {
  const { players, party, setPlayerPoint,
    setPartyWin, setPlayerWheelIncrement,
    setPlayerCrossIncrement, resetPlayer
  } = props;

  const [ showForm, setShowForm ] = React.useState(false);

  return (
    <div className="game">
      {
        showForm &&
        <PartyForm
          setShow={setShowForm}
          setPlayerPoint={setPlayerPoint}
          setPartyGame={props.setPartyGame}
          players={props.players}
          setPartyWin={setPartyWin}
          setPlayerWheelIncrement={setPlayerWheelIncrement}
          setPlayerCrossIncrement={setPlayerCrossIncrement}
          resetPlayer={resetPlayer}
        />
      }

      <div className="game__head fixed-container">
        {
          players.map(item => {
            return (
              <div className="game__player game-player"  key={item.id}>
                <span>{item.point} </span>
                <span className="game-player__name">{item.name}</span>
                <span className="game-player__cash">{item.cash} руб.</span>
                <span className=""> (+_{item.crossCount}) </span>
                <span className=""> (o_{item.wheelCount}) </span>
              </div>
            )
          })
        }
      </div>

      {
        party.map((item, index) => {
          if (item.isSomeWin) {
            return (
              <div className="part-game" key={index}>
                <h2 className="part-game__title">партия {index + 1} выигрышь</h2>

                <div className="part-game__inner">
                  {
                    item.players.map(item => {
                      return (
                        <div className="part-game__item" key={item.id}>
                          <ul className="">
                            <li className="">{item.name}</li>
                            <li className="">{item.isWin && 'выиграл'}</li>
                          </ul>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          } else {
            return (
              <div className="part-game" key={index}>
                <h2 className="part-game__title">партия {index + 1}</h2>

                <div className="part-game__inner">
                  {
                    item.players.map(item => {
                      return (
                        <div className="part-game__item" key={item.id}>
                          {item.score}
                          {item.cross && <span> +</span>}
                          {item.wheel && <span> o</span>}
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          }
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
