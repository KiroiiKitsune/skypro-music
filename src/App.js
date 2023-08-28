import './App.css'
import AudioPlayer from './component/audioplayer'
import MainNav from './component/mainnav'
import SideBar from './component/mainbar'
import CenterBlock from './component/centerblock'

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
