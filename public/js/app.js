(function(){

  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load',loadPics )
  oReq.open('GET', ' https://www.reddit.com/r/ArchitecturePorn/.json')
  oReq.send()

document.getElementById('board').addEventListener('click', randomButton)

  function loadPics(){
    for (var i = 0 ; i <1; i++)  {
      var contain=document.createElement('div')
      contain.className="contain";
      document.getElementsByClassName('flexbox-container')[0].appendChild(contain)

      var response=  JSON.parse(this.responseText);
      var pic=document.createElement('IMG')
       pic.setAttribute("src", response.data.children[i].data.url);
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


    function timeSince(timeStamp) {
      var now = new Date(),
        secondsPast = (now.getTime() - timeStamp.getTime()) / 1000;
      if(secondsPast < 60){
        return parseInt(secondsPast) + 's';
      }
      if(secondsPast < 3600){
        return parseInt(secondsPast/60) + 'm';
      }
      if(secondsPast <= 86400){
        return parseInt(secondsPast/3600) + 'h';
      }
      if(secondsPast > 86400){
          day = timeStamp.getDate();
          month = timeStamp.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ","");
          year = timeStamp.getFullYear() == now.getFullYear() ? "" :  " "+timeStamp.getFullYear();
          return day + " " + month + year;
      }
    }



      var aRes=JSON.parse(this.responseText);
      var author=document.createElement('p')
      author.className="author"
      var auth= aRes.data.children[i].data.author
      var timeTimes= aRes.data.children[i].data.created_utc
      console.log(timeTimes);

      author.innerHTML="By: " + auth +
      " • "+ "7 months ago";

      contain.appendChild(author)

      var timeRes= JSON.parse(this.responseText);
      var time=document.createElement('p')
      time.className="time"



      author.appendChild(time)

      var comRes=JSON.parse(this.responseText);
      var comment=document.createElement('p')
      comment.className="comment"
      comment.innerHTML="Comments: "+comRes.data.children[i].data.num_comments
      time.appendChild(comment)
}
}


function randomButton(){
var pReq= new XMLHttpRequest();
pReq.addEventListener('load',randomReddit )
pReq.open('GET', ' https://www.reddit.com/r/EarthPorn/.json')
pReq.send()
}


function randomReddit(){
  oReq.addEventListener('unload', randomReddit)
  for (var i = 0 ; i <10; i++)  {
    var contain=document.createElement('div')
    contain.className="contain";
    document.getElementsByClassName('flexbox-container')[0].appendChild(contain)

    var response=  JSON.parse(this.responseText);
    var pic=document.createElement('IMG')
     pic.setAttribute("src", response.data.children[i].data.url);
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
    var auth= aRes.data.children[i].data.author
    var timeTimes= aRes.data.children[i].data.created_utc
    console.log(timeTimes);

    author.innerHTML="By: " + auth +
    " • "+ "7 months ago";

    contain.appendChild(author)

    var timeRes= JSON.parse(this.responseText);
    var time=document.createElement('p')
    time.className="time"



    author.appendChild(time)

    var comRes=JSON.parse(this.responseText);
    var comment=document.createElement('p')
    comment.className="comment"
    comment.innerHTML="Comments: "+comRes.data.children[i].data.num_comments
    time.appendChild(comment)




}
  }




})();
