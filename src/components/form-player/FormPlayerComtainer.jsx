
import FormPlayer from './FormPlayer';
import { connect } from 'react-redux';
import { setNewPlayer, deletePlayer } from '../../redux/game-reducer';

const FormPlayerContainer = (props) => {
  return <FormPlayer {...props}/>
}

const mapStateToProps = (state) => {
  return {
    players: state.players
  }
}

export default connect(mapStateToProps, { setNewPlayer, deletePlayer })(FormPlayerContainer);
