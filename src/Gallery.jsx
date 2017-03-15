import React from 'react'

class Gallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playingUrl: '',
      audio: null,
      playing: false
    }
  }

  playAudio(previewUrl) {
    let audio = new Audio(previewUrl);
    if(!this.state.playing) {
      audio.play();
      this.setState({
        playingUrl: previewUrl,
        audio,
        playing: true
      })
    } else {
      if(this.state.playingUrl === previewUrl) {
        this.state.audio.pause();
        this.setState({
          playing: false
        })
      } else {
        this.state.audio.pause();
        audio.play();
        this.setState({
          playingUrl: previewUrl,
          audio,
          playing: true
        })
      }
    }
  }

  render () {
    const { tracks } = this.props;

    return(
      <div>
        {tracks.map((track, index) => {
          const trackImg = track.album.images[0].url;
          return (

            <div
              className="track"
              key={index}
              onClick={() => this.playAudio(track.preview_url)}
            >
              <img className="track-img" src={trackImg} alt="track"/>
              <div className="track-play">
                <div className="track-play-inner">
                  {
                    this.state.playingUrl === track.preview_url
                    ? <span> | | </span>
                    : <span>&#9654;</span>
                  }
                </div>
              </div>
              <p className="track-name">
                {track.name}
              </p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Gallery;
