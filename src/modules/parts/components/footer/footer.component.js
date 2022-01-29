import { Part } from '../abstract/part';

export class FooterComponent extends Part {
    constructor() {
        super();
    }
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        const footer = document.createElement('div');
        footer.innerHTML = 'Hello World I am dynamic footer';
        
        this.shadowRoot.appendChild(footer);
    }
}
