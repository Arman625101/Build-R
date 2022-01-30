import { EditItems } from '../../../global/constants';
import { createStyle } from '../../../utils/utils';
import styles from './editor.styles.scss';

export class EditorComponent extends HTMLElement {
    #items = EditItems;
    constructor() {
        super();
    }
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(createStyle(styles));
        this.shadowRoot.addEventListener('click', (event) => {
            event.stopPropagation();
        });

        const ul = document.createElement('ul');
        for (const { id, name } of this.#items) {
            const li = document.createElement('li');
            li.id = id;
            li.innerText = name;
            ul.appendChild(li);
        }

        this.shadowRoot.appendChild(ul);
    }
}
