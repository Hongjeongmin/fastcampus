export class Store {
    constructor() {
        this.nodes = [];
        this.routers = [];
        this.deeps = [];
    }

    pushDeeps(id) {
        this.deeps.push(id);
    }

    popDeeps() {
        return this.deeps.pop();
    }

    pushRouters(value) {
        this.routers.push(value);
    }

    popRouters() {
        this.routers.pop();
    }

    getRouters(id) {
        for(let node of this.nodes) {
            if(node.id === id)
                return node;
        }
    }
};