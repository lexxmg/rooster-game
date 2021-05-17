
import './party-form.css';
import React from 'react';

const PartyForm = (props) => {
  const { setShow, setPartyGame, players,
    setPlayerPoint, setPartyWin, setPlayerWheelIncrement,
    setPlayerCrossIncrement, resetPlayer, setCachPlayer
  } = props;

  const initialParty = players.map(item => {
    return {...item,
        id: item.id, name: item.name, score: 0, point: item.point,
        isTouched: false, isJack: false, cross: false,
        wheel: false, isWin: false
      }
  });
  const [ party, setParty ] = React.useState(initialParty);
  //const [ gain, setGain ] = React.useState(0);
  //const [ move, setMove ] = React.useState(false);

  // console.log(party.length !== 0);
  const [ scoreCount, setCountScore ] = React.useState([0, 1, 2, 3, 4, 5]);

  React.useEffect(() => {
    //console.log(party);
    const win = party.find((item) => item.point <= 0);
    //let gain =

    if ( win ) {
      console.log(win.name, 'выиграл');
      console.log(party);
      players.forEach(item => {
        if (win.id !== item.id) {
          const losing = (+item.cash - 10) - (item.wheelCount * 5) - (item.crossCount * 10);
          //setGain(gain + losing);
          //setCachPlayer(win.id, +item.cash + 10);
          setCachPlayer(item.id, losing);
        }
      });
      setCachPlayer(win.id, +win.cash + 10);
      setPartyWin(party);
      resetPlayer();
      setShow(false);
    }
  }, [players, party, setPartyWin, setShow, resetPlayer, setCachPlayer]);

  const isTouched = (arr, id) => {
    return arr.find(item => {
      return item.id === id;
    }).isTouched
  }

  const setJack = (arr, id) => {
    setParty(arr.map(obj => {
        if (obj.id === id) {
          return {...obj, isJack: !obj.isJack};
        } else {
          return obj;
        }
      })
    )
  }

  const getJack = (arr, id) => {
    return arr.find(obj => obj.id === id).isJack;
  }

  const isMaxJackCount = (arr) => {
    return arr.filter(elem => elem.isJack).length >= 2;
  }

  const pointCalc = (score, currentPoint, getJack) => {
    if ( score !== 0 && !getJack) {
      return currentPoint - score;
    } else if ( score !== 0 && getJack ) {
      return currentPoint - ( score + 5 );
    } else if ( score === 0 && currentPoint <= 10 && !getJack ) {
      return currentPoint + 5;
    } else if ( score === 0 && currentPoint > 10 && !getJack ) {
      return currentPoint;
    } else if ( score === 0 && getJack ) {
      return currentPoint;
    }
  }

  const declOfNum = (number, titles) => {
    const cases = [2, 0, 1, 1, 1, 2];

    return titles[
      (number % 100 > 4 && number % 100 < 20)
        ? 2
        : cases[ (number % 10 < 5) ? number % 10 : 5 ]
    ];
  }


  return (
    <div className="party-form-wrapper">
      <div className="party-form">
        <div className="party-form__content">
          {
            players.map((item, i) => {
              return (
                <div className="party-form__player party-form-player" key={item.id}>
                  <div className="party-form-player-title__container">
                    <span className="party-form-player-title__player">{item.name}:</span>
                    <span className="party-form-player-title__score">
                      {party[i].score} - {declOfNum(party[i].score, ['взятка', 'взятки', 'взяток'])}
                    </span>
                    {party[i].cross && <span> +</span>}
                    {party[i].wheel && <span> o</span>}
                  </div>

                  <div className="party-form-player__options">
                    <label htmlFor={"jack" + item.id} className="">На мальчиках</label>
                    <input
                      className=""
                      id={"jack" + item.id}
                      type="checkbox"
                      onChange={() => { setJack(party, item.id) }}
                      checked={getJack(party, item.id)}
                      disabled={isTouched(party, item.id) || (!getJack(party, item.id) && isMaxJackCount(party))}
                    />
                  </div>

                  {
                    isTouched(party, item.id)
                      ? <span>Записано</span>
                      : scoreCount.map((el, j) => {
                        return (
                          <button className="" key={j} onClick={() => {
                            if ( (el === 0) && !getJack(party, item.id) ) {
                              setPlayerWheelIncrement(item.id);
                            }

                            if ( getJack(party, item.id) && el === 0 ) {
                              setPlayerCrossIncrement(item.id);
                            }

                            setParty( party.map(obj => {
                                if (obj.id === item.id) {
                                  const point = pointCalc(el, party[i].point, getJack(party, item.id));

                                  return {...obj,
                                    score: (el === 0)
                                      ? el
                                      : getJack(party, item.id)
                                          ? el + 5
                                          : el,
                                    isTouched: true,
                                    wheel: ( (el === 0) && !getJack(party, item.id) ) || false,
                                    cross: getJack(party, item.id) && el === 0,
                                    point: point,
                                    isWin: point <= 0
                                  };
                                } else {
                                  return obj;
                                }
                              })
                            )
                            //console.log(arr);
                            //setMove(party.some(e => e.isTouched));
                            //console.log(party.some(e => e.isTouched));
                            //console.log(isMaxJackCount(party));

                            setCountScore( scoreCount.filter(elem => {
                                  let maxScore = Math.max(...party.map(part => {
                                    if (part.isJack) {
                                      return part.score - 5;
                                    } else {
                                      return part.score;
                                    }
                                  }), 0);
                                  //if ( getJack(party, item.id) ) maxScore = maxScore - 5;

                                  if ( party.length === 2 || party.some(e => e.isTouched) ) {
                                    return elem + el === 5 - maxScore;
                                  } else {
                                    return elem + el <= 5;
                                  }
                                }
                              )
                            );
                          }}>{el}
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
            disabled={!party.every(elem => elem.isTouched)}
            onClick={() => {
              //const arr = [{id: players[0].id, score: 5}, {id: players[1].id, score: 0}];
              setPartyGame(party);
              setPlayerPoint(party);
              setParty(initialParty);
              setCountScore([0, 1, 2, 3, 4, 5]);
              setShow(false);
            }}>применить
          </button>

          <button className="party-form__btn" onClick={() => {setShow(false); setCountScore([0, 1, 2, 3, 4, 5]); }}>закрыть</button>
          <button className="party-form__btn" onClick={() => {
            setCountScore([0, 1, 2, 3, 4, 5]);
            setParty(initialParty);
          }}>сброс</button>
        </div>
      </div>
    </div>
  )
}

export default PartyForm;
