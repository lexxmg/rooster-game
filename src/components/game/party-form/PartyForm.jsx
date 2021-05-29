
import './party-form.css';
import React from 'react';

const PartyForm = (props) => {
  const { setShow, players, setJackChecked } = props;

  const declOfNum = (number, titles) => {
    const cases = [2, 0, 1, 1, 1, 2];

    return titles[
      (number % 100 > 4 && number % 100 < 20)
        ? 2
        : cases[ (number % 10 < 5) ? number % 10 : 5 ]
    ];
  }

  React.useEffect(() => {
    //console.log(party);
  });

  return (
    <div className="party-form-wrapper">
      <div className="party-form">
        <div className="party-form__content">
          {
            players.map(item => {
              const bribes = [];
              for (let i = 1; i <= item.canTaceBribs; i++) {
                bribes.push(i);
              }
              return (
                <div className="party-form__player party-form-player" key={item.id}>
                  <div className="party-form-player-title__container">
                    <span className="party-form-player-title__player">{item.name}:</span>
                    <span className="party-form-player-title__score">
                      {item.numberOfBribes} - {declOfNum(item.numberOfBribes, ['взятка', 'взятки', 'взяток'])}
                    </span>
                    {item.cross && <span> +</span>}
                    {item.wheel && <span> o</span>}
                  </div>

                  <div className="party-form-player__options">
                    <label htmlFor={"jack" + item.id} className="">На мальчиках</label>
                    <input
                      className=""
                      id={"jack" + item.id}
                      type="checkbox"
                      onChange={() => { setJackChecked(item.id, !item.jackChecked) }}
                      checked={item.jackChecked}
                      disabled={false}
                    />
                  </div>

                  {
                    bribes.map((el, j) => {
                      return (
                        <button
                          className="" key={j}
                          onClick={() => { console.log('взяток', el) }}
                        >{el}
                        </button>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>

        <div className="party-form__btn-container">
          <button
            className="party-form__btn"
            disabled={false}
            onClick={() => {
              setShow(false);
            }}>применить
          </button>

          <button className="party-form__btn"
          onClick={() => {
            setShow(false);
            //setCountScore([0, 1, 2, 3, 4, 5]);
           }
          }>закрыть</button>

          <button className="party-form__btn" onClick={() => {
            //setCountScore([0, 1, 2, 3, 4, 5]);
          }}>сброс</button>
        </div>
      </div>
    </div>
  )
}

export default PartyForm;
