import {Store} from './store.js';
import {AppView} from './page/index.js';
import {App} from './core/app.js';

const store = new Store();
const appView = new AppView('app', store);

const app = new App(store, appView);

// init
app.defaultInit();
