import React from 'react';
import './video.css'
import {FormGroup,FormControl,InputGroup} from 'react-bootstrap';

class Searchbar extends React.Component {
    state = {
        term: null
    };
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event => {
        // event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            <div>
            <div className="title"> Gratify </div>
            {/* <div className='field search-bar ui segment'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor="video-search">Video Search</label>
                        <input onChange={this.handleChange} name='video-search' type="text" placeholder="Search a Video" value={this.state.term}/>
                    </div>
                </form>
            </div> */}
        <FormGroup>
        <InputGroup>
          <FormControl
        //   onSubmit={this.handleSubmit}
            type="text"
            placeholder="Video Search"
            className="form"
            value={this.state.term}
            onChange={this.handleChange}
            onKeyPress = {event => {
              if(event.key === 'Enter'){
                this.handleSubmit();
              }
            }}
            />
        </InputGroup>
      </FormGroup>

            </div>
        )
    }
}
export default Searchbar;