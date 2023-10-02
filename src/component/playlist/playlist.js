
import * as S from './playlist.style'
import Track from '../track/track'
import { arrOfAllTracks } from '../data'



export default function PlayList() {
  return (
    <S.ContentPlayList >
      {arrOfAllTracks.map((item) => (
        <Track
          key={item.id}
          title={item.title}
          additionTitle={item.additionTitle}
          author={item.author}
          album={item.album}
          time={item.time}
        />
      ))}
    </S.ContentPlayList>
  )
}
