(function(){
console.log("yeah buddy ")


  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load',loadPics )
  oReq.open('GET', ' https://www.reddit.com/r/interestingasfuck.json')
  oReq.send()

// var pReq= new XMLHttpRequest();
// pReq.addEventListener('load',loadPics )
// pReq.open('GET', ' https://www.reddit.com/r/interestingasfuck.json')
// pReq.send()


  function loadPics(){
    for (var i = 0 ; i <26; i++)  {
      var response=  JSON.parse(this.responseText);
      var pic=document.createElement('IMG')
       pic.setAttribute("src", response.data.children[i].data.thumbnail);
      pic.classname=pic;

      console.log(response)
      pontainer.appendChild(pic)

      var tontainer=document.createElement('div')
      tontainer.classsname=tontainer;
      pontainer.appendChild(tontainer)

    var tRes=JSON.parse(this.responseText);
    var title=document.createElement('h2')
    title.classname=title
    title.innerHTML=tRes.data.children[i].data.title
    tontainer.appendChild(title)

      var aRes=JSON.parse(this.responseText);
      var author=document.createElement('h5')
      author.classname=author
      author.innerHTML="By " +aRes.data.children[i].data.author
      title.appendChild(author)

      var timeRes= JSON.parse(this.responseText);
      var time=document.createElement('h6')
      time.classname=time
      var timeTimes= new Date(aRes.data.children[i].data.created*1000)
      time.innerHTML=timeTimes
      author.appendChild(time)

      var comRes=JSON.parse(this.responseText);
      var comment=document.createElement('h5')
      comment.classname=comment
      comment.innerHTML="Comments: "+comRes.data.children[i].data.num_comments
      time.appendChild(comment)
}
  }




})();
