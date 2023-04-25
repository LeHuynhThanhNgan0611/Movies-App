import axios from 'axios'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Container } from './NavBar'
import { AiOutlineClose, AiFillPlayCircle } from 'react-icons/ai'
import NoImage from './NoImage.jpg'
import '../Styles/Videos.css'
import TrailerTrending from '../Trailer/TrailerTrending'

function Trends() {
  const { toggle, inputValue } = useContext(Container)
  const input = inputValue
  const TrendsShown = '/trending/all/week'
  const Images = 'https://image.tmdb.org/t/p/w500'
  const Api = `https://api.themoviedb.org/3`
  const [trendArray, setTrendArray] = useState([])
  const [trendTitle, setTrendTitle] = useState('')
  const [trailer, setTrailer] = useState(true)
  const Trends = async () => {
    const data = await axios.get(`${Api}${TrendsShown}`, {
      params: {
        api_key: '1112af5ff566273f64f944db7c7c6c86',
      }
    })
    const results = data.data.results;
    setTrendArray(results)
  }

  useEffect(() => {
    setTimeout(() => {
      Trends()
    }, 100)
  }, [input])

  const TrendTitle = (movie) => {
    setTrendTitle(movie.title)
    setTrailer(!trailer)
  }
  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : 'secondaryBgColor'}>
        <div className='movies-container'>
          {trendArray.map((trend) => {
            return (
              <Fragment>
                <div id={trailer ? 'container' : 'NoContainer'}>
                  <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? 'playIcon' : 'hide'}
                    onClick={() => TrendTitle(trend)}>
                  </AiFillPlayCircle>
                  <img src={trend.poster_path ? `${Images}${trend.poster_path}` : NoImage} alt='' onClick={() => TrendTitle(trend)} />
                  <h3 id='smaller-Text' className={toggle ? 'mainColor' : 'secondaryColor'}>{trend.title}</h3>
                </div>
              </Fragment>
            )
          })}
          {trailer ? console.log : <TrailerTrending TrendTitle={trendTitle} toggle={toggle} />}
          <AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} color='#fff' fontSize={40}
            className={toggle ? 'DarkTheme' : 'LightThemeClose'}
            onClick={() => setTrailer(true)}>
          </AiOutlineClose>
        </div>
      </div>
    </Fragment>
  )
}

export default Trends