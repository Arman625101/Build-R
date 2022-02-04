export class BaseModule {
    container = document.getElementById('container');

    constructor() {}

    defineElement(tagName, component) {
        customElements.define(tagName, component);
        return document.createElement(tagName);
    }
}
