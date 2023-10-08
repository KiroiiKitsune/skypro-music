import Skeleton from 'react-loading-skeleton'
import { useState, useEffect } from 'react'
import * as S from './track.styled'






export default function Track (props) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, [])

  return (
    <S.PlayListItem>
      <S.PlayListTrack>
        <S.TrackTitle>
          <S.TrackTitleImg>
            {isLoading ? (
              <Skeleton style={{ width: '50px', height: '50px' }} />
            ) : (
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </S.TrackTitleSvg>
            )}
          </S.TrackTitleImg>
          <S.TrackTitleText>
            {isLoading ? (
              <Skeleton style={{ width: '356px' }} />
            ) : (
              <S.TrackTitleLink href="http://">
                {props.title}
                {props.additionTitle && (
                  <S.TrackTitleSpan>
                    {' '}
                    {props.additionTitle}
                  </S.TrackTitleSpan>
                )}
              </S.TrackTitleLink>
            )}
          </S.TrackTitleText>
        </S.TrackTitle>
        <S.TrackAuthor>
          {isLoading ? (
            <Skeleton style={{ width: '271px' }} />
          ) : (
            <S.TrackAuthorLink href="http://">
              {props.author}
            </S.TrackAuthorLink>
          )}
        </S.TrackAuthor>
        <S.TrackAlbum>
          {isLoading ? (
            <Skeleton style={{ width: '230px' }} />
          ) : (
            <S.TrackAlbumLink href="http://">
              {props.album}
            </S.TrackAlbumLink>
          )}
        </S.TrackAlbum>
        <S.TrackTimer>
          <S.TrackTimerSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </S.TrackTimerSvg>
          {isLoading ? (
            <Skeleton style={{ width: '20px' }} />
          ) : (
            <S.TrackTimerText>{props.time}</S.TrackTimerText>
          )}
        </S.TrackTimer>
      </S.PlayListTrack>
    </S.PlayListItem>
  )
}
