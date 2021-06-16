const container = document.getElementById('root');
const ajax = new XMLHttpRequest();
const content = document.createElement('div');
const NEW_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';
const store = {
    currentPgae : 1,
};

function getData(url) {
    ajax.open('GET',url,false);
    ajax.send();

    return JSON.parse(ajax.response);
}

function newsFeed() {
    const newFeed = getData(NEW_URL);
    const newsList = [];
    let template = `
        <div class="container mx-auto p-4">
            <h1>Hacker News</h1>
            <ul>
                {{__news_feed__}}
            </ul>
            <div>
                <a href="#/page/{{__prev_page__}}">이전 페이지</a>
                <a href="#/page/{{__next_page__}}">다음 페이지</a>
            </div>
        </div>
    `
    for(let i = (store.currentPgae - 1) * 10; i < store.currentPgae * 10; i++) {
        newsList.push(`
        <li>
            <a href="#/show/${newFeed[i].id}"> ${newFeed[i].title}(${newFeed[i].comments_count})</a>
        </li>
        `);
    }
    template = template.replace('{{__news_feed__}}', newsList.join(''));
    template = template.replace('{{__prev_page__}}', store.currentPgae > 1 ? store.currentPgae -1 : 1);
    template = template.replace('{{__next_page__}}', store.currentPgae + 1);

    container.innerHTML = template;
}

function newsDetail() {
    const id = Number(location.hash.substr(7));

    const newContent = getData(CONTENT_URL.replace('@id',id));
    container.innerHTML = `
        <h1>${newContent.title}</h1>

        <div>
            <a href="#/page/${store.currentPgae}">목록으로</a>
        </div>
    `;
}

function router() {
    const routePath = location.hash;

    if(routePath === ''){
        newsFeed();
    } else if(routePath.indexOf('#/page/') >= 0){
        store.currentPgae = Number(routePath.substr(7));
        newsFeed();
    } else {
        newsDetail();
    }
}

window.addEventListener('hashchange', router);

router();
