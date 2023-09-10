import { useState } from 'react'
import './mainnav.css'




export default function MainNav () {
 
  const [open, setOpen] = useState(false)

 const handleClick = () => {
    setOpen(!open);
  }

  function handleKey(e) {
    if (e.keyCode === 13) {
      handleClick();
    }
  }

    return (
        <nav className="main__nav nav">
          <div className="nav__logo logo">
            <img className="logo__image" src="img/logo.png" alt="logo" />
          </div>
          <div  role='button' tabIndex={0} className="nav__burger burger" onClick={handleClick} onKeyDown={handleKey}>
            <span className="burger__line" />
            <span className="burger__line" />
            <span className="burger__line" />
          </div>

        {open ? (<div className="nav__menu menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="/#" className="menu__link">
                Главное
              </a>
            </li>
            <li className="menu__item">
              <a href="/#" className="menu__link">
                Мой плейлист
              </a>
            </li>
            <li className="menu__item">
              <a href="../signin.html" className="menu__link">
                Войти
              </a>
            </li>
          </ul>
        </div>) : null}

      </nav>
    )
}