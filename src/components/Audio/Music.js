import React ,{ Component } from 'react';
import {FormGroup,FormControl,InputGroup} from 'react-bootstrap';
import SpotiPlayer from './spotiplayer';
import Spotify from './Spotify';
import Swal from 'sweetalert2';
import { Player, ControlBar, PlayToggle } from 'video-react';
import './audio.css'
// Project is made by Rishab Khanna
export class Music extends Component{


constructor(props){
  super(props);
  this.state = {
      query: '',
      query1: '',
      song: null,
      image: null,
      cards: null,
      song1: null,
      song2: null,
      song3: null,
      song4: null,
      song5: null,
      image1: null,
      image2: null,
      image3: null,
      image4: null,
      image5: null,
      singer: null,
      back: null     

  }
}

search(){
  const accessToken = Spotify.getAccessToken();
 const BASE_URL = 'https://api.spotify.com/v1/search?';
 const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=track&limit=1`;
 // Project is made by Rishab Khanna
 fetch(FETCH_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
  .then(response => response.json())
  .then(jsonResponse => {
    const song = jsonResponse.tracks.items[0].id;
    this.setState({song}); 
    const cards = jsonResponse.tracks.items[0].album.artists[0].id;
    this.setState({cards});
    const singer = jsonResponse.tracks.items[0].album.artists[0].name;
    this.setState({singer});
    const image = jsonResponse.tracks.items[0].album.images[1].url;
    this.setState({image}); 
    const back = jsonResponse.tracks.items[0].album.images[1].url;
    this.setState({back}); 
    console.log(jsonResponse.tracks)

    const FETCH_AR = `https://api.spotify.com/v1/artists/`+this.state.cards;
    const FETCH_ARTIST = `${FETCH_AR}/top-tracks?country=IN`;
   
    fetch(FETCH_ARTIST, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => response.json())
    .then(jsonResponse => {
      console.log(jsonResponse.tracks)
      const song1 = jsonResponse.tracks[0].preview_url;
      const song2 = jsonResponse.tracks[1].preview_url;
      const song3 = jsonResponse.tracks[2].preview_url;
      const song4 = jsonResponse.tracks[3].preview_url;
      const song5 = jsonResponse.tracks[4].preview_url;
      this.setState({song1}); 
      this.setState({song2}); 
      this.setState({song3}); 
      this.setState({song4}); 
      this.setState({song5}); 
      const image1 = jsonResponse.tracks[0].album.images[1].url;
      const image2 = jsonResponse.tracks[1].album.images[1].url;
      const image3 = jsonResponse.tracks[2].album.images[1].url;
      const image4 = jsonResponse.tracks[3].album.images[1].url;
      const image5 = jsonResponse.tracks[4].album.images[1].url;
      this.setState({image1}); 
      this.setState({image2}); 
      this.setState({image3}); 
      this.setState({image4}); 
      this.setState({image5}); 
    })
// Project is made by Rishab Khanna
  }).catch(err => {
    Swal.fire({
      html: ' <br/><b>The song you entered does not exist try again</b><br/>',
      title: 'Gratify<br/>',
      icon: 'error',
      showCancelButton: false,
      confirmButtonText: 'OK',
      footer: 'Made by Rishab Khanna',
    })
    this.setState({query: '' })
  });
}



render(){
  
const query1 = this.state.query;
console.log(query1)

  const link =this.state.song;
  const link1 =this.state.song1;
  const link2 =this.state.song2;
  const link3 =this.state.song3;
  const link4 =this.state.song4;
  const link5 =this.state.song5;
  const image=this.state.image;
  const image1=this.state.image1;
  const image2=this.state.image2;
  const image3=this.state.image3;
  const image4=this.state.image4;
  const image5=this.state.image5;
  // console.log("link1",link1)
  // Project is made by Rishab Khanna
  return(
    <div >
    <div className="App" >
      <div className="App-title"><u>Gratify</u></div><a href="https://github.com/rishabkhanna27" ><p className="git">||-Rishab_Khanna-||</p></a>
      <FormGroup>
        <InputGroup>
          <FormControl
            type="text"
            placeholder="Search a Song"
            className="form"
            value = {this.state.query}
            onChange = {event => {this.setState({query:event.target.value})}}
            onKeyPress = {event => {
              if(event.key === 'Enter'){
                this.search();
              }
            }}
            />
        </InputGroup>
      </FormGroup>
     <div> Complete Song {query1} by {this.state.singer}</div>
      {
      this.state.song1 !== null?
          <div>
            <br></br>
            <SpotiPlayer image={image} uri={link}/>
          </div>
          :<div></div>
      }
      </div>
      <br></br>
      <div className="head">TOP FIVE TRALIER SONGS BY {this.state.singer}</div>
      <div className="play">
      <div className="slides">

      <Player
      poster={image1}
      src={link1}
      >
      <ControlBar autoHide={false} disableDefaultControls={true}>
        <PlayToggle />
      </ControlBar>
      </Player>
  

      <Player
      poster={image2}
      src={link2}
      >
      <ControlBar autoHide={false} disableDefaultControls={true}>
        <PlayToggle />
      </ControlBar>
      </Player>
   
      <Player
      poster={image3}
      src={link3}
      >
      <ControlBar autoHide={false} disableDefaultControls={true}>
        <PlayToggle />
      </ControlBar>
      </Player>

      <Player
      poster={image4}
      src={link4}
      >
      <ControlBar autoHide={false} disableDefaultControls={true}>
        <PlayToggle />
      </ControlBar>
      </Player>

      <Player
      poster={image5}
      src={link5}
      >
      <ControlBar autoHide={false} disableDefaultControls={true}>
        <PlayToggle />
      </ControlBar>
      </Player>
      </div>
      </div>
      <a href="https://github.com/rishabkhanna27" ><p className="git">||-Rishab_Khanna-||</p></a>
   </div>
  );
}
}
export default Music;
// Project is made by Rishab Khanna