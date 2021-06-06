const ajax = new XMLHttpRequest();
const RequstType = 'GET';
const NEW_URL = 'https://api.hnpwa.com/v0/news/1.json';
ajax.open(RequstType,NEW_URL,false);
ajax.send();

console.log(ajax.response);
const newFeed = JSON.parse(ajax.response);


const ul = document.createElement('ul');
for(let i = 0; i < 10; i++) {
    const li = document.createElement('li');
    li.innerHTML = newFeed[i].title;
    ul.appendChild(li);
}

document.getElementById('root').appendChild(ul);

// document.getElementById('root').innerHTML = `<ul>
//     <li>${newFeed[0].title}</li>
//     <li></li>
//     <li></li>
// </ul>`;