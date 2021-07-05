export class Loading {
    constructor() {
        this.state = false;
        this.$target = document.createElement('div');
        this.$target.className = "Loading Modal";
        document.getElementById('body').appendChild(this.$target);
        this.render();
    }
    setState(nextState) {
        console.log(nextState);
        this.state = nextState;
        this.render();
    }

    render() {
        this.$target.style.display = this.state ? 'block' : 'none';
        this.$target.innerHTML = `<div class="content"><img src="./assets/nyan-cat.gif"></div>`;
    }
}