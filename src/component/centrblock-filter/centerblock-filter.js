import { useState } from 'react'
import './centerblock-filter.css'
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
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div className="filter__list">
        <button
          className="filter__button button-author _btn-text _btn__text_active"
          onClick={toggleAuthor}
        >
          исполнителю
        </button>

        <div>
          {isAuthorOpen && (
            <div className="filter__counter">
              <div className="filter__content_show">
                <div className="filter__block">
                  <ul className="filter__list_menu">
                    {authorList.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="filter__list">
        <button
          className="filter__button button-year _btn-text"
          onClick={toggleYear}
        >
          году выпуска
        </button>

        <div>
          {isYearOpen && (
            <div className="filter__counter">
              <div className="filter__content_show filter__content_show_year">
                <div className="filter__block">
                  <ul className="filter__list_menu filter__list_menu_year">
                    {yearList.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="filter__list">
        <button
          className="filter__button button-genre _btn-text"
          onClick={toggleGenre}
        >
          жанру
        </button>

        <div>
          {isGenreOpen && (
            <div className="filter__counter">
              <div className="filter__content_show">
                <div className="filter__block">
                  <ul className="filter__list_menu">
                    {genreList.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
