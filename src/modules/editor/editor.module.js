import { EditorComponent } from './components/editor.component';

export default class EditorModule {
    #event;
    #shadowRoot;
    constructor(event, shadowRoot) {
        this.#event = event;
        this.#shadowRoot = shadowRoot;
        if (!EditorModule.instance) {
            EditorModule.instance = this;
            customElements.define('edito-r', EditorComponent);
        }
    }
    render() {
        this.removePrevNodes();
        const editor = document.createElement('edito-r');
        this.#attachToCursor(editor);
        this.#shadowRoot.appendChild(editor);
    }

    removePrevNodes() {
        this.#shadowRoot.querySelectorAll('edito-r').forEach((node) => {
            node.remove();
        });
    }

    #attachToCursor(editor) {
        editor.style.left = `${this.#event.offsetX}px`;
        editor.style.top = `${this.#event.offsetY}px`;
    }
}
