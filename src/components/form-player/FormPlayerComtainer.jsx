
import FormPlayer from './FormPlayer';
import { connect } from 'react-redux';
//import { setNewPlayer, deletePlayer } from '../../redux/game-reducer';
import { createNewPlayer, deletePlayer } from '../../redux/players-reducer';
import { getPlayers, getPlayersCount } from '../../redux/players-selector';
import { setBet } from '../../redux/bet-reducer';
import { getGameBet, getWheelBet, getCrossBet } from '../../redux/bet-selector';

const FormPlayerContainer = (props) => {
  return <FormPlayer {...props}/>
}

const mapStateToProps = (state) => {
  return {
    players: getPlayers(state),
    playerCount: getPlayersCount(state),
    gameBet: getGameBet(state),
    wheelBet: getWheelBet(state),
    crossBet: getCrossBet(state)
  }
}

export default connect(mapStateToProps,
  { createNewPlayer, deletePlayer, setBet }
)(FormPlayerContainer);
