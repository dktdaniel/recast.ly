class Search extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      
    // e.persist();
    // console.log(e.target.value);
      this.props.submit(e.target.value);
    }
  }
  
  render() {
    return (
      <div className="search-bar form-inline">
          <input className="form-control" type="text" onKeyUp={this.handleKeyUp.bind(this)}/>
          <button className="btn hidden-sm-down">
            <span className="glyphicon glyphicon-search"></span>
          </button>
      </div> 
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
