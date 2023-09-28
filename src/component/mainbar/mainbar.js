import Skeleton from 'react-loading-skeleton'
import * as S from './mainbar.style'
import 'react-loading-skeleton/dist/skeleton.css'


export default function SideBar({load}) {
 

 

  return (
    <S.MainSidebar>
      <S.SidebarPersona>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersona>
      <S.SidebarBlock> 
        <S.SidebarList>
          <S.SidebarItem> 
            <S.SidebarLink  href="/#">
              {load ? (<Skeleton style={{ height: '150px' }}/>) : (<S.SidebarImg
                src="img/playlist01.png"
                alt="day's playlist" 
              /> )}
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink href="/#">
              {load ? (<Skeleton style={{ height: '150px' }}/> ):(<S.SidebarImg
                src="img/playlist02.png"
                alt="day's playlist"
              />)}
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink href="/#">
            {load ? (<Skeleton style={{ height: '150px' }}/> ):(<S.SidebarImg
                src="img/playlist03.png"
                alt="day's playlist"
              />)}
            </S.SidebarLink>
          </S.SidebarItem>
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}
