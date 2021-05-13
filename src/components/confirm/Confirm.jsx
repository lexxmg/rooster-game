
import './confirm.css';

const Confirm = (props) => {
  const { text, setShowConfirm, showConfirm, handler } = props;

  return (
    showConfirm &&
    <div className="confirm">
      <div className="confirm__content">
        <p className="confirm__text">{text}</p>

        <div className="confirm__inner">
          <button
            className="confirm__btn"
            onClick={ () => { setShowConfirm(false) } }
            >закрыть
          </button>

          <button
            className="confirm__btn"
            onClick={ () => {
              handler();
              setShowConfirm(false);
            } }
            >подтвердить
          </button>
        </div>
      </div>
    </div>
  )
}

export default Confirm;
