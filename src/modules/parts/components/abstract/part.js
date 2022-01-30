import EditorModule from '../../../editor/editor.module';

export class Part extends HTMLElement {
    constructor() {
        super();

        this.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            const editor = new EditorModule(event, this.shadowRoot);
            editor.render();

            document.addEventListener('click', () => {
                editor.removePrevNodes();
            });
        });
    }
}
