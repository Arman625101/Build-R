import { PARTS } from '../../../global/constants';
import { createStyle } from '../../../utils/utils';
import styles from './style.scss';

export class BuildrComponent extends HTMLElement {
    #actions = PARTS;
    constructor() {
        super();
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(createStyle(styles));

        this.generateActions();
    }

    generateActions() {
        for (const { id, name } of this.#actions) {
            const action = document.createElement('div');
            action.classList.add('action');
            action.id = id;
            action.innerText = name;

            action.addEventListener('click', this.handleActionClick);

            this.shadowRoot.append(action);
        }
    }

    handleActionClick = ({ target }) => {
        target.remove();
        this.dispatchEvent(
            new CustomEvent('partsClickEvent', {
                composed: true,
                bubbles: true,
                detail: this.#actions.find((action) => action.id === +target.id)
            })
        );
    };
}
