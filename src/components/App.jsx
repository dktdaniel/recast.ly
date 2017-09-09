class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkClicked: false
    };
  }

  onListItemClicked() {
    this.setState({
      linkClicked: true
    });
    console.log('state changed');
  }

  render() {
    var videoIdOfClicked = '';
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList list={window.exampleVideoData} appFunction={onListItemClicked}/></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
