const container = document.getElementById('root');
const ajax = new XMLHttpRequest();
const content = document.createElement('div');
const NEW_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

function getData(url) {
    ajax.open('GET',url,false);
    ajax.send();

    return JSON.parse(ajax.response);
}

function newsFeed() {
    const newFeed = getData(NEW_URL);
    const ul = document.createElement('ul');
    
    const newsList = [];
    newsList.push('<ul>');
    for(let i = 0; i < 10; i++) {
        newsList.push(`
        <li>
            <a href="#${newFeed[i].id}"> ${newFeed[i].title} (${newFeed[i].comments_count})</a>
        </li>
        `);
    }
    newsList.push('</ul>');
    
    container.innerHTML = newsList.join('');
}

function newsDetail() {
    const id = location.hash.substr(1);

    const newContent = getData(CONTENT_URL.replace('@id',id));
    container.innerHTML = `
        <h1>${newContent.title}</h1>

        <div>
            <a href="#">목록으로</a>
        </div>
    `;
}

function router() {
    const routePath = location.hash;

    if(routePath === ''){
        newsFeed();
    } else {
        newsDetail();
    }
}

window.addEventListener('hashchange', router);

router();
