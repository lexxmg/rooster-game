
import React from 'react';
import Alert from '../alert/Alert';

const WithAlert = (Component) => {
  const AlertComponent = (props) => {
    const [ showAlert, setShowAlert ] = React.useState(false);
    const [ confirmAlert, setConfirmAlert ] = React.useState(false);
    const [ textAlert, setTextAlert ] = React.useState('');

    return (
      <React.Fragment>
        {showAlert && <Alert setShowAlert={setShowAlert} setConfirmAlert={setConfirmAlert} text={textAlert} />}

        <Component {...props}
          setShowAlert={setShowAlert}
          setTextAlert={setTextAlert}
          confirmAlert={confirmAlert}
          setConfirmAlert={setConfirmAlert}
        />
      </React.Fragment>
    )
  }

  return AlertComponent;
}

export default WithAlert;
