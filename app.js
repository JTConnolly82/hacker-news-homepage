let storiesDiv = document.getElementById('stories');
let storiesArr = [];
axios.get('https://hacker-news.firebaseio.com/v0/topstories.json').then((res)=>{
  let stories = res.data.slice(0, 30);
  stories.forEach(element => {
    axios.get("https://hacker-news.firebaseio.com/v0/item/" + element + ".json").then((res) => {
    let author = res.data.by;
    let title = res.data.title;
    let url = res.data.url;
    let storyWrap = document.createElement('span');
    let storyTitle = document.createElement('h2');
    storyTitle.innerText = title;
    let storyAuth = document.createElement('h3');
    storyAuth.innerText = author;
    let storyUrl = document.createElement('h4');
    storyUrl.innerText = url;
    storyWrap.appendChild(storyTitle);
    storyWrap.appendChild(storyAuth);
    storyWrap.appendChild(storyUrl);
    storiesDiv.appendChild(storyWrap);
    });
  });
});









