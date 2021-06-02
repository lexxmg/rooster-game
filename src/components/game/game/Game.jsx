
import './game.css';
import React from 'react';
import PartyForm from '../party-form/PartyForm';

const Game = (props) => {
  const { players, playerCount,
    setJackChecked, setOfBribes,
    partyForm, jackCount, partyFormReset, setOfBribesFormParty
  } = props;

  const [ showForm, setShowForm ] = React.useState(false);

  const arrPartTest = [];
  for (let i = 0; i < 40; i++) {
    arrPartTest.push(i);
  }

  return (
    <div className="game">
      {
        showForm &&
        <PartyForm
          setJackChecked={setJackChecked}
          setOfBribes={setOfBribes}
          setShowForm={setShowForm}
          partyForm={partyForm}
          jackCount={jackCount}
          partyFormReset={partyFormReset}
          setOfBribesFormParty={setOfBribesFormParty}
        />
      }

      <div className="game__wrapper">
        <div className="game__head fixed-container">
          {
            players.map(item => {
              return (
                <div className="game__player game-player"  key={item.id}>
                  <span>{item.point} </span>
                  <span className="game-player__name">{item.name}</span>
                  <span className="game-player__cash">{item.cash} руб.</span>
                  <span className=""> (+_{item.crossCount}) </span>
                  <span className=""> (o_{item.wheelCount}) </span>
                </div>
              )
            })
          }
        </div>

        <div className="part-game__wrapper">
          {
            arrPartTest.map(item => {
              return (
                <div className="" key={item}>{item} Lorem ipsum dolor sit amet, consectetur.</div>
              )
            })
          }
        </div>

        {
          // party.map((item, index) => {
          //   if (item.isSomeWin) {
          //     return (
          //       <div className="part-game" key={index}>
          //         <h2 className="part-game__title">партия {index + 1} выигрышь</h2>
          //
          //         <div className="part-game__inner">
          //           {
          //             item.players.map(item => {
          //               return (
          //                 <div className="part-game__item" key={item.id}>
          //                   <ul className="">
          //                     <li className="">{item.name}</li>
          //                     <li className="">{item.isWin && 'выиграл'}</li>
          //                   </ul>
          //                 </div>
          //               )
          //             })
          //           }
          //         </div>
          //       </div>
          //     )
          //   } else {
          //     return (
          //       <div className="part-game" key={index}>
          //         <h2 className="part-game__title">партия {index + 1}</h2>
          //
          //         <div className="part-game__inner">
          //           {
          //             item.players.map(item => {
          //               return (
          //                 <div className="part-game__item" key={item.id}>
          //                   {item.score}
          //                   {item.cross && <span> +</span>}
          //                   {item.wheel && <span> o</span>}
          //                 </div>
          //               )
          //             })
          //           }
          //         </div>
          //       </div>
          //     )
          //   }
          // })
        }
      </div>

      { (playerCount > 0) && <button onClick={() => {

        setShowForm(true);
        //setPartyGame(players[1].id, 3);
        //setPlayerScore(players[0].id, 7);
      }}>партия</button> }
    </div>
  )
}

export default Game;
