import './track.css'
import Skeleton from 'react-loading-skeleton'
import { useState, useEffect } from 'react'

export default function Track(prop) {

  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);


    return (
        <div className="playlist__item">
                <div className="playlist__track track">
                  <div className="track__title">
                    <div className="track__title-image">
                    {isLoading ? (<Skeleton style={{width: '50px', height: '50px'}}/>) : (<svg className="track__title-svg" alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note" />
                      </svg>)}
                    </div>
                    <div className="track__title-text">
                      { isLoading ? (<Skeleton style={{width: "356px"}}/>) : (<a className="track__title-link" href="http://">
                        {prop.title}
                        {prop.additionTitle && <span className="track__title-span"> {prop.additionTitle}</span>}
                      </a>)}
                    </div>
                  </div>
                  <div className="track__author">
                  { isLoading ? (<Skeleton style={{width: "271px"}}/>) : (<a className="track__author-link" href="http://">
                      {prop.author}
                    </a>)}
                  </div>
                  <div className="track__album">
                  { isLoading ? (<Skeleton style={{width: "230px"}}/>) : ( <a className="track__album-link" href="http://">
                      {prop.album}
                    </a>)}
                  </div>
                  <div className="track__time">
                    <svg className="track__time-svg" alt="time">
                      <use xlinkHref="img/icon/sprite.svg#icon-like" />
                    </svg>
                    { isLoading ? (<Skeleton style={{width: "20px"}}/>) : (<span className="track__time-text">{prop.time}</span>)}
                  </div>
                </div>
              </div>
    )
}
