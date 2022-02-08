import { PARTS } from '../../../global/constants';
import { createStyle, htmlToDOM } from '../../../utils/utils';
import styles from './buildr.styles.scss';

export class BuildrComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        createStyle(this.shadowRoot, styles);
        this.generateActions();
    }

    generateActions() {
        for (const { id, name } of PARTS) {
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
                detail: PARTS.find((action) => action.id === +target.id)
            })
        );
    };
}
