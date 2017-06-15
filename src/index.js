import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import {
    SearchBar,
    VideoList,
    VideoDetail
} from './components';

const API_KEY = 'AIzaSyC0rEf3r3wbeXxiVtOfKQMStu4mNHu9n8o';
const INITIAL_SEARCH_TERM = 'snowboarding';

export class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch(INITIAL_SEARCH_TERM)
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term}, videos => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            })
        })
    }

    render() {

        const videoSearch = _.debounce(term => this.videoSearch(term), 300);

        const { videos, selectedVideo } = this.state;

        return (<div>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={selectedVideo} />
            <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={videos} />
        </div>)
    }

}

const container = document.querySelector('.container');

ReactDOM.render(<App />, container);
