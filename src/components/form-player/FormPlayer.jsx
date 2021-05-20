
import './form-player.css';
import React from 'react';
import { Formik, Field, Form } from 'formik';

const FormPlayer = (props) => {
  const { setNewPlayer, deletePlayer, players, setIsNewGame } = props;

  const createGame = (players.length >= 2 && players.length < 4);

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'поле имя должно быть запольнено';
    } else if (!values.cash) {
      errors.cash = 'поле счет должно быть запольнено';
    }

    return errors;
  }

  return (
    <div className="form-player">
      <Formik initialValues={{
        name: '',
        cash: ''
      }}
      onSubmit={(values, actions) => {
        //console.log(values);
        setNewPlayer(values.name, values.cash);
        //actions.resetForm({});
        actions.setFieldValue('name', '');
        actions.setFieldValue('cash', '');
        actions.setTouched({});
      }}
      validate={validate}
      >
      {(param) => {
        //console.log(param);
        return (
          <Form className="form-player__form">
            <label className="form-player__label" htmlFor="name">Имя игрока</label>
            <Field
              className="form-player__input"
              id="name" name="name"
              placeholder="Имя игрока"
              disabled={players.length >= 3}
            />

            <label className="form-player__label" htmlFor="cash">Счет</label>
            <Field
              className="form-player__input"
              id="cash"
              name="cash"
              placeholder="Счет игрока"
              disabled={players.length >= 3}
             />

            <button className="form-player__submit"
              type="submit"
              disabled={!(param.values.name && param.values.cash)}
            >Добавить игрока
            </button>

            {param.errors.name && param.touched.name && <span>{param.errors.name}</span>}
            {param.errors.cash && param.touched.cash && <span>{param.errors.cash}</span>}
          </Form>
        )
      }}
      </Formik>

      <ul className="form-player__list form-player-list">
        {
          players.map((item, index) => {
            return (
              <li className="form-player-list__item" key={item.id}>
                <span className="form-player-list__text">Игрок № {index + 1} {item.name}</span>
                <span className="form-player-list__text">Счет {item.cash} руб.</span>

                <button className="" onClick={() => {deletePlayer(item.id)}}>удалить</button>
              </li>
            )
          })
        }
      </ul>

      <div className="form-player__btn-container form-player-btn-container">
        {
          createGame &&
            <button
              className="form-player-btn-container__btn"
              onClick={() => {
                setIsNewGame(false);
              }}
            >Создать игру
          </button>
        }

        <button className="form-player-btn-container__btn" onClick={() => setIsNewGame(false)}>Отмена</button>
      </div>
    </div>
  )
}

export default FormPlayer;
