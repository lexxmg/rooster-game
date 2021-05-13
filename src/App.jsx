
import './app.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import GameWrapperContainer from './components/game/GameWrapperContainer';

function App() {
  return (
    <div className="app">
      <Header />

      <main className="app__main">
        <GameWrapperContainer />
      </main>

      <Footer />
    </div>
  );
}

export default App;
