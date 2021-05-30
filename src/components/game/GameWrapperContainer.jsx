
import React from 'react';
import GameWrapper from './game-wrapper/GameWrapper';
import { getPlayers, getPlayerCount } from '../../redux/players-selector';
import { deleteBet } from '../../redux/bet-reducer';
import { deletePlayers, setOfBribes } from '../../redux/players-reducer';
import { createPartyForm, setJackChecked, partyFormReset, setOfBribesFormParty } from '../../redux/partyForm-reducer';
import { getPartyForm, getJackCount } from '../../redux/partyForm-selector';
import { connect } from 'react-redux';
import {} from '../../redux/game-reducer';

const GameWrapperContainer = (props) => {
  return <GameWrapper {...props} />
}

const mapStateToProps = (state) => {
  return {
    players: getPlayers(state),
    playerCount: getPlayerCount(state),
    partyForm: getPartyForm(state),
    jackCount: getJackCount(state)
  }
}

export default connect(mapStateToProps,
  {
    deletePlayers, deleteBet, setJackChecked,
    setOfBribes, createPartyForm, partyFormReset,
    setOfBribesFormParty
  })(GameWrapperContainer);
