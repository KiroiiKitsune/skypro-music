// eslint-disable-next-line import/no-extraneous-dependencies
import * as S from './tracklist.style'
import Track from '../track/track'



export default function TrackList({ arrOfTracks, unvisible, setCurrentTrack }) {
  return (
    <S.ContentPlaylist>
      {arrOfTracks.map((item) => (
        <li key={item.id}>
          <Track
            onNameClick={() => setCurrentTrack(item)}
            unvisible={unvisible}
            title={item.name}
            additionTitle={item.additionTitle}
            author={item.author}
            album={item.album}
            time={item.duration_in_seconds}
          />
        </li>
      ))}
    </S.ContentPlaylist>
  )
}
