class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: window.exampleVideoData[0]
    };
  }

  onListItemClicked(video) {
    this.setState({
      video: video
    });
    console.log('video', video);
    console.log('this state video', this.state);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.video}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList list={window.exampleVideoData} myFunction={this.onListItemClicked.bind(this)}/></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
