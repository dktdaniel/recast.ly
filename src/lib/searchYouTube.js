var searchYouTube = (options, callback) => {
  // TODO

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: options,
    success: (data) => { callback(data.items); console.log('success'); }
  });
};

window.searchYouTube = searchYouTube;
