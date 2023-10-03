
import { useState } from 'react'
import * as S from './mainnav.styled'



export default function MainNav({handleLogout}) {
  const [open, setOpen] = useState(false)




  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImg src="img/logo.png" alt="logo" />
      </S.NavLogo>
      {/* не пойму почему ругается но все работает */}
      <S.NavBurger onClick={() => setOpen(!open)}>
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>

      {open ? (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <S.MenuLink to="/" >
                Главное
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink to="/favorites" >
                Мой плейлист
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem onClick={handleLogout}>
              <S.MenuLink to="/signin">
                Войти
              </S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      ) : null}
    </S.MainNav>
  )
}
