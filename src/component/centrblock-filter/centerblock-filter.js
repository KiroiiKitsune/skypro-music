import { useState } from 'react'
import * as S from './centerblock-filter.styled'
import arrOfTracks from '../data'



export default function CenterBlockFilter() {
  const authorList = [...new Set(arrOfTracks.map((item) => item.author))]
  const yearList = [...new Set(arrOfTracks.map((item) => item.year))]
  const genreList = [...new Set(arrOfTracks.map((item) => item.genre))]

  const [isAuthorOpen, setIsAuthorOpen] = useState(false)
  const [isYearOpen, setIsYearOpen] = useState(false)
  const [isGenreOpen, setIsGenreOpen] = useState(false)

  const toggleAuthor = () => {
    setIsAuthorOpen(!isAuthorOpen)
    setIsYearOpen(false)
    setIsGenreOpen(false)
  }

  const toggleYear = () => {
    setIsYearOpen(!isYearOpen)
    setIsAuthorOpen(false)
    setIsGenreOpen(false)
  }

  const toggleGenre = () => {
    setIsGenreOpen(!isGenreOpen)
    setIsAuthorOpen(false)
    setIsYearOpen(false)
  }

  return (
    <S.CenterBlockFilters>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.FilterList>
        <S.FilterButton as={isAuthorOpen && S.BtnTextActive} onClick={toggleAuthor}>
          исполнителю
        </S.FilterButton>

        <S.FilterBox>
          {isAuthorOpen && (
            <S.FilterCounter>
              <S.FilterContent $isAuthorOpen={isAuthorOpen}>
                <S.FilterBlock>
                  <S.FilterListMenu>
                    {authorList.map((item) => (
                      <S.FilterListItem key={item}>
                        <S.FilterListLink href="#">
                          {item}
                        </S.FilterListLink>
                      </S.FilterListItem>
                    ))}
                  </S.FilterListMenu>
                </S.FilterBlock>
              </S.FilterContent>
            </S.FilterCounter>
          )}
        </S.FilterBox>
      </S.FilterList>

      <S.FilterList>
        <S.FilterButton as={isYearOpen && S.BtnTextActive} onClick={toggleYear}>
          году выпуска
        </S.FilterButton>

        <S.FilterBox>
          {isYearOpen && (
            <S.FilterCounter>
              <S.FilterContentYear $isYearOpen={isYearOpen}>
                <S.FilterBlock>
                  <S.FilterListYear>
                    {yearList
                      .sort((a, b) => a - b)
                      .map((item) => (
                        <S.FilterListItem key={item}>
                          <S.FilterListLink href="#">
                            {item}
                          </S.FilterListLink>
                        </S.FilterListItem>
                      ))}
                  </S.FilterListYear>
                </S.FilterBlock>
              </S.FilterContentYear>
            </S.FilterCounter>
          )}
        </S.FilterBox>
      </S.FilterList>

      <S.FilterList>
        <S.FilterButton as={isGenreOpen && S.BtnTextActive} onClick={toggleGenre}>
          жанру
        </S.FilterButton>

        <S.FilterBox>
          {isGenreOpen && (
            <S.FilterCounter>
              <S.FilterContentGenre $isGenreOpen={isGenreOpen}>
                <S.FilterBlock>
                  <S.FilterListMenu>
                    {genreList.map((item) => (
                      <S.FilterListItem key={item}>
                        <S.FilterListLink href="#">
                          {item}
                        </S.FilterListLink>
                      </S.FilterListItem>
                    ))}
                  </S.FilterListMenu>
                </S.FilterBlock>
              </S.FilterContentGenre>
            </S.FilterCounter>
          )}
        </S.FilterBox>
      </S.FilterList>
    </S.CenterBlockFilters>
  )
}
