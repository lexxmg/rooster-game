
import React from 'react';
import GameWrapper from './game-wrapper/GameWrapper';
import { getPlayers, getPlayerCount } from '../../redux/players-selector';
import { deleteBet } from '../../redux/bet-reducer';
import { deletePlayers, setJackChecked, setOfBribes, resetBribes } from '../../redux/players-reducer';
import { connect } from 'react-redux';
import {} from '../../redux/game-reducer';

const GameWrapperContainer = (props) => {
  return <GameWrapper {...props} />
}

const mapStateToProps = (state) => {
  return {
    players: getPlayers(state),
    playerCount: getPlayerCount(state)
  }
}

export default connect(mapStateToProps,
  {
    deletePlayers, deleteBet, setJackChecked,
    setOfBribes, resetBribes
  })(GameWrapperContainer);
