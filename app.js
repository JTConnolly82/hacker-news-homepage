let storiesDiv = document.getElementById('stories');
let storiesArr = [];
axios.get('https://hacker-news.firebaseio.com/v0/topstories.json').then((res)=>{
  let stories = res.data.slice(0, 30);
  stories.forEach(element => {
    axios.get("https://hacker-news.firebaseio.com/v0/item/" + element + ".json").then((res) => {
    let author = res.data.by;
    let title = res.data.title;
    let url = res.data.url;
    let storyWrap = document.createElement('div');
    storyWrap.className = 'storywrap';
    let arrows = document.createElement('div');
    arrows.className = 'arrows';
    let upvote = document.createElement('div');
    upvote.innerText = '👆'
    upvote.className = 'upvote';
    arrows.appendChild(upvote);
    let downvote = document.createElement('div');
    downvote.innerText = '👇'
    downvote.className = 'downvote';
    arrows.appendChild(downvote);
    let scoreBar = document.createElement('div');
    scoreBar.innerText = res.data.score;
    scoreBar.className = 'scorebar'
    let endDiv = document.createElement('div');
    endDiv.className = 'enddiv'
    let storyTitle = document.createElement('h2');
    storyTitle.innerText = title;
    storyTitle.className = 'storytitle'
    let storyAuth = document.createElement('h3');
    storyAuth.className = 'storyauth';
    storyAuth.innerText = '👤 ' + author;
    let storyUrl = document.createElement('a');
    storyUrl.className = 'storyurl';
    storyUrl.href = url;
    storyUrl.innerText = 'Link To Story';
    endDiv.appendChild(storyAuth);
    endDiv.appendChild(storyUrl);
    storyWrap.appendChild(arrows);
    storyWrap.appendChild(scoreBar);
    storyWrap.appendChild(storyTitle);
    storyWrap.appendChild(endDiv);
    storiesDiv.appendChild(storyWrap);
    });
  });
});








