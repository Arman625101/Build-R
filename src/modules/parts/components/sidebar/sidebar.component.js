import { Part } from '../abstract/part';

export class SideBarComponent extends Part {
    constructor() {
        super();
    }
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        const sidebar = document.createElement('div');
        sidebar.innerHTML = 'Hello World I am dynamic sidebar';
        
        this.shadowRoot.appendChild(sidebar);
    }
}
