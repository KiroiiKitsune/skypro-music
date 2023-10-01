import * as S from '../mainnav/mainnav.styled'


export default function NavMenuNF() {

    return (
        <S.MainNav>
          <S.NavLogo>
            <S.LogoImg src='/img/logo.png' alt="logo" />
          </S.NavLogo>
          <S.NavBurger>
            <S.BurgerLine />
            <S.BurgerLine />
            <S.BurgerLine />
          </S.NavBurger>
        </S.MainNav>
    )
}