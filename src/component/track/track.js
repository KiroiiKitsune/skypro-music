import './track.css'

export default function Track(prop) {
    return (
        <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                      <svg className="track__title-svg" alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note" />
                      </svg>
                    </div>
                    <div className="track__title-text">
                      <a className="track__title-link" href="http://">
                        {prop.title}
                        {prop.additionTitle && <span className="track__title-span"> {prop.additionTitle}</span>}
                      </a>
                    </div>
                  </div>
                  <div className="track__author">
                    <a className="track__author-link" href="http://">
                      {prop.author}
                    </a>
                  </div>
                  <div className="track__album">
                    <a className="track__album-link" href="http://">
                      {prop.album}
                    </a>
                  </div>
                  <div className="track__time">
                    <svg className="track__time-svg" alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-like" />
                    </svg>
                    <span className="track__time-text">{prop.time}</span>
                  </div>
                </div>
              </div>
    )
}
