
import React from 'react';
import GameWrapper from './game-wrapper/GameWrapper';
import { connect } from 'react-redux';
import { setNewPlayer, setPartyGame, resetGame, setPlayerScore } from '../../redux/game-reducer';

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
    players: state.players,
    party: state.party,
  }
}

export default connect(mapStateToProps, {
    setNewPlayer, setPartyGame,
    resetGame, setPlayerScore
  })(GameWrapperContainer);
