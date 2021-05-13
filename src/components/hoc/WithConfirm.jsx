
import React from 'react';
import Confirm from '../confirm/Confirm';

const WithConfirm = (text) => {
  return (Component) => {
    const ConfirmComponent = (props) => {
      const [ showConfirm, setShowConfirm ] = React.useState(false);
      const [ handler, setHandler ] = React.useState(false);

      return (
        <React.Fragment>
          {showConfirm && <Confirm setShowConfirm={setShowConfirm} setHandler={setHandler} text={text} />}

          <Component {...props}
            setShowConfirm={setShowConfirm}
            handler={handler}
            setHandler={setHandler}
          />
        </React.Fragment>
      )
    }

    return ConfirmComponent;
  }
}

export default WithConfirm;
