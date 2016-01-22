(function app() {
  var channels = ['hysranai', 'abadango', 'mew2king'];

  function addRow(username) {
    $.getJSON('https://api.twitch.tv/kraken/streams/' + username, function(channel) {
      var isLive = channel.stream !== null;
      console.log(isLive, channel.stream);
      var row = document.createElement('div');
      var liveMessage = isLive? " is live!" : " is offline.";
      var rowHtml = '<a href=http://www.twitch.tv/' + username +'> ' + username + '</a>' + liveMessage;
      row.innerHTML = rowHtml;
      var body = document.getElementsByTagName('body')[0];
      body.appendChild(row);
    });


  }

  function generate() {
    channels.forEach(function(channel) {
      addRow(channel);
    });
  }
  generate();
})();
