import './playlist.css'

import Track from '../track/track'
import arrOfTracks from '../data'

export default function PlayList() {
  return (
    <div className="content__playlist playlist">
      {arrOfTracks.map((item) => (
        <Track
          key={item.id }
          title={item.title}
          additionTitle={item.additionTitle}
          author={item.author}
          album={item.album}
          time={item.time}
        />
      ))}
    </div>
  )
}
