var searchYouTube = (options, callback) => {
  // TODO

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: options,
    success: (data) => { callback(data.items); }
  });
};

window.searchYouTube = searchYouTube;
