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



const newFeed = getData(NEW_URL);

const ul = document.createElement('ul');

window.addEventListener('hashchange', function() {
    // console.log(location.hash);
    const id = location.hash.substr(1);
    const title = document.createElement('h1');
    const newContent = getData(CONTENT_URL.replace('@id',id));
    // console.log(newContent);

    title.innerHTML = newContent.title;
    content.appendChild(title);
})

for(let i = 0; i < 10; i++) {
    const div = document.createElement('div');
    // const li = document.createElement('li');
    // const a = document.createElement('a');

    div.innerHTML = `
    <li>
        <a href="#${newFeed[i].id}"> ${newFeed[i].title} (${newFeed[i].comments_count})</a>
    </li>
    `;

    // a.href = `#${newFeed[i].id}`;
    // a.innerHTML = `${newFeed[i].title} (${newFeed[i].comments_count})`;

    // a.addEventListener('click', function() {});    

    // li.appendChild(a);
    // ul.appendChild(li);
    ul.appendChild(div.firstElementChild);
}

container.appendChild(ul);
container.appendChild(content);

// document.getElementById('root').innerHTML = `<ul>
//     <li>${newFeed[0].title}</li>
//     <li></li>
//     <li></li>
// </ul>`;