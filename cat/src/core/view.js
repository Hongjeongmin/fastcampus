export class View {
    constructor(containerId, store, template) {
        const containerElement = document.getElementById(containerId);

        if(!containerElement){
            throw '최상위 컨테이너가 없습니다.';
        }
        
        this.template = template;
        this.renderTemplate = template;
        this.container = containerElement;
        this.htmlList = [];
        this.store = store;
    }

    updateView() {
        this.container.innerHTML = this.renderTemplate;
        this.renderTemplate = this.template;
    }

    addHtml(htmlString) {
        this.htmlList.push(htmlString);
    }

    getHtml() {
        const snapshot = this.htmlList.join('');
        this.htmlList = [];
        return snapshot;
    }

    setTemplateData(key, value) {
        this.renderTemplate = this.renderTemplate.replace(`{{__${key}__}}`, value);
    }
}