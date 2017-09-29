import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyBliqxasGdp7PLh3BL_XJ4w8Y1H8sAAAAM';

// This is a component that should create some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'kripp'}, (videos) => {
            this.setState({ videos });
            // above is the same as this.setState({ videos: videos });
        });
    }
    
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div> // <-- JSX (looks like HTML, but is Javascript)
        ); 
    }
}

// Take this component's generated HTML and put it on the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));