import React from 'react';
import './App.css';


class Profile extends React.Component {
  render () {
    let artist = {
      name : '',
      followers: {
        total: ''
      },
      images: [{
        url: ''
      }],
      genres: []
    };
    artist = this.props.artist ? this.props.artist : artist;

    return(
      <div className="Profile">
        <img
          className="Profile--image"
          src={artist.images[0].url}
          alt="Profile"
        />
        <div className="Profile--info">
          <div className="Profile--name">{artist.name}</div>
          <div className="Profile--followers">{artist.followers.total} followers</div>
          <div className="Profile--genres">
            {
              artist.genres.map( (genre, index) => {
                return (
                  <span key={index} style={{marginLeft: 5 + 'px'}}>{genre}</span>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
