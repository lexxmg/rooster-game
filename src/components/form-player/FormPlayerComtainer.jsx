
import FormPlayer from './FormPlayer';
import { connect } from 'react-redux';
import { createPartyForm } from '../../redux/partyForm-reducer';
import { createNewPlayer, deletePlayer } from '../../redux/players-reducer';
import { getPlayers, getPlayerCount } from '../../redux/players-selector';
import { setBet } from '../../redux/bet-reducer';
import { getGameBet, getWheelBet, getCrossBet } from '../../redux/bet-selector';

const FormPlayerContainer = (props) => {
  return <FormPlayer {...props}/>
}

const mapStateToProps = (state) => {
  return {
    players: getPlayers(state),
    playerCount: getPlayerCount(state),
    gameBet: getGameBet(state),
    wheelBet: getWheelBet(state),
    crossBet: getCrossBet(state)
  }
}

export default connect(mapStateToProps,
  { createNewPlayer, deletePlayer, setBet, createPartyForm }
)(FormPlayerContainer);
