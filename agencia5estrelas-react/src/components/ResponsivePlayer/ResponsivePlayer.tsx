import ReactPlayer from 'react-player';
import './ResponsivePlayer.css';
import React from 'react'

const ResponsivePlayer = () =>  {

      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            width='300%'
            height='250%'
            controls= {true}
            
          />
        </div>
      )
}

export default ResponsivePlayer;