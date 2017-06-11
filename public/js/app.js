(function(){
console.log("yeah buddy ")


  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load',loadPics )
  oReq.open('GET', ' https://www.reddit.com/r/funny_gifs.json')
  oReq.send()

// var pReq= new XMLHttpRequest();
// pReq.addEventListener('load',loadPics )
// pReq.open('GET', ' https://www.reddit.com/r/interestingasfuck.json')
// pReq.send()


  function loadPics(){
    for (var i = 0 ; i <4; i++)  {
      var contain=document.createElement('div')
      contain.className="contain";
      document.getElementsByClassName('flexbox-container')[0].appendChild(contain)

      var response=  JSON.parse(this.responseText);
      var pic=document.createElement('IMG')
       pic.setAttribute("src", response.data.children[i].data.thumbnail);
      pic.className="pic";
      contain.appendChild(pic)

      var wordContainer=document.createElement('div')
      wordContainer.className="container";
      contain.appendChild(wordContainer)

    var tRes=JSON.parse(this.responseText);
    var title=document.createElement('p')
    title.className="title"
    title.innerHTML=tRes.data.children[i].data.title
    wordContainer.appendChild(title)

      var aRes=JSON.parse(this.responseText);
      var author=document.createElement('p')
      author.className="author"
      author.innerHTML="By " +aRes.data.children[i].data.author
      title.appendChild(author)

      var timeRes= JSON.parse(this.responseText);
      var time=document.createElement('p')
      time.className="time"
      var timeTimes= new Date(aRes.data.children[i].data.created*1000)
      time.innerHTML=timeTimes
      author.appendChild(time)

      var comRes=JSON.parse(this.responseText);
      var comment=document.createElement('p')
      comment.className="comment"
      comment.innerHTML="Comments: "+comRes.data.children[i].data.num_comments
      time.appendChild(comment)
}
  }




})();
