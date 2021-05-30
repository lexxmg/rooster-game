
import './game-wrapper.css';
import React from 'react';
import Confirm from '../../confirm/Confirm';
import Game from '../game/Game';
import FormPlayerContainer from '../../form-player/FormPlayerComtainer';

const GameWrapper = (props) => {
  const {
    players, playerCount, deletePlayers,
    deleteBet, setJackChecked, setOfBribes,
    createPartyForm, partyForm
  } = props;

  const [ isNewGame, setIsNewGame ] = React.useState(false);
  const [ showConfirm, setShowConfirm ] = React.useState(false);

  const handler = () => {
    deleteBet();
    deletePlayers();
    setIsNewGame(true);
  }

  return (
    <div className="game-wrapper fixed-container">
      <Confirm
        text='Создать новую игру? теукущая будет удалена:'
        showConfirm={showConfirm}
        setShowConfirm={setShowConfirm}
        handler={handler}
      />

      <button onClick={() => {
        if (playerCount > 0) {
          setShowConfirm(true);
        } else {
          setIsNewGame(true);
        }
      }}>Новая игра</button>

      {
        isNewGame
          ? <FormPlayerContainer setIsNewGame={setIsNewGame}/>
          : <Game
              players={players}
              playerCount={playerCount}
              setOfBribes={setOfBribes}
              setJackChecked={setJackChecked}
              createPartyForm={createPartyForm}
              partyForm={partyForm}
            />
      }
    </div>
  )
}

export default GameWrapper;
