
import * as S from './playlist.style'
import Track from '../track/track'




export default function PlayList(props) {
  return (
    <S.ContentPlayList >
      {props.arrOfTracks.map((item) => (
        <Track
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
