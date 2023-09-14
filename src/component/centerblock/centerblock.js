import './centerblock.css'
import SearchPannel from '../centerblock-search/centerblock-search'
import PlayList from '../playlist/playlist'
import CenterBlockFilter from '../centrblock-filter/centerblock-filter'


export default function CenterBlock() {
  return (
    <div className="main__centerblock centerblock">
      <SearchPannel />
      <h2 className="centerblock__h2">Треки</h2>
      <CenterBlockFilter/>
      <div className="centerblock__content">
        <div className="content__title playlist-title">
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <svg className="playlist-title__svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch" />
            </svg>
          </div>
        </div>
        <PlayList/>
      </div>
    </div>
  )
}
