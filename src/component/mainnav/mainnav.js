import { useState } from 'react'
import './mainnav.css'

export default function MainNav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
      {/* не пойму почему ругается но все работает */}
      <button className="nav__burger burger" onClick={() => setOpen(!open)}>
        <span className="burger__line" />
        <span className="burger__line" />
        <span className="burger__line" />
      </button>

      {open ? (
        <div className="nav__menu menu">
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
        </div>
      ) : null}
    </nav>
  )
}
