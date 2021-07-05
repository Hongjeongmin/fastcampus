export class App {
    constructor(store, appView) {
        this.store = store;
        this.appView = appView;
    }

    defaultInit() {
        this.store.pushRouters('root');
        this.appView.render('');
    }
}