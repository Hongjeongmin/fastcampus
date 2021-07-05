export class Api {
    constructor(url) {
        this.url = url;
    }

    async getRequest(cb) {
        fetch(this.url)
            .then(response => response.json())
            .then(cb)
            .catch((e) => {
                console.error('데이타를 불러오지 못했습니다.'+ e);
              });
    }
}

export class NodeApi extends Api {
    constructor(url) {
        super(url);
    }

    getData(cb) {
        return this.getRequest(cb);
    }
}