import { createStyle } from '../../../../utils/utils';
import EditorModule from '../../../editor/editor.module';
import styles from './part.styles.scss';

export class Part extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.shadowRoot.append(createStyle(styles));
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
}
