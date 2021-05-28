
import './form-player.css';
import React from 'react';
import { Formik, Field, Form } from 'formik';
import cn from 'classnames';

const FormPlayer = (props) => {
  const { createNewPlayer, deletePlayer, players,
    playerCount, setIsNewGame, setBet, gameBet,
    wheelBet, crossBet
  } = props;

  const  isNumber = (n) => {
    return !isNaN( parseFloat(n) ) && isFinite(n);
  }

  const createGame = (playerCount >= 2 && playerCount < 4);

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'поле имя должно быть запольнено';
    } else if ( !/^[a-zа-яё]+$/i.test(values.name) ) {
      errors.name = 'в этом поле можно вводить только буквы';
    }

    if ( values.cash && !isNumber(values.cash) ) {
      errors.cash = 'в этом поле можно вводить только цифры';
    } else if (!values.cash) {
      errors.cash = 'поле счет должно быть запольнено';
    }

    if ( !isNumber(values.game) || !isNumber(values.wheel) || !isNumber(values.cross) ) {
      errors.bet = 'можно вводить только цифры';
    } else if ( +values.game === 0 || +values.wheel === 0 || +values.cross === 0 ) {
      errors.bet = 'все значения должнны быть больше нуля';
    }

    //console.log(errors);
    return errors;
  }

  return (
    <div className="form-player">
      <Formik initialValues={{
        name: '',
        cash: '',
        game: gameBet,
        wheel: wheelBet,
        cross: crossBet
      }}
      onSubmit={(values, actions) => {
        //console.log(values);
        createNewPlayer(values.name, +values.cash);

        setBet(+values.game, +values.wheel, +values.cross);
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
            <div className={
              cn('form-player__bat-container form-player-bat-container',
                  {'form-player-bat-container--error': param.errors.bet}
                )
              }
            >
              <div className="form-player-bat-container__inner">
                <label htmlFor="game" className="form-player-bat-container__label">Кон
                  <Field
                    className="form-player-bat-container__input"
                    id="game" name="game"
                  />
                </label>

                <label htmlFor="wheel" className="form-player-bat-container__label">Колесо
                  <Field
                    className="form-player-bat-container__input"
                    id="wheel" name="wheel"
                  />
                </label>

                <label htmlFor="cross" className="form-player-bat-container__label">Крест
                  <Field
                    className="form-player-bat-container__input"
                    id="cross" name="cross"
                  />
                </label>
              </div>

              {
                param.errors.bet &&
                <span className="form-player-bat-container__text">*{param.errors.bet}</span>
              }
            </div>

            <label className="form-player__label" htmlFor="name">Имя игрока</label>

            <div className="form-player__input-wrapper">
              {
                param.errors.name && param.touched.name &&
                  <div className="form-player__errors">{param.errors.name}</div>
              }
              <Field
                className={
                  cn( 'form-player__input',
                    {'form-player__input--invalid': param.errors.name && param.touched.name}
                  )
                }
                id="name" name="name"
                placeholder="Имя игрока"
                disabled={players.length >= 3}
              />
            </div>

            <label className="form-player__label" htmlFor="cash">Счет</label>

            <div className="form-player__input-wrapper">
              {
                param.errors.cash && param.touched.cash &&
                  <div className="form-player__errors">{param.errors.cash}</div>
              }
              <Field
                className={
                  cn( 'form-player__input',
                    {'form-player__input--invalid': param.errors.cash && param.touched.cash}
                  )
                }
                id="cash"
                name="cash"
                placeholder="Счет игрока"
                disabled={playerCount >= 3}
               />
             </div>

            <button className="form-player__submit"
              type="submit"
              disabled={!(param.values.name && param.values.cash)}
            >Добавить игрока
            </button>
          </Form>
        )
      }}
      </Formik>

      <ul className="form-player__list form-player-list">
        {
          players.map((item, index) => {
            return (
              <li className="form-player-list__item" key={item.id}>
                <h2 className="form-player-list__title">Игрок № {index + 1}</h2>

                <span className="form-player-list__text">Имя: {item.name}</span>
                <span className="form-player-list__text">Счет: {item.cash} руб.</span>

                <button
                  className="form-player-list__btn"
                  onClick={() => {deletePlayer(item.id)}}>
                  удалить
                </button>
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
