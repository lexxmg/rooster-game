
import React from 'react';
import GameWrapper from './game-wrapper/GameWrapper';
import { connect } from 'react-redux';
import { setNewPlayer, setPartyGame,
  resetGame, setPlayerPoint, setPartyWin,
  setPlayerWheelIncrement, setPlayerCrossIncrement,
  resetPlayer, setCachPlayer
} from '../../redux/game-reducer';

//const playerExample = {name: 'lexx', cash: 0};

const GameWrapperContainer = (props) => {
  //const {setNewPlayer} = props;

  // React.useEffect(() => {
  //   setNewPlayer('lexx', 10);
  // }, [setNewPlayer]);

  return <GameWrapper {...props} />
}

const mapStateToProps = (state) => {
  return {
    players: state.game.players,
    party: state.game.party,
  }
}

export default connect(mapStateToProps, {
    setNewPlayer, setPartyGame,
    resetGame, setPlayerPoint, setPartyWin,
    setPlayerWheelIncrement, setPlayerCrossIncrement,
    resetPlayer, setCachPlayer
  })(GameWrapperContainer);
