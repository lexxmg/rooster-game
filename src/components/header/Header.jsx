
import './header.css';
import logo from '../../assets/images/rooster.png';

const Header = (props) => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list header-list">
          <li className="header-list__item">правила</li>
        </ul>
      </nav>

      <div className="header__logo">
        <img src={logo} alt="logo" className="header__img"/>
      </div>
    </header>
  )
}

export default Header;
