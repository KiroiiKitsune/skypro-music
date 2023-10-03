import Skeleton from 'react-loading-skeleton'
import * as S from './mainbar.style'
import 'react-loading-skeleton/dist/skeleton.css'


export default function SideBar({load, isSidebarCatVisible}) {
 

 

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
      {isSidebarCatVisible &&
      <S.SidebarBlock> 
        <S.SidebarList>
          <S.SidebarItem> 
            <S.SidebarLink  to="/category/1">
              {load ? (<Skeleton style={{ height: '150px' }}/>) : (<S.SidebarImg
                src="img/playlist01.png"
                alt="day's playlist" 
              /> )}
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink to="/category/2">
              {load ? (<Skeleton style={{ height: '150px' }}/> ):(<S.SidebarImg
                src="img/playlist02.png"
                alt="day's playlist"
              />)}
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink to="/category/3">
            {load ? (<Skeleton style={{ height: '150px' }}/> ):(<S.SidebarImg
                src="img/playlist03.png"
                alt="day's playlist"
              />)}
            </S.SidebarLink>
          </S.SidebarItem>
        </S.SidebarList>
      </S.SidebarBlock>}
    </S.MainSidebar>
  )
}
