
import './game-wrapper.css';
import React from 'react';
import Confirm from '../../confirm/Confirm';
import Game from '../game/Game';
import FormPlayerContainer from '../../form-player/FormPlayerComtainer';

const GameWrapper = (props) => {
  const { setPartyGame, party, players, resetGame, setPlayerScore } = props;

  const [ isNewGame, setIsNewGame ] = React.useState(false);
  const [ showConfirm, setShowConfirm ] = React.useState(false);

  const handler = () => {
    resetGame();
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
        if (players.length > 0) {
          setShowConfirm(true);
        } else {
          setIsNewGame(true);
        }
      }}>Новая игра</button>

      {
        isNewGame
          ? <FormPlayerContainer setIsNewGame={setIsNewGame}/>
          : <Game players={players} party={party} setPartyGame={setPartyGame} setPlayerScore={setPlayerScore} />
      }
    </div>
  )
}

export default GameWrapper;
