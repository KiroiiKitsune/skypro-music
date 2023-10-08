import * as S from '../mainsidebar/mainbar.style'

export default function SideBarNF() {
    return (
        <S.MainSidebar>
          <S.SidebarPersona>
            <S.SidebarPersonalName> </S.SidebarPersonalName>
            <S.SidebarIcon>
              <svg alt="logout">
                <use xlinkHref="/img/icon/sprite.svg#logout" />
              </svg>
            </S.SidebarIcon>
          </S.SidebarPersona>          
        </S.MainSidebar>
    )
}