
import './party-form.css';
import React from 'react';

const PartyForm = (props) => {
  const { setShowForm, setJackChecked,
    partyForm, setOfBribes, jackCount,
    partyFormReset, setOfBribesFormParty
  } = props;

  const declOfNum = (number, titles) => {
    const cases = [2, 0, 1, 1, 1, 2];

    return titles[
      (number % 100 > 4 && number % 100 < 20)
        ? 2
        : cases[ (number % 10 < 5) ? number % 10 : 5 ]
    ];
  }

  // React.useEffect(() => {
  //   createPartyForm(players);
  // }, [players, createPartyForm]);

  return (
    <div className="party-form-wrapper">
      <div className="party-form">

        <span>{jackCount}</span>

        <div className="party-form__content">
          {
            partyForm.map(item => {
              // const bribes = [];
              // for (let i = 0; i <= item.canTaceBribs; i++) {
              //   bribes.push(i);
              // }
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
                      onChange={() => {
                        setJackChecked(item.id, !item.jackChecked);
                      }}
                      checked={item.jackChecked}
                      disabled={jackCount >= 2 && !item.jackChecked}
                    />
                  </div>

                  {
                    item.canTaceBribs.map((el, j) => {
                      return (
                        <button
                          className="" key={j}
                          onClick={() => setOfBribesFormParty(item.id, el) }
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
              partyForm.forEach(item => {
                setOfBribes(item.id, item.numberOfBribes, item.isJack);
              });
              partyFormReset();
              setShowForm(false);
            }}>применить
          </button>

          <button className="party-form__btn"
          onClick={() => {
            setShowForm(false);
            //setCountScore([0, 1, 2, 3, 4, 5]);
           }
          }>закрыть</button>

          <button className="party-form__btn" onClick={partyFormReset}>сброс</button>
        </div>
      </div>
    </div>
  )
}

export default PartyForm;
