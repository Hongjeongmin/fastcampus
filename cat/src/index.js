import {Store} from './store.js';
import {AppView} from './page/index.js';
import {ImageView} from './components/ImageView.js';
import {Loading} from './components/Loading.js';

const store = new Store();
const imageView = new ImageView();
const loding = new Loading();

const appView = new AppView('app', store, function (node) {
    if(node.type === 'DIRECTORY'){
        this.store.pushRouters(node.name);
        this.store.deeps.push(this.nodes);
        this.render(node.id);
    }else {
        imageView.setImage(node.filePath);
        imageView.onState();
    }
},loding);

// init
store.pushRouters('root');
appView.render('');
