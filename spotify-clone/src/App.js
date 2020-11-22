import React, { useEffect } from 'react'
import './App.css';
import Login from './components/Login'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './components/Player'
import {useDataLayerValue} from './components/DataLayer'

const spotify = new SpotifyWebApi()

function App() {
  const [{user, token}, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ''

    const _token = hash.access_token

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      
      spotify.setAccessToken(_token)
      
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
      })

      spotify.getPlaylist('37i9dQZEVXbMZAjGMynsQX').then((response) => {
        dispatch({
          type:'SET_TOP_50_CR',
          top_50_cr: response
        })
      })
    }

  }, [])

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (
          <Login />
        )
      }
     
    </div>
  );
}

export default App;