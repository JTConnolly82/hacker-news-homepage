let storiesDiv = document.getElementById('stories');
let storiesArr = [];
axios.get('https://hacker-news.firebaseio.com/v0/topstories.json').then((res)=>{
  let stories = res.data.slice(0, 30);
  stories.forEach(element => {
    axios.get("https://hacker-news.firebaseio.com/v0/item/" + element + ".json").then((res) => {
  // pull author title url for displaying in innerText
    let author = res.data.by;
    let title = res.data.title;
    let url = res.data.url; 
  // creating DOM elements, adding innnerText using vars above
    let storyWrap = document.createElement('div');
    storyWrap.className = 'storywrap';
    let arrows = document.createElement('div');
    arrows.className = 'arrows';
    let upvote = document.createElement('div');
    upvote.innerText = '👏'
    upvote.className = 'upvote';
    arrows.appendChild(upvote);
    let scoreBar = document.createElement('div');
    scoreBar.innerText = res.data.score;
    scoreBar.className = 'scorebar'
    let endDiv = document.createElement('div');
    endDiv.className = 'enddiv'
    let storyTitle = document.createElement('h2');
    storyTitle.innerText = title;
    storyTitle.className = 'storytitle';
    // let commentLink = document.createElement('button');
    // commentLink.className = 'commentlink';
    // commentLink.innerText = 'Comments';
    // commentLink.addEventListener('click', function () {
    //   let kidsOnTheBlock = [];
    //   for (let i = 0; i < res.data.kids.length; i++) {
    //       axios.get("https://hacker-news.firebaseio.com/v0/item/" + res.data.kids[i] + ".json").then(  
    //       (getKid) => kidsOnTheBlock.push(getKid));
    //   }
    //   console.log(kidsOnTheBlock);
    //   for (let i = 0; i < kidsOnTheBlock.length; i++) {
    //     console.log(kidsOnTheBlock[i]);
    //   }      
    // });


    let storyAuth = document.createElement('h3');
    storyAuth.className = 'storyauth';
    storyAuth.innerText = '👤 ' + author;
    let storyUrl = document.createElement('a');
    storyUrl.className = 'storyurl';
    storyUrl.href = url;
    storyUrl.innerText = 'Link To Story';

  // append all the elements
    if (document.baseURI === 'file:///Users/john/Desktop/myprojects/hacker-news-homepage/index.html') {
      endDiv.appendChild(storyAuth);
      endDiv.appendChild(storyUrl);
      storyWrap.appendChild(arrows);
      storyWrap.appendChild(scoreBar);
      storyWrap.appendChild(storyTitle);
      // storyWrap.appendChild(commentLink);
      storyWrap.appendChild(endDiv);
      storiesDiv.appendChild(storyWrap);
    }
    });
  });
});










