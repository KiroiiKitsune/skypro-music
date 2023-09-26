import Skeleton from 'react-loading-skeleton'
import * as S from './audioplayer.styled'





export default function AudioPlayer({ loadSkel }) {
  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PlayerBtnPrev>
                <S.PlayerBtnPrevSvg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                >
                  <path d="M1 2.87988V13.3799" stroke="white" />
                  <path
                    d="M3 7.87988L12.75 1.81771L12.75 13.9421L3 7.87988Z"
                    fill="#D9D9D9"
                  />
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay>
                <S.PlayerBtnSvg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="20"
                  viewBox="0 0 15 20"
                  fill="none"
                >
                  <path
                    d="M15 9.87988L-1.01012e-06 0.353603L-1.84293e-06 19.4062L15 9.87988Z"
                    fill="#D9D9D9"
                  />
                </S.PlayerBtnSvg>
              </S.PlayerBtnPlay>
              <S.PlayerBtnNext>
                <S.PlayerBtnNextSvg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                >
                  <path d="M15 2.87988V13.3799" stroke="white" />
                  <path
                    d="M13 7.87988L3.25 1.81771L3.25 13.9421L13 7.87988Z"
                    fill="#D9D9D9"
                  />
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNext>
              <S.PlayerBtnRepeat>
                <S.PlayerBtnRepeatSvg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M10 3.87988L5 0.993131V6.76663L10 3.87988ZM7 15.3799C3.96243 15.3799 1.5 12.9174 1.5 9.87988H0.5C0.5 13.4697 3.41015 16.3799 7 16.3799V15.3799ZM1.5 9.87988C1.5 6.84232 3.96243 4.37988 7 4.37988V3.37988C3.41015 3.37988 0.5 6.29003 0.5 9.87988H1.5Z"
                    fill="#696969"
                  />
                  <path
                    d="M10 15.8799L15 18.7666V12.9931L10 15.8799ZM13 4.37988C16.0376 4.37988 18.5 6.84232 18.5 9.87988H19.5C19.5 6.29003 16.5899 3.37988 13 3.37988V4.37988ZM18.5 9.87988C18.5 12.9174 16.0376 15.3799 13 15.3799V16.3799C16.5899 16.3799 19.5 13.4697 19.5 9.87988H18.5Z"
                    fill="#696969"
                  />
                </S.PlayerBtnRepeatSvg>
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShuffle>
                <S.PlayerBtnShuffleSvg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M19.5 15.8799L14.5 12.9931V18.7666L19.5 15.8799ZM10.1632 12.9632L9.70863 13.1715L10.1632 12.9632ZM7.33683 6.79661L6.8823 7.00494L7.33683 6.79661ZM0.5 4.37988H2.79151V3.37988H0.5V4.37988ZM6.8823 7.00494L9.70863 13.1715L10.6177 12.7548L7.79137 6.58828L6.8823 7.00494ZM14.7085 16.3799H15V15.3799H14.7085V16.3799ZM9.70863 13.1715C10.6047 15.1265 12.5579 16.3799 14.7085 16.3799V15.3799C12.949 15.3799 11.3508 14.3544 10.6177 12.7548L9.70863 13.1715ZM2.79151 4.37988C4.55105 4.37988 6.14918 5.4054 6.8823 7.00494L7.79137 6.58828C6.89533 4.6333 4.94205 3.37988 2.79151 3.37988V4.37988Z"
                    fill="#696969"
                  />
                  <path
                    d="M19.5 3.87988L14.5 6.76663V0.993132L19.5 3.87988ZM10.1632 6.79661L9.70863 6.58828L10.1632 6.79661ZM7.33683 12.9632L6.8823 12.7548L7.33683 12.9632ZM0.5 15.3799H2.79151V16.3799H0.5V15.3799ZM6.8823 12.7548L9.70863 6.58828L10.6177 7.00494L7.79137 13.1715L6.8823 12.7548ZM14.7085 3.37988H15V4.37988H14.7085V3.37988ZM9.70863 6.58828C10.6047 4.6333 12.5579 3.37988 14.7085 3.37988V4.37988C12.949 4.37988 11.3508 5.4054 10.6177 7.00494L9.70863 6.58828ZM2.79151 15.3799C4.55105 15.3799 6.14918 14.3544 6.8823 12.7548L7.79137 13.1715C6.89533 15.1265 4.94205 16.3799 2.79151 16.3799V15.3799Z"
                    fill="#696969"
                  />
                </S.PlayerBtnShuffleSvg>
              </S.PlayerBtnShuffle>
            </S.PlayerControls>

            <S.PlayerTrackPlay>
              <S.TrackPlayerContain>
                <S.TrackPlayerImage>
                  {loadSkel ? (
                    <Skeleton style={{ width: '50px', height: '50px' }} />
                  ) : (
                    <S.TrackPlaySvg
                      xmlns="http://www.w3.org/2000/svg"
                      width="51"
                      height="52"
                      viewBox="0 0 51 52"
                      fill="none"
                    >
                      <rect
                        y="0.750977"
                        width="51"
                        height="51"
                        fill="#313131"
                      />
                      <path
                        d="M23 32.751V18.7207L34 17.751V29.751"
                        stroke="#4E4E4E"
                      />
                      <ellipse
                        cx="19.5"
                        cy="32.751"
                        rx="3.5"
                        ry="2"
                        stroke="#4E4E4E"
                      />
                      <ellipse
                        cx="30.5"
                        cy="29.751"
                        rx="3.5"
                        ry="2"
                        stroke="#4E4E4E"
                      />
                    </S.TrackPlaySvg>
                  )}
                </S.TrackPlayerImage>
                <S.TrackPlayAuthor>
                  {loadSkel ? (
                    <Skeleton />
                  ) : (
                    <S.TrackPlayAuthorLink href="http://">
                      Ты та...
                    </S.TrackPlayAuthorLink>
                  )}
                </S.TrackPlayAuthor>
                <S.TrackPlayAlbum>
                  {loadSkel ? (
                    <Skeleton />
                  ) : (
                    <S.TrackPlayAlbumLink href="http://">
                      Баста
                    </S.TrackPlayAlbumLink>
                  )}
                </S.TrackPlayAlbum>
              </S.TrackPlayerContain>

              <S.TrackPlayLikesDisplay>
                <S.TrackPlayLike>
                  <S.TrackPlayLikeSvg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                  >
                    <path
                      d="M8.02154 13C13.902 9.5 16.9673 4.20921 13.6127 1.76734C11.4125 0.165765 8.95343 1.44175 8.02154 2.25572H8.00003H7.99997H7.97846C7.04657 1.44175 4.58746 0.165765 2.38727 1.76734C-0.967302 4.20921 2.09797 9.5 7.97846 13H7.99997H8.00003H8.02154Z"
                      fill="#696969"
                    />
                    <path
                      d="M7.99997 2.25572H8.02154C8.95343 1.44175 11.4125 0.165765 13.6127 1.76734C16.9673 4.20921 13.902 9.5 8.02154 13H7.99997M8.00003 2.25572H7.97846C7.04657 1.44175 4.58746 0.165765 2.38727 1.76734C-0.967302 4.20921 2.09797 9.5 7.97846 13H8.00003"
                      stroke="white"
                    />
                  </S.TrackPlayLikeSvg>
                </S.TrackPlayLike>
                <S.TrackPlayDislike>
                  <S.TrackPlayDislikeSvg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                  >
                    <path
                      d="M8.36553 14C14.246 10.5 17.3113 5.20921 13.9567 2.76734C11.7565 1.16576 9.29742 2.44175 8.36553 3.25572H8.34402H8.34397H8.32246C7.39056 2.44175 4.93145 1.16576 2.73126 2.76734C-0.623308 5.20921 2.44196 10.5 8.32246 14H8.34397H8.34402H8.36553Z"
                      fill="#696969"
                    />
                    <path
                      d="M8.34396 3.25572H8.36553C9.29742 2.44175 11.7565 1.16576 13.9567 2.76734C17.3113 5.20921 14.246 10.5 8.36553 14H8.34396M8.34402 3.25572H8.32246C7.39056 2.44175 4.93145 1.16576 2.73126 2.76734C-0.623308 5.20921 2.44196 10.5 8.32246 14H8.34402"
                      stroke="white"
                    />
                    <path d="M1 1L15 13.5" stroke="white" />
                  </S.TrackPlayDislikeSvg>
                </S.TrackPlayDislike>
              </S.TrackPlayLikesDisplay>
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                </S.VolumeSvg>
              </S.VolumeImage>
              <S.VolumeProgress>
                <S.VolumeProgressLine
                  type="range"
                  name="range"
                />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}
