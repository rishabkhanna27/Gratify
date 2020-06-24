import React from 'react';
import SearchBar from './Searchbar';
import youtube from './youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

export class Video extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        this.setState({
            videos: response.data.items
            
        })
        console.log(response.data.items);

    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className=' main ui container' style={{marginTop: '1em'}}><a href="https://github.com/rishabkhanna27" ><p className="git">||-Rishab_Khanna-||</p></a>
                <SearchBar handleFormSubmit={this.handleSubmit}/><br></br>            
                <div className="end">All in one media streaming App</div>

                <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                            <br></br>
                        </div>
                        <div className="fifteen wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div><a href="https://github.com/rishabkhanna27" ><p className="git">||-Rishab_Khanna-||</p></a>
            </div>
        )
    }
}

export default Video;