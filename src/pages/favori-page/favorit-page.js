import { SkeletonTheme } from 'react-loading-skeleton'
import { useState, useEffect } from 'react'
import AudioPlayer from '../../component/audioplayer/audioplayer'
import MainNav from '../../component/mainnav/mainnav'
import SideBar from '../../component/mainsidebar/mainbar'
import CenterBlock from '../../component/centerblock/centerblock'
import * as S from '../../App.style'
import { arrOfFavoriteTracks } from '../../component/data'

export default function FavoritePage () {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }, []);
    
    return (
  
      <S.Wrapper>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <S.Container>
            <S.Main>
              <MainNav/>
              <CenterBlock isFilterVisible = {false} playListName = 'Мои треки' arrOfTracks = {arrOfFavoriteTracks}/>
              <SideBar load={isLoading} isSidebarCatVisible = {false}/>
            </S.Main>
            <AudioPlayer loadSkel={isLoading}/>
            <S.Footer/>
          </S.Container>
        </SkeletonTheme>
      </S.Wrapper>
      )
 
  }