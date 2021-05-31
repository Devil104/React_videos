import React from 'react';
import SearchBar from './SearchBar';
import api from './api';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';


class App extends React.Component {
    state = { videos: [], selectedVideo:null };

    componentDidMount() {
        this.onTermSubmit('Home')
    }
    onTermSubmit =async term=> {
        const response = await api.get('/search',{
            params: {
                q: term
            }
       
        });

        
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
            
            });
        

    };
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video});
    };
    render() {
        return (

            <div className="container" style={{backgroundColor:' #009999 ', borderLeft:"10px"}}>
               
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="ten wide column">
                            <VideoDetails video={this.state.selectedVideo} />
                            <div class="ui inverted vertical footer segment form-page">
                                <div class="ui container">
                                    Powered by Rajib Chandra Ghosh
                                </div>
                            </div>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect } videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
            
            
        );
    }
}
export default App;