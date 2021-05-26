
import FormPlayer from './FormPlayer';
import { connect } from 'react-redux';
//import { setNewPlayer, deletePlayer } from '../../redux/game-reducer';
import { createNewPlayer, deletePlayer } from '../../redux/players-reducer';
import { getPlayers, getPlayersCount } from '../../redux/players-selector';

const FormPlayerContainer = (props) => {
  return <FormPlayer {...props}/>
}

const mapStateToProps = (state) => {
  return {
    players: getPlayers(state),
    playerCount: getPlayersCount(state)
  }
}

export default connect(mapStateToProps, { createNewPlayer, deletePlayer })(FormPlayerContainer);
