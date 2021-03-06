class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {

    return (
        <div className="video-list-entry media">
          <div className="media-left media-middle">
            <img className="media-object" src={this.props.entry.snippet.thumbnails.default.url} alt="" />
          </div>
          <div className="media-body">
            <div className="video-list-entry-title" onClick={() => { this.props.myFunction(this.props.entry); } }>{this.props.entry.snippet.title}</div>
            <div className="video-list-entry-detail">{this.props.entry.snippet.description}</div>
          </div>
        </div>
    );
  }
}



// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
