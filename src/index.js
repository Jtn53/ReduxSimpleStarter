import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBliqxasGdp7PLh3BL_XJ4w8Y1H8sAAAAM';

// This is a component that should create some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('kripp');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
            // above is the same as this.setState({ videos: videos });
        });
    }
    
    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div> // <-- JSX (looks like HTML, but is Javascript)
        ); 
    }
}

// Take this component's generated HTML and put it on the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));