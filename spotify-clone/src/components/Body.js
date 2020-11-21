import React from 'react'
import './Body.css'
import Header from './Header'
import {useDataLayerValue} from './DataLayer'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow'

function Body({spotify}) {
    const [{top_50_cr}, dispatch] = useDataLayerValue()
    
    return (
        <div className='body'>
            <Header spotify={spotify} />

            <div className="body_info">
                <img src={top_50_cr?.images[0].url} alt=""/>
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>El Top 50 de Costa Rica</h2>
                    <p>{top_50_cr?.description}</p>
                </div>
            </div>

            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilledIcon className='body_shuffle' />
                    <FavoriteIcon fontSize='large' />
                    <MoreHorizIcon />
                </div>

                {top_50_cr?.tracks.items.map((item) => (
                    <SongRow track={item.track} />
                ))}

            </div>
        </div>
    )
}

export default Body
