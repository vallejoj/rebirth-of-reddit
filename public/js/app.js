(function() {
  document.getElementById('get').addEventListener('click', appButton)
  document.getElementById('board').addEventListener('click', boardButton)
    document.getElementById('random').addEventListener('click', randoButton)


  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', loadPics)
  oReq.open('GET', 'https://www.reddit.com/r/ArchitecturePorn/.json')
  oReq.send()

  function boardButton() {
    var pReq = new XMLHttpRequest();
    pReq.addEventListener("load", loadPics)
    pReq.open('GET', 'https://www.reddit.com/r/skyporn/.json')
    pReq.send()
  }

    function randoButton() {
      var qReq = new XMLHttpRequest();
      qReq.addEventListener("load", loadPics)
      qReq.open('GET', 'https://www.reddit.com/r/itookapicture/.json')
      qReq.send()
    }

      function appButton() {
        var pReq = new XMLHttpRequest();
        pReq.addEventListener("load", loadPics)
        pReq.open('GET', 'https://www.reddit.com/r/gasholes/.json')
        pReq.send()
      }

  function loadPics() {
    for (var i = 0; i < 8; i++) {
      var response = JSON.parse(this.responseText);
      var contain = document.createElement('div')
      contain.className = "contain";
      document.getElementsByClassName('flexbox-container')[0].appendChild(contain)

      if (response.data.children[i].data.preview.images[0].source.url !== false) {
        var pic = document.createElement('IMG')
        pic.setAttribute("src", response.data.children[i].data.preview.images[0].source.url);
        pic.className = "pic";
        contain.appendChild(pic)
      } else {
        var pic = document.createElement('IMG')
        pic.setAttribute("src", "https://cdn.meme.am/instances/69413323.jpg");
        pic.className = "pic";
        contain.appendChild(pic)

      }

      var wordContainer = document.createElement('div')
      wordContainer.className = "container";
      contain.appendChild(wordContainer)

      var tRes = JSON.parse(this.responseText);
      var title = document.createElement('a')
      title.className = "title"
      title.setAttribute('href', response.data.children[i].data.url);
      title.innerHTML = tRes.data.children[i].data.title


      wordContainer.appendChild(title)

      function timeAgoFromEpochTime(epoch) {
        var secs = ((new Date()).getTime() / 1000) - epoch;
        Math.floor(secs);
        var minutes = secs / 60;
        secs = Math.floor(secs % 60);
        if (minutes < 1) {
          return secs + (secs > 1 ? ' seconds ago' : ' second ago');
        }
        var hours = minutes / 60;
        minutes = Math.floor(minutes % 60);
        if (hours < 1) {
          return minutes + (minutes > 1 ? ' minutes ago' : ' minute ago');
        }
        var days = hours / 24;
        hours = Math.floor(hours % 24);
        if (days < 1) {
          return hours + (hours > 1 ? ' hours ago' : ' hour ago');
        }
        var weeks = days / 7;
        days = Math.floor(days % 7);
        if (weeks < 1) {
          return days + (days > 1 ? ' days ago' : ' day ago');
        }
        var months = weeks / 4.35;
        weeks = Math.floor(weeks % 4.35);
        if (months < 1) {
          return weeks + (weeks > 1 ? ' weeks ago' : ' week ago');
        }
        var years = months / 12;
        months = Math.floor(months % 12);
        if (years < 1) {
          return months + (months > 1 ? ' months ago' : ' month ago');
        }
        years = Math.floor(years);
        return years + (years > 1 ? ' years ago' : ' years ago');
      }

      var aRes = JSON.parse(this.responseText);
      var author = document.createElement('p')
      author.className = "author"
      var auth = aRes.data.children[i].data.author

      console.log(aRes);

      author.innerHTML = "By: " + auth +
        " • " + timeAgoFromEpochTime(aRes.data.children[i].data.created_utc)



      contain.appendChild(author)

      var timeRes = JSON.parse(this.responseText);
      var time = document.createElement('p')
      time.className = "time"



      author.appendChild(time)

      var comRes = JSON.parse(this.responseText);
      var comment = document.createElement('p')
      comment.className = "comment"
      comment.innerHTML = "Comments: " + comRes.data.children[i].data.num_comments
      time.appendChild(comment)
    }
  }








})();
