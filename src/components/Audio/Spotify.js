const clientId = 'b71fffdd71c642d1814a16fe9769c93d';
const uriRedirect = 'http://localhost:3002/';
let accessToken;

// Module that provides authorization to use the Spotify API
const Spotify = {
  getAccessToken() {
    if(accessToken) {
      return accessToken;
    }

    const tokenFound = window.location.href.match(/access_token=([^&]*)/);
    const expireTime = window.location.href.match(/expires_in=([^&]*)/);

    if(tokenFound && expireTime) {
      accessToken = tokenFound[1];

      const tokenExpires = Number(expireTime[1]);

      window.setTimeout(() => accessToken = '', tokenExpires * 9000);
      window.history.pushState('Access Token', null, '/');

      return accessToken;

    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${uriRedirect}`;

      window.location = accessUrl;

    }
  }, // end of getAccessToken method
} //end of Spotify module

export default Spotify;
