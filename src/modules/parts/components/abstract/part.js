import { createStyle } from '../../../../utils/utils';
import EditorModule from '../../../editor/editor.module';
import styles from './part.styles.scss';

export class Part extends HTMLElement {
    constructor() {
        super();
    }
    createElement({ tagName, component }) {
        customElements.define(tagName, component);
        return document.createElement(tagName);
    }
    connectedCallback() {
        createStyle(this.shadowRoot, styles);
        this.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            const editor = new EditorModule(event, this.shadowRoot);
            editor.removePrevNodes();
            editor.render();

            document.addEventListener('click', () => {
                editor.removePrevNodes();
            });
        });
    }

    createPart(part) {}
}
