import { PARTS } from '../../../global/constants';
import { createStyle } from '../../../utils/utils';
import styles from './style.scss';

export class BuildrComponent extends HTMLElement {
    #parts = PARTS;
    constructor() {
        super();
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(createStyle(styles));

        this.generateParts(this.#parts);
    }

    generateParts(parts) {
        for (const part of parts) {
            const item = document.createElement('div');

            item.classList.add('action');
            item.id = part.id;
            item.innerText = part.name;
            item.addEventListener('click', (event) => {
                this.dispatchEvent(
                    new CustomEvent('customClick', {
                        composed: true,
                        bubbles: true,
                        detail: parts.find((part) => part.id === +event.target.id)
                    })
                );
            });

            this.shadowRoot.append(item);
        }
    }
}
