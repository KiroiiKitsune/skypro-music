import * as S from './styled.track'

export default function Track({unvisible, onNameClick, title, additionTitle, author, album, time}) {

  function toMMSS (sec) {
    let minutes = Math.floor(sec/ 60);
    let seconds = sec - (minutes * 60);

    if (minutes < 10) {minutes = `0${minutes}`;}
    if (seconds < 10) {seconds = `0${seconds}`;}
    return `${minutes}:${seconds}`;
}

    return (
        <S.PlaylistItem>
                <S.PlaylistTrack>
                  <S.TrackTitle>
                    <S.TrackTitleImage>
                      {!unvisible && <S.TrackTitleSvg alt="music">
                        <use xlinkHref="/img/icon/sprite.svg#icon-note" />
                      </S.TrackTitleSvg>}
                    </S.TrackTitleImage>
                    <S.TrackTitleText unvisible={unvisible}>
                      {!unvisible && <S.TrackTitleLink onClick={onNameClick}>
                        {title}
                        {additionTitle && <S.TrackTitleLSpan> {additionTitle}</S.TrackTitleLSpan>}
                      </S.TrackTitleLink>}
                    </S.TrackTitleText>
                  </S.TrackTitle>
                  <S.TrackAuthor unvisible={unvisible}>
                    {!unvisible && <S.TrackAuthorLink href="http://">
                      {author}
                    </S.TrackAuthorLink>}
                  </S.TrackAuthor>
                  <S.TrackAlbum unvisible={unvisible}>
                    {!unvisible && <S.TrackAlbumLink href="http://">
                      {album}
                    </S.TrackAlbumLink>}
                  </S.TrackAlbum>
                  <div>
                    <S.TrackTimeSvg alt="time">
                      <use xlinkHref="/img/icon/sprite.svg#icon-like" />
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>{unvisible ? '0:00' : toMMSS(time)}</S.TrackTimeText>
                  </div>
                </S.PlaylistTrack>
        </S.PlaylistItem>
    )
}