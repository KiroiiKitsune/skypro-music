import './App.css'
import { SkeletonTheme } from 'react-loading-skeleton'
import { useState, useEffect } from 'react'
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
    <div className="wrapper">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className="container">
          <main className="main">
            <MainNav />
            <CenterBlock />
            <SideBar load={isLoading}/>
          </main>
          <AudioPlayer loadSkel={isLoading}/>
          <footer className="footer" />
        </div>
      </SkeletonTheme>
    </div>
  )
}

export default App
