import { SkeletonTheme } from 'react-loading-skeleton'
import { useState, useEffect } from 'react'
import { GlobalStyle } from './Global.style'
import * as S from './App.style'
import AudioPlayer from './component/audioplayer/audioplayer'
import MainNav from './component/mainnav/mainnav'
import SideBar from './component/mainbar/mainbar'
import CenterBlock from './component/centerblock/centerblock'



function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  
  return (
    <>
    <GlobalStyle />
    <S.Wrapper>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <S.Container>
          <S.Main>
            <MainNav />
            <CenterBlock />
            <SideBar load={isLoading}/>
          </S.Main>
          <AudioPlayer loadSkel={isLoading}/>
          <S.Footer/>
        </S.Container>
      </SkeletonTheme>
    </S.Wrapper>
    </>
  )
}

export default App
