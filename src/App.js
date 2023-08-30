import './App.css'
import AudioPlayer from './component/audioplayer/audioplayer'
import MainNav from './component/mainnav/mainnav'
import SideBar from './component/mainbar/mainbar'
import CenterBlock from './component/centerblock/centerblock'

function App() {
  return (
      <div className="wrapper">
        <div className="container">
          <main className="main">
            < MainNav />
            < CenterBlock/>
                <SideBar />
          </main>
          <AudioPlayer />
          <footer className="footer" />
        </div>
      </div>
  )
}

export default App
