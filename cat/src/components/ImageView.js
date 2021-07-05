export class ImageView {
    constructor(src = './test.png') {
        this.state = false;
        this.src = src;
        this.target = document.createElement('div');
        this.target.className ='Modal ImageViewer';
        this.target.addEventListener('click',(e) => {
            this.onState();
        });
        document.getElementById('body').appendChild(this.target);
        this.render();
    }

    setImage(src) {
        this.src = src;
    }

    onState() {
        this.state = this.state ? false : true;
        this.render();
    }

    render() {
        this.target.innerHTML = `<div class="content"><img src="${this.src}"></div>`
        this.target.style.display = this.state ? 'block' : 'none';
    }
}