// import { SkeletonTheme } from 'react-loading-skeleton'
// import { useState, useEffect } from 'react'
import { useState } from 'react'
import { GlobalStyle } from './Global.style'
// import * as S from './App.style'
import AppRouters from './routes'
// import AudioPlayer from './component/audioplayer/audioplayer'
// import MainNav from './component/mainnav/mainnav'
// import SideBar from './component/mainbar/mainbar'
// import CenterBlock from './component/centerblock/centerblock'



function App() {

  const [user, setUser] = useState(null)

  const handleLogin = () => {
    setUser("taradam");
    localStorage.setItem('user', user);
}

  const handleLogout = () => {
    setUser(null);
    localStorage.clear();
    // console.log(localStorage.getItem('user'));
  }


  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 5000);
  // }, []);
  
  return (
    <>
    <GlobalStyle user={localStorage.getItem('user')} handleLogin={handleLogin} handleLogout={handleLogout}/>
      <AppRouters/>
    </>
  )
}

export default App
