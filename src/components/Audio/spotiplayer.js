import React from 'react';
import PropTypes from 'prop-types';
import './audio.css'
const dimensionPropType = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const sizePresets = {
  large: {
    width: '90%',
    height: 90,
  },
  compact: {
    width: 300,
    height: 80,
  },
};
// Project is made by Rishab Khanna
class SpotiPlayer extends React.Component {
  render() {
    const { uri} = this.props;
    let { size } = this.props;
    const {image}=this.props;

    if (typeof size === 'string') {
      size = sizePresets[size];
    }
    return (
        <div className="main">
      <iframe
        id="player2"
        title="Spotify"
        className="SpotiPlaye"
        src={`https://open.spotify.com/embed/track/`+uri}
        width={size.width}
        height={size.height}
        frameBorder="0"
        allowtransparency="true"
      >
      </iframe> 
      <div id="rotator">
            <img  className="rotate" src={image} alt="logo"/>
        </div>
      </div>
    );
  }
}

SpotiPlayer.propTypes = {
  uri: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['large', 'compact']),
    PropTypes.shape({
      width: dimensionPropType,
      height: dimensionPropType,
    }),
  ]),
  view: PropTypes.oneOf(['list', 'coverart']),

  theme: PropTypes.oneOf(['black', 'white']),
};

SpotiPlayer.defaultProps = {
  size: 'large',
  view: 'coverart',
  theme: 'white',
};


// Project is made by Rishab Khanna
export default SpotiPlayer;