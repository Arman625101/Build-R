import { createStyle } from '../../../../utils/utils';
import { Part } from '../abstract/part';
import styles from './footer.styles.scss';

export class FooterComponent extends Part {
    constructor() {
        super();
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        super.connectedCallback();

        createStyle(this.shadowRoot, styles);
        const footer = document.createElement('footer');
        footer.innerHTML = `<ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
        </ul>`;

        this.shadowRoot.appendChild(footer);
    }
}
