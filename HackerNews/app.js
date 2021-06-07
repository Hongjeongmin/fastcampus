const container = document.getElementById('root');
const ajax = new XMLHttpRequest();
const content = document.createElement('div');
const NEW_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

ajax.open('GET',NEW_URL,false);
ajax.send();

console.log(ajax.response);
const newFeed = JSON.parse(ajax.response);

const ul = document.createElement('ul');

window.addEventListener('hashchange', function() {
    console.log(location.hash);
    const id = location.hash.substr(1);
    ajax.open('GET', CONTENT_URL.replace('@id',id), false);
    ajax.send();
    const title = document.createElement('h1');
    const newContent = JSON.parse(ajax.response);
    console.log(newContent);

    title.innerHTML = newContent.title;
    content.appendChild(title);
})

for(let i = 0; i < 10; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');


    a.href = `#${newFeed[i].id}`;
    a.innerHTML = `${newFeed[i].title} (${newFeed[i].comments_count})`;

    // a.addEventListener('click', function() {});    
    li.appendChild(a);
    ul.appendChild(li);
}

container.appendChild(ul);
container.appendChild(content);

// document.getElementById('root').innerHTML = `<ul>
//     <li>${newFeed[0].title}</li>
//     <li></li>
//     <li></li>
// </ul>`;