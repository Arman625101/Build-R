import { BuildrComponent } from './components/buildr.component';

export default class BuildR {
    constructor() {
        if (!BuildR.instance) {
            BuildR.instance = this;
        }
        return BuildR.instance;
    }

    render() {
        customElements.define('build-r', BuildrComponent);
        const buildrElement = document.createElement('build-r');

        document.addEventListener('customClick', (evt) => {
            const clickedPart = evt.detail;
            // In progress...
            // TODO: handle next actions
        });

        return buildrElement;
    }
}
