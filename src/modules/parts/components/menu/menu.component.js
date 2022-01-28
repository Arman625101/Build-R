import { Part } from '../abstract/part';

export class MenuComponent extends Part {
    constructor() {
        super();
    }
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        const menu = document.createElement('div');
        menu.innerHTML = 'Hello World I am dynamic menu';
        this.shadowRoot.appendChild(menu);
    }
}
