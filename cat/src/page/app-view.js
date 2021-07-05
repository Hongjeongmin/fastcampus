import {NodeApi} from '../core/api.js';
import {NODE_URL} from '../config.js';
import {View} from '../core/view.js';

const template = `
    <nav id="routers" class="Breadcrumb">
        {{__routers__}}
    </nav>
    <div id="nodes" class="Nodes">
        {{__nodes__}}
    </div>
`;

export default class AppView extends View{
    constructor(containerId, store, onClick, loading) {
        super(containerId, store, template);
        this.nodes;
        this.onClick = onClick;
        this.loading = loading;
    }

    createNodeHTML() {
        const list = [];

        if(this.store.routers.length !== 1) {
            list.push(`
                <div class="Node">
                    <img src="./assets/prev.png">
                </div>
            `)

        }

        this.nodes.forEach((value) => {
            list.push(`
                <div data-node-id="${value.id}" class="Node">
                    <img src="${value.type === "DIRECTORY" ? "./assets/directory.png" : "./assets/file.png"}"/>
                    <div>${value.name}</div>
                </div>
            `)
        });
        return list.join('');

    }

    createRouterHTML() {
        const list = [];
        this.store.routers.forEach((router) => {
            list.push(`
                <div>${router}</div>
            `);
        })
        return list.join('');
    }

    onBackClick() {
        this.store.popRouters();
        this.nodes = this.store.nodes = this.store.popDeeps();
        this.setTemplateData('routers', this.createRouterHTML());
        this.setTemplateData('nodes', this.createNodeHTML());
        this.updateView();
        
        // 이벤트 추가.
        this.container.querySelectorAll('.Node').forEach($node => {
            $node.addEventListener('click', (e) => {
                const nodeId = e.target.dataset.nodeId;
                if(nodeId){
                    this.onClick(this.store.getRouters(nodeId));
                }else {
                    this.onBackClick();
                }        
            });
        });
    }

    render(id) {
        const api = new NodeApi(NODE_URL.replace('@id', id));
        this.loading.setState(true);
        api.getData((data) => {
            this.nodes = this.store.nodes = data;
            this.setTemplateData('routers', this.createRouterHTML());
            this.setTemplateData('nodes', this.createNodeHTML());
            this.updateView();
            // 이벤트 추가.
            this.container.querySelectorAll('.Node').forEach($node => {
                $node.addEventListener('click', (e) => {
                    const nodeId = e.target.dataset.nodeId;
                    if(nodeId){
                        this.onClick(this.store.getRouters(nodeId));
                    }else {
                        this.onBackClick();
                    }        
                });
            });
            this.loading.setState(false);
        });
    }

}