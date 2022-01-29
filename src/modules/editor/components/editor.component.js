import { EditItems } from '../../../global/constants';
import { createStyle } from '../../../utils/utils';
import styles from './editor.styles.scss';

export class EditorComponent extends HTMLElement {
    #items = EditItems;
    constructor() {
        super();
    }
    connectedCallback() {
        // TODO: Handle events to close editor---
        // document.addEventListener('click', (event) => {
        //     console.log(event.target);
        //     console.log(this);
        //     if (event.target !== this.shadowRoot) {
        //         this.shadowRoot.remove();
        //     }
        // });
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(createStyle(styles));

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
