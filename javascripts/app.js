(function app() {
  var channels = ['hysranai', 'abadango', 'mew2king'];

  function isLive(username) {
    $.getJSON('https://api.twitch.tv/kraken/streams/' + username, function(channel) {
      return channel.stream !== null;
    });
  }

  function addRow(username) {
    var row = document.createElement('div');
    var liveMessage = isLive(username)? " is live!" : " is offline.";
    var rowHtml = '<a href=http://www.twitch.tv/' + username +'> ' + username + '</a>' + liveMessage;
    row.innerHTML = rowHtml;
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(row);
  }

  function generate() {
    channels.forEach(function(channel) {
      addRow(channel);
    });
  }

  generate();
  console.log('done');
})();
