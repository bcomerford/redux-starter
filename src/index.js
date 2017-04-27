import _ from 'lodash'; 
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import { SearchBar, VideoList, VideoDetail } from './components';

const API_KEY = 'AIzaSyBX2WmLzOc2P7DARwO22objuY7yLDf1mNM';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      videos: [],
      selectedVideo: null
    };
    
    this.videoSearch('surfboards');
  }
  
  videoSearch(term) {
    YTSearch({ key: API_KEY, term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    
    return (
      <div>
        <SearchBar onSearchTermChanged={videoSearch} />
        <div className='row'>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelected={selectedVideo => this.setState({ selectedVideo }) }
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));