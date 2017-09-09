class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: window.exampleVideoData,
      currVideo: window.exampleVideoData[0]
    };
    
  }

  componentDidMount() {
    this.searchVideos('surfing');
  }
  
  searchVideos(query) {
    var searchCallback = (data) => {
      this.setState({
        video: data,
        currVideo: data[0]
      });
    };
    
    var options = {
      'maxResults': 5,
      'part': 'snippet',
      'q': query,
      'type': 'video',
      'key': YOUTUBE_API_KEY
    };
    this.props.searchFn(options, searchCallback); 
  }
  
  onListItemClicked(video) {

    this.setState({
      currVideo: video
    });
  }

  handleSubmit(e) {
    this.searchVideos(e);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search submit={this.handleSubmit.bind(this)}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currVideo}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList list={this.state.video} myFunction={this.onListItemClicked.bind(this)}/></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
