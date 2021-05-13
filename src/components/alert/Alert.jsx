
import './alert.css';

const Alert = (props) => {
  const { text, setShowAlert, setConfirmAlert } = props;

  return (
    <div className="alert">
      <div className="alert__content">
        <p className="alert__text">{text}</p>

        <div className="alert__inner">
          <button
            className="alert__btn"
            onClick={ () => { setShowAlert(false) } }
            >закрыть
          </button>

          <button
            className="alert__btn"
            onClick={ () => {
              setConfirmAlert(true);
              setShowAlert(false);
            } }
            >подтвердить
          </button>
        </div>
      </div>
    </div>
  )
}

export default Alert;
