import React, { Fragment, useState } from 'react'
import { HiSearch } from 'react-icons/hi'
import '../Styles/NavBarStyle.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import Movies from './Movies'
import TvShows from './TvShows'
import Trending from './Trends'
import Pricing from './Pricing'

export const Container = React.createContext()
function NavBar() {
    const [toggle, setToggle] = useState(true)
    const [inputValue, setInputValue] = useState('')

    return (
        <Container.Provider value={{ toggle, inputValue }}>
            <Fragment>
                <nav className={toggle ? '' : 'navBarColor'}>
                    <div className="nav-options">
                        <h1 id={toggle ? '' : 'heading'}>REACTFLIX</h1>
                        <NavLink to="" style={({ isActive }) => { return { color: isActive ? '#fff' : '#EE9800' } }}>
                            <span id={toggle ? 'Movies' : 'MoviesLight'}>Movies</span>
                        </NavLink>
                        <NavLink to="/TvShows" style={({ isActive }) => { return { color: isActive ? '#fff' : '#EE9800' } }}>
                            <span id={toggle ? 'Movies' : 'MoviesLight'}>Tv Shows</span>
                        </NavLink>
                        <NavLink to="/Trending" style={({ isActive }) => { return { color: isActive ? '#fff' : '#EE9800' } }}>
                            <span id={toggle ? 'Movies' : 'MoviesLight'}>Trending</span>
                        </NavLink>
                        <NavLink to="/Pricing" style={({ isActive }) => { return { color: isActive ? '#fff' : '#EE9800' } }}>
                            <span id={toggle ? 'Movies' : 'MoviesLight'}>Pricing</span>
                        </NavLink>
                    </div>
                    <div className="input-group">
                        <input type="text" placeholder="Search Whatever You Want" onChange={(e) => setInputValue(e.target.value)} />
                        <HiSearch fontSize={21} color={toggle ? '#000' : '#ff206e'} id='search' />
                        <div id="Color-switcher" onClick={() => setToggle(!toggle)}>
                            <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path='' element={<Movies />}></Route>
                    <Route path='TvShows' element={<TvShows />}></Route>
                    <Route path='Trending' element={<Trending />}></Route>
                    <Route path='Pricing' element={<Pricing />}></Route>
                </Routes>
            </Fragment>
        </Container.Provider>
    )
}

export default NavBar